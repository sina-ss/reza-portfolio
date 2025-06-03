import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Reza Fakhr Hosseini - Financial Analyst & Investment Professional",
    template: "%s | Reza Fakhr Hosseini",
  },
  description:
    "Experienced Financial Analyst with 4+ years in financial modeling, investment analysis, and portfolio management. Specialized in DCF modeling, M&A analysis, and Bloomberg Terminal. Currently pursuing M.Sc. Finance at Manchester Metropolitan University.",
  keywords: [
    "Financial Analyst",
    "Investment Professional",
    "Financial Modeling",
    "Portfolio Management",
    "DCF Modeling",
    "M&A Analysis",
    "Bloomberg Terminal",
    "CFA Level 1",
    "Excel VBA",
    "Power BI",
    "Manchester",
    "UK",
    "Iran",
    "Finance Graduate",
  ],
  authors: [{ name: "Reza Fakhr Hosseini" }],
  creator: "Reza Fakhr Hosseini",
  publisher: "Reza Fakhr Hosseini",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rfhosseini.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rfhosseini.me",
    title: "Reza Fakhr Hosseini - Financial Analyst & Investment Professional",
    description:
      "Experienced Financial Analyst with 4+ years in financial modeling, investment analysis, and portfolio management. Specialized in DCF modeling, M&A analysis, and Bloomberg Terminal.",
    siteName: "Reza Fakhr Hosseini Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reza Fakhr Hosseini - Financial Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Fakhr Hosseini - Financial Analyst & Investment Professional",
    description:
      "Experienced Financial Analyst with 4+ years in financial modeling, investment analysis, and portfolio management.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Reza Fakhr Hosseini",
  jobTitle: "Financial Analyst & Investment Professional",
  description:
    "Experienced Financial Analyst with 4+ years in financial modeling, investment analysis, and portfolio management.",
  url: "https://rfhosseini.me",
  email: "rzafh79@gmail.com",
  telephone: "+447351036696",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manchester",
    addressCountry: "UK",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Manchester Metropolitan University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manchester",
        addressCountry: "UK",
      },
    },
    {
      "@type": "EducationalOrganization",
      name: "Amirkabir University of Technology",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tehran",
        addressCountry: "Iran",
      },
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Tadbirgaran Farda",
  },
  knowsAbout: [
    "Financial Analysis",
    "Investment Management",
    "Financial Modeling",
    "Portfolio Management",
    "DCF Modeling",
    "M&A Analysis",
    "Bloomberg Terminal",
    "Excel VBA",
    "Power BI",
  ],
  sameAs: [
    "https://linkedin.com/in/reza-fakhr-hosseini",
    "https://rfhosseini.me",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
