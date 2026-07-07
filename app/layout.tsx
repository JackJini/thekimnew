import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Fahkwang } from "next/font/google"

const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fahkwang",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thekimbrand.vn"),
  title: {
    default: "The Kim Brand",
    template: "%s | The Kim Brand",
  },
  description: "Trang phục y tế cao cấp – Scrub & Blouse. Chất liệu tốt, form dáng chuẩn, dịch vụ tận tâm.",
  openGraph: {
    title: "The Kim Brand",
    description: "Trang phục y tế cao cấp – Scrub & Blouse. Chất liệu tốt, form dáng chuẩn, dịch vụ tận tâm.",
    url: "https://res.cloudinary.com/dz2qrhvly/image/upload/v1760605202/4_dskfwk_vbqai1.svg",
    siteName: "The Kim Brand",
    images: [
      {
        url: "https://res.cloudinary.com/dz2qrhvly/image/upload/v1760605201/1_maoklk_rcuclr.png",
        width: 1200,
        height: 630,
        alt: "The Kim Brand",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kim Brand",
    description: "Trang phục y tế cao cấp – Scrub & Blouse. Chất liệu tốt, form dáng chuẩn, dịch vụ tận tâm.",
    images: ["https://res.cloudinary.com/dz2qrhvly/image/upload/v1760605201/1_maoklk_rcuclr.png"],
  },
  icons: {
    icon: "https://res.cloudinary.com/dz2qrhvly/image/upload/v1760605214/TheKIM_1_vc0xcd_patpmv.ico",
    apple: "https://res.cloudinary.com/dz2qrhvly/image/upload/v1760605214/Ba%CC%89n_sao_LogoFull_ktfo2d_zosfrt_llbn4s.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${fahkwang.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
