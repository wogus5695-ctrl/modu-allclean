export interface ServiceCard {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  icon?: string;
  priority: number;
}

export const serviceCards: ServiceCard[] = [
  {
    id: 'outer-wall',
    title: '외벽청소',
    slug: 'exterior-cleaning',
    shortDescription: '고층 빌딩 및 상가 건물의 외벽 오염 상태에 맞춰 세척',
    imageUrl: '/images/services/outer-wall.jpg',
    priority: 1,
  },
  {
    id: 'window',
    title: '유리창청소',
    slug: 'window-cleaning',
    shortDescription: '투명하고 깨끗한 시야를 선사하는 프리미엄 유리 케어',
    imageUrl: '/images/services/window.jpg',
    priority: 2,
  },
  {
    id: 'fire',
    title: '화재청소',
    slug: 'fire-cleaning',
    shortDescription: '화재 피해 현장의 빠른 복구와 냄새 제거',
    imageUrl: '/images/services/fire.jpg',
    priority: 3,
  },
  {
    id: 'floor-wax',
    title: '바닥왁스코팅',
    slug: 'floor-waxing',
    shortDescription: '바닥재 보호와 광택을 위한 전문 코팅 시공',
    imageUrl: '/images/services/floor.jpg',
    priority: 4,
  },
  {
    id: 'awning',
    title: '어닝청소',
    slug: 'awning-cleaning',
    shortDescription: '매장 외관을 살려주는 찌든 때 및 곰팡이 제거',
    imageUrl: '/images/services/awning.jpg',
    priority: 5,
  },
  {
    id: 'sign',
    title: '간판청소',
    slug: 'sign-cleaning',
    shortDescription: '매장의 얼굴인 간판의 오염 및 이물질 제거',
    imageUrl: '/images/services/sign.jpg',
    priority: 6,
  },
  {
    id: 'interior-after',
    title: '인테리어 후 청소',
    slug: 'interior-after-cleaning',
    shortDescription: '인테리어 공사 후 발생하는 미세 분진 상태에 맞춰 정리',
    imageUrl: '/images/services/interior.jpg',
    priority: 7,
  },
  {
    id: 'completion',
    title: '준공청소',
    slug: 'completion-cleaning',
    shortDescription: '건물 신축 및 리모델링 후 쾌적한 입주 환경 조성',
    imageUrl: '/images/services/completion.jpg',
    priority: 8,
  },
  {
    id: 'hood',
    title: '후드청소',
    slug: 'hood-cleaning',
    shortDescription: '음식점 주방 후드의 찌든 기름때와 악취 제거',
    imageUrl: '/images/services/hood.jpg',
    priority: 9,
  },
  {
    id: 'hoarding',
    title: '쓰레기집청소',
    slug: 'hoarding-cleaning',
    shortDescription: '방치된 폐기물 처리 및 오염된 주거 공간의 위생 복원',
    imageUrl: '/images/services/hoarding.jpg',
    priority: 10,
  },
  {
    id: 'special',
    title: '특수청소',
    slug: 'special-cleaning',
    shortDescription: '고독사, 사건사고 현장 등의 심각한 오염 및 악취 현장 상태에 맞춘 해결',
    imageUrl: '/images/services/special.jpg',
    priority: 11,
  }
];
