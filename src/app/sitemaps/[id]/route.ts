import { NextResponse } from 'next/server';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import { DOMAIN } from '@/lib/seo';
import { generateSitemapXml } from '@/lib/sitemap-utils';

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
    
    // 서비스 기본 안내 페이지
    services.filter(s => s.indexStatus === 'index').forEach(service => {
      urls.push({
        url: `${DOMAIN}/service/${service.serviceSlug}`,
        priority: 0.9,
        changeFrequency: 'weekly'
      });
    });
  } 
  else if (fileName === 'seoul' || fileName === 'incheon') {
    const targetRegionSlug = fileName;
    
    // 1. 구 단위 허브 (area)
    regions
      .filter(r => r.regionSlug === targetRegionSlug && r.subDistrictSlug === 'all' && r.indexStatus === 'index')
      .forEach(region => {
        urls.push({
          url: `${DOMAIN}/area/${region.regionSlug}/${region.districtSlug}`,
          priority: 0.8,
          changeFrequency: 'weekly'
        });
      });

    // 2. 구 단위 키워드 허브 (keyword-hub)
    regions
      .filter(r => r.regionSlug === targetRegionSlug && r.subDistrictSlug === 'all' && r.indexStatus === 'index')
      .forEach(region => {
        urls.push({
          url: `${DOMAIN}/keyword-hub/${region.regionSlug}-${region.districtSlug}`,
          priority: 0.6,
          changeFrequency: 'weekly'
        });
      });

    // 3. 구 단위 + 작업명 조합
    regions
      .filter(r => r.regionSlug === targetRegionSlug && r.subDistrictSlug === 'all' && r.indexStatus === 'index')
      .forEach(region => {
        services.filter(s => s.indexStatus === 'index').forEach(service => {
          urls.push({
            url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
            priority: 0.7,
            changeFrequency: 'weekly'
          });
        });
      });

    // 4. 동 단위 + 작업명 조합
    regions
      .filter(r => r.regionSlug === targetRegionSlug && r.subDistrictSlug !== 'all' && r.indexStatus === 'index')
      .forEach(dong => {
        const parentRegion = regions.find((r) => r.districtSlug === dong.districtSlug && r.subDistrictSlug === 'all');
        const isParentIndexed = parentRegion ? parentRegion.indexStatus === 'index' : true;
        
        if (isParentIndexed) {
          services.filter(s => s.indexStatus === 'index').forEach(service => {
            urls.push({
              url: `${DOMAIN}/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
              priority: 0.5,
              changeFrequency: 'weekly'
            });
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
