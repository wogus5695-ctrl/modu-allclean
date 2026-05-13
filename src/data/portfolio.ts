export interface PortfolioItem {
  id: string;
  category: string;
  beforeImg: string;
  afterImg: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'fire',
    category: '화재 현장 정밀 복구',
    beforeImg: '/images/portfolio/fire-before.jpg',
    afterImg: '/images/portfolio/fire-after.jpg',
  },
  {
    id: 'wax',
    category: '바닥 왁스 코팅 전문',
    beforeImg: '/images/portfolio/wax-before.jpg',
    afterImg: '/images/portfolio/wax-after.jpg',
  },
  {
    id: 'floor',
    category: '바닥오염 제거(페인트 등)',
    beforeImg: '/images/portfolio/floor-before.jpg',
    afterImg: '/images/portfolio/floor-after.jpg',
  },
  {
    id: 'ac',
    category: '에어컨 분해 정밀 청소',
    beforeImg: '/images/portfolio/ac-before.jpg',
    afterImg: '/images/portfolio/ac-after.jpg',
  },
  {
    id: 'interior',
    category: '인테리어 후 정밀 청소',
    beforeImg: '/images/portfolio/interior-before.jpg',
    afterImg: '/images/portfolio/interior-after.jpg',
  },
  {
    id: 'parking',
    category: '주차장 바닥 오염 청소',
    beforeImg: '/images/portfolio/parking-before.jpg',
    afterImg: '/images/portfolio/parking-after.jpg',
  },
  {
    id: 'construction',
    category: '신축 중공 현장 청소',
    beforeImg: '/images/portfolio/construction-before.jpg',
    afterImg: '/images/portfolio/construction-after.jpg',
  },
];
