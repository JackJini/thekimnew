// components/about-us.tsx
"use client"

import React from "react"
import { DM_Sans, Space_Grotesk } from "next/font/google";


export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function AboutUs() {
  return (
    <section id="aboutus" className="bg-[#F6F7F8] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="mb-4 text-4xl text-[#C9C9C9] leading-none select-none">“</div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F2E3A] uppercase">
            Sứ mệnh "The KIM" là gì? <br />
            <span className="block mt-1">Là giúp bạn tỏa sáng.</span>
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#344B5B]">
            <p>
              The K I M, K là từ viết tắt <strong>KNOWLEDGE</strong>, I từ <strong>INTERESTING</strong> và M của{" "}
              <strong>MODERN</strong>. Hãy gọi một cách đơn giản hơn, giá trị chúng tôi muốn xây dựng tập trung vào 3
              yếu tố cốt lõi, TRÍ, TÂM, MỸ.
            </p>

            <p>
              Hình tượng viên kim cương đến được thổi nên để thể hiện một sự mạnh mẽ kiên cường, tổng màu trắng đen
              theo chiêm tinh học được nhắc đến như một giá trị sinh tử luân hồi.
            </p>

            <p>
              Vì sứ mệnh Y nghiệp chúng ta hằng ngày luôn phải đối mặt với những ranh giới sống còn luôn hiện hữu xảy
              ra từng ngày mà chúng ta đôi khi không lường trước được. Chúng tôi muốn đến gần bạn những gợi nhớ đậm
              chất sâu xa, như con có thắt bại tuyệt vọng, đứng dậy với niềm chí, hãy chấp nhận mạnh mẽ và đừng hèn
              yếu. Con người mạnh mẽ đứng trong mới sẽ mở ra cho người thợ. Nếu bạn đang đứng trên chân của chính
              thành công, mong bạn hãy luôn nhớ về đường sống bạn đã đi, biết ơn nó để bớt oán than và cũng bớt oán
              bạn chạm bạn trong những lúc khó khăn nhất. Ở nơi giàu, được sinh ra và tôn tại đều có lý do, cuộc đời
              sẽ đưa bạn đến đúng vị trí bạn xứng đáng nhận được.
            </p>

            <p>
              Vì vậy cứ vững cố lên bạn nhé. <strong>Chúng tôi tin bạn.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
