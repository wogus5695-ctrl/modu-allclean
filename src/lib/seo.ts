import { Metadata } from 'next';
import { services } from '@/data/services';
import { regions } from '@/data/regions';

// 초기 인덱싱 권장 동 단위 조합 (구Slug-동Slug-서비스Id)
export const INDEXED_DONG_COMBINATIONS = [
  'gangnam-yeoksam-dong-outer-wall',
  'gangnam-yeoksam-dong-window',
  'gangnam-nonhyeon-dong-outer-wall',
  'gangnam-nonhyeon-dong-signboard',
  'gangnam-samseong-dong-window',
  'gangnam-samseong-dong-completion',
  'gangnam-cheongdam-dong-awning',
  'gangnam-cheongdam-dong-signboard',
  'seocho-seocho-dong-completion',
  'seocho-banpo-dong-window',
  'songpa-jamsil-dong-window',
  'songpa-munjeong-dong-interior',
];

// --- 브랜드 환경 설정 (추후 관리자 입력 가능하도록 변수 처리) ---
export const BRAND_NAME = '모두종합환경';
export const BUSINESS_NAME = '올케어서비스';
export const DOMAIN = 'https://modu-cleaning.co.kr';
export const CONTACT_PHONE = '010-0000-0000'; // 전화번호
export const CONTACT_SMS = 'sms:010-0000-0000'; // 문자 상담 링크
export const CONTACT_KAKAO = 'https://pf.kakao.com/_xxxx'; // 카카오톡 주소
export const BUSINESS_ADDRESS = '서울특별시 강남구 ...'; // 사업장 주소
export const BUSINESS_NUMBER = '405-15-02677'; // 사업자 등록 번호
export const DEFAULT_OG_IMAGE = `${DOMAIN}/images/og-image.jpg`;

// --- SEO 기본 메타데이터 생성기 ---
interface SeoOptions {
  title: string;
  description: string;
  path: string;
  indexStatus?: 'index' | 'noindex';
  ogType?: 'website' | 'article';
}

export function getBaseMetadata({ 
  title, 
  description, 
  path, 
  indexStatus = 'index', 
  ogType = 'website' 
}: SeoOptions): Metadata {
  const url = `${DOMAIN}${path}`;
  const robots = indexStatus === 'index' ? 'index, follow' : 'noindex, follow';

  return {
    title: title,
    description: description,
    alternates: {
      canonical: url,
    },
    robots: robots,
    openGraph: {
      title: title,
      description: description,
      url: url,
      type: ogType,
      images: [{ url: DEFAULT_OG_IMAGE }],
      siteName: BRAND_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// --- 페이지 유형별 메타데이터 생성 ---

// 1. 메인 페이지
export function getMainMetadata(): Metadata {
  return getBaseMetadata({
    title: `서울·경기 종합청소 전문 | ${BRAND_NAME}`,
    description: `외벽청소, 유리창청소, 화재복구, 바닥왁스코팅 등 종합청소의 모든 것. 서울·경기 전 지역 전문가의 손길로 완벽한 청결을 보장합니다.`,
    path: '',
    indexStatus: 'index',
  });
}

// 2. 서비스 상세 페이지
export function getServiceMetadata(serviceId: string): Metadata {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return { title: BRAND_NAME };

  return getBaseMetadata({
    title: `${service.serviceNameKo} 전문업체 | ${BRAND_NAME}`,
    description: `${service.serviceNameKo} 전문 ${BRAND_NAME}입니다. ${service.shortDescription} 상가, 빌딩, 관공서 등 모든 현장 맞춤형 시공을 약속합니다.`,
    indexStatus: service.indexStatus,
    path: `/service/${service.serviceSlug}`,
  });
}

// 3. 지역 허브 페이지
export function getRegionMetadata(districtSlug: string): Metadata {
  const region = regions.find((r) => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
  if (!region) return { title: BRAND_NAME };

  return getBaseMetadata({
    title: `${region.district} 종합청소 전문 | ${BRAND_NAME}`,
    description: `${region.district} 전 지역 종합청소 전문업체 ${BRAND_NAME}입니다. ${region.localDescription} 빌딩, 상가, 사무실 무료 견적 상담 가능.`,
    indexStatus: region.indexStatus,
    path: `/area/${region.regionSlug}/${region.districtSlug}`,
  });
}

// 4. 지역+작업명 통합 랜딩 페이지 (구/동 공통)
export function getLandingMetadata(districtSlug: string, subDistrictSlug: string, serviceId: string): Metadata {
  const region = regions.find((r) => r.districtSlug === districtSlug && r.subDistrictSlug === subDistrictSlug);
  const service = services.find((s) => s.id === serviceId);

  if (!region || !service) return { title: BRAND_NAME };

  const regionName = region.subDistrict === '전지역' ? region.district : `${region.district} ${region.subDistrict}`;
  
  // 인덱싱 로직 (Gu는 index, Dong은 특정 리스트만 index)
  let indexStatus: 'index' | 'noindex' = 'noindex';
  if (subDistrictSlug === 'all') {
    indexStatus = (region.indexStatus === 'index' && service.indexStatus === 'index') ? 'index' : 'noindex';
  } else {
    const comboKey = `${districtSlug}-${subDistrictSlug}-${serviceId}`;
    if (INDEXED_DONG_COMBINATIONS.includes(comboKey)) {
      indexStatus = 'index';
    }
  }

  let path = subDistrictSlug === 'all' 
    ? `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`
    : `/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`;

  return getBaseMetadata({
    title: `${regionName} ${service.serviceNameKo} 전문업체 | ${BRAND_NAME}`,
    description: `${regionName} ${service.serviceNameKo} 고민 해결! ${BRAND_NAME}은 ${service.shortDescription} 상가, 빌딩, 사무실 등 현장 맞춤형 정밀 청소를 진행합니다.`,
    indexStatus: indexStatus,
    path: path,
  });
}

// 5. 키워드 허브 페이지
export function getKeywordHubMetadata(cityDistrict: string): Metadata {
  const parts = cityDistrict.split('-');
  const districtSlug = parts[1];
  const region = regions.find(r => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
  
  if (!region) return { title: BRAND_NAME };

  return getBaseMetadata({
    title: `${region.district} 청소 작업 키워드 허브 | ${BRAND_NAME}`,
    description: `${region.district} 내 각 동네별 최적화된 청소 서비스 페이지를 안내합니다. 외벽, 유리창, 준공 등 작업별 상세 정보를 확인하세요.`,
    indexStatus: 'index',
    path: `/keyword-hub/${cityDistrict}`,
  });
}

// --- JSON-LD LocalBusiness 스키마 생성기 ---
export function getJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    'name': BRAND_NAME,
    'legalName': BUSINESS_NAME,
    'alternateName': '모두종합환경 청소전문',
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
