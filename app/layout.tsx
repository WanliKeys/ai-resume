import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { cookies } from "next/headers"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"
import { defaultLocale, isLocale } from "@/lib/i18n-config"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cliste Tools",
  description: "A growing collection of practical tools, notes, and prompts for daily work.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value
  const locale = isLocale(cookieLocale ?? "") ? cookieLocale : defaultLocale

  return (
    <html lang={locale}>
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <Suspense fallback={null}>
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
