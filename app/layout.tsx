import "./globals.css";
import Script from "next/script";
import ClientScripts from "@/components/ClientScripts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rouibah Medical | Groupe Médical Rouibah — Bordj Menaïel",
  description:
    "Groupe Médical Rouibah — Centre médical privé à Bordj Menaïel, Wilaya de Boumerdès, Algérie. Urgences 24/7, médecins spécialisés, laboratoire, radiologie.",
  keywords:
    "Rouibah Medical, عيادة الرويبح, Bordj Menaïel, برج منايل, clinique privée, urgences, laboratoire, Boumerdès",
  openGraph: {
    title: "Rouibah Medical | Groupe Médical Rouibah",
    description:
      "Soins de santé complets à Bordj Menaïel. Urgences 24/7, médecins spécialisés, analyses, radiologie.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
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
        <Script src="/lang-switcher.js" strategy="afterInteractive" />
      </head>
      <body>
        <div id="react-loader-root"></div>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
