import { NextResponse } from 'next/server';
import { DOMAIN } from '@/lib/seo';
import { generateSitemapIndexXml } from '@/lib/sitemap-utils';

export async function GET() {
  const districts = [
    'gangnam', 'seocho', 'songpa', 'gangdong', 'yangcheon',
    'gangseo', 'guro', 'geumcheon', 'yeongdeungpo', 'dongjak',
    'gwanak', 'eunpyeong', 'seodaemun', 'mapo', 'seongdong',
    'gwangjin', 'dongdaemun', 'jungnang', 'seongbuk', 'gangbuk',
    'dobong', 'nowon', 'jongno', 'jung-gu', 'yongsan'
  ];

  const sitemaps = [
    `${DOMAIN}/sitemaps/sitemap-main.xml`,
    `${DOMAIN}/sitemaps/sitemap-service.xml`,
    `${DOMAIN}/sitemaps/sitemap-area.xml`,
    ...districts.map(d => `${DOMAIN}/sitemaps/sitemap-keyword-${d}.xml`),
  ];

  const xml = generateSitemapIndexXml(sitemaps);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
