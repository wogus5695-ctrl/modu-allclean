import { seoRegions } from './regions';
import { seoServices } from './services';

export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSeoPaths(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  
  for (const region of seoRegions) {
    for (const service of seoServices) {
      entries.push({
        url: `https://modu-clean.com/${region.citySlug}/${region.districtSlug}/${region.neighborhoodSlug}/${service.serviceSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }
  
  return entries;
}
