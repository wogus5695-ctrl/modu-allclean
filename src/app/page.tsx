import { Metadata } from 'next';
import MainTemplate from '@/components/MainTemplate';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import { getLandingMetadata, getMainMetadata } from '@/lib/seo';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// k 파라미터(슬러그)를 해석하여 적절한 region과 service를 추출하는 함수
function parseK(k: string) {
  // services 목록에서 k의 끝부분과 매칭되는 service를 찾음
  const service = services.find(s => k.endsWith(s.serviceSlug));
  if (!service) return null;

  // k에서 serviceSlug 부분을 잘라냄 (예: "seoul-gangnam-yeoksam-dong")
  const regionPart = k.slice(0, -(service.serviceSlug.length + 1));
  
  const parts = regionPart.split('-');
  if (parts.length < 2) return null;

  const citySlug = parts[0];
  const districtSlug = parts[1];
  const subDistrictSlug = parts.slice(2).join('-');

  // regions 목록에서 해당하는 지역 정보 매칭
  const region = regions.find(r => 
    r.regionSlug === citySlug && 
    r.districtSlug === districtSlug && 
    (subDistrictSlug ? r.subDistrictSlug === subDistrictSlug : r.subDistrictSlug === 'all')
  );

  if (!region) return null;

  return { region, service };
}

// 쿼리 파라미터 k가 존재할 시 타겟화된 키워드 메타데이터 생성
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const k = params.k as string;

  if (k) {
    const parsed = parseK(k);
    if (parsed) {
      const { region, service } = parsed;
      return getLandingMetadata(region.districtSlug, region.subDistrictSlug, service.id);
    }
  }

  return getMainMetadata();
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const k = params.k as string;

  if (k) {
    const parsed = parseK(k);
    if (parsed) {
      const { region, service } = parsed;
      const regionName = region.subDistrict === '전지역' ? region.district : region.subDistrict;

      // Naver SEO를 위한 FAQ 스키마 생성
      const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': service.faq.map(item => ({
          '@type': 'Question',
          'name': item.question.replace('{service}', service.serviceNameKo).replace('{region}', regionName),
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer.replace('{service}', service.serviceNameKo).replace('{region}', regionName)
          }
        }))
      };

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <MainTemplate region={regionName} service={service.serviceNameKo} />
        </>
      );
    }
  }

  const region = (params.region as string) || '서울·경기';
  const service = (params.service as string) || '종합청소';

  return <MainTemplate region={region} service={service} />;
}
