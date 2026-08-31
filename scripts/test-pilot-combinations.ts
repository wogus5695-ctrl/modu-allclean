import { getLandingMetadata } from '../src/lib/seo';
import { factoryEnabledCombinations } from '../src/data/seo/factoryActiveCombinations';
import { regions } from '../src/data/regions';
import { ALL_SEO_SERVICES } from '../src/data/seo/services';

function testAllCombinations() {
  console.log('=== Starting All 160 Combinations SEO Audit ===\n');

  let passedAll = true;
  let successCount = 0;
  let genericFallbackCount = 0;
  let canonicalMismatchCount = 0;
  let robotsMismatchCount = 0;

  factoryEnabledCombinations.forEach((combo, idx) => {
    const [city, district, serviceSlug] = combo.split('/');
    
    const region = regions.find(r => r.regionSlug === city && r.districtSlug === district && r.subDistrictSlug === 'all');
    const service = ALL_SEO_SERVICES.find(s => s.serviceSlug === serviceSlug);

    if (!region || !service) {
      console.error(`❌ [Combo ${idx + 1}] Missing region or service definition for: ${combo}`);
      passedAll = false;
      return;
    }

    const suffix = region.district.endsWith('시') ? '-si' : '-gu';
    const districtWithSuffix = city === 'incheon' ? district : `${district}${suffix}`;

    // Run getLandingMetadata
    const metadata = getLandingMetadata(region.districtSlug, region.subDistrictSlug, service.serviceSlug, districtWithSuffix);

    // Check self canonical
    const expectedCanonical = `https://www.moduclean.co.kr/${city}/${districtWithSuffix}/${serviceSlug}`;
    const actualCanonical = (metadata.alternates as any)?.canonical;
    const canonicalOk = expectedCanonical === actualCanonical;

    // Check FAQ length
    const faqCount = service.faqSet.length;

    // Check for generic fallback text
    const hasGeneric = metadata.description?.includes('종합청소') || metadata.description?.includes('일반적인 청소');

    const robotsOk = metadata.robots === 'index, follow';

    if (!canonicalOk) {
      canonicalMismatchCount++;
      console.error(`❌ [Combo ${idx + 1}] Canonical Mismatch: Expected ${expectedCanonical}, got ${actualCanonical}`);
    }
    if (hasGeneric) {
      genericFallbackCount++;
      console.error(`❌ [Combo ${idx + 1}] Generic fallback text found in description!`);
    }
    if (!robotsOk) {
      robotsMismatchCount++;
      console.error(`❌ [Combo ${idx + 1}] Robots mismatch: Expected index, follow, got ${metadata.robots}`);
    }

    if (canonicalOk && faqCount === 5 && !hasGeneric && robotsOk) {
      successCount++;
    } else {
      passedAll = false;
    }
  });

  console.log(`=== Audit Summary ===`);
  console.log(`- Total Checked Combinations: ${factoryEnabledCombinations.length}`);
  console.log(`- Successfully Validated: ${successCount}`);
  console.log(`- Canonical Mismatch Errors: ${canonicalMismatchCount}`);
  console.log(`- Generic Fallback Errors: ${genericFallbackCount}`);
  console.log(`- Robots Mismatch Errors: ${robotsMismatchCount}`);
  console.log('');

  if (passedAll && successCount === 160) {
    console.log('✅ PASS: All 160 combinations verified successfully.');
    process.exit(0);
  } else {
    console.error('❌ FAIL: Some verification checks failed.');
    process.exit(1);
  }
}

testAllCombinations();
