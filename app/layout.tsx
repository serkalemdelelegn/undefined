// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import "./globals.css"

// export const metadata: Metadata = {
//   title: "STEMpower Ethiopia - Empowering Youth Through STEM Education",
//   description:
//     "STEMpower Ethiopia is dedicated to empowering Ethiopian youth through science, technology, engineering, and mathematics education. Discover our STEM centers, programs, and impact across Ethiopia.",
//   generator: "v0.app",
//   keywords:
//     "STEM education, Ethiopia, youth empowerment, science, technology, engineering, mathematics, education, FabLab, entrepreneurship",
//     icons: {
//       icon: "/stempower-logo.jpeg",
//       apple: "/stempower-logo.jpeg",
//     },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         <Suspense fallback={null}>{children}</Suspense>
//         <Analytics />
//       </body>
//     </html>
//   )
// }
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AppProvider } from "@/lib/app-context"
import { Chatbot } from "@/components/chatbot"
import "./globals.css"

export const metadata: Metadata = {
  title: "STEMpower Ethiopia - Empowering Youth Through STEM Education",
  description:
    "STEMpower Ethiopia is dedicated to empowering Ethiopian youth through science, technology, engineering, and mathematics education. Discover our STEM centers, programs, and impact across Ethiopia.",
  generator: "v0.app",
  keywords:
    "STEM education, Ethiopia, youth empowerment, science, technology, engineering, mathematics, education, FabLab, entrepreneurship",
  icons: {
    icon: "/stempower-logo.jpeg",
    apple: "/stempower-logo.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AppProvider>
         
          <Suspense fallback={null}>{children}</Suspense>
          <Chatbot />
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
