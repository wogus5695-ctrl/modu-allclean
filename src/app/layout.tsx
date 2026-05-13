import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import { getMainMetadata, getJsonLd, BRAND_NAME, BUSINESS_NAME, BUSINESS_NUMBER, CONTACT_PHONE } from "@/lib/seo";

const scDream = localFont({
  src: [
    { path: "../../public/fonts/SCDream3.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/SCDream4.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/SCDream5.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/SCDream6.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/SCDream8.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-sc-dream",
});

export const metadata: Metadata = getMainMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getJsonLd();

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={scDream.className}>
        <Header />
        <main>{children}</main>
        
        <footer style={{ padding: '80px 0 100px', backgroundColor: '#f0f4f8', color: '#333' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#003366' }}>{BRAND_NAME}</h3>
                <p style={{ lineHeight: '1.6', fontSize: '14px', color: '#666' }}>
                  외벽, 유리창, 준공, 화재 복구 등<br />
                  현장 맞춤형 종합청소 솔루션을 제공합니다.<br />
                  서울·경기 전 지역 신속 방문 견적 가능합니다.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '15px' }}>상담 안내</h4>
                <p style={{ fontSize: '15px', fontWeight: '700', marginBottom: '5px' }}>대표번호: {CONTACT_PHONE}</p>
                <p style={{ fontSize: '14px' }}>연중무휴 24시간 상담 가능</p>

              </div>
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '15px' }}>작업 지역</h4>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                  서울 및 경기권 전 지역<br />
                  수도권 전역 신속 방문 상담 가능
                </p>
              </div>
            </div>
            <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '13px', color: '#999' }}>
              <p style={{ marginBottom: '5px' }}>상호명: {BUSINESS_NAME} | 사업자등록번호: {BUSINESS_NUMBER}</p>
              <p>&copy; 2026 {BRAND_NAME}. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
