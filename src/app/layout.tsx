import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fleet Logger｜郡山・福島の運送会社向け運行記録アプリ",
  description:
    "ドライバーの記録が会社を守る。時間外労働960時間規制対応・労基署対応。写真を撮るだけで日報完成。電波なしでも動く。IT導入補助金対応。郡山市・福島県の中小運送・タクシー事業者に選ばれる運行記録アプリ。",
  keywords:
    "運行記録,日報,時間外労働,960時間規制,労基署対応,郡山市,福島県,運送,タクシー,IT導入補助金",
  openGraph: {
    title: "Fleet Logger｜郡山の運送会社が選んだ日報アプリ",
    description: "写真を撮るだけで日報完成。IT導入補助金対応。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
