export type RegionType = 'city' | 'district' | 'neighborhood';

export interface SeoRegion {
  cityNameKo: string;
  citySlug: string;
  districtNameKo: string;
  districtSlug: string;
  neighborhoodNameKo: string;
  neighborhoodSlug: string;
  displayNameKo: string;
  regionType: RegionType;
  
  localCharacteristics: string;
  commonBuildingTypes: string;
  commercialCharacteristics: string;
  cleaningDemandContext: string;
  
  nearbyAreas: string[];
  relatedAreaLinks: { name: string; url: string }[];
}

export const seoRegions: SeoRegion[] = [
  {
    cityNameKo: '서울',
    citySlug: 'seoul',
    districtNameKo: '영등포구',
    districtSlug: 'yeongdeungpo',
    neighborhoodNameKo: '문래동',
    neighborhoodSlug: 'mullae-dong',
    displayNameKo: '문래동',
    regionType: 'neighborhood',
    localCharacteristics: '오래된 상가, 공방, 철공소 인근 건물, 음식점, 카페, 사무실, 인테리어 현장이 혼재된 지역',
    commonBuildingTypes: '상가, 음식점, 카페, 사무실, 공방, 오래된 건물',
    commercialCharacteristics: '상업시설형 및 노후상가형',
    cleaningDemandContext: '외벽 오염, 유리창 물때, 간판 주변 오염, 인테리어 후 분진, 후드 기름때 수요가 발생하기 쉬운 지역',
    nearbyAreas: ['당산동', '양평동', '신도림동'],
    relatedAreaLinks: [
      { name: '당산동 청소', url: '/seoul/yeongdeungpo/dangsan-dong' },
      { name: '신도림동 청소', url: '/seoul/guro/sindorim-dong' }
    ]
  },
  {
    cityNameKo: '서울',
    citySlug: 'seoul',
    districtNameKo: '강서구',
    districtSlug: 'gangseo',
    neighborhoodNameKo: '마곡동',
    neighborhoodSlug: 'magok-dong',
    displayNameKo: '마곡동',
    regionType: 'neighborhood',
    localCharacteristics: '첨단 R&D 센터와 신축 오피스, 대단지 아파트가 밀집한 서울의 새로운 산업 및 주거 거점',
    commonBuildingTypes: '대형 R&D 센터, 신축 지식산업센터, 대단지 아파트, 신규 상가',
    commercialCharacteristics: '오피스형 및 공사/입주형',
    cleaningDemandContext: '신축 건물 입주 전 준공청소, 고층 유리창 청소, 사무실 바닥 왁스 코팅 수요가 높은 지역',
    nearbyAreas: ['발산동', '가양동', '방화동'],
    relatedAreaLinks: [
      { name: '발산동 청소', url: '/seoul/gangseo/balsan-dong' },
      { name: '가양동 청소', url: '/seoul/gangseo/gayang-dong' }
    ]
  }
];
