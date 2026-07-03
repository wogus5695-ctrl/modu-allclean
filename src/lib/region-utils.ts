export interface DongData {
  rawDongName: string;
  normalizedDongName: string;
  displayDongName: string;
  dongSlug: string;
  sourceNames: string[];
}

/**
 * 행정동 명칭에서 숫자, 제N동, 본동 등을 제거하여 대표 동명으로 통합합니다.
 * 고유 지명(예: 일동, 이동 등 2글자 이하)은 예외 처리합니다.
 */
export function normalizeDongName(rawDongName: string): string {
  // 고유 지명이 숫자를 포함하는 예외 처리 (예: 일동, 이동 등 2글자 이하인 경우 보존)
  if (rawDongName.length <= 2) {
    return rawDongName;
  }

  let normalized = rawDongName;

  // 1. 성수1가1동, 성수2가3동 등 성수동 계열 통합
  normalized = normalized.replace(/성수\d+가\d*동/g, '성수동');
  normalized = normalized.replace(/성수\d+가/g, '성수동');

  // 2. 숫자 분동 제거 패턴 (예: 삼성1동, 돈암제2동, 상계3·4동 등)
  normalized = normalized.replace(/제?\d+동$/, '동');
  normalized = normalized.replace(/제?\d+·\d+동$/, '동');
  normalized = normalized.replace(/제?\d+,\d+동$/, '동');
  normalized = normalized.replace(/제?\d+\/\d+동$/, '동');

  // 3. 본동 제거 패턴 (예: 방배본동, 수유본동 등)
  normalized = normalized.replace(/본동$/, '동');

  return normalized;
}

/**
 * 도시(cityName)와 구/시(districtName) 안에서 대표 동명 기준으로 중복을 제거(Dedupe)합니다.
 */
export function groupAndDeduplicateDongs(
  rawDongs: { name: string; slug: string }[],
  cityName: string,
  districtName: string
): DongData[] {
  const result: DongData[] = [];
  const seen = new Set<string>();

  rawDongs.forEach((raw) => {
    const normalized = normalizeDongName(raw.name);
    // dedupe 기준: displayDongName + districtName + cityName
    const key = `${normalized}_${districtName}_${cityName}`;

    if (seen.has(key)) {
      const existing = result.find(
        (item) =>
          item.displayDongName === normalized
      );
      // 이미 키가 있고 해당 원본 이름이 등록 안 되어있으면 추가
      if (existing && !existing.sourceNames.includes(raw.name)) {
        existing.sourceNames.push(raw.name);
      }
    } else {
      seen.add(key);
      
      // slug도 한글과 매칭되도록 영문 슬러그화 (예: ssangmun-1-dong -> ssangmun-dong)
      const cleanSlug = raw.slug
        .replace(/-\d+-dong$/, '-dong')
        .replace(/-bon-dong$/, '-dong')
        .replace(/-\d+-\d+-dong$/, '-dong');

      result.push({
        rawDongName: raw.name,
        normalizedDongName: normalized,
        displayDongName: normalized,
        dongSlug: cleanSlug,
        sourceNames: [raw.name],
      });
    }
  });

  return result;
}
