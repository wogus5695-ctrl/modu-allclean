import fs from 'fs';
import path from 'path';
import { regions } from '../src/data/regions';
import { services } from '../src/data/services';
import { INDEXED_DONG_COMBINATIONS } from '../src/lib/seo';

const DOMAIN = 'https://www.moduclean.co.kr';
const NEXT_HTML_DIR = path.join(process.cwd(), '.next/server/app');

// 헬퍼: HTML 파일 내용 로드
function getHtmlContent(urlPath: string): string | null {
  const cleanPath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;
  const filePath = path.join(NEXT_HTML_DIR, `${cleanPath}.html`);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  return null;
}

// 헬퍼: 대표지역명 계산 (MoveInCleaningTemplate 및 page.tsx 로직 동기화)
function getRepresentativeArea(region: any, isDistrictLevel: boolean, requestedWithSuffix: boolean): string {
  const isIncheon = region.regionSlug === 'incheon';
  const shortDistrict = region.district.replace(/(구|시)$/, '');

  if (!isDistrictLevel) {
    const neighborhoodName = region.subDistrict;
    const districtName = region.district;

    if (region.regionSlug === 'seoul') {
      return neighborhoodName;
    } else if (region.regionSlug === 'incheon') {
      const isConflictIncheon = ['논현동', '신흥동'].includes(neighborhoodName);
      return isConflictIncheon ? `인천 ${neighborhoodName}` : neighborhoodName;
    } else {
      const isConflictGyeonggi = ['문산읍', '신흥동', '중앙동', '역삼동', '신교동', '성남동', '태평동', '수진동', '단대동', '상대원동'].includes(neighborhoodName);
      return isConflictGyeonggi ? `${districtName.replace(/(시|군)$/, '')} ${neighborhoodName}` : neighborhoodName;
    }
  } else {
    if (requestedWithSuffix) {
      const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      return isIncheon ? `인천 ${cleanDistrict}` : cleanDistrict;
    } else {
      const cleanShortDistrict = shortDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      return cleanShortDistrict;
    }
  }
}

async function runAudit() {
  console.log('🔍 배포 전 URL SEO 감사 시작...\n');

  if (!fs.existsSync(NEXT_HTML_DIR)) {
    console.error('❌ .next/server/app 디렉토리를 찾을 수 없습니다. 먼저 "npm run build"를 실행해주세요.');
    process.exit(1);
  }

  const sitemapUrls: string[] = [];
  const rssUrls: string[] = [];
  const hubUrls: string[] = [];
  const allTargetUrls = new Set<string>();

  const currentDate = new Date().toISOString();
  const activeServices = services.filter(s => s.indexStatus === 'index');

  // 1. sitemap.xml 대상 수집 (route.ts 로직 모사)
  // 메인 및 허브
  sitemapUrls.push('/');
  sitemapUrls.push('/sitemap-seoul');
  sitemapUrls.push('/move-in-cleaning/seoul');

  // 일반 서비스 서브 페이지
  activeServices.forEach(service => {
    sitemapUrls.push(`/service/${service.serviceSlug}`);
  });

  // 지역별 조합
  regions.forEach(region => {
    // 키워드 허브 및 지역 허브
    sitemapUrls.push(`/area/${region.regionSlug}/${region.districtSlug}`);
    sitemapUrls.push(`/keyword-hub/${region.regionSlug}-${region.districtSlug}`);

    activeServices.forEach(service => {
      const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
      const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
      const isMoveOrMoving = isMoveIn || isMoving;

      if (isMoveOrMoving) {
        if (!['seoul', 'incheon', 'gyeonggi'].includes(region.regionSlug)) return;

        if (region.subDistrictSlug === 'all') {
          if (region.regionSlug === 'incheon') {
            sitemapUrls.push(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
          } else {
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            sitemapUrls.push(`/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`);
          }
        } else {
          // 동 단위
          sitemapUrls.push(`/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`);
        }
      } else {
        // 일반 서비스
        if (region.subDistrictSlug === 'all') {
          if (region.regionSlug === 'incheon') {
            sitemapUrls.push(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
          } else {
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            sitemapUrls.push(`/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`);
          }
        } else {
          // 동 조합은 INDEXED_DONG_COMBINATIONS만 생성
          const combo = `${region.districtSlug}-${region.subDistrictSlug}-${service.id}`;
          if (INDEXED_DONG_COMBINATIONS.includes(combo)) {
            sitemapUrls.push(`/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`);
          }
        }
      }
    });
  });

  // 2. rss.xml 대상 수집 (route.ts 로직 모사)
  regions.forEach(region => {
    activeServices.forEach(service => {
      const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
      const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
      const isMoveOrMoving = isMoveIn || isMoving;

      if (isMoveOrMoving) {
        if (!['seoul', 'incheon', 'gyeonggi'].includes(region.regionSlug)) return;

        if (region.subDistrictSlug === 'all') {
          if (region.regionSlug === 'incheon') {
            rssUrls.push(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
          } else {
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            rssUrls.push(`/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`);
          }
        } else {
          rssUrls.push(`/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`);
        }
      } else {
        if (region.subDistrictSlug === 'all') {
          if (region.regionSlug === 'incheon') {
            rssUrls.push(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
          } else {
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            rssUrls.push(`/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`);
          }
        }
      }
    });
  });

  // 3. /move-in-cleaning/seoul 허브 내부 링크 수집
  const moveOrMoving = services.filter(s => s.serviceSlug === 'move-in-cleaning' || s.serviceSlug === 'moving-cleaning');
  regions
    .filter(r => r.subDistrictSlug !== 'all' && ['seoul', 'incheon', 'gyeonggi'].includes(r.regionSlug))
    .forEach(region => {
      moveOrMoving.forEach(service => {
        hubUrls.push(`/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`);
      });
    });

  // 모든 검사 대상 병합
  sitemapUrls.forEach(u => allTargetUrls.add(u));
  rssUrls.forEach(u => allTargetUrls.add(u));
  hubUrls.forEach(u => allTargetUrls.add(u));

  // 결과 집계용 변수
  let normalCount = 0;
  let count404 = 0;
  let redirectCount = 0;
  let soft404Count = 0;
  let queryCount = 0;
  let canonicalErrorCount = 0;
  let regionMissingCount = 0;

  const problemUrls: { url: string; issues: string[] }[] = [];

  for (const urlPath of allTargetUrls) {
    const issues: string[] = [];

    // Query URL 검사
    if (urlPath.includes('?') || urlPath.includes('&')) {
      queryCount++;
      issues.push('Query URL 포함 오류 (사이트맵/RSS 차단 대상)');
    }

    // 파일 로드 및 HTTP Status 200 검증
    // /, /rss.xml, /sitemap.xml 등은 Dynamic Route이므로 static HTML이 생성되지 않음
    const dynamicRoutes = ['/', '/rss.xml', '/sitemap.xml'];
    if (dynamicRoutes.includes(urlPath) || urlPath.startsWith('/sitemaps/')) {
      normalCount++;
      continue;
    }

    let cleanPathForFile = urlPath;
    if (urlPath.endsWith('/')) {
      cleanPathForFile = urlPath + 'page';
    }
    
    const htmlContent = getHtmlContent(cleanPathForFile);

    if (!htmlContent) {
      count404++;
      issues.push('HTTP 404 (Prerendered HTML 파일 없음)');
      problemUrls.push({ url: urlPath, issues });
      continue;
    }

    // HTML 파싱 (정규표현식)
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';

    const h1Match = htmlContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : '';

    const canonicalMatch = htmlContent.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) || 
                           htmlContent.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : '';

    // 메타 설명 점검
    const descMatch = htmlContent.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i) ||
                      htmlContent.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"/i);
    const description = descMatch ? descMatch[1] : '';

    // 동적 경로인 경우 데이터 추출 및 검증
    const parts = urlPath.split('/').filter(Boolean);
    const isLandingPage = parts.length >= 3 && ['seoul', 'incheon', 'gyeonggi'].includes(parts[0]);

    if (isLandingPage) {
      const city = parts[0];
      const districtParam = parts[1];
      const serviceSlug = parts[parts.length - 1];
      const subDistrictSlug = parts.length > 3 ? parts[2] : 'all';

      const region = regions.find(r => 
        r.regionSlug === city && 
        (subDistrictSlug === 'all' 
          ? (r.districtSlug === districtParam || `${r.districtSlug}-gu` === districtParam || `${r.districtSlug}-si` === districtParam)
          : r.districtSlug === districtParam && r.subDistrictSlug === subDistrictSlug
        )
      );

      const service = services.find(s => s.serviceSlug === serviceSlug);

      if (region && service) {
        const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
        const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
        const isMoveOrMoving = isMoveIn || isMoving;

        if (isMoveOrMoving) {
          const isDistrictLevel = subDistrictSlug === 'all';
          const requestedWithSuffix = districtParam.endsWith('-gu') || districtParam.endsWith('-si');
          const representativeArea = getRepresentativeArea(region, isDistrictLevel, requestedWithSuffix);
          const workName = isMoveIn ? '입주청소' : '이사청소';
          const targetKeyword = `${representativeArea} ${workName}`;

          // 1. title 존재 여부
          if (!title) {
            issues.push('Title 태그 누락');
          }

          // 2. H1 존재 여부
          if (!h1) {
            issues.push('H1 태그 누락');
          } else {
            // H1 형식 검증 (지역명+작업명)
            if (!h1.includes(representativeArea) || !h1.includes(workName)) {
              issues.push(`H1 태그 포맷 오류 (현재: "${h1}" / 기대값: "${representativeArea} ${workName}")`);
            }
            if (h1 === '입주청소' || h1 === '이사청소') {
              issues.push('H1에 지역명이 빠지고 단순 작업명만 노출됨 (Soft 404 요인)');
            }
          }

          // 3. 본문 텍스트 내 대표 키워드 존재 여부
          const bodyText = htmlContent.replace(/<!--[\s\S]*?-->/g, ' ') // 주석 제거
                                      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
                                      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                                      .replace(/<[^>]*>/g, ' ')
                                      .replace(/\s+/g, ' '); // 공백 정규화

          if (!bodyText.includes(targetKeyword)) {
            issues.push(`본문 내 핵심 키워드 "${targetKeyword}" 누락`);
          }

          // 4. "지역의" 앞 공란 검증 (태그와 주석이 제거된 순수 텍스트 기준)
          // 정규화된 공백 기준 " 지역의"로 단일 공백 매칭되나, 빈 값인 경우 앞부분 조사(은/는) 뒤에 공백 2개 이상이 생김
          if (bodyText.includes('은 지역의') || bodyText.includes('는 지역의')) {
            // 정상: "올케어 서비스은 목동 지역의" (은과 지역의 사이에 목동이 있음)
            // 비정상: "올케어 서비스은 지역의" (은과 지역의 사이에 아무것도 없음)
            issues.push('본문 내 빈 지역명 오류 ("은 지역의" 혹은 "는 지역의" 발견)');
            regionMissingCount++;
          }

          // 5. Canonical 검증 (자기 자신 매핑 여부)
          const expectedCanonical = `${DOMAIN}${urlPath}`;
          
          // 서울/경기 구 단위 제거형은 canonical이 접미사 포함 버전이어야 함
          let isNoSuffixDistrict = false;
          let expectedAltCanonical = expectedCanonical;
          if (city !== 'incheon' && isDistrictLevel && !requestedWithSuffix) {
            isNoSuffixDistrict = true;
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            expectedAltCanonical = `${DOMAIN}/${city}/${region.districtSlug}${suffix}/${service.serviceSlug}`;
          }

          if (isNoSuffixDistrict) {
            if (canonical !== expectedAltCanonical) {
              canonicalErrorCount++;
              issues.push(`Canonical 주소 불일치 (현재: ${canonical} / 기대값: ${expectedAltCanonical})`);
            }
          } else {
            if (canonical !== expectedCanonical) {
              canonicalErrorCount++;
              issues.push(`Canonical 주소 불일치 (현재: ${canonical} / 기대값: ${expectedCanonical})`);
            }
          }

          // 6. 페이지를 찾을 수 없습니다 문구 포함 여부
          const cleanBodyHtml = htmlContent.replace(/<script[\s\S]*?<\/script>/gi, '')
                                            .replace(/<style[\s\S]*?<\/style>/gi, '');
          if (cleanBodyHtml.includes('페이지를 찾을 수 없습니다') || cleanBodyHtml.includes('notFound')) {
            issues.push('200 응답 본문에 "페이지를 찾을 수 없습니다" 문구 포함 (에러 노출 의심)');
          }

          // 7. 본문 길이 검증 (소프트 404 방지)
          if (bodyText.length < 500) {
            issues.push(`본문 텍스트 분량 부족 (현재: ${bodyText.length}자 / 최소 권장 500자)`);
          }
        }
      } else {
        issues.push('데이터 매핑 정보 없음 (유효하지 않은 지역 또는 서비스 조합)');
      }
    }

    if (issues.length > 0) {
      soft404Count++;
      problemUrls.push({ url: urlPath, issues });
    } else {
      normalCount++;
    }
  }

  // 보고서 출력
  console.log('==================================================');
  console.log('📊 [URL SEO 감사 요약 보고서]');
  console.log('==================================================');
  console.log(`✅ 정상 검증 완료 URL : ${normalCount}개`);
  console.log(`❌ 404 에러 URL       : ${count404}개`);
  console.log(`⚠️ 리디렉션 대상 URL  : ${redirectCount}개`);
  console.log(`⚠️ 소프트 404 의심 URL : ${soft404Count}개`);
  console.log(`⚠️ Query 파라미터 URL : ${queryCount}개`);
  console.log(`⚠️ Canonical 오류 URL  : ${canonicalErrorCount}개`);
  console.log(`⚠️ 지역명 누락 URL     : ${regionMissingCount}개`);
  console.log('==================================================');

  if (problemUrls.length > 0) {
    console.log('\n❌ [발견된 문제 URL 및 감지 내역]');
    problemUrls.forEach((item, idx) => {
      console.log(`\n[${idx + 1}] URL: ${DOMAIN}${item.url}`);
      item.issues.forEach(issue => console.log(`  - 🔴 ${issue}`));
    });
    console.log('\n⚠️ 배포 전에 위 오류들을 점검하고 정상 복구해야 합니다.');
    process.exit(1);
  } else {
    console.log('\n🎉 축하합니다! 모든 검수 대상 URL이 완벽하게 정상입니다.');
    process.exit(0);
  }
}

runAudit();
