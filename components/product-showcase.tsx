"use client"

import type React from "react"

import Image from "next/image"
import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import RegisterModal from "@/components/register-modal"


/* ----------------------- Types ----------------------- */
type ColorOption = {
  name: string
  value: string // HEX
  images: string[]
}
type Product = {
  id: number
  name: string
  description: string
  category: string
  subcategory: string
  colors: ColorOption[]
  sizes: string[]
  price: string
}
type Category = {
  id: string
  name: string
  nameVi: string
  banner?: string
  description?: string
  subcategories?: { id: string; name: string; nameVi: string }[]
}

/* ----------------------- Data ----------------------- */
const categories: Category[] = [
  {
    id: "scrub",
    name: "SCRUB",
    nameVi: "Trang phục y tế",
    banner: "/images/media/group/6.svg",
    description: "Chất liệu cao cấp, thoải mái cho môi trường y tế",
    subcategories: [
      { id: "men", name: "Nam", nameVi: "Dành cho nam" },
      { id: "women", name: "Nữ", nameVi: "Dành cho nữ" },
    ],
  },
  {
    id: "blouse",
    name: "BLOUSE",
    nameVi: "Áo blouse y tế",
    banner: "/images/media/group/5.svg",
    description: "Thiết kế thanh lịch, phù hợp cho các chuyên gia y tế",
    subcategories: [
      { id: "men", name: "Nam", nameVi: "Dành cho nam" },
      { id: "women", name: "Nữ", nameVi: "Dành cho nữ" },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    nameVi: "",
    banner:
      "/images/media/group/7.svg",
    description: "Các sản phẩm khác",
    subcategories: [
      { id: "unisex", name: "Unisex", nameVi: "Unisex" }, // <— chỉ 1 subcategory
    ],
  },
]

// ===== helper: tạo mảng placeholder ảnh =====
const placeholderImages = (count = 5, w = 900, h = 1200) =>
  Array.from({ length: count }, () => `/placeholder.svg?height=${h}&width=${w}`)

// ===== bảng màu dùng lại nhiều nơi (chỉ placeholder ảnh) =====
export const COLORS = {
  // base
  white: { name: "White", value: "#FFFFFF" },
  black: { name: "Black", value: "#2C2C2C" },

  // blue family
  royal: { name: "Royal Blue", value: "#0066CC" },
  powderBlue: { name: "Powder Blue", value: "#B0E0E6" },
  midnight: { name: "Midnight Navy", value: "#0A1A2F" },
  periwinkle: { name: "Periwinkle Blue", value: "#7F9ED9" },

  // greens
  forest: { name: "Forest Green", value: "#116530" },
  darkOlive: { name: "Dark Olive Green", value: "#3B4D2D" },
  surgical: { name: "Surgical Green", value: "#4CA6A8" },
  turquoise: { name: "Turquoise", value: "#40E0D0" },

  // grays
  gray: { name: "Charcoal Gray", value: "#4B4B4B" },
  slateGray: { name: "Slate Gray", value: "#708090" },
  lightSilverGray: { name: "Light Silver Gray", value: "#D3D7DD" },

  // reds / pinks / purples
  candy: { name: "Candy Pink", value: "#F06292" },
  burgundy: { name: "Burgundy", value: "#800020" },
  magenta: { name: "Magenta Rose", value: "#B33C6A" },
  lavender: { name: "Lavender", value: "#C3AED6" },

  // browns
  rustBrown: { name: "Rust Brown", value: "#B7410E" },
}

// ===== danh sách sản phẩm: mỗi item có cả men & women =====
// helper: mảng ảnh placeholder (giữ tỉ lệ cao, không crop)
const PHOTOS = (n = 5) => Array.from({ length: n }, () => "/placeholder.svg?height=1200&width=900")

export const products: Product[] = [
  /* =================== SCRUB =================== */
  // BASIC
  {
    id: 1,
    name: "SCRUB BASIC",
    description:
      "Với chất liệu cotton thoáng mát, mềm mại thấm hút mồ hôi, cùng màu sắc đa dạng, là sự lựa chọn tối ưu cho khách hàng yêu thích sự tiện dụng và thoải mái.",
    category: "scrub",
    subcategory: "men",
    colors: [
      {
        name: "Midnight Navy",
        value: "#0A1A2F",
        images: [
          "/images/media/scrub/basic/male/midnight_navy/1.jpg",
          "/images/media/scrub/basic/male/midnight_navy/2.jpg",
          "/images/media/scrub/basic/male/midnight_navy/3.jpg",
          "/images/media/scrub/basic/male/midnight_navy/4.jpg",
          "/images/media/scrub/basic/male/midnight_navy/5.jpg",
        ],
      },
      {
        name: "Royal Blue",
        value: "#0066CC",
        images: [
          "/images/media/scrub/basic/male/royal_blue/1.jpg",
          "/images/media/scrub/basic/male/royal_blue/2.jpg",
          "/images/media/scrub/basic/male/royal_blue/3.jpg",
          "/images/media/scrub/basic/male/royal_blue/4.jpg",
        ],
      },
      {
        name: "Black",
        value: "#000000",
        images: [
          "/images/media/scrub/basic/male/black/1.jpg",
          "/images/media/scrub/basic/male/black/2.jpg",
          "/images/media/scrub/basic/male/black/3.jpg",
          "/images/media/scrub/basic/male/black/4.jpg",
          "/images/media/scrub/basic/male/black/5.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "750,000 VNĐ",
  },
  {
    id: 2,
    name: "SCRUB BASIC",
    description:
      "Với chất liệu cotton thoáng mát, mềm mại thấm hút mồ hôi, cùng màu sắc đa dạng, là sự lựa chọn tối ưu cho khách hàng yêu thích sự tiện dụng và thoải mái.",
    category: "scrub",
    subcategory: "women",
    colors: [
      {
        name: "Light Silver Gray",
        value: "#D3D7DD",
        images: [
          "/images/media/scrub/basic/female/light_silver_gray/1.jpg",
          "/images/media/scrub/basic/female/light_silver_gray/2.jpg",
          "/images/media/scrub/basic/female/light_silver_gray/3.jpg",
          "/images/media/scrub/basic/female/light_silver_gray/4.jpg",

        ],
      },
      {
        name: "Candy Pink",
        value: "#F06292",
        images: [
          "/images/media/scrub/basic/female/candy_pink/1.jpg",
          "/images/media/scrub/basic/female/candy_pink/2.jpg",
          "/images/media/scrub/basic/female/candy_pink/3.jpg",
          "/images/media/scrub/basic/female/candy_pink/4.jpg",

        ],
      },
      {
        name: "Forest Green",
        value: "#116530",
        images: [
          "/images/media/scrub/basic/female/forest_green/1.jpg",
          "/images/media/scrub/basic/female/forest_green/2.jpg",
          "/images/media/scrub/basic/female/forest_green/3.jpg",
          "/images/media/scrub/basic/female/forest_green/4.jpg",

        ],
      },
      {
        name: "Rust Brown",
        value: "#B7410E",
        images: [
          "/images/media/scrub/basic/female/rust_brown/1.jpg",
          "/images/media/scrub/basic/female/rust_brown/2.jpg",
          "/images/media/scrub/basic/female/rust_brown/3.jpg",
          "/images/media/scrub/basic/female/rust_brown/4.jpg",
          "/images/media/scrub/basic/female/rust_brown/5.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "750,000 VNĐ",
  },
  // PREMIUM (CỔ TIM)
  {
    id: 3,
    name: "SCRUB PREMIUM (V-Neck)",
    description:
      "Với chất liệu Kaki nhập khẩu cao cấp, thấm hút mồ hôi và đứng form, mang đến cảm giác thoải mái, sang trọng để có một ngày làm việc thật hiệu quả. ",
    category: "scrub",
    subcategory: "men",
    colors: [
      {
        name: "Surgical Green",
        value: "#4CA6A8",
        images: [
          "/images/media/scrub/premium(heart)/male/surgical_green/1.jpg",
          "/images/media/scrub/premium(heart)/male/surgical_green/2.jpg",
          "/images/media/scrub/premium(heart)/male/surgical_green/3.jpg",
          "/images/media/scrub/premium(heart)/male/surgical_green/4.jpg",

        ],
      },
      {
        name: "Midnight Navy",
        value: "#0A1A2F",
        images: [
          "/images/media/scrub/premium(heart)/male/midnight_navy/1.jpg",
          "/images/media/scrub/premium(heart)/male/midnight_navy/3.jpg",
          "/images/media/scrub/premium(heart)/male/midnight_navy/2.jpg",
          "/images/media/scrub/premium(heart)/male/midnight_navy/5.jpg",
          "/images/media/scrub/premium(heart)/male/midnight_navy/4.jpg",
        ],
      },
      {
        name: "Powder Blue",
        value: "#B0E0E6",
        images: [
          "/images/media/scrub/premium(heart)/male/powder_blue/2.jpg",
          "/images/media/scrub/premium(heart)/male/powder_blue/5.jpg",
          "/images/media/scrub/premium(heart)/male/powder_blue/3.jpg",
          "/images/media/scrub/premium(heart)/male/powder_blue/4.jpg",
          "/images/media/scrub/premium(heart)/male/powder_blue/1.jpg",
        ],
      },
      {
        name: "Slate Gray",
        value: "#708090",
        images: [
          "/images/media/scrub/premium(heart)/male/slate_gray/2.jpg",
          "/images/media/scrub/premium(heart)/male/slate_gray/5.jpg",
          "/images/media/scrub/premium(heart)/male/slate_gray/3.jpg",
          "/images/media/scrub/premium(heart)/male/slate_gray/4.jpg",
          "/images/media/scrub/premium(heart)/male/slate_gray/1.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "980,000 VNĐ",
  },
  {
    id: 4,
    name: "SCRUB PREMIUM (V-Neck)",
    description:
      "Với chất liệu Kaki nhập khẩu cao cấp, thấm hút mồ hôi và đứng form, mang đến cảm giác thoải mái, sang trọng để có một ngày làm việc thật hiệu quả. ",
    category: "scrub",
    subcategory: "women",
    colors: [
      {
        name: "Lavender",
        value: "#C3AED6",
        images: [
          "/images/media/scrub/premium(heart)/female/lavender/1.jpg",
          "/images/media/scrub/premium(heart)/female/lavender/2.jpg",
          "/images/media/scrub/premium(heart)/female/lavender/4.jpg",
          "/images/media/scrub/premium(heart)/female/lavender/3.jpg",
     
        ],
      },
      {
        name: "Burgundy",
        value: "#800020",
        images: [
          "/images/media/scrub/premium(heart)/female/burgundy/2.jpg",
          "/images/media/scrub/premium(heart)/female/burgundy/4.jpg",
          "/images/media/scrub/premium(heart)/female/burgundy/3.jpg",
          "/images/media/scrub/premium(heart)/female/burgundy/1.jpg",
 
        ],
      },
      {
        name: "Midnight Navy",
        value: "#0A1A2F",
        images: [
          "/images/media/scrub/premium(heart)/female/midnight_navy/2.jpg",
          "/images/media/scrub/premium(heart)/female/midnight_navy/4.jpg",
          "/images/media/scrub/premium(heart)/female/midnight_navy/3.jpg",
          "/images/media/scrub/premium(heart)/female/midnight_navy/1.jpg",
 
        ],
      },
      {
        name: "Powder Blue",
        value: "#C7E0FF",
        images: [
          "/images/media/scrub/premium(heart)/female/powder_blue/2.jpg",
          "/images/media/scrub/premium(heart)/female/powder_blue/3.jpg",
          "/images/media/scrub/premium(heart)/female/powder_blue/4.jpg",
          "/images/media/scrub/premium(heart)/female/powder_blue/1.jpg",

        ],
      },
      {
        name: "Turquoise",
        value: "#40E0D0",
        images: [
          "/images/media/scrub/premium(heart)/female/turquoise/3.jpg",
          "/images/media/scrub/premium(heart)/female/turquoise/5.jpg",
          "/images/media/scrub/premium(heart)/female/turquoise/2.jpg",
          "/images/media/scrub/premium(heart)/female/turquoise/4.jpg",
          "/images/media/scrub/premium(heart)/female/turquoise/1.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "980,000 VNĐ",
  },
  // PREMIUM (CỔ TRỤ)
  {
    id: 5,
    name: "SCRUB PREMIUM (Mandarin Collar)",
    description:
      "Với chất liệu Kaki nhập khẩu cao cấp, thấm hút mồ hôi và đứng form, mang đến cảm giác thoải mái, sang trọng để có một ngày làm việc thật hiệu quả.",
    category: "scrub",
    subcategory: "men",
    colors: [
      {
        name: "Deep Teal",
        value: "#004F5F",
        images: [
          "/images/media/scrub/premium(mandarin)/male/deep_teal/1.jpg",
          "/images/media/scrub/premium(mandarin)/male/deep_teal/5.jpg",
          "/images/media/scrub/premium(mandarin)/male/deep_teal/4.jpg",
          "/images/media/scrub/premium(mandarin)/male/deep_teal/3.jpg",
          "/images/media/scrub/premium(mandarin)/male/deep_teal/2.jpg",
        ],
      },
      {
        name: "Charcoal Gray",
        value: "#4B4B4B",
        images: [
          "/images/media/scrub/premium(mandarin)/male/charcoal_gray/1.jpg",
          "/images/media/scrub/premium(mandarin)/male/charcoal_gray/5.jpg",
          "/images/media/scrub/premium(mandarin)/male/charcoal_gray/4.jpg",
          "/images/media/scrub/premium(mandarin)/male/charcoal_gray/3.jpg",
          "/images/media/scrub/premium(mandarin)/male/charcoal_gray/2.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "980,000 VNĐ",
  },
  {
    id: 6,
    name: "SCRUB PREMIUM (Mandarin Collar)",
    description:
      "Với chất liệu Kaki nhập khẩu cao cấp, thấm hút mồ hôi và đứng form, mang đến cảm giác thoải mái, sang trọng để có một ngày làm việc thật hiệu quả.",
    category: "scrub",
    subcategory: "women",
    colors: [
      {
        name: "Magenta Rose",
        value: "#B33C6A",
        images: [
          "/images/media/scrub/premium(mandarin)/female/magenta_rose/1.jpg",
          "/images/media/scrub/premium(mandarin)/female/magenta_rose/2.jpg",
          "/images/media/scrub/premium(mandarin)/female/magenta_rose/4.jpg",
          "/images/media/scrub/premium(mandarin)/female/magenta_rose/3.jpg",
          "",
        ],
      },
      {
        name: "Charcoal Gray",
        value: "#4B4B4B",
        images: [
          "/images/media/scrub/premium(mandarin)/female/charcoal_gray/1.jpg",
          "/images/media/scrub/premium(mandarin)/female/charcoal_gray/2.jpg",
          "/images/media/scrub/premium(mandarin)/female/charcoal_gray/3.jpg",
          "/images/media/scrub/premium(mandarin)/female/charcoal_gray/4.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "980,000 VNĐ",
  },
  // VIP
  {
    id: 7,
    name: "SCRUB VIP",
    description:
      "Được may từ chất liệu vải Kaki kháng khuẩn nhập khẩu, lần đầu tiên có mặt tại Việt Nam với thiết kế đa dụng, kiểu dáng trẻ trung. Mang đến trải nghiệm hoàn toàn mới và tự tin suốt một ngày làm việc hiệu quả.",
    category: "scrub",
    subcategory: "men",
    colors: [
      {
        name: "Dark Olive Green",
        value: "#3B4D2D",
        images: [
          "/images/media/scrub/vip/male/dark_olive_green/3.jpg",
          "/images/media/scrub/vip/male/dark_olive_green/2.jpg",
          "/images/media/scrub/vip/male/dark_olive_green/4.jpg",
          "/images/media/scrub/vip/male/dark_olive_green/1.jpg",
          "",
        ],
      },
      {
        name: "Royal Blue",
        value: "#0066CC",
        images: [
          "/images/media/scrub/vip/male/royal_blue/4.jpg",
          "/images/media/scrub/vip/male/royal_blue/2.jpg",
          "/images/media/scrub/vip/male/royal_blue/3.jpg",
          "/images/media/scrub/vip/male/royal_blue/5.jpg",
          "/images/media/scrub/vip/male/royal_blue/1.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "1,150,000 VNĐ",
  },
  {
    id: 8,
    name: "SCRUB VIP",
    description:
      "Được may từ chất liệu vải Kaki kháng khuẩn nhập khẩu, lần đầu tiên có mặt tại Việt Nam với thiết kế đa dụng, kiểu dáng trẻ trung. Mang đến trải nghiệm hoàn toàn mới và tự tin suốt một ngày làm việc hiệu quả.",
    category: "scrub",
    subcategory: "women",
    colors: [
      {
        name: "Periwinkle Blue",
        value: "#7F9ED9",
        images: [
          "/images/media/scrub/vip/female/periwinkle_blue/2.jpg",
          "/images/media/scrub/vip/female/periwinkle_blue/3.jpg",
          "/images/media/scrub/vip/female/periwinkle_blue/4.jpg",
          "/images/media/scrub/vip/female/periwinkle_blue/1.jpg",
          "",
        ],
      },
      {
        name: "Candy Pink",
        value: "#F06292",
        images: [
          "/images/media/scrub/vip/female/candy_pink/1.jpg",
          "/images/media/scrub/vip/female/candy_pink/5.jpg",
          "/images/media/scrub/vip/female/candy_pink/4.jpg",
          "/images/media/scrub/vip/female/candy_pink/2.jpg",
          "/images/media/scrub/vip/female/candy_pink/3.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "1,150,000 VNĐ",
  },
  /* =================== BLOUSE =================== */
  // BASIC
  {
    id: 9,
    name: "BLOUSE BASIC",
    description:
      "Với chất liệu kaki thoáng mát, mềm mại thấm hút mồ hôi, cùng màu sắc đa dạng, sự lựa chọn tối ưu cho khách hàng yêu thích sự tiện dụng và thoải mái.",
    category: "blouse",
    subcategory: "men",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/basic/male/3.jpg",
          "/images/media/blouse/basic/male/4.jpg",
          "/images/media/blouse/basic/male/2.jpg",
          "/images/media/blouse/basic/male/1.jpg",
          "",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "950,000 VNĐ",
  },
  {
    id: 10,
    name: "BLOUSE BASIC",
    description:
      "Với chất liệu kaki thoáng mát, mềm mại thấm hút mồ hôi, cùng màu sắc đa dạng, sự lựa chọn tối ưu cho khách hàng yêu thích sự tiện dụng và thoải mái.",
    category: "blouse",
    subcategory: "women",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/basic/female/2.jpg",
          "/images/media/blouse/basic/female/4.jpg",
          "/images/media/blouse/basic/female/3.jpg",
          "/images/media/blouse/basic/female/1.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "950,000 VNĐ",
  },
  // GENERAL
  {
    id: 11,
    name: "BLOUSE GENERAL",
    description:
      "Với chất liệu Kaki nhập khẩu đứng form, kết hợp màu trắng sứ sang trọng, mang đến cho khách hàng những trải nghiệm thú vị trong mỗi ngày làm việc.",
    category: "blouse",
    subcategory: "men",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/general/male/3.jpg",
          "/images/media/blouse/general/male/2.jpg",
          "/images/media/blouse/general/male/4.jpg",
          "/images/media/blouse/general/male/4.jpg",
          "",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "1,250,000 VNĐ",
  },
  {
    id: 12,
    name: "BLOUSE GENERAL",
    description:
      "Với chất liệu Kaki nhập khẩu đứng form, kết hợp màu trắng sứ sang trọng, mang đến cho khách hàng những trải nghiệm thú vị trong mỗi ngày làm việc.",
    category: "blouse",
    subcategory: "women",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/general/female/4.jpg",
          "/images/media/blouse/general/female/3.jpg",
          "/images/media/blouse/general/female/2.jpg",
          "/images/media/blouse/general/female/1.jpg",
          "/images/media/blouse/general/female/5.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "1,250,000 VNĐ",
  },
  // KOREA
  {
    id: 13,
    name: "BLOUSE KOREA",
    description:
      "Với chất liệu Kaki nhập khẩu, form ngắn, kết hợp màu trắng sứ sang trọng, mang đến những trải nghiệm trẻ trung trong mỗi ngày làm việc.",
    category: "blouse",
    subcategory: "men",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/korea/male/1.jpg",
          "/images/media/blouse/korea/male/4.jpg",
          "/images/media/blouse/korea/male/5.jpg",
          "/images/media/blouse/korea/male/3.jpg",
          "/images/media/blouse/korea/male/2.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "1,450,000 VNĐ",
  },
  {
    id: 14,
    name: "BLOUSE KOREA",
    description:
      "Với chất liệu Kaki nhập khẩu, form ngắn, kết hợp màu trắng sứ sang trọng, mang đến những trải nghiệm trẻ trung trong mỗi ngày làm việc.",
    category: "blouse",
    subcategory: "women",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/korea/female/1.jpg",
          "/images/media/blouse/korea/female/2.jpg",
          "/images/media/blouse/korea/female/3.jpg",
          "/images/media/blouse/korea/female/4.jpg",
  
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "1,450,000 VNĐ",
  },
  // PRESIDENT (LONG)
  {
    id: 15,
    name: "BLOUSE PRESIDENT (Long)",
    description:
      "Lấy cảm hứng từ chiếc áo măng tô lịch lãm từ Châu Âu, cùng với chất liệu Polyester & Bố dệt cao và kĩ thuật may veston cao cấp của các người thợ lành nghề, chiếc áo sẽ mang đến cho khách hàng một cảm giác của người lãnh đạo vô cùng khác biệt.",
    category: "blouse",
    subcategory: "men",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/president_long/male/3.jpg",
          "/images/media/blouse/president_long/male/2.jpg",
          "/images/media/blouse/president_long/male/1.jpg",
          "",
          "",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "4,250,000 VNĐ",
  },
  {
    id: 16,
    name: "BLOUSE PRESIDENT (Long)",
    description:
      "Lấy cảm hứng từ chiếc áo măng tô lịch lãm từ Châu Âu, cùng với chất liệu Polyester & Bố dệt cao và kĩ thuật may veston cao cấp của các người thợ lành nghề, chiếc áo sẽ mang đến cho khách hàng một cảm giác của người lãnh đạo vô cùng khác biệt.",
    category: "blouse",
    subcategory: "women",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/president_long/female/1.jpg",
          "/images/media/blouse/president_long/female/2.jpg",
          "/images/media/blouse/president_long/female/3.jpg",
          "/images/media/blouse/president_long/female/4.jpg",
          "/images/media/blouse/president_long/female/5.jpg",
          "/images/media/blouse/president_long/female/6.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "4,250,000 VNĐ",
  },
  // PRESIDENT (SHORT)
  {
    id: 17,
    name: "BLOUSE PRESIDENT (Short)",
    description:
      "Lấy cảm hứng từ chiếc áo măng tô lịch lãm từ Châu Âu, cùng với chât liệu Polyester & Bố dệt cao  và kĩ thuật may veston cao cấp của các người thợ lành nghề, chiếc áo chắc chắn sẽ mang đến một cảm giác của người lãnh đạo vô cùng khác biệt.",
    category: "blouse",
    subcategory: "men",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/president_short/male/1.jpg",
          "/images/media/blouse/president_short/male/2.jpg",
          "/images/media/blouse/president_short/male/3.jpg",
          "/images/media/blouse/president_short/male/4.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "3,950,000 VNĐ",
  },
  {
    id: 18,
    name: "BLOUSE PRESIDENT (Short)",
    description:
      "Lấy cảm hứng từ chiếc áo măng tô lịch lãm từ Châu Âu, cùng với chât liệu Polyester & Bố dệt cao  và kĩ thuật may veston cao cấp của các người thợ lành nghề, chiếc áo chắc chắn sẽ mang đến một cảm giác của người lãnh đạo vô cùng khác biệt.",
    category: "blouse",
    subcategory: "women",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/president_short/female/1.jpg",
          "/images/media/blouse/president_short/female/2.jpg",
          "/images/media/blouse/president_short/female/3.jpg",
          "/images/media/blouse/president_short/female/4.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "3,950,000 VNĐ",
  },
  // VIP
  {
    id: 19,
    name: "BLOUSE VIP",
    description:
      "Với sự kết hợp chất liệu Polyester và Bố dệt cao cấp, cùng kĩ thuật may gia công hai lớp kiểu dáng veston, chiếc áo thuộc phân khúc VIP sẽ mang đến cho khách hàng cảm giác vô cùng sang trọng và đẳng cấp.",
    category: "blouse",
    subcategory: "men",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/vip/male/1.jpg",
          "/images/media/blouse/vip/male/2.jpg",
          "/images/media/blouse/vip/male/3.jpg",
          "/images/media/blouse/vip/male/4.jpg",
          "/images/media/blouse/vip/male/5.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: "1,750,000 VNĐ",
  },
  {
    id: 20,
    name: "BLOUSE VIP",
    description:
      "Với sự kết hợp chất liệu Polyester và Bố dệt cao cấp, cùng kĩ thuật may gia công hai lớp kiểu dáng veston, chiếc áo thuộc phân khúc VIP sẽ mang đến cho khách hàng cảm giác vô cùng sang trọng và đẳng cấp.",
    category: "blouse",
    subcategory: "women",
    colors: [
      {
        name: "White",
        value: "#FFFFFF",
        images: [
          "/images/media/blouse/vip/female/1.jpg",
          "/images/media/blouse/vip/female/2.jpg",
          "/images/media/blouse/vip/female/3.jpg",
          "/images/media/blouse/vip/female/4.jpg",
          "/images/media/blouse/vip/female/5.jpg",
        ],
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "1,750,000 VNĐ",
  },
  /* =================== NÓN (CAP) =================== */
  {
    id: 21,
    name: "SURGICAL CAP",
    description:
      "Chất liệu Kaki cao cấp, chiếc NÓN PHẪU THUẬT sẽ mang đến cho khách hàng cảm giác thoải mái khi mang trong suốt ngày dài.",
    category: "accessories",
    subcategory: "unisex",
    colors: [
      {
        name: "Royal Blue",
        value: "#0066CC",
        images: [
          "/images/media/other/cap/1.jpg",
          "/images/media/other/cap/2.jpg",
          "/images/media/other/cap/3.jpg",
          "",
          "",
          "",
          "",
        ],
      },
    ],
    sizes: ["Free Size"],
    price: "250,000 VNĐ",
  },
]

/* ----------------------- UI helpers ----------------------- */
const SafeImage: React.FC<{
  src?: string
  alt: string
  fill?: boolean
  className?: string
  sizes?: string
}> = ({ src, alt, fill = true, className, sizes }) => {
  const finalSrc = src && src.length > 0 ? src : "/placeholder.svg"
  return (
    <Image
      src={finalSrc || "/placeholder.svg"}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes || "(max-width: 768px) 100vw, 33vw"}
      priority={false}
    />
  )
}

/* ----------------------- ProductCard ----------------------- */
function ProductCard({ product }: { product: Product }) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [isConsultOpen, setConsultOpen] = useState(false)

  const selectedColor = product.colors[selectedColorIdx]
  const images = useMemo(() => (selectedColor?.images || []).filter(Boolean), [selectedColor?.images])
  const hasImages = images.length > 0

  const goTo = (i: number) => {
    if (!hasImages) return
    const mod = ((i % images.length) + images.length) % images.length
    setCurrentImageIndex(mod)
  }
  const nextImage = () => goTo(currentImageIndex + 1)
  const prevImage = () => goTo(currentImageIndex - 1)

  const handleColorChange = (idx: number) => {
    setSelectedColorIdx(idx)
    setCurrentImageIndex(0)
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md">
      {/* GALLERY: aspect to prevent crop, object-contain to show full frame */}
      <div
        className="relative bg-white aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") nextImage()
          if (e.key === "ArrowLeft") prevImage()
        }}
        tabIndex={0}
        aria-label={`${product.name} gallery`}
      >
        <SafeImage alt={`${product.name} - ${selectedColor?.name || ""}`} className="object-contain" />
        {/* overlay layer for image; we render actual src via separate <Image> to keep fill+contain */}
        {hasImages && (
          <div className="absolute inset-0 overflow-hidden group">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt=""
              fill
              className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-125"
              sizes="(max-width:768px) 100vw, 33vw"
              priority={false}
            />
          </div>
        )}

        {/* arrows */}
        {hasImages && images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-4 md:h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
            </button>
          </>
        )}

        {/* dots */}
        {hasImages && images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentImageIndex ? "bg-black/80" : "bg-black/30"
                }`}
              />
            ))}
          </div>
        )}

        {/* badges */}
        <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {selectedColor?.name}
        </div>
        {hasImages && (
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}

        {/* thumbs (desktop) */}
        {hasImages && images.length > 1 && (
          <div className="absolute bottom-2 right-2 hidden sm:flex gap-1 bg-black/30 p-1 rounded">
            {images.slice(0, 6).map((src, i) => (
              <button
                key={src + i}
                onClick={() => goTo(i)}
                className={`w-10 h-10 rounded overflow-hidden border ${
                  i === currentImageIndex ? "border-white" : "border-white/50"
                }`}
                aria-label={`Thumbnail ${i + 1}`}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-sm tracking-wider text-foreground mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
        <div className="mb-3">
          <p className="text-lg font-bold text-[#213C4A]">{product.price}</p>
          <p className="text-xs text-muted-foreground">*giá chưa bao gồm VAT</p>
        </div>

        {/* COLORS */}
        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-2">
            Màu sắc: <span className="font-medium">{selectedColor?.name}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c, idx) => (
              <button
                key={c.name + idx}
                onClick={() => handleColorChange(idx)}
                className={`w-8 h-8 rounded-full border-2 transition-all relative ${
                  selectedColorIdx === idx
                    ? "border-[#213C4A] scale-110 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:scale-105"
                }`}
                style={{ backgroundColor: c.value }}
                title={c.name}
                aria-label={`Chọn màu ${c.name}`}
              >
                {selectedColorIdx === idx && <div className="absolute inset-0 rounded-full border-2 border-white" />}
                <div className="absolute -bottom-1 -right-1 bg-[#213C4A] text-white text-[10px] rounded-full min-w-4 h-4 px-[3px] flex items-center justify-center">
                  {(c.images || []).filter(Boolean).length}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* SIZES */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Kích thước:</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs border rounded transition-colors ${
                  selectedSize === size
                    ? "border-blue-500 bg-blue-50 text-[#213C4A]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <Button
          className="w-full bg-[#213C4A] hover:bg-[#1A313F] text-white"
          onClick={() => setConsultOpen(true)}
        >
          Tư Vấn
        </Button>
        <RegisterModal open={isConsultOpen} onOpenChange={setConsultOpen} />

        
      </CardContent>
    </Card>
  )
}

/* ----------------------- Sections (2 columns: Men / Women) ----------------------- */
function SubcategoryColumn({
  category,
  subcategory,
}: {
  category: Category
  subcategory?: { id: string; name: string; nameVi: string }
}) {
  if (!subcategory) return null

  const subProducts = products
    .filter((p) => p.category === category.id && p.subcategory === subcategory.id)
    .sort((a, b) => {
      const priceA = Number.parseInt(a.price.replace(/\D/g, ""), 10)
      const priceB = Number.parseInt(b.price.replace(/\D/g, ""), 10)
      return priceA - priceB
    })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="inline-block h-5 w-1.5 rounded-full bg-[#213C4A]" />
        <h3 className="text-lg font-semibold">
          {subcategory.name} • {subcategory.nameVi}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {subProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

function UnisexColumn({
  category,
  subcategory,
}: {
  category: Category
  subcategory: { id: string; name: string; nameVi: string }
}) {
  const subProducts = products
    .filter((p) => p.category === category.id && p.subcategory === "unisex")
    .sort((a, b) => {
      const priceA = Number.parseInt(a.price.replace(/\D/g, ""), 10)
      const priceB = Number.parseInt(b.price.replace(/\D/g, ""), 10)
      return priceA - priceB
    })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="inline-block h-5 w-1.5 rounded-full bg-[#213C4A]" />
        <h3 className="text-lg font-semibold">
          {subcategory.name} • {subcategory.nameVi}
        </h3>
      </div>

      {/* 2 cột ở màn hình lớn – giống các section khác */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {subProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

function CategorySection({ category }: { category: Category }) {
  const men = category.subcategories?.find((s) => s.id === "men")
  const women = category.subcategories?.find((s) => s.id === "women")
  const unisex = category.subcategories?.find(
    (s) => s.id === "unisex" || s.name?.toLowerCase() === "unisex" || s.nameVi?.toLowerCase().includes("unisex"),
  )

  const showUnisex = !!unisex && !men && !women // có unisex và KHÔNG có men/women

  return (
    <div className="mb-16">
      {/* Banner không crop – chỉ ảnh, không overlay */}
      <div className="relative mb-8 rounded-lg overflow-hidden bg-white">
        <div className="relative w-full aspect-[21/9]">
          <Image
            src={category.banner || "/placeholder.svg?height=200&width=1200"}
            alt={`${category.name} Banner`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>

      {showUnisex ? (
        <div className="grid grid-cols-1 gap-8">
          <UnisexColumn category={category} subcategory={unisex!} />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SubcategoryColumn category={category} subcategory={men} />
          <SubcategoryColumn category={category} subcategory={women} />
        </div>
      )}
    </div>
  )
}

/* ----------------------- Exported Component ----------------------- */
export function ProductShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sản phẩm của chúng tôi</h1>
          <p className="text-lg text-muted-foreground">Trang phục y tế chất lượng cao cho các chuyên gia</p>
        </div>

        {categories.map((category) => (
          <section key={category.id} id={category.id}>
            <CategorySection category={category} />
          </section>
        ))}
      </div>
    </section>
  )
}
