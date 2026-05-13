import MainTemplate from '@/components/MainTemplate';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const region = (params.region as string) || '서울·경기';
  const service = (params.service as string) || '종합청소';

  return <MainTemplate region={region} service={service} />;
}
