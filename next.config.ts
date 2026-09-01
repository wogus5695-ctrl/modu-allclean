import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // 0-1. 성남시 금곡동 오타 슬러그(geum곡-dong) 유입 시 표준 슬러그(geumgok-dong)로 301 영구 리디렉션
        source: '/gyeonggi/seongnam/geum곡-dong/:service*',
        destination: '/gyeonggi/seongnam/geumgok-dong/:service*',
        permanent: true,
      },
      {
        // 0. 중구 옛날 슬러그(jung) 유입 시 표준 슬러그(jung-gu)로 301 영구 리디렉션
        source: '/seoul/jung/:path*',
        destination: '/seoul/jung-gu/:path*',
        permanent: true,
      },
      {
        // 1. -gu 접미사가 붙은 구명을 접미사 없는 표준 슬러그로 변환하여 리디렉션
        // 예: /floor-wax-coating/gangnam-gu -> /seoul/gangnam/floor-wax-coating
        source: '/:service(exterior-cleaning|window-cleaning|fire-cleaning|floor-wax-coating|awning-cleaning|signboard-cleaning|interior-post-cleaning|completion-cleaning|hood-cleaning|hoarder-house-cleaning|special-cleaning)/:district(yangcheon|gangseo|guro|geumcheon|yeongdeungpo|dongjak|gwanak|eunpyeong|seodaemun|mapo|jongno|yongsan)-gu',
        destination: '/seoul/:district/:service',
        permanent: true,
      },
      {
        // 2. 표준 구명 또는 중구(jung-gu) 패턴 리디렉션
        // 예: /floor-wax-coating/gangnam -> /seoul/gangnam/floor-wax-coating
        // 예: /floor-wax-coating/jung-gu -> /seoul/jung-gu/floor-wax-coating
        source: '/:service(exterior-cleaning|window-cleaning|fire-cleaning|floor-wax-coating|awning-cleaning|signboard-cleaning|interior-post-cleaning|completion-cleaning|hood-cleaning|hoarder-house-cleaning|special-cleaning)/:district(yangcheon|gangseo|guro|geumcheon|yeongdeungpo|dongjak|gwanak|eunpyeong|seodaemun|mapo|jongno|jung-gu|yongsan)',
        destination: '/seoul/:district/:service',
        permanent: true,
      },
      {
        // 3. 인천 -gu 접미사가 붙은 구명을 표준 슬러그로 변환하여 리디렉션
        // 예: /floor-wax-coating/yeonsu-gu -> /incheon/yeonsu/floor-wax-coating
        source: '/:service(exterior-cleaning|window-cleaning|fire-cleaning|floor-wax-coating|awning-cleaning|signboard-cleaning|interior-post-cleaning|completion-cleaning|hood-cleaning|hoarder-house-cleaning|special-cleaning)/:district(incheon-jung-gu|incheon-dong-gu|michuhol|yeonsu|namdong|bupyeong|gyeyang|incheon-seo-gu)-gu',
        destination: '/incheon/:district/:service',
        permanent: true,
      },
      {
        // 4. 인천 표준 구명 패턴 리디렉션
        // 예: /floor-wax-coating/yeonsu -> /incheon/yeonsu/floor-wax-coating
        source: '/:service(exterior-cleaning|window-cleaning|fire-cleaning|floor-wax-coating|awning-cleaning|signboard-cleaning|interior-post-cleaning|completion-cleaning|hood-cleaning|hoarder-house-cleaning|special-cleaning)/:district(incheon-jung-gu|incheon-dong-gu|michuhol|yeonsu|namdong|bupyeong|gyeyang|incheon-seo-gu)',
        destination: '/incheon/:district/:service',
        permanent: true,
      },
      {
        // 5-1. 공장청소 광주시 이중 suffix (gwangju-si-si) -> 정규화 URL (gwangju-si) 301 리디렉션
        source: '/gyeonggi/gwangju-si-si/:path*',
        destination: '/gyeonggi/gwangju-si/:path*',
        permanent: true,
      },
      {
        // 5-2. 공장청소 음성군 잘못된 suffix (eumseong-gu) -> 정규화 URL (eumseong-gun) 301 리디렉션
        source: '/chungbuk/eumseong-gu/:path*',
        destination: '/chungbuk/eumseong-gun/:path*',
        permanent: true,
      },
      {
        // 5-3. 공장청소 진천군 잘못된 suffix (jincheon-gu) -> 정규화 URL (jincheon-gun) 301 리디렉션
        source: '/chungbuk/jincheon-gu/:path*',
        destination: '/chungbuk/jincheon-gun/:path*',
        permanent: true,
      },
      {
        // 5-4. 공장청소 남동구 누락된 suffix (namdong) -> 정규화 URL (namdong-gu) 301 리디렉션
        source: '/incheon/namdong/:path*',
        destination: '/incheon/namdong-gu/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
