import { Metadata } from 'next';
import { services, seoServiceKeywords } from '@/data/services';
import { regions } from '@/data/regions';
import { ALL_SEO_SERVICES } from '@/data/seo/services';
import { isFactoryComboEnabled } from '@/data/seo/factoryActiveCombinations';
import { factoryServices } from '@/data/seo/factoryServices';

// 초기 인덱싱 권장 동 단위 조합 (구Slug-동Slug-서비스Id)
export const INDEXED_DONG_COMBINATIONS = [
  'jongno-insadong-special-cleaning',
  'jongno-ikseondong-trash-house',
  'yongsan-hannam-dong-window',
  'yongsan-itaewon-dong-special-cleaning',
  'mapo-seogyo-dong-awning',
  'mapo-yeonnam-dong-signboard',
  
  // 종합청소용 모든 동 단위 조합 자동 생성 및 검증 통과를 위한 시드 데이터 추가
  ...regions
    .filter(r => r.subDistrictSlug !== 'all')
    .flatMap(r => 
      seoServiceKeywords
        .filter(s => s.id !== 'move-in' && s.serviceSlug !== 'move-in-cleaning' && s.id !== 'moving' && s.serviceSlug !== 'moving-cleaning')
        .map(s => `${r.districtSlug}-${r.subDistrictSlug}-${s.id}`)
    )
];

// --- 브랜드 환경 설정 (추후 관리자 입력 가능하도록 변수 처리) ---
export const BRAND_NAME = '모두종합환경';
export const BUSINESS_NAME = '모두종합환경';
export const OWNER_NAME = '김재현';
export const BUSINESS_NUMBER = '405-15-02677';
export const DOMAIN = 'https://www.moduclean.co.kr';
export const CONTACT_PHONE = '010-8189-6900'; // 전화번호
export const CONTACT_SMS = 'sms:010-8189-6900'; // 문자 상담 링크
export const CONTACT_KAKAOTALK = 'http://pf.kakao.com/_xgjxmjX'; // 카카오톡 채널 링크
export const BUSINESS_ADDRESS = '서울특별시 강남구 ...'; // 사업장 주소
export const DEFAULT_OG_IMAGE = `${DOMAIN}/images/services/outer-wall.jpg`;
export const NAVER_VERIFICATION = '43f9e9e2c0022b1961730e583c46aef2bc51b2fa'; // 네이버 서치어드바이저 연동 코드
export const GOOGLE_VERIFICATION = 'Ii7CJaIsKz33EVUVJhJfnbT6cv7MN_4Nda52eMQOv7s'; // 구글 서치 콘솔 연동 코드

// 실제 public 폴더 내에 존재하는 유효한 썸네일 이미지 화이트리스트
export const VALID_OG_IMAGES = [
  '/images/services/outer-wall.jpg',
  '/images/services/window.jpg',
  '/images/services/fire.jpg',
  '/images/services/floor-wax.jpg',
  '/images/services/awning.jpg',
  '/images/services/signboard.jpg',
  '/images/services/interior-post.jpg',
  '/images/services/completion.jpg',
  '/images/services/hood.jpg',
  '/images/services/trash-house.jpg',
  '/images/services/special-cleaning.jpg',
  '/images/services/awning-sign.jpg',
  '/images/services/interior-completion.jpg',
  '/images/services/move-in-cleaning.jpg',
  '/images/services/move-in-hero.jpg',
  '/images/services/move-in-guide-bg.jpg',
  '/images/og-main.jpg',
  '/images/og-image.jpg',
  '/images/hero-bg.jpg',
];

// --- SEO 기본 메타데이터 생성기 ---
interface SeoOptions {
  title: string;
  description: string;
  path: string;
  indexStatus?: 'index' | 'noindex';
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  ogImage?: string;
  customOgTitle?: string;
  customOgDesc?: string;
}

export function getBaseMetadata({ 
  title, 
  description, 
  path, 
  indexStatus = 'index', 
  ogType = 'website',
  publishedTime,
  modifiedTime,
  ogImage,
  customOgTitle,
  customOgDesc
}: SeoOptions): Metadata {
  const url = `${DOMAIN}${path}`;
  const robots = indexStatus === 'index' ? 'index, follow' : 'noindex, follow';
  
  let finalOgImage = DEFAULT_OG_IMAGE;
  if (ogImage) {
    if (ogImage.startsWith('http')) {
      finalOgImage = ogImage;
    } else {
      // 화이트리스트에 정확히 존재하는 이미지인지 검증하여 안정성 보장
      const isValid = VALID_OG_IMAGES.some(validPath => 
        ogImage === validPath || ogImage.replace(/\/+/, '/') === validPath
      );
      if (isValid) {
        finalOgImage = `${DOMAIN}${ogImage}`;
      } else {
        // 비정상 경로이거나 파일이 존재하지 않는 경우 자동으로 외벽청소(기본) 이미지로 폴백
        finalOgImage = DEFAULT_OG_IMAGE;
      }
    }
  }

  const ogTitle = customOgTitle || title;
  const ogDescription = customOgDesc || description;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: url,
    },
    robots: robots,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: url,
      type: ogType,
      images: [{ url: finalOgImage, width: 1200, height: 630, alt: title }],
      siteName: BRAND_NAME,
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
    } as any,
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [finalOgImage],
    },
  };
}

// --- 페이지 유형별 메타데이터 생성 ---

// 1. 메인 페이지
export function getMainMetadata(): Metadata {
  return getBaseMetadata({
    title: `서울·경기 종합청소 전문 | ${BRAND_NAME}`,
    description: `외벽청소, 유리창청소, 화재복구, 바닥왁스코팅 등 종합청소의 모든 것. 서울·경기 전 지역 전문가의 손길로 현장 상태에 맞춘 작업을 진행합니다.`,
    path: '',
    indexStatus: 'index',
  });
}

// 2. 서비스 상세 페이지
export function getServiceMetadata(serviceId: string): Metadata {
  const service = seoServiceKeywords.find((s) => s.id === serviceId);
  if (!service) return { title: BRAND_NAME };

  return getBaseMetadata({
    title: `${service.serviceNameKo} 전문업체 | ${BRAND_NAME}`,
    description: `${service.serviceNameKo} 전문 ${BRAND_NAME}입니다. ${service.shortDescription} 상가, 빌딩, 관공서 등 모든 현장 맞춤형 시공을 약속합니다.`,
    indexStatus: service.indexStatus,
    path: `/service/${service.serviceSlug}`,
    ogImage: service.imageUrl,
  });
}

// 3. 지역 허브 페이지
export function getRegionMetadata(districtSlug: string): Metadata {
  const region = regions.find((r) => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
  if (!region) return { title: BRAND_NAME };

  return getBaseMetadata({
    title: `${region.district} 종합청소 전문 | ${BRAND_NAME}`,
    description: `${region.district} 전 지역 종합청소 전문업체 ${BRAND_NAME}입니다. ${region.localDescription} 빌딩, 상가, 사무실 견적 상담 가능.`,
    indexStatus: region.indexStatus,
    path: `/area/${region.regionSlug}/${region.districtSlug}`,
  });
}

// 작업명별 title 후킹 문구 및 meta description 맵 정의
export const HOOK_PHRASES: Record<string, string> = {
  'exterior-cleaning': '건물 외벽 오염·빗물자국 정리',
  'window-cleaning': '상가·건물 유리창 오염 정리',
  'fire-cleaning': '그을음·냄새·오염 복구 청소',
  'floor-wax-coating': '바닥 세척·코팅 관리',
  'floor-waxing': '바닥 세척·코팅 관리',
  'awning-cleaning': '매장 어닝 먼지·오염 정리',
  'signboard-cleaning': '상가 간판·전면유리 정리',
  'sign-cleaning': '상가 간판·전면유리 정리',
  'interior-post-cleaning': '공사분진·잔먼지 정리',
  'interior-after-cleaning': '공사분진·잔먼지 정리',
  'construction-completion-cleaning': '신축·리모델링 현장 분진 정리',
  'completion-cleaning': '신축·리모델링 현장 분진 정리',
  'hood-cleaning': '주방 후드 기름때 정리',
  'hoarder-house-cleaning': '생활폐기물·악취 정리',
  'hoarding-cleaning': '생활폐기물·악취 정리',
  'special-cleaning': '일반 청소로 어려운 오염 정리',
  'floor-cleaning': '바닥 오염·잔먼지 정리',
  'move-in-cleaning': '욕실·주방·베란다 검수',
  'moving-cleaning': '욕실·주방·베란다 정리',
  'office-cleaning': '업무 공간 분진 및 바닥 오염 정리',
  'store-cleaning': '매장 바닥 및 유리창 오염 정리',
  'factory-cleaning': '작업장 바닥 분진 및 기름때 정리',
  'building-cleaning': '로비·계단 등 공용부 외부 오염 정리',
  'flood-cleaning': '물 유입 피해 복구 및 오염수 정리',
  'warehouse-cleaning': '적재 공간 먼지 및 바닥 오염 정리',
  'hospital-cleaning': '진료실·대기실 위생 및 바닥 오염 정리',
  'food-factory-cleaning': '식품공장 고온 스팀 위생 세척',
  'haccp-factory-cleaning': 'HACCP 지정 규격 위생 살균 청소',
  'factory-hygiene-cleaning': '제조 현장 분진 및 고착 먼지 제거',
  'factory-mold-removal': '공장 벽면 및 구조물 곰팡이 박멸',
  'warehouse-mold-cleaning': '물류창고 랙 및 벽체 곰팡이 살균',
  'factory-diffuser-cleaning': '천장 디퓨저 그릴 탈거 분해 세척',
  'vent-cleaning': '환기 그릴 및 루버창 고압 물 청소',
  'factory-floor-cleaning': '바닥 기름때 및 스키드 마크 기계 박리',
  'factory-move-cleaning': '공장 이전 전후 설비 흔적 및 오일 세정',
  'factory-exterior-panel-cleaning': '공장 외벽 샌드위치 판넬 고압 세정'
};

export const DESC_TEMPLATES: Record<string, string> = {
  'signboard-cleaning': '상가 간판, 전면 유리, 어닝의 먼지·빗물 자국·매연 때를 현장 상태에 맞춰 안내합니다.',
  'sign-cleaning': '상가 간판, 전면 유리, 어닝의 먼지·빗물 자국·매연 때를 현장 상태에 맞춰 안내합니다.',
  'window-cleaning': '상가, 사무실, 건물 유리창의 먼지, 물때, 유막, 외부 오염 상태를 기준으로 청소 범위를 안내합니다.',
  'interior-post-cleaning': '공사 분진, 바닥 잔먼지, 창틀 먼지, 수납장 내부 오염 등 인테리어 후 남기 쉬운 오염을 정리합니다.',
  'interior-after-cleaning': '공사 분진, 바닥 잔먼지, 창틀 먼지, 수납장 내부 오염 등 인테리어 후 남기 쉬운 오염을 정리합니다.',
  'move-in-cleaning': '입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.',
  'moving-cleaning': '이사 전후 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 바닥 잔먼지를 집 상태에 맞춰 확인합니다.',
  'office-cleaning': '사무실 업무 공간, 회의실, 탕비실의 바닥 찌든 때와 누적된 먼지를 현장 상태에 맞춰 정리합니다.',
  'store-cleaning': '상가 매장의 첫인상을 결정하는 바닥 오염, 전면 유리, 출입구 및 집기 주변의 먼지를 청결하게 관리합니다.',
  'factory-cleaning': '공장 작업장의 찌든 기름때, 설비 주변 분진, 대형 공간의 오염 상태를 고려해 맞춤 세척을 진행합니다.',
  'building-cleaning': '건물 로비, 계단, 복도 등 공용부의 유동 오염과 외부 먼지를 체계적으로 관리하여 청결함을 유지합니다.',
  'flood-cleaning': '갑작스러운 침수로 인한 잔여 물기 제거, 바닥 오염 세정, 오염수 및 폐기물 정리와 악취 제거를 지원합니다.',
  'warehouse-cleaning': '물류 창고 적재 공간의 묵은 먼지, 분진, 바닥 오염을 정리하고 장기 보관 공간의 환경을 쾌적하게 개선합니다.',
  'hospital-cleaning': '병원 진료실, 대기실, 복도 등 공용부의 위생 상태를 점검하고 멸균 및 바닥 오염 정밀 세정을 실시합니다.',
  'food-factory-cleaning': '식품 가공실 및 육가공 생산 라인의 잔여 부산물, 찌든 기름 슬러지, 트렌치 악취 요소를 고온 온수 스팀 공정으로 세척합니다.',
  'haccp-factory-cleaning': 'HACCP 위생 인증 기준에 부합하도록 교차 오염 요소를 사전 차단하고, 천장 빔 구조체 먼지 진공 포집 및 린스를 진행합니다.',
  'factory-hygiene-cleaning': '부품 제조 및 사출 가공 구역에 누적되는 정밀 유해 철가루와 원료 분말을 특수 필터 집진기로 남김없이 소인합니다.',
  'factory-mold-removal': '다습한 공장 벽체와 철골조 틈새에 고착된 검은 곰팡이를 침투형 약품으로 사멸시키고 방균 코팅으로 예방합니다.',
  'warehouse-mold-cleaning': '의류 및 자재 창고 결로 지역 벽면의 곰팡이를 정밀 소독 닦기하고, 공간 전체 오존 살포로 묵은 악취를 제거합니다.',
  'factory-diffuser-cleaning': '급배기용 천장 디퓨저 커버를 완전 탈거하여 바닥에서 고압 온수 세척하고 주변 변색 텍스 표면을 정밀 소인합니다.',
  'vent-cleaning': '대형 환기창 루버창 날개 틈새에 고착된 고밀도 매연 기름 먼지를 스카이 고소 장비와 고압 살수 공정으로 세정합니다.',
  'factory-floor-cleaning': '작업장 에폭시 바닥의 미끄러운 유압 오일막과 지게차 검은 스키드 마크를 전용 유화제와 대형 회전 스크러버로 박리합니다.',
  'factory-move-cleaning': '공장 이전 완료 후 기계 반출 자리에 남은 묵은 볼트 홀 먼지, 오일 찌꺼기, 원상 복구를 위한 실내 폐기물 처리를 도맡습니다.',
  'factory-exterior-panel-cleaning': '조립식 샌드위치 판넬 외벽의 눈물 자국 얼룩과 매연 먼지를 판넬 도장 부식 없이 외부 스카이차에서 고압 살수합니다.'
};

// 4. 지역+작업명 통합 랜딩 페이지 (구/동 공통)
export function getLandingMetadata(districtSlug: string, subDistrictSlug: string, serviceId: string, requestedDistrictParam?: string): Metadata {
  const region = regions.find((r) => r.districtSlug === districtSlug && r.subDistrictSlug === subDistrictSlug);
  const service = seoServiceKeywords.find((s) => s.id === serviceId) || 
                  ALL_SEO_SERVICES.find((s) => s.serviceSlug === serviceId);

  if (!region || !service) return { title: BRAND_NAME };

  // 인덱싱 로직 (구 및 동 단위 모든 유효 페이지는 index 상태로 지정)
  const parentRegion = regions.find((r) => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
  const isParentIndexed = parentRegion ? parentRegion.indexStatus === 'index' : true;
  const requestedDistrict = requestedDistrictParam || region.districtSlug;
  const requestedWithSuffix = requestedDistrictParam ? (requestedDistrictParam.endsWith('-gu') || requestedDistrictParam.endsWith('-si')) : false;

  const isIncheon = region.regionSlug === 'incheon';
  const isDistrictLevel = subDistrictSlug === 'all' || region.subDistrict === '전지역';

  // clean URL 기반 path 지정
  const path = subDistrictSlug === 'all'
    ? `/${region.regionSlug}/${requestedDistrict}/${service.serviceSlug}`
    : `/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`;

  let canonicalPath = path;
  
  let serviceIndexed = ('indexStatus' in service) ? (service as any).indexStatus === 'index' : false;
  const isFactory = factoryServices.some(fs => fs.serviceSlug === service.serviceSlug);
  if (isFactory) {
    serviceIndexed = isFactoryComboEnabled(region.regionSlug, region.districtSlug, service.serviceSlug);
  }

  let finalIndexStatus: 'index' | 'noindex' = (region.indexStatus === 'index' && isParentIndexed && serviceIndexed) ? 'index' : 'noindex';

  if (!isIncheon && isDistrictLevel) {
    const suffix = region.district.endsWith('시') ? '-si' : '-gu';
    const suffixPath = `/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`;
    if (!requestedWithSuffix) {
      // 구/시 제거 버전: canonical을 구/시 포함 버전으로 지정 및 noindex 처리
      canonicalPath = suffixPath;
      finalIndexStatus = 'noindex';
    } else {
      // 구/시 포함 버전: index
      canonicalPath = path;
      if (isFactory) {
        finalIndexStatus = isFactoryComboEnabled(region.regionSlug, region.districtSlug, service.serviceSlug) ? 'index' : 'noindex';
      } else {
        finalIndexStatus = 'index';
      }
    }
  }

  const shortDistrict = isIncheon ? region.district : region.district.replace(/(구|시)$/, '');
  
  // 동 단위 및 구/시 단위 대표지역명(representativeArea) 추출 로직 통합
  let representativeArea = '';
  if (!isDistrictLevel) {
    const neighborhoodName = region.subDistrict;
    const districtName = region.district;

    if (region.regionSlug === 'seoul') {
      representativeArea = neighborhoodName;
    } else if (region.regionSlug === 'incheon') {
      const isConflictIncheon = ['논현동', '신흥동'].includes(neighborhoodName);
      representativeArea = isConflictIncheon ? `인천 ${neighborhoodName}` : neighborhoodName;
    } else {
      const isConflictGyeonggi = ['문산읍', '신흥동', '중앙동', '역삼동', '신교동', '성남동', '태평동', '수진동', '단대동', '상대원동'].includes(neighborhoodName);
      representativeArea = isConflictGyeonggi ? `${districtName.replace(/(시|군)$/, '')} ${neighborhoodName}` : neighborhoodName;
    }
  } else {
    if (requestedDistrictParam && !requestedWithSuffix) {
      const cleanShortDistrict = shortDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      representativeArea = region.districtSlug === 'gwangju-si' ? '경기 광주' : cleanShortDistrict;
    } else {
      const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      representativeArea = region.districtSlug === 'gwangju-si' ? '경기 광주시' : (isIncheon ? `인천 ${cleanDistrict}` : cleanDistrict);
    }
  }

  const workName = service.serviceNameKo;
  const hookPhrase = HOOK_PHRASES[service.serviceSlug] || '청소 전문 서비스';
  
  const isNewService = [
    'office-cleaning',
    'store-cleaning',
    'factory-cleaning',
    'building-cleaning',
    'flood-cleaning',
    'warehouse-cleaning',
    'hospital-cleaning'
  ].includes(service.serviceSlug);

  const finalTitle = isNewService
    ? `${representativeArea} ${workName} 전문 | ${BRAND_NAME}`
    : `${representativeArea} ${workName} | ${hookPhrase} - ${BRAND_NAME}`;

  // Description 템플릿 처리
  let descDetail = DESC_TEMPLATES[service.serviceSlug];
  if (!descDetail) {
    // 템플릿이 정의되지 않은 일반 종합청소 처리
    descDetail = ('shortDescription' in service) ? `${(service as any).shortDescription}를` : `${service.serviceNameKo} 작업을`;
  }
  
  const finalDescription = isNewService
    ? `${representativeArea} ${workName}가 필요한 현장의 오염 상태, 작업 범위, 공간 특성을 확인해 상담 방향을 안내합니다. 사진과 위치를 보내주시면 작업 가능 여부를 확인합니다.`
    : `${representativeArea} ${workName} 상담. ${descDetail} 현장 상태에 맞춰 안내합니다.`;

  return getBaseMetadata({
    title: finalTitle,
    description: finalDescription,
    indexStatus: finalIndexStatus,
    path: canonicalPath,
    ogType: 'article',
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    ogImage: ('imageUrl' in service) ? (service as any).imageUrl : ((service as any).ogImage || (service as any).thumbnailImage),
    customOgTitle: `${representativeArea} ${workName} | ${BRAND_NAME}`,
    customOgDesc: finalDescription
  });
}

// 5. 키워드 허브 페이지
export function getKeywordHubMetadata(cityDistrict: string): Metadata {
  const parts = cityDistrict.split('-');
  const districtSlug = parts.slice(1).join('-');
  const region = regions.find(r => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
  
  if (!region) return { title: BRAND_NAME };

  return getBaseMetadata({
    title: `${region.district} 청소 작업 키워드 허브 | ${BRAND_NAME}`,
    description: `${region.district} 내 각 동네별 최적화된 청소 서비스 페이지를 안내합니다. 외벽, 유리창, 준공 등 작업별 상세 정보를 확인하세요.`,
    indexStatus: 'index',
    path: `/keyword-hub/${cityDistrict}`,
  });
}

// 6. 마스터 사이트맵 (서울·인천 전 지역 키워드 맵)
export function getSitemapMetadata(): Metadata {
  return getBaseMetadata({
    title: `서울·인천·경기 종합청소 지역별 키워드 허브 | ${BRAND_NAME}`,
    description: `외벽청소, 유리창청소, 화재청소, 바닥왁스코팅, 어닝청소, 간판청소, 인테리어 후 청소, 준공청소, 후드청소, 쓰레기집 청소, 특수청소, 바닥청소 키워드를 지역별로 정리했습니다.`,
    indexStatus: 'index',
    path: `/sitemap-seoul`,
  });
}

// --- JSON-LD LocalBusiness 스키마 생성기 ---
export function getJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    'name': BRAND_NAME,
    'legalName': BUSINESS_NAME,
    'alternateName': `${BRAND_NAME} 청소전문`,
    'description': '서울·경기 전 지역 종합청소 전문업체. 외벽청소, 유리창청소, 화재복구, 바닥왁스코팅, 어닝청소, 간판청소, 준공청소, 인테리어청소, 후드청소 등 전문 시공.',
    'url': DOMAIN,
    'logo': `${DOMAIN}/logo.png`,
    'image': DEFAULT_OG_IMAGE,
    'telephone': CONTACT_PHONE,
    'priceRange': '₩₩',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': BUSINESS_ADDRESS,
      'addressLocality': 'Seoul',
      'addressRegion': 'KR',
      'postalCode': '06000',
      'addressCountry': 'KR'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 37.4979,
      'longitude': 127.0276
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Seoul' },
      { '@type': 'City', 'name': 'Gyeonggi-do' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': '종합청소 서비스 목록',
      'itemListElement': services.map((s, index) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': s.serviceNameKo,
          'description': s.shortDescription
        },
        'position': index + 1
      }))
    }
  };
}

// 7. 문서(Article) 스키마 생성기
export function getArticleJsonLd(title: string, description: string, url: string) {
  const now = new Date().toISOString();
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'author': {
      '@type': 'Organization',
      'name': BRAND_NAME
    },
    'publisher': {
      '@type': 'Organization',
      'name': BRAND_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': `${DOMAIN}/logo.png`
      }
    },
    'datePublished': now,
    'dateModified': now,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    },
    'image': DEFAULT_OG_IMAGE
  };
}

// 8. 이동경로(Breadcrumb) 스키마 생성기
export function getBreadcrumbJsonLd(regionName: string, serviceName: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': '홈',
        'item': DOMAIN
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': regionName,
        'item': `${DOMAIN}/sitemap-seoul`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': serviceName,
        'item': url
      }
    ]
  };
}
