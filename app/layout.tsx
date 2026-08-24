import "./globals.css";
import ClientScripts from "@/components/ClientScripts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rouibah Medical | عيادة الرويبح — برج منايل",
  description:
    "عيادة الرويبح - Rouibah Medical Group. مركز طبي متكامل في برج منايل، ولاية بومرداس، الجزائر. طوارئ 24/7، أطباء متخصصون، أجهزة طبية حديثة.",
  keywords:
    "عيادة الرويبح, Rouibah Medical, برج منايل, Bordj Menaiel, عيادة خاصة, طوارئ, مختبر, بومرداس",
  openGraph: {
    title: "Rouibah Medical | عيادة الرويبح",
    description:
      "رعاية صحية متكاملة في برج منايل. طوارئ 24/7، أطباء متخصصون، تحاليل، أشعة.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <div id="react-loader-root"></div>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
