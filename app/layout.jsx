import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://rizkyirawan.rcl.biz.id"; // ganti dengan domain asli saat deploy

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rizky Irawan — Web Developer",
    template: "%s | Rizky Irawan",
  },
  description:
    "Rizky Irawan — Web Developer. Crafting professional digital solutions, one pixel at a time. Spesialis responsive web design, WhatsApp bot automation, dan UI/UX prototyping.",
  keywords: [
    "Rizky Irawan",
    "Web Developer",
    "Rizky Developer",
    "Rizky Irawan Portofolio", 
    "Portofolio Rizky Irawan", 
    "Rizky Irawan Lampung Tengah", 
    "Rizky Irawan Lamteng", 
    "Rizky Irawan mts", 
    "Siapakah Rizky Irawan", 
    "Web Developer Lampung",
    "Frontend Developer Indonesia",
    "WhatsApp Bot Developer",
    "Portfolio Web Developer",
  ],
  authors: [{ name: "Rizky Irawan" }],
  creator: "Rizky Irawan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Rizky Irawan — Web Developer",
    title: "Rizky Irawan — Web Developer",
    description:
      "Crafting professional digital solutions, one pixel at a time. Lihat proyek, skill, dan cara menghubungi Rizky Irawan.",
    images: [
      {
        url: "/assets/52823.png",
        width: 1593,
        height: 1137,
        alt: "Rizky Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizky Irawan — Web Developer",
    description: "Crafting professional digital solutions, one pixel at a time.",
    images: ["/assets/52823.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rizky Irawan",
    url: SITE_URL,
    image: `${SITE_URL}/assets/52824.jpg`,
    jobTitle: "Web Developer",
    description:
      "Web Developer yang berfokus pada pengembangan digital experience, responsive web design, dan otomasi WhatsApp bot.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Lampung Tengah",
      addressCountry: "ID",
    },
    email: "mailto:zkyeea@gmail.com",
    sameAs: [
      "https://instagram.com/air_minerall7",
      "https://tiktok.com/zkyyyy077",
    ],
    knowsAbout: [
      "HTML",
      "JavaScript",
      "CSS",
      "Python",
      "GitHub",
      "Java",
      "MySQL",
      "PHP",
      "C++",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON di sini murni data statis milik kita sendiri (bukan HTML dari
      // input user), jadi aman dipakai bersama dangerouslySetInnerHTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
