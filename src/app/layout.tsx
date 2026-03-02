import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "TravelOS",
  description: "AI Travel Operating System for business teams."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <SiteHeader />
          <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
