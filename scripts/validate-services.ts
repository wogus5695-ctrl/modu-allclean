import { seoServiceKeywords } from '../src/data/services';
import { serviceContentMap } from '../src/data/seo/serviceContentMap';
import { seoServices, ALL_SEO_SERVICES } from '../src/data/seo/services';
import { HOOK_PHRASES, DESC_TEMPLATES } from '../src/lib/seo';

function validateServices() {
  console.log('=== Starting Service Registry Validation ===\n');

  const registrySlugs = Array.from(new Set([
    ...seoServiceKeywords.map(s => s.serviceSlug),
    ...ALL_SEO_SERVICES.map(s => s.serviceSlug)
  ]));
  const contentMapKeys = Object.keys(serviceContentMap);
  const seoServiceSlugs = ALL_SEO_SERVICES.map(s => s.serviceSlug);

  let errorsFound = false;

  // 1. Check duplicates in services registry
  const duplicateRegistrySlugs = registrySlugs.filter((slug, index) => registrySlugs.indexOf(slug) !== index);
  if (duplicateRegistrySlugs.length > 0) {
    console.error(`❌ Duplicate slugs found in services registry: ${Array.from(new Set(duplicateRegistrySlugs)).join(', ')}`);
    errorsFound = true;
  } else {
    console.log('✅ No duplicate slugs in services registry.');
  }

  // 2. Registry vs Content Map
  const inRegistryButNotContentMap = registrySlugs.filter(slug => !contentMapKeys.includes(slug));
  const inContentMapButNotRegistry = contentMapKeys.filter(slug => !registrySlugs.includes(slug));

  if (inRegistryButNotContentMap.length > 0) {
    console.error(`❌ In services registry but missing from serviceContentMap: ${inRegistryButNotContentMap.join(', ')}`);
    errorsFound = true;
  } else {
    console.log('✅ All registry services exist in serviceContentMap.');
  }

  if (inContentMapButNotRegistry.length > 0) {
    console.error(`❌ In serviceContentMap but missing from services registry: ${inContentMapButNotRegistry.join(', ')}`);
    errorsFound = true;
  } else {
    console.log('✅ All serviceContentMap keys exist in services registry.');
  }

  // 3. Registry vs seoServices (seo/services.ts)
  const inRegistryButNotSeoServices = registrySlugs.filter(slug => !seoServiceSlugs.includes(slug));
  const inSeoServicesButNotRegistry = seoServiceSlugs.filter(slug => !registrySlugs.includes(slug));

  if (inRegistryButNotSeoServices.length > 0) {
    console.warn(`⚠️ In services registry but missing from seoServices: ${inRegistryButNotSeoServices.join(', ')}`);
  } else {
    console.log('✅ All registry services exist in seoServices.');
  }

  if (inSeoServicesButNotRegistry.length > 0) {
    console.error(`❌ In seoServices but missing from services registry: ${inSeoServicesButNotRegistry.join(', ')}`);
    errorsFound = true;
  } else {
    console.log('✅ All seoServices slugs exist in services registry.');
  }

  // 4. Metadata template checks
  const missingHookPhrases = registrySlugs.filter(slug => !HOOK_PHRASES[slug]);
  const missingDescTemplates = registrySlugs.filter(slug => !DESC_TEMPLATES[slug]);

  if (missingHookPhrases.length > 0) {
    console.warn(`⚠️ Slugs missing HOOK_PHRASES metadata: ${missingHookPhrases.join(', ')}`);
  } else {
    console.log('✅ All registry services have HOOK_PHRASES metadata.');
  }

  if (missingDescTemplates.length > 0) {
    console.warn(`⚠️ Slugs missing DESC_TEMPLATES metadata: ${missingDescTemplates.join(', ')}`);
  } else {
    console.log('✅ All registry services have DESC_TEMPLATES metadata.');
  }

  console.log('\n=== Validation Complete ===');
  if (errorsFound) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

validateServices();
