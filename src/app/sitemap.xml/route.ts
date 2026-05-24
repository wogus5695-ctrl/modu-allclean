import { NextResponse } from 'next/server';
import { DOMAIN, INDEXED_DONG_COMBINATIONS } from '@/lib/seo';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import { generateSitemapXml } from '@/lib/sitemap-utils';

export async function GET() {
  const urls: any[] = [];

  // 1. 메인 및 사이트맵 페이지
  urls.push({ url: DOMAIN, priority: 1.0, changeFrequency: 'daily' });
  urls.push({ url: `${DOMAIN}/sitemap-seoul`, priority: 0.9, changeFrequency: 'weekly' });

  // 2. 서비스 상세 페이지 (9개)
  services.filter(s => s.indexStatus === 'index').forEach(service => {
    urls.push({
      url: `${DOMAIN}/service/${service.serviceSlug}`,
      priority: 0.9,
      changeFrequency: 'weekly'
    });
  });

  // 3. 지역 허브 페이지 (4개)
  regions.filter(r => r.subDistrictSlug === 'all' && r.indexStatus === 'index').forEach(region => {
    urls.push({
      url: `${DOMAIN}/area/${region.regionSlug}/${region.districtSlug}`,
      priority: 0.8,
      changeFrequency: 'weekly'
    });
  });

  // 4. 구 단위 키워드 허브 및 구 단위 한글 조합 추가
  regions.filter(r => r.subDistrictSlug === 'all').forEach(region => {
    // 키워드 허브 추가
    urls.push({
      url: `${DOMAIN}/keyword-hub/${region.regionSlug}-${region.districtSlug}`,
      priority: 0.6,
      changeFrequency: 'weekly'
    });

    // 구 단위 영문 슬러그 조합 (Clean URL 형태)
    services.filter(s => s.indexStatus === 'index').forEach(service => {
      urls.push({
        url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
        priority: 0.7,
        changeFrequency: 'weekly'
      });
    });
  });

  // 5. 핵심 동 단위 영문 슬러그 조합 (Clean URL 형태)
  INDEXED_DONG_COMBINATIONS.forEach(combo => {
    const service = services.find(s => combo.endsWith(s.id));
    if (service && service.indexStatus === 'index') {
      const regionPart = combo.slice(0, -(service.id.length + 1));
      const regionParts = regionPart.split('-');
      if (regionParts.length >= 2) {
        const districtSlug = regionParts[0];
        const subDistrictSlug = regionParts.slice(1).join('-');

        const region = regions.find(r => 
          r.districtSlug === districtSlug && 
          r.subDistrictSlug === subDistrictSlug
        );
        if (region) {
          urls.push({
            url: `${DOMAIN}/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`,
            priority: 0.5,
            changeFrequency: 'weekly'
          });
        }
      }
    }
  });

  // 단일 XML 사이트맵 생성
  const xml = generateSitemapXml(urls);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
