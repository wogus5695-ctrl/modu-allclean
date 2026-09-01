const typoUrls = [
  'https://www.moduclean.co.kr/gyeonggi/seongnam/geum%EA%B3%A1-dong/window-cleaning',
  'https://www.moduclean.co.kr/gyeonggi/seongnam/geum%EA%B3%A1-dong/office-cleaning',
  'https://www.moduclean.co.kr/gyeonggi/seongnam/geum%EA%B3%A1-dong/hospital-cleaning'
];

const staticUrls = [
  'https://www.moduclean.co.kr/service/office-cleaning',
  'https://www.moduclean.co.kr/service/store-cleaning',
  'https://www.moduclean.co.kr/service/factory-cleaning',
  'https://www.moduclean.co.kr/service/building-cleaning',
  'https://www.moduclean.co.kr/service/flood-cleaning',
  'https://www.moduclean.co.kr/service/warehouse-cleaning',
  'https://www.moduclean.co.kr/service/hospital-cleaning'
];

async function checkUrl(urlStr) {
  try {
    const res = await fetch(urlStr, { redirect: 'manual' });
    console.log(`URL: ${decodeURIComponent(urlStr)}`);
    console.log(`Status: ${res.status}`);
    if (res.headers.has('location')) {
      console.log(`Redirect: ${res.headers.get('location')}`);
    }
    console.log('---');
  } catch (e) {
    console.error(`Error fetching ${urlStr}: ${e.message}`);
  }
}

async function main() {
  console.log('Checking typo URLs...');
  for (const url of typoUrls) {
    await checkUrl(url);
  }
  
  console.log('Checking static URLs...');
  for (const url of staticUrls) {
    await checkUrl(url);
  }
}

main();
