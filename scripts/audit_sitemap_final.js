const fs = require('fs');
const path = require('path');

const INDEX_URL = 'https://www.moduclean.co.kr/sitemap.xml';
const CSV_PATH = 'C:\\Users\\wogus\\OneDrive\\Desktop\\청소_모두종합(서서울,인천)\\moduclean_sitemap_http_audit_final.csv';
const CONCURRENCY = 3;
const MAX_RETRIES = 2;

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchXmlUrls(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const text = await res.text();
  const matches = [...text.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map(m => m[1]);
}

function parseUrlInfo(urlStr) {
  try {
    const url = new URL(urlStr);
    const pathname = decodeURIComponent(url.pathname);
    let type = 'unknown';
    let region = '';
    let service = '';
    
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0) {
      type = 'main';
    } else {
      if (pathname.includes('-gu/')) type = 'district';
      else if (pathname.includes('-dong/')) type = 'dong';
      else if (pathname.includes('/seoul/') || pathname.includes('/incheon/') || pathname.includes('/gyeonggi/')) {
        type = 'city';
      } else {
        type = 'static';
      }
      
      if (parts[0] === 'seoul' || parts[0] === 'incheon' || parts[0] === 'gyeonggi') {
        region = parts[0];
      }
      
      if (pathname.includes('office-cleaning')) service = 'office-cleaning';
      else if (pathname.includes('commercial-cleaning')) service = 'commercial-cleaning';
      else if (pathname.includes('move-in-cleaning')) service = 'move-in-cleaning';
      else if (pathname.includes('special-cleaning')) service = 'special-cleaning';
      else if (pathname.includes('cleaning')) service = 'cleaning';
    }
    
    return { type, region, service };
  } catch (e) {
    return { type: 'unknown', region: '', service: '' };
  }
}

async function checkUrl(url, attempt = 0) {
  try {
    const res = await fetch(url, { method: 'GET', redirect: 'manual' });
    const status = res.status;
    let redirectUrl = res.headers.get('location') || '';
    
    if (status === 429 || status >= 500) {
      if (attempt < MAX_RETRIES) {
        await delay(1000 * (attempt + 1));
        return await checkUrl(url, attempt + 1);
      }
    }
    
    return {
      initialStatus: attempt === 0 ? status : 'failed_initially',
      retryStatus: attempt > 0 ? status : '',
      finalStatus: status,
      redirectUrl,
      errorType: '',
      remarks: attempt > 0 ? `Retried ${attempt} times` : ''
    };
  } catch (err) {
    if (attempt < MAX_RETRIES) {
      await delay(1000 * (attempt + 1));
      return await checkUrl(url, attempt + 1);
    }
    return {
      initialStatus: 'error',
      retryStatus: 'error',
      finalStatus: 'error',
      redirectUrl: '',
      errorType: err.code || err.message,
      remarks: `Failed after ${attempt} retries`
    };
  }
}

async function main() {
  console.log(`Fetching sitemap index: ${INDEX_URL}`);
  let sitemapUrls = [];
  try {
    sitemapUrls = await fetchXmlUrls(INDEX_URL);
    console.log(`Found ${sitemapUrls.length} sitemaps in index:`);
    sitemapUrls.forEach(s => console.log(' - ' + s));
  } catch (e) {
    console.error(`Failed to fetch index: ${e.message}`);
    console.log('Falling back to hardcoded sitemaps...');
    sitemapUrls = [
      'https://www.moduclean.co.kr/sitemaps/static.xml',
      'https://www.moduclean.co.kr/sitemaps/seoul.xml',
      'https://www.moduclean.co.kr/sitemaps/incheon.xml',
      'https://www.moduclean.co.kr/sitemaps/gyeonggi.xml'
    ];
  }
  
  let allUrls = [];
  for (const sitemap of sitemapUrls) {
    try {
      const urls = await fetchXmlUrls(sitemap);
      allUrls = allUrls.concat(urls);
      console.log(`Fetched ${urls.length} URLs from ${sitemap}`);
    } catch (e) {
      console.error(e.message);
    }
  }
  
  const uniqueUrls = [...new Set(allUrls)];
  console.log(`Total URLs: ${allUrls.length}, Unique URLs: ${uniqueUrls.length}`);
  
  const results = [];
  const statusCounts = {};
  const typeCounts = {};
  
  let i = 0;
  
  async function worker() {
    while (i < uniqueUrls.length) {
      const currentIndex = i++;
      const url = uniqueUrls[currentIndex];
      const info = parseUrlInfo(url);
      
      const res = await checkUrl(url);
      
      statusCounts[res.finalStatus] = (statusCounts[res.finalStatus] || 0) + 1;
      typeCounts[info.type] = (typeCounts[info.type] || 0) + 1;
      
      results.push({
        url,
        type: info.type,
        region: info.region,
        service: info.service,
        initialStatus: res.initialStatus,
        retryStatus: res.retryStatus,
        finalStatus: res.finalStatus,
        redirectUrl: res.redirectUrl,
        errorType: res.errorType,
        remarks: res.remarks
      });
      
      if (results.length % 100 === 0) {
        console.log(`Processed ${results.length} / ${uniqueUrls.length}`);
      }
    }
  }
  
  console.log(`Starting checks with concurrency ${CONCURRENCY}...`);
  const workers = Array(CONCURRENCY).fill(0).map(worker);
  await Promise.all(workers);
  
  const header = ['URL', 'Type', 'Region', 'Service', 'Initial Status', 'Retry Status', 'Final Status', 'Redirect URL', 'Error Type', 'Remarks'].join(',');
  const rows = results.map(r => [
    `"${r.url}"`, `"${r.type}"`, `"${r.region}"`, `"${r.service}"`,
    `"${r.initialStatus}"`, `"${r.retryStatus}"`, `"${r.finalStatus}"`,
    `"${r.redirectUrl}"`, `"${r.errorType}"`, `"${r.remarks}"`
  ].join(','));
  
  fs.writeFileSync(CSV_PATH, [header, ...rows].join('\n'), 'utf8');
  console.log(`\nSaved results to ${CSV_PATH}`);
  
  const summary = {
    totalUrls: allUrls.length,
    uniqueUrls: uniqueUrls.length,
    statusCounts,
    typeCounts
  };
  
  console.log('\n--- FINAL SUMMARY JSON ---');
  console.log(JSON.stringify(summary, null, 2));
}

main().catch(console.error);
