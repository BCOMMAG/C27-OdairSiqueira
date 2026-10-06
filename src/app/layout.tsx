import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://odairsiqueira.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Odair Siqueira Advocacia | Direito do Trabalho & Família em Colombo e Curitiba PR",
    template: "%s | Odair Siqueira Advocacia",
  },
  description:
    "Defesa jurídica estratégica, técnica e humanizada em Direito do Trabalho, Direito de Família e Consultoria Jurídica. Sede física no Atuba em Colombo/PR e atendimento online seguro para todo o Paraná. OAB/PR 91.151.",
  keywords: [
    "advogado trabalhista colombo pr",
    "advogado direito do trabalho curitiba",
    "odair siqueira advocacia",
    "odair siqueira advogado",
    "advogado de familia colombo pr",
    "pensao alimenticia colombo",
    "divorcio judicial e extrajudicial curitiba",
    "calculos rescisorios trabalhistas",
    "horas extras curitiba pr",
    "consultoria juridica preventiva",
    "oab pr 91151",
  ],
  authors: [{ name: "Odair Siqueira" }],
  creator: "Odair Siqueira",
  publisher: "Odair Siqueira Advocacia",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Odair Siqueira Advocacia | Direito do Trabalho & Família em Colombo e Curitiba PR",
    description:
      "Defesa jurídica estratégica e humanizada em Direito do Trabalho, Direito de Família e Consultoria Jurídica. Atendimento presencial e online.",
    siteName: "Odair Siqueira Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpg",
        width: 1200,
        height: 630,
        alt: "Odair Siqueira Advocacia - Colombo e Curitiba PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odair Siqueira Advocacia | Direito do Trabalho & Família em Colombo e Curitiba PR",
    description:
      "Defesa jurídica estratégica em Direito do Trabalho, Família e Consultoria Preventiva. Atendimento presencial no Atuba em Colombo e online em todo o Paraná.",
    images: ["/og-image_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLegalServiceSchema();

  return (
    <html lang="pt-BR" suppressHydrationWarning className={`dark ${raleway.variable} ${merriweather.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('sa_theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${raleway.variable} ${merriweather.variable} font-body antialiased selection:bg-[#C9A24A] selection:text-[#171717] bg-[var(--bg-primary)] text-[var(--text-main)]`}
      >
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}