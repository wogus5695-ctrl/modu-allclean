"use client";

import { useState, useEffect, useRef } from 'react';
import { LandingPageData } from '@/lib/seo-builder';
import { CONTACT_PHONE, BRAND_NAME, CONTACT_KAKAOTALK } from '@/lib/seo';
import { seoServices, SeoService } from '@/data/seo/services';
import { portfolioItems } from '@/data/portfolio';
import styles from '@/app/page.module.css';
import SectionCTA from '@/components/SectionCTA';
import FloatingContact from '@/components/FloatingContact';
import Link from 'next/link';
import { serviceContentMap } from '@/data/seo/serviceContentMap';
import { factoryUiConfig } from '@/data/seo/factoryUiConfig';

interface LandingTemplateProps {
  data: LandingPageData;
  regionObj: any;
  currentService: SeoService;
}

export default function LandingTemplate({ data, regionObj, currentService }: LandingTemplateProps) {
  const isFactory = currentService && (currentService as any).serviceGroup === 'factory';
  const getFilteredPortfolios = (serviceName: string) => {
    let matchedIds: string[] = [];
    if (serviceName.includes('화재')) {
      matchedIds = ['fire', 'floor', 'parking', 'construction'];
    } else if (serviceName.includes('왁스') || serviceName.includes('코팅')) {
      matchedIds = ['wax', 'floor', 'parking', 'interior'];
    } else if (serviceName.includes('준공')) {
      matchedIds = ['construction', 'interior', 'parking', 'floor'];
    } else if (serviceName.includes('인테리어')) {
      matchedIds = ['interior', 'construction', 'floor', 'wax'];
    } else if (serviceName.includes('바닥')) {
      matchedIds = ['floor', 'wax', 'parking', 'construction'];
    } else if (serviceName.includes('사무실')) {
      matchedIds = ['wax', 'interior', 'floor', 'parking'];
    } else if (serviceName.includes('상가') || serviceName.includes('매장')) {
      matchedIds = ['wax', 'interior', 'floor', 'construction'];
    } else if (serviceName.includes('공장') || serviceName.includes('창고')) {
      matchedIds = ['parking', 'floor', 'construction', 'fire'];
    } else if (serviceName.includes('병원')) {
      matchedIds = ['floor', 'interior', 'wax', 'construction'];
    } else if (serviceName.includes('침수')) {
      matchedIds = ['parking', 'floor', 'fire', 'construction'];
    } else {
      matchedIds = ['construction', 'interior', 'wax', 'floor'];
    }
    return portfolioItems.filter(item => matchedIds.includes(item.id)).slice(0, 4);
  };

  // 무한 롤링 슬라이더 상태 및 훅 정의
  const displayItems = getFilteredPortfolios(currentService?.serviceNameKo || '청소');
  const N = displayItems.length;
  const cloneCount = 3;
  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleMobileCheck = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleMobileCheck();
    window.addEventListener('resize', handleMobileCheck);
    return () => window.removeEventListener('resize', handleMobileCheck);
  }, []);

  const heroStyle = isFactory ? {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('${factoryUiConfig.heroImage}') no-repeat ${isMobile ? factoryUiConfig.backgroundPositionMO : factoryUiConfig.backgroundPositionPC}/cover`
  } : undefined;

  const slides = [
    ...displayItems.slice(-cloneCount),
    ...displayItems,
    ...displayItems.slice(0, cloneCount)
  ];

  useEffect(() => {
    const handleResize = () => {
      if (!viewportRef.current) return;
      const W = viewportRef.current.clientWidth;
      const isMobile = window.innerWidth < 768;
      const gapValue = 30;
      if (isMobile) {
        setCardWidth(W);
      } else {
        setCardWidth((W - 2 * gapValue) / 3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [viewportRef.current, N]);

  useEffect(() => {
    if (N === 0) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [N]);

  useEffect(() => {
    if (currentIndex === cloneCount + N) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(cloneCount);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex === cloneCount - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(cloneCount - 1 + N);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, N]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const getDisplayServices = () => {
    return [
      {
        id: 'outer-wall',
        name: '외벽청소',
        desc: '고층 빌딩, 아파트, 상가 건물의 외부 벽면 오염물과 그을음, 이끼를 전문 로프 장비 및 고압 세척으로 제거합니다.',
        image: '/images/services/outer-wall.jpg'
      },
      {
        id: 'window',
        name: '유리창청소',
        desc: '외부 유리, 상가 유리, 건물 유리창, 고소 유리창 등 현장 상태에 맞춰 장비와 작업 방식을 안내드립니다.',
        image: '/images/services/window.jpg'
      },
      {
        id: 'fire',
        name: '화재청소',
        desc: '그을음 제거, 유독성 분진 청소, 탄 냄새 제거 탈취 공정 등 화재 피해 현장의 신속하고 상태에 맞춘 복구를 지원합니다.',
        image: '/images/services/fire.jpg'
      },
      {
        id: 'floor-wax',
        name: '바닥왁스코팅',
        desc: '데코타일, 아스타일 등 바닥 찌든 때 기계 박리 세척 후 바닥 상태에 맞춘 코팅 관리로 광택을 회복하고 바닥을 보호합니다.',
        image: '/images/services/floor-wax.jpg'
      },
      {
        id: 'group-awning-sign',
        name: '어닝/간판 청소',
        desc: '매장의 얼굴인 어닝의 곰팡이와 간판 표면의 매연 오염을 고압 세척과 현장 상태에 맞는 세정제로 정리합니다.',
        image: '/images/services/awning-sign.jpg'
      },
      {
        id: 'group-interior-completion',
        name: '인테리어 후/준공 청소',
        desc: '공사 후 남은 분진, 창틀 먼지, 바닥 오염, 접착 자국 등을 입주 전 사용할 수 있는 상태로 정리합니다.',
        image: '/images/services/interior-completion.jpg'
      },
      {
        id: 'hood',
        name: '후드청소',
        desc: '식당 주방 후드와 덕트 내부에 고착되어 주방 후드에 쌓인 기름때를 고온 스팀과 현장 상태에 맞는 세정제로 제거하여 화재를 예방합니다.',
        image: '/images/services/hood.jpg'
      },
      {
        id: 'special-cleaning',
        name: '특수청소',
        desc: '악취, 오염, 폐기물, 일반 청소로 어려운 현장은 현장 상태에 맞는 장비와 인력 배치가 필요합니다.',
        image: '/images/services/special-cleaning.jpg'
      }
    ];
  };

  const getHeroDescription = () => {
    const regionName = regionObj?.displayNameKo || regionObj?.subDistrict || regionObj?.district || '';
    const serviceName = currentService?.serviceNameKo || '청소';
    
    const factoryHeroDescs: Record<string, string> = {
      '식품공장청소': `${regionName} 식품공장의 생산 설비와 제조 라인 주변의 기름때 및 잔여물을 고온 스팀 위주로 위생 세척합니다.`,
      '해썹공장청소': `${regionName} 식품 공장의 HACCP(해썹) 지정 기준 충족과 실사 대비를 위해 구역별 정밀 위생 청소를 시공합니다.`,
      '공장위생청소': `${regionName} 제조 공장 및 가공 구역 내부의 천장 배관 먼지, 바닥 누적 분진을 특수 세척하여 위생도를 높입니다.`,
      '공장곰팡이제거': `${regionName} 공장 벽면, 천장, 빔 구조물 주변의 고착된 곰팡이 포자를 친환경 멸균 약품으로 제거합니다.`,
      '물류창고곰팡이청소': `${regionName} 물류 창고 내부 습기로 인해 적재 공간이나 벽면에 발생한 곰팡이 오염을 정밀 세정합니다.`,
      '공장디퓨저청소': `${regionName} 천장 공조 토출구(디퓨저) 주변의 검은 그을음 먼지와 유동 분진을 고사다리 작업으로 세척합니다.`,
      '환기구청소': `${regionName} 공장 및 대형 주방 환기구 그릴의 고밀도 매연 오염과 유입 먼지를 친환경 세정 처리합니다.`,
      '공장바닥청소': `${regionName} 작업장 바닥의 미끄러운 윤활유, 타이어 자국, 페인트 및 에폭시 오염을 스크러버 기계로 세척합니다.`,
      '공장이전청소': `${regionName} 공장 이전 전후의 대형 설비 철거 자국, 바닥 기름때, 벽면 분진을 지워내어 공실 상태를 정리합니다.`,
      '공장외벽판넬청소': `${regionName} 공장 건물 외장재인 판넬 벽면의 묵은 때와 대기 오염 고착물을 고압 살수 세척합니다.`
    };
    if (factoryHeroDescs[serviceName]) return factoryHeroDescs[serviceName];

    switch (serviceName) {
      case '외벽청소':
        return `${regionName} 건물 외벽에 쌓인 먼지, 빗물 자국, 매연 오염을 확인하고 현장 조건에 맞춰 작업 가능 여부를 안내합니다.`;
      case '유리창청소':
        return `${regionName} 상가, 빌딩, 매장 유리창의 물때, 손자국, 빗물 얼룩을 확인하고 작업 범위에 맞춰 상담을 안내합니다.`;
      case '화재청소':
        return `${regionName} 화재 피해 현장의 그을음, 냄새, 분진 상태를 확인하고 정리 범위와 청소 가능 여부를 안내합니다.`;
      case '바닥왁스코팅':
        return `${regionName} 상가, 사무실, 매장 바닥의 광택 저하와 오염 상태를 확인하고 왁스코팅 작업 범위를 안내합니다.`;
      case '어닝청소':
        return `${regionName} 매장 어닝에 쌓인 먼지, 빗물 자국, 곰팡이 오염을 확인하고 원단 상태와 작업 가능 여부를 안내합니다.`;
      case '간판청소':
        return `${regionName} 매장 간판의 먼지, 빗물 얼룩, 조류 오염 상태를 확인하고 외부 작업 가능 여부를 안내합니다.`;
      case '인테리어 후 청소':
        return `${regionName} 인테리어 공사 후 남은 분진, 접착제 자국, 실내 오염 상태를 확인하고 입주 전 청소 범위를 안내합니다.`;
      case '준공청소':
        return `${regionName} 준공 현장의 공사 분진, 시멘트 가루, 보양재 잔여물을 확인하고 입주 전 정리 범위를 안내합니다.`;
      case '후드청소':
        return `${regionName} 음식점 주방 후드와 배기 주변의 기름때, 악취, 오염 상태를 확인하고 청소 범위를 안내합니다.`;
      case '특수청소':
        return `${regionName} 일반 청소로 처리하기 어려운 오염, 악취, 방치 공간 상태를 확인하고 현장에 맞는 정리 방향을 안내합니다.`;
      case '바닥청소':
        return `${regionName} 상가, 사무실, 매장 바닥의 찌든 때, 오염 누적, 미끄럼 상태를 확인하고 청소 범위를 안내합니다.`;
      case '쓰레기집 청소':
      case '쓰레기집청소':
        return `${regionName} 원룸, 오피스텔, 빌라 등 생활폐기물이 쌓인 공간의 상태를 확인하고 정리 범위와 청소 가능 여부를 안내합니다.`;
      case '사무실청소':
        return `${regionName} 사무실청소는 업무 공간의 바닥, 책상 주변, 회의실, 탕비실 등 사용 빈도가 높은 공간의 오염 상태를 확인해 청소 범위를 안내합니다.`;
      case '상가청소':
        return `${regionName} 상가청소는 매장 바닥, 유리, 출입구, 집기 주변 오염 상태를 확인해 영업 환경에 맞는 청소 범위를 안내합니다.`;
      case '공장청소':
        return `${regionName} 공장청소는 작업장 바닥, 설비 주변, 분진, 기름때 등 현장 오염 상태를 확인해 청소 가능 범위와 작업 방식을 안내합니다.`;
      case '건물청소':
        return `${regionName} 건물청소는 로비, 계단, 복도, 공용부, 외부 오염 상태를 확인해 건물 관리에 필요한 청소 범위를 안내합니다.`;
      case '침수청소':
        return `${regionName} 침수청소는 물 유입 범위, 바닥 오염, 잔여 물기, 악취 발생 가능성을 확인해 정리 범위와 작업 가능 여부를 안내합니다.`;
      case '창고청소':
        return `${regionName} 창고청소는 적재 공간, 바닥 먼지, 분진, 장기 보관으로 생긴 오염 상태를 확인해 청소 범위를 안내합니다.`;
      case '병원청소':
        return `${regionName} 병원청소는 대기실, 진료실, 공용부, 바닥 오염 상태를 확인해 위생 관리에 필요한 청소 범위를 안내합니다.`;
      default:
        return `${regionName}의 ${serviceName}가 필요한 현장 상태와 작업 범위를 확인해 상담을 안내합니다.`;
    }
  };

  const getWhyDescription = () => {
    const regionName = regionObj?.displayNameKo || '서울·인천';
    const serviceName = currentService?.serviceNameKo || '청소';
    
    const factoryWhyDescs: Record<string, string> = {
      '식품공장청소': `${regionName} 식품공장 제조 시설에 적합한 살균 세제를 투입하여 유기물 잔사 및 위생 위협 요소를 박멸합니다.`,
      '해썹공장청소': `${regionName} 해썹 표준 가이드라인에 기초하여 오염 구역과 비오염 구역의 경계에 맞춘 고밀도 위생 세정을 진행합니다.`,
      '공장위생청소': `${regionName} 제조 공간에 누적되는 유해 분진과 유독 가루를 건식·습식 복합 흡입 기술로 정화하여 근무 환경을 개선합니다.`,
      '공장곰팡이제거': `${regionName} 곰팡이 오염원을 단순 물 닦기가 아닌 뿌리까지 사멸시키는 침투형 소독제로 처리하여 재발을 억제합니다.`,
      '물류창고곰팡이청소': `${regionName} 습도가 높은 물류 보관 시설의 내벽 곰팡이를 제거하고, 방균 코팅을 병행하여 자재 보관 안전을 지킵니다.`,
      '공장디퓨저청소': `${regionName} 천장에 배치된 디퓨저 커버를 완전 탈거 분해 물세척하여 바람을 통해 나오는 분진 낙하를 예방합니다.`,
      '환기구청소': `${regionName} 기계실 및 주방 배기 통로인 환기망 내부의 매연 고무질 먼지까지 긁어내어 원활한 대기 순환을 완성합니다.`,
      '공장바닥청소': `${regionName} 에폭시나 하드너 바닥 손상 없이 타이어 흔적과 굳은 윤활 오일을 특수 분해 세척하여 바닥 안전을 확보합니다.`,
      '공장이전청소': `${regionName} 기계 철거 후 남은 유압 오일 얼룩, 앙커 볼트 홀 주변 분진을 정리하여 깔끔한 원상복구를 선사합니다.`,
      '공장외벽판넬청소': `${regionName} 샌드위치 판넬 재질의 부식을 예방하기 위해 도장막 손상 없이 고압 온수 살수로 외벽 매연을 제거합니다.`
    };
    if (factoryWhyDescs[serviceName]) return factoryWhyDescs[serviceName];

    switch (serviceName) {
      case '바닥왁스코팅':
        return `${regionName} 상가·사무실·매장 바닥의 오염도와 기존 왁스 상태를 확인해 필요한 작업 범위를 안내합니다.`;
      case '외벽청소':
        return `${regionName} 건물 외벽의 먼지, 빗물 자국, 매연 오염 상태를 확인해 작업 가능 여부를 안내합니다.`;
      case '유리창청소':
        return `${regionName} 유리창의 물때, 손자국, 빗물 얼룩을 확인해 작업 범위에 맞는 상담을 안내합니다.`;
      case '후드청소':
        return `${regionName} 주방 후드와 배기 주변의 기름때, 악취, 오염 상태를 확인해 청소 범위를 안내합니다.`;
      case '쓰레기집 청소':
      case '쓰레기집청소':
        return `${regionName} 생활폐기물이 쌓인 공간의 상태와 정리 범위를 확인해 작업 가능 여부를 안내합니다.`;
      case '사무실청소':
        return `${regionName} 사무실의 바닥 찌든 때, 카펫 얼룩, 탕비실 오염 상태를 확인해 쾌적한 비즈니스 환경 조성을 돕습니다.`;
      case '상가청소':
        return `${regionName} 매장 홀 바닥, 출입구, 쇼윈도 유리의 찌든 얼룩을 제거하여 청결한 영업 공간을 완성합니다.`;
      case '공장청소':
        return `${regionName} 공장 바닥의 거친 기름때, 설비 주변의 미세 분진을 특수 세척하여 안전한 작업 현장을 만듭니다.`;
      case '건물청소':
        return `${regionName} 빌딩 로비, 복도, 계단 등 공동 공용 공간의 통행 먼지와 논슬립 오염을 기계 세정하여 자산 가치를 높입니다.`;
      case '침수청소':
        return `${regionName} 침수로 유입된 오염 잔수 진공 흡입, 흙탕물 앙금 정리, 멸균 소독으로 빠른 피해 복구를 지원합니다.`;
      case '창고청소':
        return `${regionName} 물류 창고 내부의 장기 누적 먼지, 지게차 스키드 마크를 대형 기계 장비로 정밀 세척합니다.`;
      case '병원청소':
        return `${regionName} 병원의 진료실, 환자 대기실, 공용부 바닥의 묵은 오염 제거와 소독 닦기로 안심 원내 위생을 확립합니다.`;
      default:
        return `${regionName} ${serviceName}의 오염 상태와 작업 범위를 확인해 필요한 청소 방향을 안내합니다.`;
    }
  };

  const getPricingDescription = () => {
    const regionName = regionObj?.displayNameKo || '서울·인천';
    const serviceName = currentService?.serviceNameKo || '청소';
    
    const factoryPricingDescs: Record<string, string> = {
      '식품공장청소': `${regionName} 식품공장청소 비용은 제조 라인 규모, 스팀 보양 대상 설비 수, 위생 등급 수준 및 작업 시간대에 따라 결정됩니다. 현장 사진을 보내주시면 상세 상담을 제공합니다.`,
      '해썹공장청소': `${regionName} 해썹공장청소 견적은 보양 대상 계측기 수량, 고도 위생 구역 평수, 야간 분리 시공 필요 여부에 따라 조정됩니다. 상담 신청 시 안내해 드립니다.`,
      '공장위생청소': `${regionName} 공장위생청소 단가는 천장 층고, 배관 도트 수량, 분진의 위해성 수준에 따라 달라질 수 있습니다. 현장 도면과 사진을 통해 빠르게 상담해 드립니다.`,
      '공장곰팡이제거': `${regionName} 공장곰팡이제거 견적은 오염 면적, 층고(비계 설치 여부), 곰팡이 침투 깊이에 따라 산정됩니다. 사진을 보내주시면 대략적인 작업 플랜을 안내합니다.`,
      '물류창고곰팡이청소': `${regionName} 물류창고곰팡이청소 비용은 랙 철거 상태, 물품 보양 분량, 전체 보관 공간 평수에 따라 상일합니다. 현장 전경 사진을 보내주시면 확인해 드립니다.`,
      '공장디퓨저청소': `${regionName} 공장디퓨저청소 견적은 탈거 대상 디퓨저 수량, 천장 설치 높이, 비영업 시간대 작업 여부에 따라 상이합니다. 사진과 위치를 기반으로 조율 가능합니다.`,
      '환기구청소': `${regionName} 환기구청소 비용은 배기 덕트 규격, 흡입 환기구 수량, 유분 고착 상태에 따라 결정됩니다. 환기구 그릴 사진을 공유해주시면 안내가 수월합니다.`,
      '공장바닥청소': `${regionName} 공장바닥청소 단가는 스키드 마크 누적도, 유압 오일 도포 면적, 에폭시 박리 필요성에 따라 책정됩니다. 바닥면 전경 사진을 보내주시면 빠른 확인이 가능합니다.`,
      '공장이전청소': `${regionName} 공장이전청소 견적은 기계 탈거 흔적 부위 면적, 잔류 폐기물 처리 용량, 바닥 세척 면적을 토대로 결정됩니다. 설비 이동 전후 현장 사진을 제공해 주세요.`,
      '공장외벽판넬청소': `${regionName} 공장외벽판넬청소 비용은 아웃라인 외벽 층수, 스카이 차량 진입 진입로 폭, 고압 온수 살수 범위에 따라 상이하므로, 외벽 전체 사진 공유 시 상세 견적이 가능합니다.`
    };
    if (factoryPricingDescs[serviceName]) return factoryPricingDescs[serviceName];

    switch (serviceName) {
      case '바닥왁스코팅':
        return `${regionName} 바닥왁스코팅 견적은 바닥 면적, 기존 왁스 상태, 오염 누적 정도, 작업 가능 시간에 따라 달라질 수 있습니다. 사진과 위치를 보내주시면 상담 방향을 안내합니다.`;
      case '외벽청소':
        return `${regionName} 외벽청소 견적은 건물 높이, 외장재 재질, 오염 범위, 장비 사용 여부에 따라 달라질 수 있습니다. 외벽 전체 사진과 오염 부위 사진을 보내주시면 상담이 빠릅니다.`;
      case '유리창청소':
        return `${regionName} 유리창청소 견적은 유리 면적, 내부·외부 여부, 물때 정도, 고층 작업 여부에 따라 달라질 수 있습니다. 유리창 전체와 오염 부위 사진을 보내주시면 상담 방향을 안내합니다.`;
      case '후드청소':
        return `${regionName} 후드청소 견적은 후드 크기, 기름때 정도, 배기 주변 오염 범위, 작업 가능 시간에 따라 달라질 수 있습니다. 주방 후드 사진을 보내주시면 상담이 빠릅니다.`;
      case '쓰레기집 청소':
      case '쓰레기집청소':
        return `${regionName} 쓰레기집청소 견적은 생활폐기물 양, 악취 정도, 공간 형태, 정리 범위에 따라 달라질 수 있습니다. 현장 사진을 보내주시면 작업 가능 여부를 안내합니다.`;
      case '사무실청소':
        return `${regionName} 사무실청소 견적은 사무실 실평수, 집기 이동 범위, 바닥 카펫 세척 여부, 탕비실 유무에 따라 결정됩니다. 현장 사진을 보내주시면 상세 상담을 안내합니다.`;
      case '상가청소':
        return `${regionName} 상가청소 견적은 홀 면적, 쇼윈도 수량, 업종별 오염 특성, 야간 작업 여부에 따라 결정됩니다. 매장 전체 사진을 공유해 주시면 상담이 원활합니다.`;
      case '공장청소':
        return `${regionName} 공장청소 견적은 작업장 면적, 층고, 기름때 및 분진 수준, 설비 주변 보양 요건에 따라 결정됩니다. 현장 사진과 요청 사항을 접수해주시면 안내가 빠릅니다.`;
      case '건물청소':
        return `${regionName} 건물청소 견적은 건물 규모(층수), 공용부 범위, 계단 자재 종류, 외부 포함 여부에 따라 결정됩니다. 빌딩 전경과 공용부 사진을 보내주시면 상담을 안내합니다.`;
      case '침수청소':
        return `${regionName} 침수청소 견적은 물 유입 면적 및 깊이, 수해 폐기물 반출량, 탈취/살균 규모에 따라 결정됩니다. 현장 사진을 먼저 보내주시면 빠른 복구 상담을 도와드립니다.`;
      case '창고청소':
        return `${regionName} 창고청소 견적은 창고 실평수, 내부 랙 구조, 지게차 스키드 자국 수준, 작업 가능 시간에 따라 결정됩니다. 창고 내부 사진을 제공해 주시면 상담 방향을 안내합니다.`;
      case '병원청소':
        return `${regionName} 병원청소 견적은 원내 공급 평수, 진료 영역 개수, 위생 살균 범위, 작업 시간대에 따라 결정됩니다. 원내 구조 사진을 공유해 주시면 상세히 상담해 드립니다.`;
      default:
        return `${regionName} ${serviceName} 견적은 작업 범위, 오염 상태, 면적, 장비 사용 여부에 따라 달라질 수 있습니다. 사진과 위치를 보내주시면 작업 가능 여부와 상담 방향을 안내합니다.`;
    }
  };

  const getCard2Description = () => {
    const regionName = regionObj?.displayNameKo || '서울·인천';
    const serviceName = currentService?.serviceNameKo || '청소';
    return `${regionName} ${serviceName} 현장 상태에 맞는 전문 장비와 작업 방식을 검토합니다.`;
  };

  const getEstimateFactors = () => {
    const serviceName = currentService.serviceNameKo;
    switch (serviceName) {
      case '외벽청소':
        return [
          '건물 높이',
          '외장재 재질',
          '오염도',
          '스카이차 필요 여부',
          '작업 가능 시간대'
        ];
      case '유리창청소':
        return [
          '유리 면적',
          '내부/외부 유리 여부',
          '물때와 빗물 얼룩 정도',
          '고층 작업 여부'
        ];
      case '화재청소':
        return [
          '그을음 범위',
          '냄새 정도',
          '분진 오염 범위',
          '청소 대상 공간 크기'
        ];
      case '바닥왁스코팅':
        return [
          '바닥 면적',
          '기존 왁스층 상태',
          '오염 누적 정도',
          '스크래치 정도'
        ];
      case '어닝청소':
        return [
          '어닝 크기',
          '원단 노후도',
          '빗물 자국과 곰팡이 정도',
          '설치 높이'
        ];
      case '간판청소':
        return [
          '간판 크기',
          '설치 높이',
          '표면 오염 정도',
          '장비 사용 여부'
        ];
      case '인테리어 후 청소':
        return [
          '공사 범위',
          '분진 정도',
          '접착제 자국 여부',
          '입점 또는 오픈 일정'
        ];
      case '준공청소':
        return [
          '전체 면적',
          '공사 잔여물 범위',
          '시멘트 가루와 분진 정도',
          '입주 일정'
        ];
      case '후드청소':
        return [
          '후드 크기',
          '기름때 정도',
          '배기 주변 오염 범위',
          '영업시간 외 작업 가능 여부'
        ];
      case '쓰레기집 청소':
      case '쓰레기집청소':
        return [
          '생활폐기물 양',
          '악취 정도',
          '주거공간 형태',
          '분리배출 범위'
        ];
      case '특수청소':
        return [
          '오염 유형',
          '악취 정도',
          '방치 기간',
          '폐기물 여부'
        ];
      case '바닥청소':
        return [
          '바닥 면적',
          '바닥 재질 및 상태',
          '오염 누적 정도',
          '작업 가능 시간대'
        ];
      case '사무실청소':
        return [
          '사무실 면적',
          '책상/집기 배치 상태',
          '바닥 오염도',
          '탕비실/화장실 포함 여부',
          '정기/일회성 여부'
        ];
      case '상가청소':
        return [
          '매장 면적',
          '업종 특성',
          '바닥/유리 오염도',
          '집기 이동 여부',
          '영업시간 외 작업 가능 여부'
        ];
      case '공장청소':
        return [
          '공장 면적',
          '바닥 오염 정도',
          '분진/기름때 여부',
          '설비 주변 작업 가능 여부',
          '작업 시간대'
        ];
      case '건물청소':
        return [
          '건물 규모',
          '층수',
          '공용부 범위',
          '외부/내부 포함 여부',
          '정기 관리 여부'
        ];
      case '침수청소':
        return [
          '침수 면적',
          '물 유입 깊이',
          '오염수 여부',
          '바닥재 상태',
          '폐기물 발생 여부',
          '건조 필요 여부'
        ];
      case '창고청소':
        return [
          '창고 면적',
          '적재물 이동 여부',
          '먼지/분진 정도',
          '바닥 오염 상태',
          '작업 가능 시간대'
        ];
      case '병원청소':
        return [
          '병원 면적',
          '진료실/대기실/공용부 범위',
          '바닥 오염 상태',
          '작업 가능 시간대',
          '위생 관리 필요 범위'
        ];
      default:
        return currentService.estimateFactors;
    }
  };

  return (
    <div className={styles.container}>
      {/* 1. Hero Section (Dynamic) */}
      <section className={styles.hero} style={heroStyle}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.inner}>
          <div className="animate-fade-up">
            <span className={styles.badge}>{isFactory ? '공장·산업시설 청소 상담' : '서울 주요 지역 청소 상담'}</span>
            <h1 className={styles.heroTitle} style={{ lineHeight: '1.4' }}>
              {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 전문
              <br />
              <span className={styles.highlight}>{BRAND_NAME}</span>
            </h1>
            <p className={styles.heroDesc}>
              {getHeroDescription()}
            </p>
            <div className={styles.heroCta}>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`}>
                <span className="pc-only">전화 상담하기</span>
                <span className="mo-only">전화 상담</span>
              </a>
              <a 
                href={CONTACT_KAKAOTALK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.ctaBtn} ${styles.kakao}`}
              >
                <span className="pc-only">카카오톡 문의하기</span>
                <span className="mo-only">카카오톡 문의</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY 모두종합환경? Section */}
      <section className={`${styles.solution} ${styles.landingSolution}`} style={{ background: '#fff', padding: '5rem 0' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Why {BRAND_NAME}?</span>
            <h2 className={styles.sectionTitle}>
              {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'},<br />
              왜 <span className={styles.highlight}>{BRAND_NAME}</span>이어야 할까요?
            </h2>
            <p className={styles.sectionDesc} style={{ marginTop: '1.2rem', color: '#475569', fontSize: '1.025rem', lineHeight: '1.6', maxWidth: '800px', margin: '1.2rem auto 0 auto' }}>
              {getWhyDescription()}
            </p>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/pricing.jpg" alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} 합리적인 비용 견적 제안`} />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>💰</div>
                <h3>적정한 견적 제안</h3>
                <p>현장 상태와 작업 범위를 기준으로 상담을 안내합니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/equipment.jpg" alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} 맞춤형 청소 장비 구성`} />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>✨</div>
                <h3>현장 맞춤형 장비</h3>
                <p>{getCard2Description()}</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/team.jpg" alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} 전문 청소팀 작업 준비`} />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>👤</div>
                <h3>청소 전문 팀 투입</h3>
                <p>작업 범위에 맞춰 필요한 인력과 진행 방식을 조율합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Section (모두종합환경의 청소 서비스 안내) */}
      <section className={styles.services} style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}><span style={{ color: 'var(--accent)' }}>{BRAND_NAME}</span>의 청소 서비스 안내</h2>
            <p className={styles.sectionDesc}>{isFactory ? '다양한 청소 현장에 맞는 전문 서비스를 확인하세요.' : `${BRAND_NAME}는 서울 주요 지역의 다양한 청소 현장에 맞춰 상담을 안내합니다.`}</p>
          </div>

          {/* Desktop & Mobile Responsive view (HTML 중복 제거 및 단일 카드 리스트 적용) */}
          <div className={styles.serviceCards} style={{ marginTop: '3rem' }}>
            {getDisplayServices().map((item) => {
              const isMatched = 
                (item.id === 'outer-wall' && currentService?.serviceNameKo === '외벽청소') ||
                (item.id === 'window' && currentService?.serviceNameKo === '유리창청소') ||
                (item.id === 'fire' && currentService?.serviceNameKo === '화재청소') ||
                (item.id === 'floor-wax' && currentService?.serviceNameKo === '바닥왁스코팅') ||
                (item.id === 'group-awning-sign' && (currentService?.serviceNameKo === '어닝청소' || currentService?.serviceNameKo === '간판청소')) ||
                (item.id === 'group-interior-completion' && (currentService?.serviceNameKo === '인테리어 후 청소' || currentService?.serviceNameKo === '준공청소')) ||
                (item.id === 'hood' && currentService?.serviceNameKo === '후드청소') ||
                (item.id === 'special-cleaning' && (currentService?.serviceNameKo === '특수청소' || currentService?.serviceNameKo === '쓰레기집 청소' || currentService?.serviceNameKo === '쓰레기집청소'));

              return (
                <div 
                  key={item.id} 
                  className={styles.serviceItem} 
                  style={isMatched ? { border: '2px solid var(--accent)', position: 'relative' } : undefined}
                >
                  {isMatched && (
                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--accent)', color: '#fff', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 10 }}>
                      현재 추천 서비스
                    </div>
                  )}
                  <div className={styles.serviceInfo}>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <ul className={styles.serviceList}>
                      <li>✔ 현장 상태 확인</li>
                      <li>✔ 작업 범위에 맞춘 인력 배치</li>
                      <li>✔ 작업 후 상태 확인</li>
                    </ul>
                  </div>
                  {item.image && (
                    <div className={styles.serviceImage}>
                      <img src={item.image} alt={item.name} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section className={styles.portfolio} style={{ padding: '5rem 0' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className="pc-only">{BRAND_NAME} 청소 현장 사례</span>
              <span className="mo-only">{BRAND_NAME}<br />청소 현장 사례</span>
            </h2>
            <p className={styles.sectionDesc} style={{ whiteSpace: 'nowrap' }}>작업 전후 상태를 사진으로 확인할 수 있습니다.</p>
          </div>
          <div ref={viewportRef} style={{ width: '100%', overflow: 'hidden', position: 'relative', padding: '20px 0', marginTop: '3rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '30px',
              width: 'max-content',
              transform: `translateX(${-(currentIndex * (cardWidth + 30))}px)`,
              transition: isTransitioning ? 'transform 500ms ease' : 'none'
            }}>
              {slides.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className={styles.portfolioCard} style={{ flexShrink: 0, width: `${cardWidth}px`, margin: 0 }}>
                  <div className={styles.portfolioCategory}>{item.category}</div>
                  <div className={styles.comparisonGrid}>
                    <div className={styles.imageBox}>
                      <img src={item.beforeImg} alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} ${item.category} 청소 작업 전 상태`} />
                      <span className={styles.tagBefore}>BEFORE</span>
                    </div>
                    <div className={styles.imageBox}>
                      <img src={item.afterImg} alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} ${item.category} 청소 작업 후 완료`} />
                      <span className={styles.tagAfter}>AFTER</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing & Estimate (Reasonable Price) Section */}
      <section className={styles.pricing} style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Pricing & Estimate</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: '1.3' }}>
              {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 견적은<br />
              현장 상태에 따라 달라집니다
            </h2>
            <p className={styles.sectionDesc} style={{ marginTop: '1rem', color: '#475569', fontSize: '1.025rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto 0 auto' }}>
              {getPricingDescription()}
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {/* 견적 기준 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid var(--accent)', paddingBottom: '0.6rem' }}>
                {(currentService?.serviceNameKo) || '청소'} 견적 기준
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {getEstimateFactors().map((factor, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                    <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            {/* 상담 시 보내면 좋은 정보 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid var(--accent)', paddingBottom: '0.6rem' }}>
                상담 시 보내면 좋은 정보
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  현장 위치
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  작업이 필요한 공간 사진
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  오염 상태가 잘 보이는 사진
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  대략적인 면적 또는 층수
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  희망 작업 일정
                </li>
              </ul>
            </div>
          </div>

          {/* CTA 버튼 세트 */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`}>
              {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 상담하기
            </a>
            <a 
              href={CONTACT_KAKAOTALK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.ctaBtn} ${styles.kakao}`}
            >
              카카오톡 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className={styles.faq} style={{ padding: '5rem 0', background: '#fff' }}>
         <div className={styles.inner}>
            <div className={styles.sectionHeader}>
               <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
            </div>
            <div className={styles.faqList} style={{ marginTop: '2rem' }}>
               {(data?.faqBlock || []).map((faq, index) => (
                 <div key={index} className={styles.faqItem} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1.8rem 2rem' }}>
                   <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.6rem' }}>Q. {faq.q}</h4>
                   <p style={{ color: '#475569', margin: 0 }}>A. {faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 작업 안내 더보기 Accordion */}
      {(data?.customIntroBlock || data?.targetSceneBlock || data?.problemBlock || data?.preCheckBlock) && (
        <section style={{ padding: '3rem 0', background: '#fff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
          <div className={styles.inner} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <details style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', background: '#f8fafc' }}>
              <summary style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: '#0f172a', cursor: 'pointer', userSelect: 'none' }}>
                {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 작업 상세 안내 보기 (클릭)
              </summary>
              <div style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data?.customIntroBlock && <p style={{ margin: 0 }}>{data.customIntroBlock}</p>}
                {data?.targetSceneBlock && <p style={{ margin: 0 }}>{data.targetSceneBlock}</p>}
                {data?.problemBlock && <p style={{ margin: 0 }}>{data.problemBlock}</p>}
                {data?.preCheckBlock && <p style={{ margin: 0 }}>{data.preCheckBlock}</p>}
              </div>
            </details>
          </div>
        </section>
      )}

      {/* 6.5. Related Services Section - FAQ 아래 배치 */}
       <section style={{ padding: '4rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
         <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
           <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
             {((regionObj?.displayNameKo) || '서울·인천')} 다른 청소 서비스
           </h3>
           <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem 1.2rem', flexWrap: 'wrap' }}>
             {(() => {
               const citySlug = regionObj?.citySlug || regionObj?.regionSlug || 'seoul';
               const districtSlug = regionObj?.districtSlug || 'all';
               const subDistrictSlug = regionObj?.subDistrictSlug || 'all';

               const pathPrefix = subDistrictSlug && subDistrictSlug !== 'all'
                 ? `/${citySlug}/${districtSlug}/${subDistrictSlug}`
                 : `/${citySlug}/${districtSlug}`;

               // 작업명별 관련 서비스 매핑
               let relatedSlugs: string[] = [];
               const currentSlug = currentService.serviceSlug;
               if (currentSlug === 'signboard-cleaning') {
                 relatedSlugs = ['window-cleaning', 'exterior-cleaning', 'awning-cleaning', 'floor-cleaning'];
               } else if (currentSlug === 'window-cleaning') {
                 relatedSlugs = ['exterior-cleaning', 'signboard-cleaning', 'awning-cleaning', 'floor-cleaning'];
               } else if (currentSlug === 'exterior-cleaning') {
                 relatedSlugs = ['window-cleaning', 'signboard-cleaning', 'awning-cleaning', 'floor-cleaning'];
               } else if (currentSlug === 'interior-post-cleaning') {
                 relatedSlugs = ['floor-wax-coating', 'window-cleaning', 'floor-cleaning', 'completion-cleaning'];
               } else if (currentSlug === 'completion-cleaning') {
                 relatedSlugs = ['exterior-cleaning', 'floor-wax-coating', 'window-cleaning', 'floor-cleaning'];
               } else if (currentSlug === 'floor-cleaning') {
                 relatedSlugs = ['floor-wax-coating', 'interior-post-cleaning', 'window-cleaning', 'signboard-cleaning'];
               } else if (currentSlug === 'floor-wax-coating') {
                 relatedSlugs = ['floor-cleaning', 'interior-post-cleaning', 'window-cleaning', 'completion-cleaning'];
               } else if (currentSlug === 'awning-cleaning') {
                 relatedSlugs = ['signboard-cleaning', 'window-cleaning', 'exterior-cleaning', 'floor-cleaning'];
               } else if (currentSlug === 'hood-cleaning') {
                 relatedSlugs = ['floor-cleaning', 'special-cleaning', 'window-cleaning', 'interior-post-cleaning'];
               } else if (currentSlug === 'hoarder-house-cleaning' || currentSlug === 'hoarding-cleaning') {
                 relatedSlugs = ['special-cleaning', 'floor-cleaning', 'window-cleaning', 'interior-post-cleaning'];
               } else if (currentSlug === 'special-cleaning') {
                 relatedSlugs = ['hoarder-house-cleaning', 'fire-cleaning', 'floor-cleaning', 'window-cleaning'];
               } else if (currentSlug === 'fire-cleaning') {
                 relatedSlugs = ['special-cleaning', 'floor-cleaning', 'window-cleaning', 'interior-post-cleaning'];
               }

               const relatedList = relatedSlugs.map(slug => {
                 const mapped = serviceContentMap[slug];
                 return { name: mapped?.serviceName || slug, slug };
               });

               return relatedList.map((item, idx) => {
                 const linkHref = `${pathPrefix}/${item.slug}`;
                 return (
                   <Link 
                     key={idx} 
                     href={linkHref}
                     style={{ padding: '6px 14px', borderRadius: '30px', background: '#ffffff', color: '#0070f3', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid #0070f3', textDecoration: 'none', transition: 'all 0.2s' }}
                   >
                     {((regionObj?.displayNameKo) || '서울·인천')} {item.name}
                   </Link>
                 );
               });
             })()}
           </div>
         </div>
       </section>

      {/* 8. Contact Section */}
      <section className={styles.contact} style={{ padding: '6rem 0' }}>
        <div className={styles.inner}>
          <div className={styles.contactCard}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'white', marginBottom: '16px', lineHeight: '1.3' }}>
              {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 상담이 필요하신가요?
            </h2>
             <p style={{ color: 'var(--gray-300)', marginBottom: '30px', fontSize: 'clamp(14px, 2vw, 18px)' }}>
               {currentService.serviceSlug === 'exterior-cleaning' && '건물 높이, 외벽 면적, 오염 정도를 기준으로 작업 가능 여부와 장비 사용 여부를 안내합니다.'}
               {currentService.serviceSlug === 'window-cleaning' && '유리창 높이, 면적, 오염 상태를 기준으로 작업 범위를 안내합니다.'}
               {currentService.serviceSlug === 'signboard-cleaning' && '간판 크기, 설치 높이, 오염 상태를 기준으로 작업 가능 여부를 안내합니다.'}
               {currentService.serviceSlug === 'interior-post-cleaning' && '공사 범위, 평수, 분진 오염 정도를 기준으로 일정 조율과 작업 범위를 안내합니다.'}
               {currentService.serviceSlug === 'construction-completion-cleaning' && '건물 면적, 층수, 시멘트 잔해 등 현장 오염도를 기준으로 1차 대형 잔재 정리 견적을 안내합니다.'}
               {currentService.serviceSlug === 'floor-cleaning' && '바닥 면적, 재질, 오염 상태를 기준으로 정밀 기계 솔질 및 잔오염 흡입 견적을 안내합니다.'}
               {currentService.serviceSlug === 'floor-wax-coating' && '바닥 면적, 기존 왁스 박리 필요 여부, 타일 재질에 따른 광택 왁스코팅 범위를 확인해 드립니다.'}
               {currentService.serviceSlug === 'hood-cleaning' && '주방 후드 크기, 기름때 고착 상태, 거름망 필터 끈끈이 상태를 확인하여 견적을 제안합니다.'}
               {currentService.serviceSlug === 'move-in-cleaning' && '입주일, 평수, 오염 상태를 기준으로 작업 가능 여부를 확인해드립니다.'}
               {currentService.serviceSlug === 'moving-cleaning' && '이사일, 짐 유무, 집 상태를 기준으로 가능 일정과 작업 범위를 안내합니다.'}
               {currentService.serviceSlug === 'fire-cleaning' && '화재 그을음 피해 면적, 탄 냄새 악취 정도를 고려하여 오존 탈취 및 그을음 박리 작업 가능 여부를 상담합니다.'}
               {currentService.serviceSlug === 'awning-cleaning' && '천막 어닝 너비, 설치 높이, 곰팡이 오염 상태를 고려하여 고압수 세정 및 발수 관리 여부를 안내합니다.'}
               {currentService.serviceSlug === 'hoarder-house-cleaning' && '방치된 대량의 폐기물량, 음식물 부패 상태, 악취 정도를 기준으로 작업 가능 일정과 견적을 안내합니다.'}
               {currentService.serviceSlug === 'special-cleaning' && '혈흔이나 체액 오염 면적, 잔류 유품 폐기량, 방치 기간을 고려한 정밀 약품 소독 견적을 안내합니다.'}
               {!['exterior-cleaning', 'window-cleaning', 'signboard-cleaning', 'interior-post-cleaning', 'construction-completion-cleaning', 'floor-cleaning', 'floor-wax-coating', 'hood-cleaning', 'move-in-cleaning', 'moving-cleaning', 'fire-cleaning', 'awning-cleaning', 'hoarder-house-cleaning', 'special-cleaning'].includes(currentService.serviceSlug) && '현장 상태, 오염도, 작업 범위를 기준으로 맞춤형 견적 상담을 진행해 드립니다.'}
             </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a 
                href={`tel:${CONTACT_PHONE}`} 
                className={`${styles.ctaBtn} ${styles.primary}`}
                style={{ minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                📞 전화 상담하기
              </a>
              <a 
                href={CONTACT_KAKAOTALK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.ctaBtn} ${styles.kakao}`}
                style={{ minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                💬 카카오톡 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
      <FloatingContact />
    </div>
  );
}
