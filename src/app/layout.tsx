import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Resume - Interactive Personal Assistant',
  description: 'Experience the future of resumes with an AI-powered personal assistant that knows everything about me and can reverse-interview you.',
  keywords: ['AI Resume', 'Interactive Resume', 'ChatGPT Resume', 'Personal AI', 'Resume Assistant'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'AI Resume - Interactive Personal Assistant',
    description: 'Chat with my AI twin and let it interview you about your company needs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Resume - Interactive Personal Assistant',
    description: 'Chat with my AI twin and let it interview you about your company needs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50`}>
        <div className="relative min-h-screen">
          {/* Background effects */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl -z-10" />
          
          {children}
        </div>
      </body>
    </html>
  )
}
