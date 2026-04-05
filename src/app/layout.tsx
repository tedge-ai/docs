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
    default: "Tedge Docs — Trading Intelligence Documentation",
    template: "%s — Tedge Docs",
  },
  description: "Documentation for the Tedge AI trading platform",
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <span className="font-semibold">
                  Tedge<span className="text-amber-500">.ai</span>{" "}
                  <span className="text-sm font-normal text-gray-500">
                    Docs
                  </span>
                </span>
              }
              projectLink="https://github.com/tedge-ai"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/tedge-ai/docs/tree/main"
          footer={
            <Footer>
              <span>
                {new Date().getFullYear()} © Tedge AI — Trading Intelligence
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
