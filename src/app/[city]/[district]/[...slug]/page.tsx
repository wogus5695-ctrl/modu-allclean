import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { getLandingMetadata } from '@/lib/seo';
import MainTemplate from '@/components/MainTemplate';

type Props = {
  params: Promise<{ city: string; district: string; slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { district, slug } = await params;
  const subDistrictSlug = slug.length > 1 ? slug[0] : 'all';
  const serviceSlug = slug[slug.length - 1];
  const service = services.find((s) => s.serviceSlug === serviceSlug);

  return getLandingMetadata(district, subDistrictSlug, service?.id || '');
}

export default async function LandingPage({ params, searchParams }: Props) {
  const { district, slug } = await params;
  const sParams = await searchParams;
  const subDistrictSlug = slug.length > 1 ? slug[0] : 'all';
  const serviceSlug = slug[slug.length - 1];

  const region = regions.find((r) => r.districtSlug === district && r.subDistrictSlug === subDistrictSlug);
  const service = services.find((s) => s.serviceSlug === serviceSlug);

  if (!region || !service) notFound();

  // URL 파라미터로 전달된 키워드(kw)가 있으면 그것을 최우선으로 사용
  const kw = sParams.kw as string;
  const regionName = kw || (region.subDistrict === '전지역' ? region.district : region.subDistrict);

  return <MainTemplate region={regionName} service={service.serviceNameKo} />;
}

export async function generateStaticParams() {
  const paths: { city: string; district: string; slug: string[] }[] = [];

  const districts = regions.filter(r => r.subDistrictSlug === 'all');
  
  districts.forEach(d => {
    services.filter(s => s.indexStatus === 'index').forEach(s => {
      paths.push({
        city: d.regionSlug,
        district: d.districtSlug,
        slug: [s.serviceSlug]
      });
    });

    const dongs = regions.filter(r => r.districtSlug === d.districtSlug && r.subDistrictSlug !== 'all');
    dongs.forEach(dong => {
      services.forEach(s => {
        paths.push({
          city: dong.regionSlug,
          district: dong.districtSlug,
          slug: [dong.subDistrictSlug, s.serviceSlug]
        });
      });
    });
  });

  return paths;
}
