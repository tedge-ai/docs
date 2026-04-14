import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "tedge.ai docs — Trading Intelligence Documentation",
    template: "%s — tedge.ai docs",
  },
  description: "Documentation for the tedge.ai trading platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${outfit.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <span className="flex items-center gap-2 font-semibold"><img src="/icon.svg" alt="tedge" width={22} height={22} className="rounded" /><span>tedge<span className="text-amber-500">.ai</span></span>{" "}<span className="text-sm font-normal text-gray-500">docs</span></span>
              }
              projectLink="https://github.com/tedge-ai"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/tedge-ai/docs/tree/main"
          footer={
            <Footer>
              <span>
                {new Date().getFullYear()} © tedge.ai — Trading Intelligence
              </span>
            </Footer>
          }
          darkMode={true}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
