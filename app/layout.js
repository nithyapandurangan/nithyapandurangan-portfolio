import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nithya Pandurangan - Full Stack & Frontend Engineer",
  description:
    "Aspiring Full Stack Developer skilled in React, UI Design, and Production-Ready Web Apps. Bridging the gap between tech and design.",
  keywords:
    "Full Stack Developer, Frontend Engineer, React, UI/UX Design, Web Development, JavaScript, TypeScript, Next.js",
  authors: [{ name: "Nithya Pandurangan" }],
  creator: "Nithya Pandurangan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithyapandurangan.dev",
    title: "Nithya Pandurangan - Full Stack & Frontend Engineer",
    description: "Aspiring Full Stack Developer skilled in React, UI Design, and Production-Ready Web Apps",
    siteName: "Nithya Pandurangan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithya Pandurangan - Full Stack & Frontend Engineer",
    description: "Aspiring Full Stack Developer skilled in React, UI Design, and Production-Ready Web Apps",
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
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
