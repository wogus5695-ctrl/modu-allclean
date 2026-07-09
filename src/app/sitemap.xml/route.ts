import { NextResponse } from 'next/server';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import { DOMAIN, INDEXED_DONG_COMBINATIONS } from '@/lib/seo';
import { generateSitemapXml } from '@/lib/sitemap-utils';

export const dynamic = 'force-dynamic';

export async function GET() {
  const urls: any[] = [];
  const currentDate = '2026-07-06';

  // 1. 메인 및 허브 페이지
  urls.push({ url: DOMAIN, priority: 1.0, changeFrequency: 'daily', lastModified: currentDate });
  urls.push({ url: `${DOMAIN}/sitemap-seoul`, priority: 0.9, changeFrequency: 'weekly', lastModified: currentDate });
  urls.push({ url: `${DOMAIN}/move-in-cleaning/seoul`, priority: 0.9, changeFrequency: 'weekly', lastModified: currentDate });


  // 2. 서비스 기본 안내 페이지
  services.filter(s => s.indexStatus === 'index').forEach(service => {
    urls.push({
      url: `${DOMAIN}/service/${service.serviceSlug}`,
      priority: 0.9,
      changeFrequency: 'weekly',
      lastModified: currentDate
    });
  });

  // 3. 지역별 키워드 및 랜딩 조합 수집 (구/시 단위 대표 URL만)
  const activeServices = services.filter(s => s.indexStatus === 'index');

  regions
    .filter(r => r.subDistrictSlug === 'all' && r.indexStatus === 'index')
    .forEach(region => {
      // 3-3. 구/시 단위 키워드 조합 (sitemap.xml에는 대표 index URL만 포함)
      activeServices.forEach(service => {
        const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
        const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
        const isMoveOrMoving = isMoveIn || isMoving;

        // 입주청소 및 이사청소는 수도권 전체(seoul, incheon, gyeonggi) 생성 지원
        if (isMoveOrMoving) {
          if (!['seoul', 'incheon', 'gyeonggi'].includes(region.regionSlug)) return;

          if (region.regionSlug === 'incheon') {
            // 인천 구 단위 입주/이사청소 (인천은 접미사 없음)
            urls.push({
              url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
              priority: 0.7,
              changeFrequency: 'weekly',
              lastModified: currentDate
            });
          } else {
            // 서울/경기 구/시 단위 입주/이사청소 (canonical인 접미사 -gu/-si 포함 주소만 sitemap에 등록)
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            urls.push({
              url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`,
              priority: 0.7,
              changeFrequency: 'weekly',
              lastModified: currentDate
            });
          }
          return;
        }

        // 일반 청소 키워드 룰
        if (region.regionSlug === 'incheon') {
          urls.push({
            url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
            priority: 0.7,
            changeFrequency: 'weekly',
            lastModified: currentDate
          });
        } else {
          const suffix = region.district.endsWith('시') ? '-si' : '-gu';
          urls.push({
            url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`,
            priority: 0.7,
            changeFrequency: 'weekly',
            lastModified: currentDate
          });
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
          const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
          const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
          const isMoveOrMoving = isMoveIn || isMoving;

          // 입주청소/이사청소는 수도권 전체(seoul, incheon, gyeonggi) 생성 지원
          if (isMoveOrMoving) {
            if (!['seoul', 'incheon', 'gyeonggi'].includes(dong.regionSlug)) return;
          } else {
            // 일반 서비스의 동 단위 조합은 INDEXED_DONG_COMBINATIONS만 sitemap.xml에 포함
            const combo = `${dong.districtSlug}-${dong.subDistrictSlug}-${service.id}`;
            if (!INDEXED_DONG_COMBINATIONS.includes(combo)) return;
          }

          urls.push({
            url: `${DOMAIN}/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
            priority: 0.5,
            changeFrequency: 'weekly',
            lastModified: currentDate
          });
        });
      }
    });

  const xml = generateSitemapXml(urls);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
