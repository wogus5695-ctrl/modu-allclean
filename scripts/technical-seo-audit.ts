import { getLandingMetadata } from '../src/lib/seo';
import { factoryEnabledCombinations, factoryTargetRegions } from '../src/data/seo/factoryActiveCombinations';
import { regions } from '../src/data/regions';
import { ALL_SEO_SERVICES } from '../src/data/seo/services';

function runTechnicalSeoAudit() {
  console.log('=== TECHNICAL SEO AUDIT FOR 160 FACTORY PAGES ===\n');

  let titleLengths: number[] = [];
  let descLengths: number[] = [];
  let duplicateTitles = 0;
  let duplicateDescs = 0;
  let ogMismatchCount = 0;
  let canonicalMismatchCount = 0;
  let httpsWwwErrors = 0;
  let malformedUrlCount = 0;

  const titleSet = new Set<string>();
  const descSet = new Set<string>();

  const longTitleThreshold = 65; // standard title length threshold
  const longDescThreshold = 160; // standard description length threshold
  const longPages: string[] = [];

  factoryEnabledCombinations.forEach(combo => {
    const [city, district, serviceSlug] = combo.split('/');
    const region = regions.find(r => r.regionSlug === city && r.districtSlug === district && r.subDistrictSlug === 'all');
    const service = ALL_SEO_SERVICES.find(s => s.serviceSlug === serviceSlug);

    if (!region || !service) return;

    const factReg = factoryTargetRegions.find(r => r.regionSlug === city && r.districtSlug === district);
    const requestedDistrict = factReg ? factReg.urlSlug : district;

    const metadata = getLandingMetadata(region.districtSlug, region.subDistrictSlug, service.serviceSlug, requestedDistrict);

    const title = metadata.title as string;
    const desc = metadata.description as string;
    const canonical = (metadata.alternates as any)?.canonical as string;
    const ogTitle = (metadata.openGraph as any)?.title as string;
    const ogDesc = (metadata.openGraph as any)?.description as string;
    const ogUrl = (metadata.openGraph as any)?.url as string;

    titleLengths.push(title.length);
    descLengths.push(desc.length);

    // Track duplicate titles/descriptions
    if (titleSet.has(title)) duplicateTitles++;
    else titleSet.add(title);

    if (descSet.has(desc)) duplicateDescs++;
    else descSet.add(desc);

    // Length check
    if (title.length > longTitleThreshold || desc.length > longDescThreshold) {
      longPages.push(`URL: /${city}/${requestedDistrict}/${serviceSlug} (Title: ${title.length}, Desc: ${desc.length})`);
    }

    // OG match checks (og:title, og:description, og:url matches page metadata)
    const normalizedTitle = title.replace(/\s+/g, '');
    const normalizedOgTitle = ogTitle?.replace(/\s+/g, '');
    const normalizedDesc = desc.replace(/\s+/g, '');
    const normalizedOgDesc = ogDesc?.replace(/\s+/g, '');

    // check if region and service names are consistent between page metadata and OG metadata
    const expectedRegion = factReg ? factReg.seoKeywordName : region.district;
    const expectedService = service.serviceNameKo;

    if (!title.includes(expectedRegion) || !title.includes(expectedService) ||
        !ogTitle?.includes(expectedRegion) || !ogTitle?.includes(expectedService) ||
        !desc.includes(expectedRegion) || !desc.includes(expectedService) ||
        !ogDesc?.includes(expectedRegion) || !ogDesc?.includes(expectedService)) {
      ogMismatchCount++;
      console.log(`Mismatch keywords: ${combo}`);
    }

    // Canonical checks
    const expectedUrl = `https://www.moduclean.co.kr/${city}/${requestedDistrict}/${serviceSlug}`;
    if (canonical !== expectedUrl) {
      canonicalMismatchCount++;
    }

    // HTTPS & WWW Check
    if (!canonical.startsWith('https://www.moduclean.co.kr/')) {
      httpsWwwErrors++;
    }

    // Malformed URL detection (e.g. double -si or -gu)
    if (requestedDistrict.endsWith('-si-si') || requestedDistrict.endsWith('-gu-gu') || requestedDistrict.includes('-gu-si') || requestedDistrict.includes('-si-gu')) {
      malformedUrlCount++;
    }
  });

  const avgTitle = titleLengths.reduce((a, b) => a + b, 0) / titleLengths.length;
  const avgDesc = descLengths.reduce((a, b) => a + b, 0) / descLengths.length;

  console.log('--- STATS REPORT ---');
  console.log(`Title Length: Max = ${Math.max(...titleLengths)}, Min = ${Math.min(...titleLengths)}, Avg = ${avgTitle.toFixed(2)}`);
  console.log(`Description Length: Max = ${Math.max(...descLengths)}, Min = ${Math.min(...descLengths)}, Avg = ${avgDesc.toFixed(2)}`);
  console.log(`Duplicate Titles: ${duplicateTitles}`);
  console.log(`Duplicate Descriptions: ${duplicateDescs}`);
  console.log(`OG Mismatch Count: ${ogMismatchCount}`);
  console.log(`Canonical Mismatch Count: ${canonicalMismatchCount}`);
  console.log(`HTTPS/WWW Errors: ${httpsWwwErrors}`);
  console.log(`Malformed URL Count: ${malformedUrlCount}`);
  console.log(`Too Long Pages: ${longPages.length}`);
  if (longPages.length > 0) {
    longPages.forEach(p => console.log(`  - ${p}`));
  }
}

runTechnicalSeoAudit();
