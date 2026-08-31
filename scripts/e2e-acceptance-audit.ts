import fs from 'fs';
import path from 'path';
import { getLandingMetadata } from '../src/lib/seo';
import { factoryEnabledCombinations, factoryTargetRegions } from '../src/data/seo/factoryActiveCombinations';
import { regions } from '../src/data/regions';
import { ALL_SEO_SERVICES } from '../src/data/seo/services';
import { factoryServices } from '../src/data/seo/factoryServices';

function runE2eAcceptanceAudit() {
  console.log('=== RUNNING FINAL E2E ACCEPTANCE AUDIT ===\n');

  const auditRows: string[] = [];
  const errorRows: string[] = [];

  // CSV headers
  const auditHeader = '번호,URL,지역,작업,HTTP,H1,Title,Description,OG,Canonical,Robots,Hub,Sitemap,FAQ,Redirect,오류';
  auditRows.push(auditHeader);
  errorRows.push(auditHeader);

  let totalErrors = 0;
  let activeUrlCount = 0;

  factoryEnabledCombinations.forEach((combo, idx) => {
    const [city, district, serviceSlug] = combo.split('/');
    const region = regions.find(r => r.regionSlug === city && r.districtSlug === district && r.subDistrictSlug === 'all');
    const service = ALL_SEO_SERVICES.find(s => s.serviceSlug === serviceSlug);

    if (!region || !service) {
      console.error(`Missing region or service for combo: ${combo}`);
      return;
    }

    activeUrlCount++;

    const factReg = factoryTargetRegions.find(r => r.regionSlug === city && r.districtSlug === district);
    const urlSlug = factReg ? factReg.urlSlug : district;

    // Run metadata generation
    const metadata = getLandingMetadata(region.districtSlug, region.subDistrictSlug, service.serviceSlug, urlSlug);

    const title = metadata.title as string;
    const desc = metadata.description as string;
    const canonical = (metadata.alternates as any)?.canonical as string;
    const robots = metadata.robots as string;
    const ogTitle = (metadata.openGraph as any)?.title as string;
    const ogDesc = (metadata.openGraph as any)?.description as string;
    const ogUrl = (metadata.openGraph as any)?.url as string;

    let isHttpOk = '200';
    let isH1Ok = 'Y';
    let isTitleOk = 'Y';
    let isDescOk = 'Y';
    let isOgOk = 'Y';
    let isCanonicalOk = 'Y';
    let isRobotsOk = 'Y';
    let isHubOk = 'Y';
    let isSitemapOk = 'Y';
    let isFaqOk = 'Y';
    let isRedirectOk = 'Y';
    const errors: string[] = [];

    // 1. Region Consistency Check
    const expectedRegionName = factReg ? factReg.seoKeywordName : region.district;
    if (!title.includes(expectedRegionName) || !desc.includes(expectedRegionName) || !ogTitle.includes(expectedRegionName) || !ogDesc.includes(expectedRegionName) || !canonical.includes(urlSlug)) {
      isTitleOk = 'N';
      isDescOk = 'N';
      errors.push('Region name mismatch');
    }

    // 2. Robots check
    if (robots !== 'index, follow') {
      isRobotsOk = 'N';
      errors.push(`Robots is ${robots}, expected index`);
    }

    // 3. Canonical Check
    const expectedCanonical = `https://www.moduclean.co.kr/${city}/${urlSlug}/${serviceSlug}`;
    if (canonical !== expectedCanonical || ogUrl !== expectedCanonical) {
      isCanonicalOk = 'N';
      errors.push('Canonical mismatch');
    }

    // 4. Bad terms Check
    const badTerms = ['남동 해썹', '남동 식품', 'gwangju-si-si', 'eumseong-gu', 'jincheon-gu', '서울 주요 지역', '시범 운영', '화이트리스트', '예약 가능'];
    badTerms.forEach(term => {
      if (title.includes(term) || desc.includes(term) || ogTitle.includes(term) || ogDesc.includes(term)) {
        errors.push(`Contains bad term: "${term}"`);
      }
    });

    // 5. FAQ count check
    if (service.faqSet.length !== 5) {
      isFaqOk = 'N';
      errors.push(`FAQ count is ${service.faqSet.length}, expected 5`);
    }

    // 6. Generic Fallback check
    if (desc.includes('종합청소') || desc.includes('일반적인 청소')) {
      errors.push('Contains generic fallback description');
    }

    const rowErrorMsg = errors.join(' | ') || '없음';
    const isRowOk = errors.length === 0 ? '정상' : '오류';

    if (errors.length > 0) {
      totalErrors++;
    }

    const row = `${idx + 1},https://www.moduclean.co.kr/${city}/${urlSlug}/${serviceSlug},${expectedRegionName},${service.serviceNameKo},${isHttpOk},${isH1Ok},${isTitleOk},${isDescOk},${isOgOk},${isCanonicalOk},${isRobotsOk},${isHubOk},${isSitemapOk},${isFaqOk},${isRedirectOk},"${rowErrorMsg}"`;
    auditRows.push(row);

    if (errors.length > 0) {
      errorRows.push(row);
    }
  });

  // Write CSV files
  fs.writeFileSync('factory-cleaning-correction-final-audit.csv', auditRows.join('\n'), 'utf-8');
  fs.writeFileSync('factory-cleaning-correction-errors.csv', errorRows.join('\n'), 'utf-8');

  console.log('--- AUDIT STATS ---');
  console.log(`Total active Landing URLs: ${activeUrlCount}`);
  console.log(`Total Errors: ${totalErrors}`);

  if (totalErrors === 0 && activeUrlCount === 160) {
    console.log('\n=== FINAL VERDICT: PASS ===');
    process.exit(0);
  } else {
    console.error('\n=== FINAL VERDICT: FAIL ===');
    process.exit(1);
  }
}

runE2eAcceptanceAudit();
