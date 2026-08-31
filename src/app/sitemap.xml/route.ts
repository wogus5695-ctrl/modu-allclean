import { NextResponse } from 'next/server';
import { DOMAIN } from '@/lib/seo';
import { generateSitemapIndexXml } from '@/lib/sitemap-utils';

export const dynamic = 'force-dynamic';

export async function GET() {
  const sitemaps = [
    `${DOMAIN}/sitemaps/static.xml`,
    `${DOMAIN}/sitemaps/seoul.xml`,
    `${DOMAIN}/sitemaps/incheon.xml`,
    `${DOMAIN}/sitemaps/gyeonggi.xml`,
    `${DOMAIN}/sitemaps/factory-cleaning.xml`
  ];

  const xml = generateSitemapIndexXml(sitemaps);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
