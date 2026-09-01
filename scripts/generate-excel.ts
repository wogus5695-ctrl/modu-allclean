import * as XLSX from 'xlsx';
import { factoryEnabledCombinations, factoryTargetRegions } from '../src/data/seo/factoryActiveCombinations';
import { factoryServices } from '../src/data/seo/factoryServices';

function generateExcel() {
  console.log('=== GENERATING EXCEL FILE ===');

  const data: any[] = [];

  factoryEnabledCombinations.forEach((combo, idx) => {
    const [city, district, serviceSlug] = combo.split('/');
    const region = factoryTargetRegions.find(r => r.regionSlug === city && r.districtSlug === district);
    const service = factoryServices.find(s => s.serviceSlug === serviceSlug);

    if (!region || !service) return;

    const urlSlug = region.urlSlug;
    const url = `https://www.moduclean.co.kr/${city}/${urlSlug}/${serviceSlug}`;

    const keyword = `${region.seoKeywordName} ${service.serviceNameKo}`;

    data.push({
      '숫자': idx + 1,
      '지역명 키워드': region.seoKeywordName,
      '작업명 키워드': service.serviceNameKo,
      '동적키워드': keyword,
      '제출용 url': url
    });
  });

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '공장청소 리스트');

  // Adjust column widths
  const max_len = [5, 15, 20, 30, 60];
  worksheet['!cols'] = max_len.map(w => ({ wch: w }));

  // File name: '공장청소 작업명 키워드.xlsx'
  const fileName = '공장청소 작업명 키워드.xlsx';
  XLSX.writeFile(workbook, fileName);

  console.log(`Successfully generated: ${fileName}`);
}

generateExcel();
