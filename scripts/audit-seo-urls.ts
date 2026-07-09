import fs from 'fs';
import path from 'path';
import { regions } from '../src/data/regions';
import { services } from '../src/data/services';
import { INDEXED_DONG_COMBINATIONS, CONTACT_PHONE } from '../src/lib/seo';

const DOMAIN = 'https://www.moduclean.co.kr';
const NEXT_HTML_DIR = path.join(process.cwd(), '.next/server/app');

// 헬퍼: HTML 파일 내용 로드
function getHtmlContent(urlPath: string): string | null {
  const cleanPath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;
  // Next.js 빌드 시 폴더 구조에 맞춰 html 파일 경로 탐색
  const filePath1 = path.join(NEXT_HTML_DIR, `${cleanPath}.html`);
  const filePath2 = path.join(NEXT_HTML_DIR, cleanPath, 'page.html');
  const filePath3 = path.join(NEXT_HTML_DIR, cleanPath, 'index.html');
  
  if (fs.existsSync(filePath1)) return fs.readFileSync(filePath1, 'utf-8');
  if (fs.existsSync(filePath2)) return fs.readFileSync(filePath2, 'utf-8');
  if (fs.existsSync(filePath3)) return fs.readFileSync(filePath3, 'utf-8');
  return null;
}

// 헬퍼: 대표지역명 계산
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
  console.log('🔍 SEO 전수 점검 및 Audit 시작...\n');

  if (!fs.existsSync(NEXT_HTML_DIR)) {
    console.error('❌ .next/server/app 디렉토리를 찾을 수 없습니다. 먼저 "npm run build"를 실행해주세요.');
    process.exit(1);
  }

  const allTargetUrls = new Set<string>();
  const activeServices = services.filter(s => s.indexStatus === 'index');

  // 1. sitemap-seoul (종합청소 동적변환 키워드 허브) 관련 대상 수집
  // /sitemap-seoul 내부 링크 모사
  allTargetUrls.add('/sitemap-seoul');
  allTargetUrls.add('/move-in-cleaning/seoul');

  // 2. 구/시 단위 및 동 단위 랜딩 페이지 수집
  regions.forEach(region => {
    activeServices.forEach(service => {
      const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
      const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
      const isMoveOrMoving = isMoveIn || isMoving;

      if (isMoveOrMoving) {
        if (!['seoul', 'incheon', 'gyeonggi'].includes(region.regionSlug)) return;

        if (region.subDistrictSlug === 'all') {
          if (region.regionSlug === 'incheon') {
            allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
          } else {
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
            allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`);
          }
        } else {
          allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`);
        }
      } else {
        // 일반 서비스
        if (region.subDistrictSlug === 'all') {
          if (region.regionSlug === 'incheon') {
            allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
          } else {
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`);
            allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`);
          }
        } else {
          const combo = `${region.districtSlug}-${region.subDistrictSlug}-${service.id}`;
          if (INDEXED_DONG_COMBINATIONS.includes(combo)) {
            allTargetUrls.add(`/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`);
          }
        }
      }
    });
  });

  const auditResults: any[] = [];
  const problemUrls: { url: string; category: string; issues: string[] }[] = [];

  const counts: Record<string, number> = {
    '정상': 0,
    '개선필요': 0,
    '주제혼선': 0,
    '메타오류': 0,
    '404': 0,
    'canonical오류': 0,
    '무관이미지': 0,
    'FAQ불일치': 0,
    '브랜드오류': 0,
    '내부링크부족': 0,
    'Soft404의심': 0
  };

  const serviceKeywords: Record<string, string[]> = {
    'move-in-cleaning': ['입주청소', '이사', '청소', '분진', '싱크대', '욕실'],
    'moving-cleaning': ['이사청소', '이사', '청소', '물때', '기름때', '창틀'],
    'exterior-cleaning': ['외벽청소', '고압', '외벽', '로프', '빌딩', '유리창'],
    'window-cleaning': ['유리창청소', '유리창', '물때', '백화', '상가', '쇼윈도'],
    'fire-cleaning': ['화재청소', '그을음', '탄냄새', '화재', '복구', '소독'],
    'floor-waxing': ['바닥왁스코팅', '바닥', '왁스', '데코타일', '광택', '박리'],
    'awning-cleaning': ['어닝청소', '어닝', '천막', '고압세척', '곰팡이'],
    'sign-cleaning': ['간판청소', '간판', '매연', '세척', '상가'],
    'interior-after-cleaning': ['인테리어', '분진', '공사', '청소', '준공'],
    'completion-cleaning': ['준공청소', '준공', '공사', '건물', '청소'],
    'hood-cleaning': ['후드청소', '후드', '덕트', '기름때', '식당', '주방'],
    'hoarding-cleaning': ['쓰레기집', '폐기물', '수거', '악취', '정리'],
    'special-cleaning': ['특수청소', '악취', '유품', '고독사', '혈흔'],
    'floor-cleaning': ['바닥청소', '바닥', '세척', '타일', '사무실']
  };

  for (const urlPath of allTargetUrls) {
    const issues: string[] = [];
    let cleanPathForFile = urlPath;
    if (urlPath.endsWith('/')) {
      cleanPathForFile = urlPath.slice(0, -1);
    }

    const htmlContent = getHtmlContent(cleanPathForFile);
    const isQueryUrl = urlPath.includes('?') || urlPath.includes('&');

    const resultRow: any = {
      url: urlPath,
      status: htmlContent ? 200 : 404,
      redirect: 'N',
      title: '',
      metaDesc: '',
      h1: '',
      canonical: '',
      representativeArea: '',
      serviceName: '',
      keywordCount: 0,
      hasKeywords: 'N',
      faqMatch: 'N/A',
      altMatch: 'N/A',
      hasIrrelevantImage: 'N',
      hasCta: 'N',
      brandOk: 'N',
      queryUrl: isQueryUrl ? 'Y' : 'N',
      soft404: 'N',
      category: '정상'
    };

    if (isQueryUrl) {
      issues.push('Query URL 여부 (차단/비권장)');
    }

    if (!htmlContent) {
      resultRow.status = 404;
      resultRow.category = '404';
      counts['404']++;
      issues.push('HTTP 404 - HTML 빌드 파일 없음');
      problemUrls.push({ url: urlPath, category: '404', issues });
      auditResults.push(resultRow);
      continue;
    }

    // HTML 파싱
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';
    resultRow.title = title;

    const descMatch = htmlContent.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i) ||
                      htmlContent.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"/i);
    const description = descMatch ? descMatch[1] : '';
    resultRow.metaDesc = description;

    const h1Match = htmlContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : '';
    resultRow.h1 = h1;

    const canonicalMatch = htmlContent.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) || 
                           htmlContent.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : '';
    resultRow.canonical = canonical;

    // CTA 확인
    const hasCta = htmlContent.includes(CONTACT_PHONE) || htmlContent.includes('tel:') || htmlContent.includes('카카오톡');
    resultRow.hasCta = hasCta ? 'Y' : 'N';
    if (!hasCta) issues.push('CTA 버튼이나 전화번호 링크가 없음');

    // 브랜드명 확인
    const brandOk = title.includes('모두종합환경') || htmlContent.includes('모두종합환경');
    resultRow.brandOk = brandOk ? 'Y' : 'N';
    if (!brandOk) {
      issues.push('브랜드명이 "모두종합환경"이 아님');
      resultRow.category = '브랜드오류';
    }

    // 경로 파싱 및 대표지역명/작업명 매핑
    const parts = urlPath.split('/').filter(Boolean);
    const isLandingPage = parts.length >= 2;
    let city = '';
    let districtParam = '';
    let subDistrictSlug = 'all';
    let serviceSlug = '';

    if (isLandingPage) {
      city = parts[0];
      if (parts.length === 2) {
        serviceSlug = parts[1]; // /service/exterior-cleaning 같은 경우
      } else if (parts.length === 3) {
        districtParam = parts[1];
        serviceSlug = parts[2];
      } else if (parts.length === 4) {
        districtParam = parts[1];
        subDistrictSlug = parts[2];
        serviceSlug = parts[3];
      }

      const region = regions.find(r => 
        r.regionSlug === city && 
        (subDistrictSlug === 'all' 
          ? (r.districtSlug === districtParam || `${r.districtSlug}-gu` === districtParam || `${r.districtSlug}-si` === districtParam)
          : r.districtSlug === districtParam && r.subDistrictSlug === subDistrictSlug
        )
      );

      const service = services.find(s => s.serviceSlug === serviceSlug);

      if (region && service) {
        const isDistrictLevel = subDistrictSlug === 'all';
        const requestedWithSuffix = districtParam.endsWith('-gu') || districtParam.endsWith('-si');
        const representativeArea = getRepresentativeArea(region, isDistrictLevel, requestedWithSuffix);
        resultRow.representativeArea = representativeArea;
        resultRow.serviceName = service.serviceNameKo;

        // 본문 가공
        const bodyText = htmlContent.replace(/<!--[\s\S]*?-->/g, ' ')
                                    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
                                    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                                    .replace(/<[^>]*>/g, ' ')
                                    .replace(/\s+/g, ' ');

        // 키워드 빈도 및 핵심어 포함 체크
        const targetKeyword = `${representativeArea} ${service.serviceNameKo}`;
        const keywordRegex = new RegExp(targetKeyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
        const keywordCount = (bodyText.match(keywordRegex) || []).length;
        resultRow.keywordCount = keywordCount;

        const coreKeywords = serviceKeywords[serviceSlug] || [];
        const hasKeywords = coreKeywords.every(k => bodyText.includes(k)) ? 'Y' : 'N';
        resultRow.hasKeywords = hasKeywords;

        if (keywordCount === 0) {
          issues.push(`본문에 대표 키워드 "${targetKeyword}"가 미포함되었습니다.`);
        }

        // FAQ 검증
        const faqMatch = htmlContent.includes(service.serviceNameKo) ? 'Y' : 'N';
        resultRow.faqMatch = faqMatch;
        if (faqMatch === 'N') {
          issues.push('FAQ 영역에 현재 작업명과 맞지 않는 기본 텍스트 노출');
        }

        // 이미지 alt 검사
        const altMatches = [...htmlContent.matchAll(/alt="([^"]*)"/g)].map(m => m[1]);
        const altMatch = altMatches.some(alt => alt.includes(service.serviceNameKo)) ? 'Y' : 'N';
        resultRow.altMatch = altMatch;
        if (altMatch === 'N') {
          issues.push('작업명에 매칭되는 이미지 Alt 태그가 부족하거나 없음');
        }

        // soft 404 의심 점검
        let isSoft404 = false;
        if (!h1) {
          isSoft404 = true;
          issues.push('Soft 404 의심: H1 태그 누락');
        }
        if (!title) {
          isSoft404 = true;
          issues.push('Soft 404 의심: Title 태그 누락');
        }
        if (!description) {
          isSoft404 = true;
          issues.push('Soft 404 의심: Meta Description 누락');
        }
        if (h1 === service.serviceNameKo) {
          isSoft404 = true;
          issues.push(`Soft 404 의심: H1에 지역명 없이 단일 작업명 "${h1}"만 노출`);
        }
        if (bodyText.includes('은 지역의') || bodyText.includes('는 지역의') || bodyText.includes('은   지역의')) {
          isSoft404 = true;
          issues.push('Soft 404 의심: 본문 내 지역명이 빈칸으로 출력됨 ("은 지역의")');
        }

        if (isSoft404) {
          resultRow.soft404 = 'Y';
          resultRow.category = 'Soft404의심';
        }

        // Canonical 검증
        const expectedCanonical = `${DOMAIN}${urlPath}`;
        let canonicalOk = canonical === expectedCanonical;
        if (!canonicalOk) {
          // 접미사 예외 규칙
          if (city !== 'incheon' && isDistrictLevel && !requestedWithSuffix) {
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            const expectedAltCanonical = `${DOMAIN}/${city}/${region.districtSlug}${suffix}/${service.serviceSlug}`;
            canonicalOk = canonical === expectedAltCanonical;
          }
        }

        if (!canonicalOk) {
          issues.push(`Canonical 오류: 현재 ${canonical} / 기대값: ${expectedCanonical}`);
          if (resultRow.category === '정상') resultRow.category = 'canonical오류';
        }
      }
    }

    if (issues.length > 0) {
      if (resultRow.category === '정상') {
        resultRow.category = '개선필요';
      }
      counts[resultRow.category]++;
      problemUrls.push({ url: urlPath, category: resultRow.category, issues });
    } else {
      counts['정상']++;
    }

    auditResults.push(resultRow);
  }

  // 1. 콘솔 요약 출력
  console.log('==================================================');
  console.log('📊 [SEO URL Audit 요약 보고서]');
  console.log('==================================================');
  Object.entries(counts).forEach(([category, count]) => {
    console.log(`- ${category.padEnd(15)} : ${count}개`);
  });
  console.log('==================================================');

  // 2. CSV 파일 생성
  const headers = ['URL', 'HTTP Status', 'Redirect', 'Title', 'Meta Description', 'H1', 'Canonical', '대표지역명', '작업명', '키워드수', '핵심단어포함', 'FAQ일치', 'Alt일치', 'CTA여부', '브랜드Ok', 'Query여부', 'Soft404', '카테고리'];
  const csvRows = [headers.join(',')];

  auditResults.forEach(r => {
    const row = [
      `"${r.url}"`,
      r.status,
      `"${r.redirect}"`,
      `"${(r.title || '').replace(/"/g, '""')}"`,
      `"${(r.metaDesc || '').replace(/"/g, '""')}"`,
      `"${(r.h1 || '').replace(/"/g, '""')}"`,
      `"${r.canonical}"`,
      `"${r.representativeArea}"`,
      `"${r.serviceName}"`,
      r.keywordCount,
      `"${r.hasKeywords}"`,
      `"${r.faqMatch}"`,
      `"${r.altMatch}"`,
      `"${r.hasCta}"`,
      `"${r.brandOk}"`,
      `"${r.queryUrl}"`,
      `"${r.soft404}"`,
      `"${r.category}"`
    ];
    csvRows.push(row.join(','));
  });

  const artifactDir = path.join(process.cwd(), '.gemini', 'antigravity');
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(process.cwd(), 'seo_audit_results.csv'), csvRows.join('\n'), 'utf-8');
  console.log('📁 CSV 파일 저장 완료: seo_audit_results.csv');

  // 3. 문제 URL 목록 생성
  const problemRows = problemUrls.map((p, idx) => {
    return `${idx + 1}. URL: ${DOMAIN}${p.url}\n   - 분류: [${p.category}]\n   - 감지된 문제:\n${p.issues.map(i => `     🔴 ${i}`).join('\n')}`;
  });

  fs.writeFileSync(path.join(process.cwd(), 'seo_problems_list.txt'), problemRows.join('\n\n'), 'utf-8');
  console.log('📁 문제 URL 목록 저장 완료: seo_problems_list.txt\n');

  console.log(`❌ 총 ${problemUrls.length}개의 URL에서 SEO 개선 요소가 발견되었습니다.`);
}

runAudit();
