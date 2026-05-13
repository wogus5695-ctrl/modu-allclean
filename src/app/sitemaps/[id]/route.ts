import { NextResponse } from 'next/server';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import { DOMAIN, INDEXED_DONG_COMBINATIONS } from '@/lib/seo';
import { generateSitemapXml } from '@/lib/sitemap-utils';

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;
  const fileName = id.replace('.xml', '');
  
  let urls: any[] = [];

  if (fileName === 'sitemap-main') {
    // 메인 페이지 + 구 단위 지역+작업명 36개
    urls.push({ url: DOMAIN, priority: 1, changeFrequency: 'daily' });
    urls.push({ url: `${DOMAIN}/sitemap-seoul`, priority: 0.9, changeFrequency: 'weekly' });
    
    regions.filter(r => r.subDistrictSlug === 'all').forEach(region => {
      services.filter(s => s.indexStatus === 'index').forEach(service => {
        urls.push({
          url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
          priority: 0.7,
          changeFrequency: 'weekly'
        });
      });
    });
  } 
  
  else if (fileName === 'sitemap-service') {
    // 서비스 상세 페이지 9개
    services.filter(s => s.indexStatus === 'index').forEach(service => {
      urls.push({
        url: `${DOMAIN}/service/${service.serviceSlug}`,
        priority: 0.9,
        changeFrequency: 'weekly'
      });
    });
  }

  else if (fileName === 'sitemap-area') {
    // 지역 허브 페이지 4개
    regions.filter(r => r.subDistrictSlug === 'all' && r.indexStatus === 'index').forEach(region => {
      urls.push({
        url: `${DOMAIN}/area/${region.regionSlug}/${region.districtSlug}`,
        priority: 0.8,
        changeFrequency: 'weekly'
      });
    });
  }

  else if (fileName.startsWith('sitemap-keyword-')) {
    // 키워드 허브 페이지 + 인덱스된 동 단위 페이지
    const districtSlug = fileName.replace('sitemap-keyword-', '');
    const districtRegion = regions.find(r => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
    
    if (districtRegion) {
      // 1. 키워드 허브 추가
      urls.push({
        url: `${DOMAIN}/keyword-hub/${districtRegion.regionSlug}-${districtSlug}`,
        priority: 0.6,
        changeFrequency: 'weekly'
      });

      // 2. 인덱스된 동 단위 조합 추가
      regions.filter(r => r.districtSlug === districtSlug && r.subDistrictSlug !== 'all').forEach(dong => {
        services.forEach(service => {
          const comboKey = `${districtSlug}-${dong.subDistrictSlug}-${service.id}`;
          if (INDEXED_DONG_COMBINATIONS.includes(comboKey)) {
            urls.push({
              url: `${DOMAIN}/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
              priority: 0.5,
              changeFrequency: 'weekly'
            });
          }
        });
      });
    }
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
