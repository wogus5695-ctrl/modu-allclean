"use client";

import { useState, useEffect, useRef } from 'react';
import { LandingPageData } from '@/lib/seo-builder';
import { CONTACT_PHONE, BRAND_NAME, CONTACT_KAKAOTALK } from '@/lib/seo';
import { SeoService } from '@/data/seo/services';
import { serviceContentMap } from '@/data/seo/serviceContentMap';
import styles from '@/app/page.module.css';
import FloatingContact from '@/components/FloatingContact';
import Header from '@/components/Header';
import Link from 'next/link';

interface MoveInCleaningTemplateProps {
  data: LandingPageData;
  regionObj: any;
  currentService: SeoService;
}

export default function MoveInCleaningTemplate({ data, regionObj, currentService }: MoveInCleaningTemplateProps) {
  // 대표지역명(displayNameKo 등) 규칙 바인딩
  const isDistrict = regionObj?.regionType === 'district' || regionObj?.subDistrict === '전지역';
  const cityName = regionObj?.city || '';
  
  let regionName = regionObj?.displayNameKo || regionObj?.subDistrict || regionObj?.district || '';
  
  // displayNameKo가 존재하고 유효한 경우, 상세 재파싱 로직을 우회하여 동적 지명이 유지되도록 조치
  if (regionObj?.displayNameKo) {
    regionName = regionObj.displayNameKo;
  } else if (!isDistrict) {
    const neighborhood = regionObj?.subDistrict || '';
    const district = regionObj?.district || '';
    if (regionObj?.citySlug === 'seoul') {
      regionName = neighborhood;
    } else if (regionObj?.citySlug === 'incheon') {
      const isConflict = ['논현동', '신흥동'].includes(neighborhood);
      regionName = isConflict ? `인천 ${neighborhood}` : neighborhood;
    } else {
      const isConflict = ['문산읍', '신흥동', '중앙동', '역삼동', '신교동', '성남동', '태평동', '수진동', '단대동', '상대원동'].includes(neighborhood);
      regionName = isConflict ? `${district.replace(/(시|군)$/, '')} ${neighborhood}` : neighborhood;
    }
  } else {
    // 구 단위
    const cleanDistrict = (regionObj?.districtNameKo || regionObj?.district || '').replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
    if (regionObj?.citySlug === 'incheon') {
      regionName = `인천 ${cleanDistrict}`;
    } else {
      regionName = cleanDistrict;
    }
  }

  const parentRegion = regionObj?.district || '';

  // 입주청소 주요 작업 예시 정적 데이터 정의
  const staticCleaningPoints = [
    {
      title: "주방 수납장 확인",
      description: "싱크대 상·하부장 문을 열어 선반 구석의 미세 톱밥과 찌든 오염을 확인합니다.",
      tags: ["주방", "싱크대", "수납장"],
      img: "/images/portfolio/cabinet.jpg"
    },
    {
      title: "샤워부스 물때",
      description: "샤워부스 유리와 타일 벽면에 축적된 고착성 물때와 백화 현상을 확인합니다.",
      tags: ["욕실", "물때", "샤워부스"],
      img: "/images/portfolio/glass.jpg"
    },
    {
      title: "배수구 탈거 분해",
      description: "머리카락 및 이물질로 가로막힌 배수구 트랩을 탈거하여 내부 안쪽까지 살균 세정합니다.",
      tags: ["배수구", "살균", "욕실"],
      img: "/images/portfolio/drain-before.jpg"
    },
    {
      title: "창틀 먼지 오염",
      description: "외부 유입 미세먼지와 빗물 찌꺼기가 고착되어 굳어버린 창틀 틈새를 케어합니다.",
      tags: ["창틀", "먼지", "베란다"],
      img: "/images/portfolio/window-dirty.jpg"
    },
    {
      title: "욕실 세면대 수전",
      description: "세면대 볼 내부와 수전 손잡이 주변의 고착된 비누 때와 뿌연 물때를 세척합니다.",
      tags: ["세면대", "수전", "욕실"],
      img: "/images/portfolio/sink-before.jpg"
    }
  ];

  // 모바일 전용 카루셀 상태 및 타이머 설정
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || isHovering) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % staticCleaningPoints.length);
    }, 3500); // 3.5초 주기 자동 전환

    return () => clearInterval(timer);
  }, [isHovering, staticCleaningPoints.length]);

  // 1. 입주 전 청소가 필요한 이유 리스트
  const whyReasons = [
    { title: "신축 분진", desc: "도배 풀, 시멘트 가루, 미세 톱밥 등 신축/리모델링 후 구석구석 남은 분진을 찾아냅니다.", img: "/images/why/dust.jpg" },
    { title: "생활 오염", desc: "이전 거주자가 나가며 남긴 벽지 찌든 먼지, 바닥 얼룩 및 생활 흔적을 세정합니다.", img: "/images/why/living.jpg" },
    { title: "창틀 먼지", desc: "외부 미세먼지와 빗물이 유입되어 굳어버린 창틀 틈새의 새까만 찌든 먼지를 케어합니다.", img: "/images/why/window.jpg" },
    { title: "욕실 물때", desc: "세면대, 거울, 샤워부스 유리, 타일 틈새에 축적된 불투명한 물때와 이물질을 세척합니다.", img: "/images/why/bathroom.jpg" },
    { title: "주방 기름때", desc: "가스레인지 주변 벽 타일, 가구 하부, 후드 필터에 고착된 끈적한 기름 오염을 녹여냅니다.", img: "/images/why/kitchen.jpg" },
    { title: "입주 일정 압박", desc: "이사 당일에는 짐이 들어오기 때문에 반드시 짐 반입 전에 완료할 수 있도록 일정을 확보합니다.", img: "/images/why/schedule.jpg" }
  ];

  const isMoving = currentService.serviceSlug === 'moving-cleaning';
  const workName = isMoving ? "이사청소" : "입주청소";

  const content = serviceContentMap[currentService.serviceSlug] || {
    serviceName: workName,
    heroSubcopy: `${regionName} ${workName} 전문 서비스로서 신축 분진, 전 세입자 생활오염, 창틀 먼지처럼 입주 후 직접 처리하기 번거로운 구간을 중심으로 깨끗하게 청소합니다.`,
    targets: ['아파트', '빌라', '오피스텔', '주거공간'],
    pollutionTypes: ['생활오염', '분진', '물때', '기름때'],
    scopeCards: [
      { title: "욕실 청소", desc: "물때, 배수구 주변, 수전·거울 오염까지 확인합니다." },
      { title: "주방 청소", desc: "싱크대, 상·하부장, 조리대 주변의 기름때와 생활오염을 정리합니다." },
      { title: "베란다·창틀 청소", desc: "창틀 틈새, 배수구 주변, 베란다 바닥 먼지를 확인합니다." },
      { title: "전체 오염 케어", desc: "바닥, 몰딩, 문틀, 수납장 내부의 잔먼지를 정리합니다." }
    ],
    estimateFactors: ["평수", "방/욕실 개수", "구축 연식/오염 정도", "주방 기름때/욕실 곰팡이 상태", "베란다·창틀 작업 범위", isMoving ? "이사 예정일" : "입주 예정일", "빈집 여부", "사진 확인 가능 여부"],
    faqItems: [
      { q: `${regionName} ${workName}는 ${isMoving ? '이사' : '입주'} 며칠 전에 하는 게 좋나요?`, a: isMoving ? "이삿짐이나 가구가 완전히 없는 공실(빈집) 상태에서 진행해야 구석구석 찌든 먼지까지 제거할 수 있습니다. 보통 이사 1~3일 전에 마치는 일정을 추천합니다." : "가구가 들어오기 전 빈집 상태에서 진행하는 것이 가장 좋습니다. 보통 입주일 1~3일 전 작업을 권장하며, 일정이 촉박한 경우 상담 시 가능 여부를 확인합니다." }
    ],
    relatedServices: [],
    imageKeywords: [],
    altTextPatterns: [],
    ctaTitle: `${regionName} ${workName}가 필요하신가요?`,
    ctaDescription: `${regionName} ${workName} 상세 견적과 ${isMoving ? '이사일' : '입주일'}, 평수, 오염 상태를 기준으로 작업 가능 여부 및 일정을 신속히 확인해드립니다.`
  };

  // serviceConfig 변수 선언
  const serviceConfig = {
    moveIn: {
      heroBadge: "입주 전 빈집 청소 전문",
      heroTitle: `${regionName} 입주청소`,
      heroMainText: "입주 전 마지막 점검",
      heroSubText: content.heroSubcopy.replace(/\{\{지역명\}\}/g, regionName),
      heroCheckDate: "입주일 기준 상담",
      whySectionTitle: "겉으로 깨끗해 보여도\n입주 전 확인해야 할 곳이 있습니다",
      whySectionDesc: `${regionName} 입주청소 진행 시 신축 분진, 전 세입자 흔적, 욕실 물때, 주방 기름때, 창틀 먼지, 수납장 내부 먼지는 입주 후 직접 정리하기 번거로운 경우가 많으므로 전문 검수와 클리닝이 꼭 필요합니다.`,
      guideSectionTitle: `${regionName} 입주청소 핵심 검수 범위`,
      processTitle: "입주일에 맞춰\n범위·일정·견적을 먼저 정리합니다",
      processDesc: `${regionName} 입주청소는 입주일, 평수, 집 상태를 먼저 확인한 뒤 필요한 청소 범위와 가능 일정을 안내합니다.`,
      processDateText: "입주일이 가까운 경우, 먼저 가능 일정부터 확인하는 것이 좋습니다.",
      processCtaLinkText: "입주일 전 일정 확인",
      portfolioTitle: "입주 전 확인이 필요한 공간,\n사진으로 먼저 확인하세요",
      portfolioDesc: `${regionName} 입주청소 전후 상태를 사진으로 확인해 보세요. 욕실·주방·베란다·창틀·분진 오염처럼 입주 후 직접 정리하기 번거로운 구간을 중심으로 꼼꼼하게 확인합니다.`,
      estimateTitle: `${regionName} 입주청소 견적 안내`,
      footerCtaTitle: content.ctaTitle.replace(/\{\{지역명\}\}/g, regionName),
      footerCtaDesc: content.ctaDescription.replace(/\{\{지역명\}\}/g, regionName)
    },
    moving: {
      heroBadge: "이사 전 빈집 청소 전문",
      heroTitle: `${regionName} 이사청소`,
      heroMainText: "이사 전후 정리",
      heroSubText: content.heroSubcopy.replace(/\{\{지역명\}\}/g, regionName),
      heroCheckDate: "이사일 기준 상담",
      whySectionTitle: "겉으로 깨끗해 보여도\n이사 전 확인해야 할 곳이 있습니다",
      whySectionDesc: `${regionName} 이사청소는 이전 세입자의 찌든 때 흔적, 주방 기름때, 욕실 물때 및 곰팡이, 창틀 고착 먼지 등 이사 전에 전문 약품과 장비로 정밀하게 세정해야만 이사 후 쾌적하게 거주하실 수 있습니다.`,
      guideSectionTitle: `${regionName} 이사청소 핵심 정리 범위`,
      processTitle: "이사일에 맞춰\n범위·일정·견적을 먼저 정리합니다",
      processDesc: `${regionName} 이사청소는 이사일, 평수, 집 상태를 먼저 확인한 뒤 필요한 청소 범위와 가능 일정을 안내합니다.`,
      processDateText: "이사일이 가까운 경우, 먼저 가능 일정부터 확인하는 것이 좋습니다.",
      processCtaLinkText: "이사일 전 일정 확인",
      portfolioTitle: "이사 전 확인이 필요한 공간,\n사진으로 먼저 확인하세요",
      portfolioDesc: `${regionName} 이사청소 작업 전후 비교 사진입니다. 욕실 물때, 주방 기름때, 창틀 찌든 먼지 등 이사 후 직접 정리하기 번거로운 구간을 집중 케어합니다.`,
      estimateTitle: `${regionName} 이사청소 견적 안내`,
      footerCtaTitle: content.ctaTitle.replace(/\{\{지역명\}\}/g, regionName),
      footerCtaDesc: content.ctaDescription.replace(/\{\{지역명\}\}/g, regionName)
    }
  };

  const activeConfig = isMoving ? serviceConfig.moving : serviceConfig.moveIn;

  // 2. 입주청소/이사청소 작업 범위 - 4카드
  const serviceCards = content.scopeCards.map((card, idx) => {
    const detailsMap: Record<number, string[]> = {
      0: ["물때 제거", "배수구 소독", "수전 광택", "곰팡이 제거"],
      1: ["싱크대 세정", "수납장 내부", "기름때 제거", "타일 벽면"],
      2: ["창틀 틈새", "베란다 물세척", "배수구 탈거", "유리창 닦기"],
      3: ["바닥 정밀세척", "수납선반 분리", "몰딩/벽 먼지", "전등갓 세정"]
    };
    return {
      title: card.title,
      desc: card.desc,
      details: detailsMap[idx] || ["정밀 세정", "오염 제거", "살균 소독"],
      moDesc: card.desc.slice(0, 15)
    };
  });

  // 3. 현장 유형별 대응
  const buildingTypes = [
    { type: isMoving ? "구축 이사" : "신축 입주", desc: isMoving ? "전 거주자 흔적 · 주방 찌든 때 · 욕실 곰팡이" : "공사 분진 · 창틀 먼지 · 수납장 내부" },
    { type: isMoving ? "리모델링 후 이사" : "구축 입주", desc: isMoving ? "공사 먼지 · 톱밥 가루 · 실리콘 자국 제거" : "욕실 물때 · 주방 기름때 · 전 세입자 흔적" },
    { type: isMoving ? "부분 인테리어 이사" : "인테리어 후 입주", desc: isMoving ? "부분 공사 분진 · 보양지 제거 · 미세 먼지 케어" : "목공 분진 · 페인트 자국 · 바닥 잔먼지" }
  ];

  // 4. 입주청소/이사청소 진행 과정
  const processSteps = [
    { num: "01", title: isMoving ? "이사 일정·평수 확인" : "입주일·평수 확인", desc: isMoving ? "지역, 평수, 이사 예정일, 현재 오염 상태를 먼저 확인합니다." : "지역, 평수, 입주 예정일, 신축·구축 여부를 먼저 확인합니다." },
    { num: "02", title: "작업 범위 안내", desc: "욕실, 주방, 베란다·창틀, 생활 찌든 오염 중 상태별 필요한 범위를 확인합니다." },
    { num: "03", title: "견적·일정 조율", desc: isMoving ? "현장 상태와 이사 일정을 기준으로 작업 일정과 상세 견적을 조율합니다." : "현장 상태와 입주일을 기준으로 가능 일정과 예상 견적을 안내합니다." },
    { num: "04", title: isMoving ? "이사 전 청소 검수" : "입주 전 청소·확인", desc: isMoving ? "작업 완료 후 이사 전에 욕실, 주방, 베란다 등 주요 생활 공간의 청소 상태를 최종 확인합니다." : "작업 후 욕실, 주방, 베란다·창틀 등 주요 공간을 확인합니다." }
  ];

  // 5. 견적 기준
  const estimateFactors = content.estimateFactors;

  // 6. 상담 전 체크리스트
  const checkListItems = [
    "지역",
    isMoving ? "이사 일정" : "입주일",
    "평수",
    "집 형태",
    "신축/구축 여부",
    "사진 2~3장"
  ];

  // 7. FAQ 데이터 - 첫 번째 FAQ에 지역명 및 작업명이 포함되도록 조율
  const faqList = content.faqItems.map((faq, idx) => {
    let questionText = faq.q.replace(/\{\{지역명\}\}/g, regionName);
    let answerText = faq.a.replace(/\{\{지역명\}\}/g, regionName);

    if (idx === 0) {
      if (!questionText.includes(regionName)) {
        questionText = `${regionName} ${questionText}`;
      }
      if (!questionText.includes(workName)) {
        questionText = questionText.replace('청소', workName);
      }
    }

    return { q: questionText, a: answerText };
  });

  return (
    <div className={styles.wrapper}>
      {/* 글로벌 레이아웃 헤더 중복 차단 및 섹션 ID 스크롤 패딩 제어 style */}
      <style jsx global>{`
        #global-header-wrapper {
          display: none !important;
        }
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }
        .pc-br { display: block; }
        .mo-badge-text { display: none; }
        .pc-badge-text { display: inline; }
        .pc-checkpoint { display: flex; }
        
        /* Hero 텍스트 영역 가독성 보강 다크 필터 */
        .move-in-hero-overlay {
          background: linear-gradient(90deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.55) 45%, rgba(15, 23, 42, 0.15) 100%);
        }
        
        .cta-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #2563eb;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
          margin-right: 12px;
        }
        .cta-primary-btn:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
        }
        .cta-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .cta-secondary-btn:hover {
          background-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        /* 작업 범위 섹션 레이아웃 및 디코레이션 정의 */
        .service-guide-section {
          padding: 6rem 0;
          border-top: 1px solid #1e293b;
        }
        
        .guide-section-badge {
          display: inline-block;
          background-color: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
          padding: 5px 12px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.2px;
        }

        .guide-section-title {
          font-size: clamp(24px, 4.5vw, 36px);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.8px;
          margin-bottom: 15px;
        }

        .guide-section-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          max-width: 800px;
          margin: 10px auto 0 auto;
          letter-spacing: -0.3px;
        }

        .highlight-text {
          color: #2563eb;
          font-weight: 700;
        }

        .guide-bottom-content {
          margin-top: 3.5rem;
          text-align: center;
        }

        .guide-bottom-notice {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 5px;
        }

        /* 단일 마크업 기반 작업 범위 카드 CSS */
        .cleaning-cards-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
        }

        .cleaning-guide-card {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(8px);
          padding: 2.2rem 1.8rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 260px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cleaning-guide-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.22);
        }

        .cleaning-guide-card .card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.8rem;
          border-left: 3px solid #2563eb;
          padding-left: 10px;
        }

        .cleaning-guide-card .card-desc {
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.55;
          letter-spacing: -0.1px;
        }

        .cleaning-guide-card .card-tag-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          border-top: 1px solid #f1f5f9;
          padding-top: 1.2rem;
          margin-top: 1rem;
        }

        .cleaning-guide-card .card-tag {
          font-size: 0.78rem;
          color: #2563eb;
          background-color: #eff6ff;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        .highlight-blue {
          color: #1d4ed8;
          font-weight: 700;
        }

        /* 단일 마크업 기반 체크포인트 카드 CSS */
        .type-cards-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .type-card-item {
          background: #ffffff;
          border-top: 4px solid #2563eb;
          padding: 2rem 1.8rem;
          box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.05);
          border-radius: 0 0 12px 12px;
          border-left: 1px solid #e2e8f0;
          border-right: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
        }

        .type-card-title {
          font-size: 1.2rem;
          font-weight: '800';
          color: #0f172a;
          margin: 0 0 0.8rem 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .type-card-check {
          color: #2563eb;
          font-size: 1.1rem;
        }

        .type-card-desc {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
          word-break: keep-all;
        }

        /* 단일 마크업 기반 진행 과정 타임라인 CSS */
        .timeline-wrapper-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
          position: relative;
        }

        .timeline-step-node {
          position: relative;
          text-align: center;
          padding: 0 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-step-line {
          position: absolute;
          top: 20px;
          left: calc(50% + 20px);
          width: calc(100% - 40px);
          height: 2px;
          background-color: #e2e8f0;
          z-index: 1;
        }

        .step-node-badge {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #eff6ff;
          color: #2563eb;
          border: 2px solid #bfdbfe;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 15px;
          margin-bottom: 1.2rem;
          position: relative;
          z-index: 2;
        }

        .step-node-title {
          font-size: 1.125rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.6rem 0;
        }

        .step-node-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.55;
          word-break: keep-all;
          margin: 0;
        }

        @media (min-width: 1025px) {
          .service-guide-section {
            background: linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), url('/images/services/move-in-guide-bg.jpg') no-repeat center center/cover;
          }
          .guide-section-badge {
            background-color: rgba(255, 255, 255, 0.15);
            color: #93c5fd;
            border: 1px solid rgba(255, 255, 255, 0.25);
          }
          .guide-section-title {
            color: #ffffff;
          }
          .guide-section-desc {
            color: #cbd5e1;
          }
          .highlight-text {
            color: #60a5fa;
          }
          .guide-bottom-notice {
            color: #94a3b8;
          }
        }

        @media (max-width: 1024px) {
          .cleaning-cards-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .type-cards-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
          .service-guide-section {
            background: #f6f8fb;
            padding: 4rem 0;
          }
          .guide-section-title {
            color: #0f172a;
          }
          .guide-section-desc {
            color: #475569;
          }
          .highlight-text {
            color: #2563eb;
          }
        }

        @media (max-width: 768px) {
          .pc-br { display: none; }
          .pc-checkpoint { display: none !important; }
          .move-in-hero-section {
            min-height: 520px !important;
            height: clamp(520px, 60vh, 580px) !important;
            background-position: 58% center !important;
          }
          .move-in-hero-overlay {
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.85) 100%) !important;
          }
          .move-in-hero-content {
            padding: 0 4px;
          }
          .hero-cta-wrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .cta-primary-btn {
            width: 100%;
            max-width: 300px;
            margin-right: 0;
            padding: 14px 20px;
            font-size: 15px;
          }
          .cta-secondary-btn {
            display: none !important;
          }
          
          /* 모바일 작업범위 카드 조절 */
          .cleaning-cards-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
            margin-top: 2rem;
            padding: 0 4px;
          }
          .cleaning-guide-card {
            padding: 1.2rem 1rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            height: 145px;
            min-height: auto;
          }
          .cleaning-guide-card .pc-card-title-text {
            display: none !important;
          }
          .cleaning-guide-card .mo-card-title-text {
            display: inline !important;
          }
          .cleaning-guide-card .card-title {
            font-size: 1rem;
            margin: 0 0 6px 0;
            border-left: 3px solid #2563eb;
            padding-left: 6px;
          }
          .cleaning-guide-card .pc-card-desc-text {
            display: none !important;
          }
          .cleaning-guide-card .mo-card-desc-text {
            display: inline !important;
          }
          .cleaning-guide-card .card-desc {
            font-size: 0.82rem;
            line-height: 1.4;
            margin: 0 0 8px 0;
            flex-grow: 1;
          }
          .cleaning-guide-card .card-tag-wrapper {
            gap: 0.3rem;
            border-top: 1px solid #f1f5f9;
            padding-top: 6px;
            margin-top: 0;
          }
          .cleaning-guide-card .card-tag {
            font-size: 0.72rem;
            padding: 2px 6px;
            border-radius: 3px;
            white-space: nowrap;
          }
          .cleaning-guide-card .card-tag:nth-child(n+3) {
            display: none !important; /* 모바일에서 태그 최대 2개(3번째부터 숨김) */
          }
          .guide-bottom-content {
            margin-top: 2rem;
          }

          /* 모바일 체크포인트 조절 */
          .type-cards-wrapper {
            grid-template-columns: 1fr;
            gap: 0.8rem;
            padding: 0 4px;
          }
          .type-card-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 1.2rem 1rem;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
            border-top: 1px solid #e2e8f0;
          }
          .type-card-title {
            font-size: 0.98rem;
            font-weight: 800;
            margin: 0;
            flex-shrink: 0;
          }
          .type-card-desc {
            font-size: 0.85rem;
            line-height: 1.4;
          }
          .mo-bottom-type-chip {
            padding: 5px 12px !important;
            font-size: 12px !important;
          }

          /* 모바일 진행 과정 세로 전환 */
          .timeline-wrapper-container {
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
            margin-top: 2.5rem;
            padding: 0 10px;
          }
          .timeline-step-node {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            gap: 15px;
            padding: 0;
          }
          .timeline-step-line {
            top: 32px;
            left: 16px;
            width: 2px;
            height: calc(100% + 0.6rem);
            background-color: #e2e8f0;
          }
          .step-badge-col {
            position: relative;
            z-index: 2;
          }
          .step-node-badge {
            width: 32px;
            height: 32px;
            font-size: 13px;
            margin-bottom: 0;
          }
          .step-content-col {
            padding-top: 3px;
          }
          .step-node-title {
            font-size: 1rem;
            margin: 0 0 4px 0;
          }
          .step-node-desc {
            font-size: 0.85rem;
            line-height: 1.45;
          }
        }

        /* 입주청소 주요 작업 예시 정적 그리드 CSS */
        .cleaning-point-section {
          padding: 80px 0 !important;
          background: linear-gradient(180deg, #F2FAFF 0%, #E8F5FF 100%);
          border-top: 1px solid #dbeafe;
          border-bottom: 1px solid #dbeafe;
        }
        .cleaning-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr); /* 1200px 이상에서는 5열 배치 */
          gap: 20px; /* 5열 배치에 따라 간격을 약간 축소하여 핏 조절 */
          margin-top: 40px;
        }
        .cleaning-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(255,255,255,0.8);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          transition: transform 0.25s ease;
        }
        .cleaning-card:hover {
          transform: translateY(-5px);
        }
        .card-image-frame {
          width: 100%;
          aspect-ratio: 4 / 3; /* PC 고정 비율 */
          overflow: hidden;
          background: #f4f7fb;
          position: relative;
        }
        .card-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }
        .card-body {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
        }
        .card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
          line-height: 1.4;
        }
        .card-desc {
          font-size: 0.92rem;
          color: #64748b;
          margin: 0 0 16px 0;
          line-height: 1.5;
          word-break: keep-all;
        }
        .card-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .card-tag {
          font-size: 0.78rem;
          color: #2563eb;
          background-color: #eff6ff;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 600;
        }
        .cleaning-bottom-cta {
          margin-top: 3.5rem;
          text-align: center;
        }
        .cleaning-bottom-cta p {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          margin: 0 0 12px 0;
        }
        .cleaning-sub-cta {
          display: inline-block;
          font-size: 15px;
          color: #1e3a8a;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 2px solid #1e3a8a;
          padding-bottom: 2px;
          transition: all 0.2s ease;
        }
        .cleaning-sub-cta:hover {
          color: #2563eb;
          border-color: #2563eb;
        }

        /* 모바일 카루셀 뷰포트 (기본 PC는 미사용) */
        .cleaning-slider-viewport {
          display: none;
        }
        .cleaning-dot-pagination {
          display: none;
        }

        @media (max-width: 1199px) and (min-width: 768px) {
          .cleaning-grid {
            grid-template-columns: repeat(2, 1fr); /* 768px~1199px 범위에서는 2x2 그리드 */
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .cleaning-point-section {
            padding: 56px 0 !important;
          }
          .cleaning-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 16px !important;
            padding: 10px 16px 24px 16px !important;
            margin-left: -20px !important;
            margin-right: -20px !important;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          /* 스크롤바 숨기기 */
          .cleaning-grid::-webkit-scrollbar {
            display: none;
          }
          .cleaning-grid {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .cleaning-card {
            flex-shrink: 0 !important;
            width: 280px !important;
            scroll-snap-align: center !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
          }
          
          .card-image-frame {
            aspect-ratio: 4 / 3 !important;
          }
          
          .card-body {
            padding: 16px !important;
          }
          
          .card-title {
            font-size: 1.05rem !important;
          }
          
          .card-desc {
            font-size: 0.85rem !important;
            margin-bottom: 12px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>

      {/* 간결화된 입주청소 전용 헤더 (작업범위, 진행과정, 견적기준, 자주묻는질문 메뉴 포함) */}
      <Header isMoveInOnly={true} />

      {/* Hero Section */}
      <section 
        className="move-in-hero-section"
        style={{ 
          position: 'relative',
          minHeight: '620px',
          height: 'clamp(620px, 70vh, 680px)',
          display: 'flex',
          alignItems: 'center',
          background: "url('/images/services/move-in-hero.jpg') no-repeat center right/cover",
          color: 'white',
          overflow: 'hidden'
        }}
      >
        {/* PC 좌측 텍스트 가독성을 위한 그라데이션 오버레이 */}
        <div 
          className="move-in-hero-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
        ></div>

        <div className={styles.inner} style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 20px' }}>
          <div className="animate-fade-up move-in-hero-content" style={{ maxWidth: '640px', textAlign: 'left' }}>
            
            {/* 상단 배지 */}
            <div className="hero-badge" style={{ display: 'inline-block', backgroundColor: '#3b82f6', color: '#ffffff', padding: '6px 14px', borderRadius: '50px', fontSize: '14px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.3px' }}>
              {activeConfig.heroBadge}
            </div>

            {/* H1 */}
            <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(34px, 5.5vw, 54px)', lineHeight: '1.2', fontWeight: 800, color: '#ffffff', margin: '0 0 18px 0', letterSpacing: '-1px' }}>
              {activeConfig.heroTitle}
            </h1>

            {/* 메인 문구 */}
            <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: '#ffffff', lineHeight: '1.35', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>
              <span style={{ color: '#fed7aa' }}>{activeConfig.heroMainText}</span>,<br />
              <span style={{ color: '#60a5fa' }}>욕실·주방·베란다</span>까지 확인합니다
            </p>

            {/* 보조 문구 */}
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 28px 0', letterSpacing: '-0.2px' }}>
              {activeConfig.heroSubText}
            </p>

            {/* 체크포인트 */}
            <div className="hero-checkpoints" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 25px', marginBottom: '35px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>
                <span style={{ color: '#60a5fa' }}>✓</span> {activeConfig.heroCheckDate}
              </div>
              <div className="pc-checkpoint" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>
                <span style={{ color: '#60a5fa' }}>✓</span> 빈집 상태 작업 권장
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>
                <span style={{ color: '#60a5fa' }}>✓</span> 사진 기반 견적 안내
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="hero-cta-wrapper">
              <a href={`tel:${CONTACT_PHONE}`} className="cta-primary-btn">
                전화 견적 상담
              </a>
              <a href={CONTACT_KAKAOTALK} target="_blank" rel="noopener noreferrer" className="cta-secondary-btn">
                {activeConfig.processCtaLinkText}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 1. 입주 전 청소가 필요한 이유 Section */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>{isMoving ? 'Why Moving Cleaning?' : 'Why Move-in Cleaning?'}</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: '1.3', whiteSpace: 'pre-line' }}>
              {activeConfig.whySectionTitle}
            </h2>
            <p className={styles.sectionDesc} style={{ marginTop: '1rem', color: '#475569', fontSize: '1.025rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto 0 auto' }}>
              {activeConfig.whySectionDesc}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {whyReasons.map((item, idx) => {
              const cleanWhyAlt = `${regionName} ${workName} ${item.title}`;
              return (
                <div key={idx} style={{ background: '#f8fafc', overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                  {item.img ? (
                    <div style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
                      <img src={item.img} alt={cleanWhyAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div style={{ width: '100%', height: '180px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#94a3b8' }}>
                      📅
                    </div>
                  )}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#0070f3' }}>✔</span> {item.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. 입주청소 작업 범위 - 4카드 Section */}
      <section 
        id="service-guide"
        className="service-guide-section"
      >
        <div className={styles.inner}>

          {/* 지역별 고유 설명 문단 배치 (Hero 바로 아래이자 작업 범위 섹션 상단) */}
          <div className="region-specific-intro" style={{ marginBottom: '3.5rem', background: '#f8fafc', padding: '1.8rem 2.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'left', display: ['seoul', 'incheon', 'gyeonggi'].includes(regionObj?.citySlug) ? 'block' : 'none' }}>
            <p style={{ fontSize: '1.025rem', lineHeight: '1.7', color: '#334155', margin: 0, fontWeight: '500', wordBreak: 'keep-all' }}>
              {(() => {
                const isDistrictLevel = regionObj?.regionType === 'district' || regionObj?.subDistrict === '전지역';

                if (isMoving) {
                  // 이사청소 문단
                  return `${regionName} 이사청소는 이사일, 짐 유무, 오염 상태에 따라 작업 범위가 달라질 수 있습니다. 욕실 물때, 주방 생활오염, 바닥 잔먼지, 베란다·창틀 먼지처럼 이사 전후 확인이 필요한 구간을 먼저 점검하는 것이 좋습니다.`;
                } else {
                  // 입주청소 문단
                  return `${regionName} 입주청소는 입주일과 집 상태에 따라 작업 범위가 달라질 수 있습니다. 입주 전 욕실, 주방, 베란다·창틀, 신축 분진처럼 짐이 들어온 뒤 직접 정리하기 번거로운 구간을 먼저 확인하는 것이 좋습니다.`;
                }
              })()}
            </p>
          </div>
          
          {/* 섹션 상단 헤더 */}
          <div className={styles.sectionHeader}>
            <span className="guide-section-badge">{workName} 검수 포인트</span>
            <h2 className="guide-section-title">
              {activeConfig.guideSectionTitle}
            </h2>
            <p className="guide-section-desc">
              {isMoving ? '이사' : '입주'} 전후 가장 많이 확인하는 <span className="highlight-text">욕실·주방·베란다·생활 오염</span>을 중심으로 청소합니다.
            </p>
          </div>

          {/* 단일 마크업 기반 4개 카드 그리드 레이아웃 (CSS media query로만 크기/배치 분기 처리) */}
          <div className="cleaning-cards-container">
            {serviceCards.map((card, idx) => (
              <div key={idx} className="cleaning-guide-card">
                <div className="card-top-content">
                  <h3 className="card-title">
                    <span>{card.title}</span>
                  </h3>
                  <p className="card-desc">
                    <span>{card.desc}</span>
                  </p>
                </div>
                <div className="card-tag-wrapper">
                  {card.details.map((detail, dIdx) => (
                    <span key={dIdx} className="card-tag">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 하단 설명 및 단일 CTA */}
          <div className="guide-bottom-content">
            <p className="guide-bottom-notice">
              {isMoving ? '이사일' : '입주일'}, 평수, 오염 상태에 따라 작업 범위가 달라질 수 있습니다.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ minWidth: '260px', textAlign: 'center', boxShadow: '0 4px 14px 0 rgba(0, 112, 243, 0.3)' }}>
                {workName} 작업 범위 상담
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. 현장 유형별 대응 Section */}
      <section 
        className="building-types-section"
        style={{ 
          padding: '5rem 0', 
          background: '#f0f7ff', 
          borderTop: '1px solid #dbeafe',
          borderBottom: '1px solid #dbeafe'
        }}
      >
        <div className={styles.inner}>
          
          {/* 섹션 상단 헤더 */}
          <div className={styles.sectionHeader} style={{ marginBottom: '3rem' }}>
            <span className="type-section-badge" style={{ display: 'inline-block', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd', padding: '5px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
              현장별 체크 포인트
            </span>
            
            {/* PC 타이틀 / 모바일 타이틀 분기 */}
            <h2 className="guide-section-title" style={{ fontSize: 'clamp(24px, 4.5vw, 32px)', fontWeight: 800, color: '#0f172a' }}>
              우리 집 상태에 따라<br />먼저 봐야 할 곳이 다릅니다
            </h2>

            {/* PC/MO 통합 보조문구 */}
            <p className="type-section-desc" style={{ fontSize: '1.025rem', color: '#475569', lineHeight: '1.6', maxWidth: '800px', margin: '10px auto 0 auto' }}>
              신축은 <span className="highlight-blue">공사 분진</span>, 구축은 <span className="highlight-blue">생활오염</span>, 인테리어 후 입주는 <span className="highlight-blue">잔먼지와 자국</span>을 중심으로 확인합니다.
            </p>
          </div>

          {/* 단일 마크업 기반 3대 카드 가로/세로 레이아웃 (CSS media query로 제어) */}
          <div className="type-cards-wrapper">
            {buildingTypes.map((item, idx) => (
              <div key={idx} className="type-card-item">
                <h3 className="type-card-title">
                  <span className="type-card-check">✓</span> {item.type}
                </h3>
                <p className="type-card-desc">
                  {item.desc.split(' · ').map((word, wIdx) => {
                    const isKeyword = ["공사 분진", "욕실 물때", "주방 기름때", "전 세입자 흔적", "목공 분진", "페인트 자국", "바닥 잔먼지", "수납장 내부"].includes(word);
                    return (
                      <span key={wIdx}>
                        {wIdx > 0 && ' · '}
                        <span style={isKeyword ? { color: '#1e3a8a', fontWeight: '700' } : {}}>{word}</span>
                      </span>
                    );
                  })}
                </p>
              </div>
            ))}
          </div>

          {/* 보조 유형 처리 (작은 칩/한 줄 설명) */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <span className="mo-bottom-type-chip" style={{ display: 'inline-block', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '50px', border: '1px solid #bae6fd' }}>
              오피스텔 · 빌라 · 전세/월세 입주도 상담 가능합니다.
            </span>
          </div>

        </div>
      </section>

      {/* 4. 입주청소 진행 과정 Section */}
      <section 
        id="process-flow"
        className="process-flow-section"
        style={{ 
          padding: '5rem 0', 
          background: '#ffffff', 
          borderTop: '1px solid #f1f5f9' 
        }}
      >
        <div className={styles.inner}>
          
          {/* 섹션 상단 헤더 */}
          <div className={styles.sectionHeader} style={{ marginBottom: '3.5rem' }}>
            <span className="process-badge" style={{ display: 'inline-block', backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0', padding: '5px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '700', marginBottom: '12px', letterSpacing: '0.5px' }}>
              PROCESS FLOW
            </span>
            <h2 className="guide-section-title" style={{ fontSize: 'clamp(24px, 4.5vw, 32px)', fontWeight: 800, color: '#0f172a', whiteSpace: 'pre-line' }}>
              {activeConfig.processTitle}
            </h2>
            <p className="process-desc" style={{ fontSize: '1.025rem', color: '#475569', lineHeight: '1.65', maxWidth: '800px', margin: '10px auto 0 auto', letterSpacing: '-0.3px' }}>
              {activeConfig.processDesc}
            </p>
          </div>

          {/* 단일 마크업 기반 타임라인 4단계 노드 (CSS flex-direction으로 가로/세로 레이아웃 변경) */}
          <div className="timeline-wrapper-container">
            {processSteps.map((step, idx) => (
              <div key={idx} className="timeline-step-node">
                {idx < processSteps.length - 1 && <div className="timeline-step-line"></div>}
                <div className="step-badge-col">
                  <div className="step-node-badge">{step.num}</div>
                </div>
                <div className="step-content-col">
                  <h3 className="step-node-title">{step.title}</h3>
                  <p className="step-node-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 하단 안내 문구 및 텍스트 링크 */}
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', margin: '0 0 10px 0' }}>
              {activeConfig.processDateText}
            </p>
            <a href={`tel:${CONTACT_PHONE}`} style={{ fontSize: '14px', color: '#2563eb', fontWeight: '700', textDecoration: 'underline' }}>
              실시간 예약 가능 일정 문의하기 ➔
            </a>
          </div>

        </div>
      </section>

      {/* 5. 입주청소 주요 작업 예시 Section (정적 그리드 + 모바일 카루셀 융합) */}
      <section className="cleaning-point-section">
        <div className={styles.inner}>
          
          {/* 섹션 헤더 */}
          <div className={styles.sectionHeader} style={{ marginBottom: '2.5rem' }}>
            <span className="portfolio-section-badge" style={{ display: 'inline-block', backgroundColor: '#ffffff', color: '#1d4ed8', border: '1px solid #bfdbfe', padding: '5px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '700', marginBottom: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              CLEANING POINT
            </span>
            <h2 className="guide-section-title" style={{ fontSize: 'clamp(24px, 4.5vw, 32px)', fontWeight: 800, color: '#0f172a', whiteSpace: 'pre-line' }}>
              {activeConfig.portfolioTitle}
            </h2>
            
            <p className="portfolio-desc" style={{ fontSize: '1.025rem', color: '#475569', lineHeight: '1.6', maxWidth: '800px', margin: '10px auto 0 auto', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
              {activeConfig.portfolioDesc}
            </p>
          </div>

          {/* 단일 마크업 기반 카드 그리드 & 모바일 가로 스크롤 스냅 레이아웃 (CSS media query로 제어) */}
          <div className="cleaning-grid">
            {staticCleaningPoints.map((point, idx) => {
              // alt 규칙: {{지역명}} {{작업명}} {{이미지 내용}}
              const imageContent = point.title.includes('확인') ? '확인 상태 예시' : `${point.title} 상태 예시`;
              const cleanAlt = `${regionName} ${workName} ${imageContent}`;

              return (
                <div key={idx} className="cleaning-card">
                  <div className="card-image-frame">
                    <img src={point.img} alt={cleanAlt} />
                  </div>
                  <div className="card-body">
                    <div>
                      <h3 className="card-title">{point.title}</h3>
                      <p className="card-desc">{point.description}</p>
                    </div>
                    <div className="card-tags">
                      {point.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="card-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 하단 안내 및 낮은 위계의 텍스트 CTA */}
          <div className="cleaning-bottom-cta">
            <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', margin: '0 0 12px 0' }}>
              {isMoving ? '이사일' : '입주일'}, 평수, 오염 상태에 따라 작업 범위와 견적이 달라질 수 있습니다.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href={`tel:${CONTACT_PHONE}`} className="cleaning-sub-cta">
                우리 집 상태도 상담하기 ➔
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 6. 견적 기준 & 상담 전 체크리스트 Section */}
      <section id="estimate-standard" style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Estimate & Check</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: '1.3' }}>
              {regionName} {workName}가 필요하신가요?
            </h2>
            <p style={{ color: '#64748b', marginTop: '1rem', fontSize: '1.05rem', fontWeight: '500' }}>
              {isMoving 
                ? '이사일, 짐 유무, 집 상태를 기준으로 가능 일정과 작업 범위를 안내합니다.'
                : '입주일, 평수, 오염 상태를 기준으로 작업 가능 여부를 확인해드립니다.'
              }
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {/* 견적 기준 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid #0070f3', paddingBottom: '0.6rem' }}>
                주요 견적 요소
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {estimateFactors.map((factor, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.025rem', fontWeight: '500' }}>
                    <span style={{ color: '#0070f3', fontWeight: 'bold' }}>✔</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            {/* 상담 전 체크리스트 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid #0070f3', paddingBottom: '0.6rem' }}>
                상담 전, 이 정보만 알려주시면 견적이 빨라집니다
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {checkListItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.025rem', fontWeight: '500' }}>
                    <span style={{ color: '#0070f3', fontWeight: 'bold' }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ minWidth: '240px', textAlign: 'center' }}>
              📞 사진 보내고 견적 확인
            </a>
            <a href={CONTACT_KAKAOTALK} target="_blank" rel="noopener noreferrer" className={`${styles.ctaBtn} ${styles.kakao}`} style={{ minWidth: '240px', textAlign: 'center' }}>
              💬 오염 상태 기준 견적 문의
            </a>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className={styles.faq} style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
          </div>
          <div className={styles.faqList} style={{ marginTop: '2rem' }}>
            {faqList.map((faq, index) => (
              <div key={index} className={styles.faqItem} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1.8rem 2rem' }}>
                <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.6rem' }}>Q. {faq.q}</h4>
                <p style={{ color: '#475569', margin: 0 }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.5. Related Services Section - FAQ 아래, 하단 CTA 위에 배치 */}
      <section style={{ padding: '4rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
            {regionName} 함께 확인하면 좋은 청소
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem 1.2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {(() => {
              const citySlug = regionObj?.citySlug || regionObj?.regionSlug || 'seoul';
              const districtSlug = regionObj?.districtSlug || 'all';
              const subDistrictSlug = regionObj?.subDistrictSlug || 'all';

              const pathPrefix = subDistrictSlug && subDistrictSlug !== 'all'
                ? `/${citySlug}/${districtSlug}/${subDistrictSlug}`
                : `/${citySlug}/${districtSlug}`;

              // 입주청소 페이지 -> 이사청소, 인테리어 후 청소, 준공청소, 바닥청소
              // 이사청소 페이지 -> 입주청소, 바닥청소, 유리창청소, 인테리어 후 청소
              const relatedList = isMoving
                ? [
                    { name: '입주청소', slug: 'move-in-cleaning' },
                    { name: '바닥청소', slug: 'floor-cleaning' },
                    { name: '유리창청소', slug: 'window-cleaning' },
                    { name: '인테리어 후 청소', slug: 'interior-post-cleaning' }
                  ]
                : [
                    { name: '이사청소', slug: 'moving-cleaning' },
                    { name: '인테리어 후 청소', slug: 'interior-post-cleaning' },
                    { name: '준공청소', slug: 'construction-completion-cleaning' },
                    { name: '바닥청소', slug: 'floor-cleaning' }
                  ];

              return relatedList.map((item, idx) => {
                const isActive = item.slug === currentService.serviceSlug;
                const linkHref = `${pathPrefix}/${item.slug}`;

                if (isActive) {
                  return (
                    <span 
                      key={idx} 
                      style={{ padding: '6px 14px', borderRadius: '30px', background: '#e2e8f0', color: '#64748b', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid #cbd5e1', cursor: 'default' }}
                    >
                      {regionName} {item.name}
                    </span>
                  );
                }

                return (
                  <Link 
                    key={idx} 
                    href={linkHref}
                    style={{ padding: '6px 14px', borderRadius: '30px', background: '#ffffff', color: '#0070f3', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid #0070f3', textDecoration: 'none', transition: 'all 0.2s' }}
                  >
                    {regionName} {item.name}
                  </Link>
                );
              });
            })()}
          </div>
          
          {/* 입주/이사청소 상호 보완 하단 텍스트 링크 보강 */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px dashed #e2e8f0' }}>
            {(() => {
              const citySlug = regionObj?.citySlug || regionObj?.regionSlug || 'seoul';
              const districtSlug = regionObj?.districtSlug || 'all';
              const subDistrictSlug = regionObj?.subDistrictSlug || 'all';

              const pathPrefix = subDistrictSlug && subDistrictSlug !== 'all'
                ? `/${citySlug}/${districtSlug}/${subDistrictSlug}`
                : `/${citySlug}/${districtSlug}`;

              const crossSlug = isMoving ? 'move-in-cleaning' : 'moving-cleaning';
              const crossName = isMoving ? '입주청소' : '이사청소';
              const crossUrl = `${pathPrefix}/${crossSlug}`;

              return (
                <Link 
                  href={crossUrl}
                  style={{ fontSize: '1.05rem', color: '#0070f3', fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  {regionName} {crossName}도 함께 확인하세요.
                </Link>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 9. 하단 CTA 및 주변 지역 링크 안내 */}
      <section style={{ padding: '50px 20px', backgroundColor: '#f0f7ff', borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
            {activeConfig.footerCtaTitle}
          </h2>
          <p style={{ fontSize: '15px', color: '#475569', marginBottom: '25px' }}>
            {activeConfig.footerCtaDesc}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ minWidth: '220px', textAlign: 'center' }}>
              전화 견적 상담
            </a>
            <a href={CONTACT_KAKAOTALK} target="_blank" rel="noopener noreferrer" className={`${styles.ctaBtn} ${styles.kakao}`} style={{ minWidth: '220px', textAlign: 'center' }}>
              우리 집 상태도 상담하기
            </a>
          </div>

          <h3 style={{ fontSize: '15px', color: '#555', marginBottom: '15px', fontWeight: 'bold' }}>{parentRegion} 주변 지역 입주청소 및 이사청소 안내</h3>
          <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.8', marginBottom: '20px', wordBreak: 'keep-all' }}>
            {BRAND_NAME}은 {regionName} 지역의 일반 입주청소, 신축 아파트 준공청소, 원룸 이사청소, 인테리어 후 청소 등 주거 공간 맞춤 클리닝을 안내합니다. 
            인근 행정 구역의 세부 작업 내용이 필요하시다면 아래 링크를 참고하여 정밀한 상태별 솔루션을 안내받아 보세요.
          </p>
          {regionObj?.relatedAreaLinks && regionObj.relatedAreaLinks.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              {regionObj.relatedAreaLinks.map((link: any, index: number) => {
                const targetSlug = isMoving ? 'moving-cleaning' : 'move-in-cleaning';
                const relatedUrl = link.url.includes('/move-in-cleaning') || link.url.includes('/moving-cleaning')
                  ? link.url.replace(/move-in-cleaning|moving-cleaning/, targetSlug)
                  : `${link.url}/${targetSlug}`;
                return (
                  <Link 
                    key={index} 
                    href={relatedUrl} 
                    style={{ fontSize: '12px', padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', color: '#555', textDecoration: 'none' }}
                  >
                    {link.name.replace('청소', workName)}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <FloatingContact />
    </div>
  );
}
