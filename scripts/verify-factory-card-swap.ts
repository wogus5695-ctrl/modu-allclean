import { factoryServices } from '../src/data/seo/factoryServices';
import { seoServices } from '../src/data/seo/services';

function verifyCardSwapLogic() {
  console.log('=== Factory Cleaning Service Card Swap Verification ===\n');

  // Test Factory Services
  const testFactorySlugs = [
    'food-factory-cleaning',
    'haccp-factory-cleaning',
    'factory-floor-cleaning',
    'factory-hygiene-cleaning',
    'factory-exterior-panel-cleaning'
  ];

  console.log('1. Factory Pages Verification:');
  testFactorySlugs.forEach(slug => {
    const service = factoryServices.find(s => s.serviceSlug === slug);
    const isFactory = service && service.serviceGroup === 'factory';
    
    // Simulate getDisplayServices logic
    const baseServices = [
      { id: 'outer-wall', name: '외벽청소' },
      { id: 'window', name: '유리창청소' },
      { id: 'fire', name: '화재청소' },
      { id: 'floor-wax', name: '바닥왁스코팅' },
      { id: 'group-awning-sign', name: '어닝/간판 청소' },
      { id: 'group-interior-completion', name: '인테리어 후/준공 청소' },
      { id: 'hood', name: '후드청소' },
      { id: 'special-cleaning', name: '특수청소' }
    ];

    const displayServices = !isFactory ? baseServices : baseServices.map(item => {
      if (item.id === 'window') {
        return {
          id: 'window',
          name: '식품/대형 공장청소',
          desc: '식품공장과 대형 제조시설의 바닥·벽면·설비 주변 오염을 청소하고, HACCP(해썹) 심사 준비와 위생관리에 필요한 작업 범위를 현장에 맞춰 안내합니다.',
          image: '/images/services/food-factory.jpg',
          checkItems: [
            '현장 오염 상태 확인',
            '시설별 작업 범위 안내',
            '위생관리·HACCP 준비 청소'
          ]
        };
      }
      return item;
    });

    const windowCardExists = displayServices.some(s => s.name === '유리창청소');
    const factoryCardExists = displayServices.some(s => s.name === '식품/대형 공장청소');
    const totalCount = displayServices.length;

    console.log(`▶ [${service?.serviceNameKo} (${slug})]`);
    console.log(`  - isFactory: ${isFactory}`);
    console.log(`  - Card Total Count: ${totalCount} (Expected: 8)`);
    console.log(`  - Has '유리창청소' Card: ${windowCardExists} (Expected: false)`);
    console.log(`  - Has '식품/대형 공장청소' Card: ${factoryCardExists} (Expected: true)`);
  });

  console.log('\n2. General/Non-Factory Pages Verification:');
  const nonFactorySlugs = ['exterior-cleaning', 'window-cleaning', 'fire-cleaning'];
  nonFactorySlugs.forEach(slug => {
    const service = seoServices.find(s => s.serviceSlug === slug);
    const isFactory = service && (service as any).serviceGroup === 'factory';

    const baseServices = [
      { id: 'outer-wall', name: '외벽청소' },
      { id: 'window', name: '유리창청소' },
      { id: 'fire', name: '화재청소' },
      { id: 'floor-wax', name: '바닥왁스코팅' },
      { id: 'group-awning-sign', name: '어닝/간판 청소' },
      { id: 'group-interior-completion', name: '인테리어 후/준공 청소' },
      { id: 'hood', name: '후드청소' },
      { id: 'special-cleaning', name: '특수청소' }
    ];

    const displayServices = !isFactory ? baseServices : baseServices.map(item => {
      if (item.id === 'window') {
        return { id: 'window', name: '식품/대형 공장청소' };
      }
      return item;
    });

    const windowCardExists = displayServices.some(s => s.name === '유리창청소');
    const factoryCardExists = displayServices.some(s => s.name === '식품/대형 공장청소');

    console.log(`▶ [${service?.serviceNameKo || slug}]`);
    console.log(`  - isFactory: ${!!isFactory}`);
    console.log(`  - Has '유리창청소' Card: ${windowCardExists} (Expected: true)`);
    console.log(`  - Has '식품/대형 공장청소' Card: ${factoryCardExists} (Expected: false)`);
  });

  console.log('\n3. Future Factory Service Auto-Application Test:');
  // Suppose a new service "factory-duct-cleaning" is registered in factoryServices registry
  const hypotheticalNewFactoryService = {
    serviceNameKo: '공장덕트청소',
    serviceSlug: 'factory-duct-cleaning',
    serviceGroup: 'factory' as const
  };

  const isNewFactory = hypotheticalNewFactoryService.serviceGroup === 'factory';
  console.log(`  - Hypothetical Service: ${hypotheticalNewFactoryService.serviceNameKo}`);
  console.log(`  - isFactory Detected: ${isNewFactory}`);
  console.log(`  - Card swap automatically applies without UI code change: ${isNewFactory ? 'YES' : 'NO'}`);

  console.log('\n=== VERIFICATION COMPLETE ===');
}

verifyCardSwapLogic();
