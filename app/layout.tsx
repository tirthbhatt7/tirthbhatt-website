import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://tirthbhatt.com"),
  title: {
    default: "Tirth Bhatt — QA Engineer / SDET",
    template: "%s — Tirth Bhatt",
  },
  description:
    "QA Engineer / SDET focused on reliable E2E, fast CI, and pragmatic AI testing. I help teams eliminate flaky tests, speed up CI, and ship with confidence.",
  keywords: [
    "QA",
    "SDET",
    "Test Automation",
    "Playwright",
    "Cypress",
    "CI/CD",
    "AI Testing",
    "Test Automation Engineer",
    "Quality Assurance",
  ],
  openGraph: {
    type: "website",
    url: "https://tirthbhatt.com",
    title: "Tirth Bhatt — QA Engineer / SDET",
    description:
      "I help teams eliminate flaky tests, speed up CI, and ship with confidence—using robust automation and pragmatic AI tooling.",
    siteName: "Tirth Bhatt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirth Bhatt — QA Engineer / SDET",
    description:
      "Reliable E2E, faster CI, and pragmatic AI testing for modern teams.",
  },
  alternates: {
    canonical: "https://tirthbhatt.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06B6D4" },
    { media: "(prefers-color-scheme: dark)", color: "#06B6D4" },
  ],
};

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const LIGHT_THEME_COLOR = "hsl(0 0% 100%)";
const DARK_THEME_COLOR = "hsl(240deg 10% 3.92%)";
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geist.variable} ${geistMono.variable}`}
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: "Required"
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: "Required for structured data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tirth Bhatt",
              jobTitle: "QA Engineer / SDET",
              url: "https://tirthbhatt.com",
              sameAs: [
                "https://www.linkedin.com/in/tirthbhatt7",
                "https://github.com/tirthbhatt",
              ],
              email: "tirthbhatt7@gmail.com",
              telephone: "+44 7341544376",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Toaster position="top-center" />
          <SessionProvider>{children}</SessionProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
