import { NextResponse } from 'next/server';
import { DOMAIN, BRAND_NAME } from '@/lib/seo';
import { regions } from '@/data/regions';
import { services } from '@/data/services';

export const dynamic = 'force-dynamic';

export async function GET() {
  const items: string[] = [];
  const buildDate = new Date().toUTCString();

  const addRssItem = (title: string, path: string, description: string) => {
    const url = `${DOMAIN}${path}`;
    items.push(`
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${url}</link>
      <description><![CDATA[${description}]]></description>
      <pubDate>${buildDate}</pubDate>
      <guid>${url}</guid>
    </item>`);
  };

  // 1. 메인 및 허브 페이지
  addRssItem(BRAND_NAME, '/', '서울, 인천, 경기 주요 지역 종합청소 상담 및 견적 안내.');
  addRssItem(`${BRAND_NAME} 서비스 키워드 맵`, '/sitemap-seoul', `${BRAND_NAME}이 제공하는 서울, 인천, 경기 전역의 지역별 맞춤 청소 솔루션 한눈에 보기.`);
  addRssItem(`수도권 입주청소 지역별 안내 | ${BRAND_NAME}`, '/move-in-cleaning/seoul', '서울, 인천, 경기 구·동·시 단위 입주청소 페이지를 정리했습니다. 각 지역별 욕실, 주방, 베란다·창틀, 분진 오염 등 입주 전 확인이 필요한 공간을 안내합니다.');

  // 2. 서비스 기본 안내 페이지
  services.filter(s => s.indexStatus === 'index').forEach(service => {
    addRssItem(
      `${service.serviceNameKo} 안내 | ${BRAND_NAME}`,
      `/service/${service.serviceSlug}`,
      `${service.serviceNameKo} 서비스에 대한 기본 단가, 시공 방법 및 상세 견적 안내.`
    );
  });

  const activeServices = services.filter(s => s.indexStatus === 'index');

  // 3. 구/시 단위 대표 URL만 수집
  regions
    .filter(r => r.subDistrictSlug === 'all' && r.indexStatus === 'index')
    .forEach(region => {
      activeServices.forEach(service => {
        const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
        const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
        const isMoveOrMoving = isMoveIn || isMoving;
        const workName = isMoveIn ? '입주청소' : '이사청소';

        // 입주청소 및 이사청소는 수도권 전체(seoul, incheon, gyeonggi) 생성 지원
        if (isMoveOrMoving) {
          if (!['seoul', 'incheon', 'gyeonggi'].includes(region.regionSlug)) return;

          if (region.regionSlug === 'incheon') {
            // 인천 구 단위 입주/이사청소 (인천은 접미사 없음)
            const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
            const representativeArea = `인천 ${cleanDistrict}`;
            
            if (isMoving) {
              addRssItem(
                `${representativeArea} 이사청소 | 욕실·주방·베란다 정리 - ${BRAND_NAME}`,
                `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
                `${representativeArea} 이사청소 상담. 이사 전후 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 바닥 잔먼지를 집 상태에 맞춰 확인합니다.`
              );
            } else {
              addRssItem(
                `${representativeArea} ${workName} | 욕실·주방·베란다 검수 - ${BRAND_NAME}`,
                `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
                `${representativeArea} ${workName} 상담. 입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.`
              );
            }
          } else {
            // 서울/경기 구/시 단위 입주/이사청소 (canonical인 접미사 -gu/-si 포함 주소만 등록)
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
            const representativeArea = cleanDistrict;
            
            if (isMoving) {
              addRssItem(
                `${representativeArea} 이사청소 | 욕실·주방·베란다 정리 - ${BRAND_NAME}`,
                `/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`,
                `${representativeArea} 이사청소 상담. 이사 전후 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 바닥 잔먼지를 집 상태에 맞춰 확인합니다.`
              );
            } else {
              addRssItem(
                `${representativeArea} ${workName} | 욕실·주방·베란다 검수 - ${BRAND_NAME}`,
                `/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`,
                `${representativeArea} ${workName} 상담. 입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.`
              );
            }

            // 서울/경기 구 제거형 입주/이사청소
            if (region.districtSlug !== 'jung-gu') {
              const cleanShortDistrict = region.district.replace(/(구|시)$/, '').replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
              const representativeAreaShort = cleanShortDistrict;
              
              if (isMoving) {
                addRssItem(
                  `${representativeAreaShort} 이사청소 | 이사 전후 욕실·주방 청소 - ${BRAND_NAME}`,
                  `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
                  `${representativeAreaShort} 이사청소 상담. 이사 전후 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 바닥 잔먼지를 집 상태에 맞춰 확인합니다.`
                );
              } else {
                addRssItem(
                  `${representativeAreaShort} ${workName} | 입주 전 욕실·주방 청소 - ${BRAND_NAME}`,
                  `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
                  `${representativeAreaShort} ${workName} 상담. 입주일 전 욕실, 주방, 베란다·창틀, 분진 오염 등 주요 공간의 청소 범위를 확인합니다.`
                );
              }
            }
          }
          return;
        }

        // 일반 서비스인 경우
        if (region.regionSlug === 'incheon') {
          // 인천은 대표 단일 URL 포함
          addRssItem(
            `${region.district} ${service.serviceNameKo} 전문업체 | ${BRAND_NAME}`,
            `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`,
            `${region.district} 전 지역 ${service.serviceNameKo} 전문 서비스 안내. ${service.shortDescription}`
          );
        } else {
          // 서울/경기는 구/시 포함 버전을 대표 index URL로 포함
          const suffix = region.district.endsWith('시') ? '-si' : '-gu';
          addRssItem(
            `${region.district} ${service.serviceNameKo} 전문업체 | ${BRAND_NAME}`,
            `/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`,
            `${region.district} 전 지역 ${service.serviceNameKo} 전문 서비스 안내. ${service.shortDescription}`
          );
        }
      });
    });

  // 4. 동 단위 + 작업명 조합
  regions
    .filter(r => r.subDistrictSlug !== 'all' && r.indexStatus === 'index')
    .forEach(dong => {
      const parentRegion = regions.find((r) => r.districtSlug === dong.districtSlug && r.subDistrictSlug === 'all');
      const isParentIndexed = parentRegion ? parentRegion.indexStatus === 'index' : true;
      
      if (isParentIndexed) {
        activeServices.forEach(service => {
          const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
          const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
          const isMoveOrMoving = isMoveIn || isMoving;
          const workName = isMoveIn ? '입주청소' : '이사청소';

          // 입주청소/이사청소는 수도권 전체(seoul, incheon, gyeonggi) 생성 지원
          if (isMoveOrMoving) {
            if (!['seoul', 'incheon', 'gyeonggi'].includes(dong.regionSlug)) return;

            const neighborhoodName = dong.subDistrict;
            const districtName = dong.district;
            let representativeArea = '';

            if (dong.regionSlug === 'seoul') {
              representativeArea = neighborhoodName;
            } else if (dong.regionSlug === 'incheon') {
              const isConflictIncheon = ['논현동', '신흥동'].includes(neighborhoodName);
              representativeArea = isConflictIncheon ? `인천 ${neighborhoodName}` : neighborhoodName;
            } else {
              const isConflictGyeonggi = ['문산읍', '신흥동', '중앙동', '역삼동', '신교동', '성남동', '태평동', '수진동', '단대동', '상대원동'].includes(neighborhoodName);
              representativeArea = isConflictGyeonggi ? `${districtName.replace(/(시|군)$/, '')} ${neighborhoodName}` : neighborhoodName;
            }

            if (isMoving) {
              addRssItem(
                `${representativeArea} 이사청소 | 욕실·주방·베란다 정리 - ${BRAND_NAME}`,
                `/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
                `${representativeArea} 이사청소 상담. 이사 전후 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 바닥 잔먼지를 집 상태에 맞춰 확인합니다.`
              );
            } else {
              addRssItem(
                `${representativeArea} ${workName} | 욕실·주방·베란다 검수 - ${BRAND_NAME}`,
                `/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
                `${representativeArea} ${workName} 상담. 입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.`
              );
            }
            return;
          }

          addRssItem(
            `${dong.district} ${dong.subDistrict} ${service.serviceNameKo} 전문 업체 | ${BRAND_NAME}`,
            `/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`,
            `${dong.district} ${dong.subDistrict} 전 지역 ${service.serviceNameKo} 전문 서비스 안내. ${service.shortDescription}`
          );
        });
      }
    });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${BRAND_NAME}</title>
    <link>${DOMAIN}/</link>
    <description>서울, 인천, 경기 수도권 주요 지역 종합청소 및 입주청소 전문 상담 안내</description>
    <language>ko-KR</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    ${items.join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
