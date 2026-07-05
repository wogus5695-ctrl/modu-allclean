import { NextResponse } from 'next/server';
import { DOMAIN, BRAND_NAME } from '@/lib/seo';
import { regions } from '@/data/regions';
import { services } from '@/data/services';

export async function GET() {
  const items: string[] = [];
  const buildDate = new Date().toUTCString();

  const addRssItem = (title: string, path: string, description: string) => {
    const url = `${DOMAIN}${path}`;
    items.push(`
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${url}</link>
      <description><![CDATA[${description}]]></description>
      <pubDate>${buildDate}</pubDate>
      <guid>${url}</guid>
    </item>`);
  };

  // 1. 메인 및 허브 페이지
  addRssItem(BRAND_NAME, '/', '서울, 인천, 경기 주요 지역 종합청소 상담 및 견적 안내.');
  addRssItem(`${BRAND_NAME} 서비스 키워드 맵`, '/sitemap-seoul', '모두종합환경이 제공하는 서울, 인천, 경기 전역의 지역별 맞춤 청소 솔루션 한눈에 보기.');

  // 2. 서비스 기본 안내 페이지
  services.filter(s => s.indexStatus === 'index').forEach(service => {
    addRssItem(
      `${service.serviceNameKo} 안내 | ${BRAND_NAME}`,
      `/service/${service.serviceSlug}`,
      `${service.serviceNameKo} 서비스에 대한 기본 단가, 시공 방법 및 상세 견적 안내.`
    );
  });

  const activeServices = services.filter(s => s.indexStatus === 'index');

  // 3. 구/시 단위 대표 URL만 수집
  regions
    .filter(r => r.subDistrictSlug === 'all' && r.indexStatus === 'index')
    .forEach(region => {
      activeServices.forEach(service => {
        // 입주청소는 오직 서울(seoul) 지역만 생성
        if (service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning') {
          if (region.regionSlug !== 'seoul') return;
        }

        if (region.regionSlug === 'incheon') {
          // 인천은 대표 단일 URL 포함
          addRssItem(
            `${region.district} ${service.serviceNameKo} 전문 업체 | ${BRAND_NAME}`,
            `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
            `${region.district} 전 지역 ${service.serviceNameKo} 전문 서비스 안내. ${service.shortDescription}`
          );
        } else {
          // 서울/경기는 구/시 포함 버전을 대표 index URL로 포함
          const suffix = region.district.endsWith('시') ? '-si' : '-gu';
          addRssItem(
            `${region.district} ${service.serviceNameKo} 전문 업체 | ${BRAND_NAME}`,
            `/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`,
            `${region.district} 전 지역 ${service.serviceNameKo} 전문 서비스 안내. ${service.shortDescription}`
          );
        }
      });
    });

  // 4. 동 단위 + 작업명 조합
  regions
    .filter(r => r.subDistrictSlug !== 'all' && r.indexStatus === 'index')
    .forEach(dong => {
      const parentRegion = regions.find((r) => r.districtSlug === dong.districtSlug && r.subDistrictSlug === 'all');
      const isParentIndexed = parentRegion ? parentRegion.indexStatus === 'index' : true;
      
      if (isParentIndexed) {
        activeServices.forEach(service => {
          // 입주청소는 오직 서울(seoul) 지역만 생성
          if (service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning') {
            if (dong.regionSlug !== 'seoul') return;
          }

          addRssItem(
            `${dong.district} ${dong.subDistrict} ${service.serviceNameKo} 전문 업체 | ${BRAND_NAME}`,
            `/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
            `${dong.district} ${dong.subDistrict} 전 지역 ${service.serviceNameKo} 전문 서비스 안내. ${service.shortDescription}`
          );
        });
      }
    });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${BRAND_NAME}</title>
    <link>${DOMAIN}/</link>
    <description>서울 주요 지역 종합청소 상담 안내</description>
    <language>ko-KR</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    ${items.join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
