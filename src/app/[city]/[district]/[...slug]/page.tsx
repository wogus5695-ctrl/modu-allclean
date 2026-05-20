import { permanentRedirect } from 'next/navigation';

type Props = {
  params: Promise<{ city: string; district: string; slug: string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const { city, district, slug } = await params;
  const serviceSlug = slug[slug.length - 1];
  const subDistrictSlug = slug.length > 1 ? slug[0] : '';
  
  const k = subDistrictSlug 
    ? `${city}-${district}-${subDistrictSlug}-${serviceSlug}`
    : `${city}-${district}-${serviceSlug}`;

  permanentRedirect(`/?k=${encodeURIComponent(k)}`);
}

export default async function LandingPageRedirect({ params }: Props) {
  const { city, district, slug } = await params;
  const serviceSlug = slug[slug.length - 1];
  const subDistrictSlug = slug.length > 1 ? slug[0] : '';
  
  const k = subDistrictSlug 
    ? `${city}-${district}-${subDistrictSlug}-${serviceSlug}`
    : `${city}-${district}-${serviceSlug}`;

  permanentRedirect(`/?k=${encodeURIComponent(k)}`);
}
