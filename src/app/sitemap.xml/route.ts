import { NextResponse } from 'next/server';
import { DOMAIN } from '@/lib/seo';
import { generateSitemapIndexXml } from '@/lib/sitemap-utils';

export async function GET() {
  const sitemaps = [
    `${DOMAIN}/sitemaps/sitemap-main.xml`,
    `${DOMAIN}/sitemaps/sitemap-service.xml`,
    `${DOMAIN}/sitemaps/sitemap-area.xml`,
    `${DOMAIN}/sitemaps/sitemap-keyword-gangnam.xml`,
    `${DOMAIN}/sitemaps/sitemap-keyword-seocho.xml`,
    `${DOMAIN}/sitemaps/sitemap-keyword-songpa.xml`,
    `${DOMAIN}/sitemaps/sitemap-keyword-gangdong.xml`,
  ];

  const xml = generateSitemapIndexXml(sitemaps);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
