"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import Image from "next/image"

const slides = [
  {image: "/images/media/group/1.svg"},
  { image: "/images/media/group/2.svg" },
  { image: "/images/media/group/3.svg" },
  { image: "/images/media/group/4.svg" },
]

export function HeroSection() {
  return (
    // nếu header cao 64px, có thể đổi thành h-[calc(100vh-64px)]
    <section className="relative h-screen bg-white">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!h-full">
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={`banner-${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-contain object-center select-none pointer-events-none"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Nút chuyển trái/phải */}
        <button className="hero-prev absolute z-20 top-1/2 -translate-y-1/2 left-4 bg-white/70 hover:bg-white/90 text-gray-800 px-3 py-2 rounded-full shadow transition">
          ←
        </button>
        <button className="hero-next absolute z-20 top-1/2 -translate-y-1/2 right-4 bg-white/70 hover:bg-white/90 text-gray-800 px-3 py-2 rounded-full shadow transition">
          →
        </button>
      </Swiper>
    </section>
  )
}
