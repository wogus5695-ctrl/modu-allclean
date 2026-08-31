import { getLandingMetadata } from '../src/lib/seo';
import { factoryEnabledCombinations, factoryTargetRegions } from '../src/data/seo/factoryActiveCombinations';
import { regions } from '../src/data/regions';
import { ALL_SEO_SERVICES } from '../src/data/seo/services';
import { factoryServices } from '../src/data/seo/factoryServices';

function runFinalAudit() {
  console.log('=== Starting Final Factory Technical & SEO Audit ===\n');

  let hasErrors = false;
  
  // 1. URL Count Verification
  const activeComboCount = factoryEnabledCombinations.length; // should be 160
  console.log(`1. URL Count Verification:`);
  console.log(`  - Factory Active Combinations: ${activeComboCount}`);
  if (activeComboCount !== 160) {
    console.error(`  ❌ ERROR: Combination count is ${activeComboCount}, expected 160.`);
    hasErrors = true;
  } else {
    console.log(`  ✅ PASS: Target combination count is exactly 160.`);
  }

  // 2. Technical & SEO Audit
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  let robotsErrors = 0;
  let canonicalErrors = 0;
  let faqErrors = 0;
  let fallbackErrors = 0;
  let regionErrors = 0;

  factoryEnabledCombinations.forEach((combo, idx) => {
    const [city, district, serviceSlug] = combo.split('/');
    const region = regions.find(r => r.regionSlug === city && r.districtSlug === district && r.subDistrictSlug === 'all');
    const service = ALL_SEO_SERVICES.find(s => s.serviceSlug === serviceSlug);

    if (!region || !service) {
      console.error(`❌ [Combo ${idx + 1}] Missing region or service definition for: ${combo}`);
      hasErrors = true;
      return;
    }

    const suffix = region.district.endsWith('시') ? '-si' : '-gu';
    const districtWithSuffix = city === 'incheon' ? district : `${district}${suffix}`;

    // Region Mapping Validation
    // Gyeonggi Gwangju (광주시) vs Gwangju metropolitan city (광주광역시)
    if (district === 'gwangju-si' && city !== 'gyeonggi') {
      console.error(`❌ [Combo ${idx + 1}] Gwangju-si mapped to wrong province: ${city}`);
      regionErrors++;
    }
    // Namdong (남동구) -> Incheon
    if (district === 'namdong' && city !== 'incheon') {
      console.error(`❌ [Combo ${idx + 1}] Namdong mapped to wrong province: ${city}`);
      regionErrors++;
    }
    // Eumseong, Jincheon, Cheongju -> Chungbuk
    if (['eumseong', 'jincheon', 'cheongju'].includes(district) && city !== 'chungbuk') {
      console.error(`❌ [Combo ${idx + 1}] Chungbuk region mapped to wrong province: ${city}`);
      regionErrors++;
    }
    // Cheonan, Asan -> Chungnam
    if (['cheonan', 'asan'].includes(district) && city !== 'chungnam') {
      console.error(`❌ [Combo ${idx + 1}] Chungnam region mapped to wrong province: ${city}`);
      regionErrors++;
    }

    // Run getLandingMetadata
    const metadata = getLandingMetadata(region.districtSlug, region.subDistrictSlug, service.serviceSlug, districtWithSuffix);

    // Robots Check
    if (metadata.robots !== 'index, follow') {
      robotsErrors++;
    }

    // Canonical Check
    const expectedCanonical = `https://www.moduclean.co.kr/${city}/${districtWithSuffix}/${serviceSlug}`;
    const actualCanonical = (metadata.alternates as any)?.canonical;
    if (expectedCanonical !== actualCanonical) {
      canonicalErrors++;
    }

    // Title / Description existence and uniqueness
    if (metadata.title) {
      titles.add(metadata.title);
    }
    if (metadata.description) {
      descriptions.add(metadata.description);
    }

    // FAQ Check
    if (service.faqSet.length !== 5) {
      faqErrors++;
    }

    // Generic Fallback Check
    const hasGeneric = metadata.description?.includes('종합청소') || metadata.description?.includes('일반적인 청소');
    if (hasGeneric) {
      fallbackErrors++;
    }
  });

  console.log(`\n2. SEO Audit Results:`);
  console.log(`  - Unique Titles: ${titles.size} / 160`);
  console.log(`  - Unique Descriptions: ${descriptions.size} / 160`);
  console.log(`  - Robots Errors: ${robotsErrors}`);
  console.log(`  - Canonical Errors: ${canonicalErrors}`);
  console.log(`  - FAQ Errors: ${faqErrors}`);
  console.log(`  - Generic Fallback Errors: ${fallbackErrors}`);
  console.log(`  - Region Mapping Errors: ${regionErrors}`);

  if (titles.size !== 160 || descriptions.size !== 160) {
    console.error(`  ❌ ERROR: Title or Description has duplicates.`);
    hasErrors = true;
  }
  if (robotsErrors > 0 || canonicalErrors > 0 || faqErrors > 0 || fallbackErrors > 0 || regionErrors > 0) {
    console.error(`  ❌ ERROR: One or more SEO checks failed.`);
    hasErrors = true;
  }

  if (!hasErrors) {
    console.log(`\n=== FINAL AUDIT RESULT: PASS ===`);
    process.exit(0);
  } else {
    console.error(`\n=== FINAL AUDIT RESULT: FAIL ===`);
    process.exit(1);
  }
}

runFinalAudit();
