import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // 1. -gu 접미사가 붙은 구명을 접미사 없는 표준 슬러그로 변환하여 리디렉션
        // 예: /floor-wax-coating/gangnam-gu -> /seoul/gangnam/floor-wax-coating
        source: '/:service(exterior-cleaning|window-cleaning|fire-cleaning|floor-wax-coating|awning-cleaning|signboard-cleaning|interior-post-cleaning|construction-completion-cleaning|hood-cleaning|hoarder-house-cleaning|special-cleaning)/:district(gangnam|seocho|songpa|gangdong|yangcheon|gangseo|guro|geumcheon|yeongdeungpo|dongjak|gwanak|eunpyeong|seodaemun|mapo|seongdong|gwangjin|dongdaemun|jungnang|seongbuk|gangbuk|dobong|nowon|jongno|yongsan)-gu',
        destination: '/seoul/:district/:service',
        permanent: true,
      },
      {
        // 2. 표준 구명 또는 중구(jung-gu) 패턴 리디렉션
        // 예: /floor-wax-coating/gangnam -> /seoul/gangnam/floor-wax-coating
        // 예: /floor-wax-coating/jung-gu -> /seoul/jung-gu/floor-wax-coating
        source: '/:service(exterior-cleaning|window-cleaning|fire-cleaning|floor-wax-coating|awning-cleaning|signboard-cleaning|interior-post-cleaning|construction-completion-cleaning|hood-cleaning|hoarder-house-cleaning|special-cleaning)/:district(gangnam|seocho|songpa|gangdong|yangcheon|gangseo|guro|geumcheon|yeongdeungpo|dongjak|gwanak|eunpyeong|seodaemun|mapo|seongdong|gwangjin|dongdaemun|jungnang|seongbuk|gangbuk|dobong|nowon|jongno|jung-gu|yongsan)',
        destination: '/seoul/:district/:service',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
