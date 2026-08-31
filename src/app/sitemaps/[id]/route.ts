import { NextResponse } from 'next/server';
import { services, seoServiceKeywords } from '@/data/services';
import { regions } from '@/data/regions';
import { DOMAIN, INDEXED_DONG_COMBINATIONS } from '@/lib/seo';
import { generateSitemapXml } from '@/lib/sitemap-utils';
import { factoryEnabledCombinations, factoryTargetRegions } from '@/data/seo/factoryActiveCombinations';
import { factoryServices } from '@/data/seo/factoryServices';

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;
  const fileName = id.replace('.xml', '');
  
  let urls: any[] = [];

  if (fileName === 'static') {
    urls.push({ url: DOMAIN, priority: 1.0, changeFrequency: 'daily' });
    urls.push({ url: `${DOMAIN}/sitemap-seoul`, priority: 0.9, changeFrequency: 'weekly' });
    urls.push({ url: `${DOMAIN}/move-in-cleaning/seoul`, priority: 0.9, changeFrequency: 'weekly' });
    
    // 서비스 기본 안내 페이지
    seoServiceKeywords.filter(s => s.indexStatus === 'index').forEach(service => {
      urls.push({
        url: `${DOMAIN}/service/${service.serviceSlug}`,
        priority: 0.9,
        changeFrequency: 'weekly'
      });
    });
  } 
  else if (fileName === 'seoul' || fileName === 'incheon' || fileName === 'gyeonggi') {
    const targetRegionSlug = fileName;

    // 3. 구 단위 + 작업명 조합 (sitemap.xml 에는 index 대표 URL만 포함)
    regions
      .filter(r => r.regionSlug === targetRegionSlug && r.subDistrictSlug === 'all' && r.indexStatus === 'index')
      .forEach(region => {
        seoServiceKeywords.filter(s => s.indexStatus === 'index').forEach(service => {
          const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
          const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
          const isMoveOrMoving = isMoveIn || isMoving;

          // 입주청소 및 이사청소는 수도권 전체(seoul, incheon, gyeonggi) 생성
          if (isMoveOrMoving) {
            if (!['seoul', 'incheon', 'gyeonggi'].includes(region.regionSlug)) return;
          }

          if (region.regionSlug === 'incheon') {
            // 인천은 기존대로 대표 단일 URL 포함
            urls.push({
              url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
              priority: 0.7,
              changeFrequency: 'weekly'
            });
          } else {
            // 서울/경기는 구/시 포함 버전을 대표 index URL로 sitemap.xml에 포함 (제거 버전은 canonical 처리되므로 제외)
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            urls.push({
              url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`,
              priority: 0.7,
              changeFrequency: 'weekly'
            });
          }
        });
      });

    // 4. 동 단위 + 작업명 조합
    regions
      .filter(r => r.regionSlug === targetRegionSlug && r.subDistrictSlug !== 'all' && r.indexStatus === 'index')
      .forEach(dong => {
        const parentRegion = regions.find((r) => r.districtSlug === dong.districtSlug && r.subDistrictSlug === 'all');
        const isParentIndexed = parentRegion ? parentRegion.indexStatus === 'index' : true;
        
        if (isParentIndexed) {
          seoServiceKeywords.filter(s => s.indexStatus === 'index').forEach(service => {
            const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
            const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
            const isMoveOrMoving = isMoveIn || isMoving;

            // 입주청소/이사청소는 수도권 전체(seoul, incheon, gyeonggi) 생성
            if (isMoveOrMoving) {
              if (!['seoul', 'incheon', 'gyeonggi'].includes(dong.regionSlug)) return;
            } else {
              // 일반 서비스의 동 단위 조합은 INDEXED_DONG_COMBINATIONS만 생성
              const combo = `${dong.districtSlug}-${dong.subDistrictSlug}-${service.id}`;
              if (!INDEXED_DONG_COMBINATIONS.includes(combo)) return;
            }

            urls.push({
              url: `${DOMAIN}/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
              priority: 0.5,
              changeFrequency: 'weekly'
            });
          });
        }
      });
  } else if (fileName === 'factory-cleaning') {
    // Factory 전용 사이트맵 생성 (활성화된 조합 factoryEnabledCombinations 만 포함)
    factoryEnabledCombinations.forEach(combo => {
      const [city, district, serviceSlug] = combo.split('/');
      const region = factoryTargetRegions.find(r => r.regionSlug === city && r.districtSlug === district);
      const service = factoryServices.find(s => s.serviceSlug === serviceSlug);

      if (region && service) {
        const suffix = region.district.endsWith('시') ? '-si' : '-gu';
        const urlPath = city === 'incheon'
          ? `${DOMAIN}/${city}/${district}/${serviceSlug}`
          : `${DOMAIN}/${city}/${district}${suffix}/${serviceSlug}`;

        urls.push({
          url: urlPath,
          priority: 0.7,
          changeFrequency: 'weekly'
        });
      }
    });
  }

  if (urls.length === 0) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const xml = generateSitemapXml(urls);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
