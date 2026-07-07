"use client"
import { Shield, Award, Users, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const features = [
  {
    icon: Shield,
    title: "Chất lượng đảm bảo",
    description: "Sản phẩm được kiểm định nghiêm ngặt theo tiêu chuẩn quốc tế",
  },
  {
    icon: Award,
    title: "Chứng nhận y tế",
    description: "Được cấp phép bởi Bộ Y tế và các tổ chức uy tín",
  },
  {
    icon: Users,
    title: "Tin dùng bởi chuyên gia",
    description: "Hơn 10,000 bác sĩ và y tá đang sử dụng sản phẩm",
  },
  {
    icon: Truck,
    title: "Giao hàng nhanh chóng",
    description: "Miễn phí vận chuyển toàn quốc cho đơn hàng trên 1 triệu",
  },
]

const testimonials = [
  {
    icon: Shield,
    title: "Chất lượng đảm bảo",
    description: "Sản phẩm được kiểm định nghiêm ngặt theo tiêu chuẩn quốc tế",
  },
  {
    icon: Award,
    title: "Chứng nhận y tế",
    description: "Được cấp phép bởi Bộ Y tế và các tổ chức uy tín",
  },
  {
    icon: Users,
    title: "Tin dùng bởi chuyên gia",
    description: "Hơn 10,000 bác sĩ và y tá đang sử dụng sản phẩm",
  },
  {
    icon: Truck,
    title: "Giao hàng nhanh chóng",
    description: "Miễn phí vận chuyển toàn quốc cho đơn hàng trên 1 triệu",
  },
  {
    name: "Ths Bs Nguyễn Hiền Minh",
    role: "Phó trưởng đơn vị tiêm chủng Bệnh Viện ĐHYD TPHCM, Giảng viên trường ĐHYD TPHCM.",
    content:
      "Biết đến The KIM từ những ngày đầu tiên, mình thực sự ấn tượng bởi sự chỉn chu, tỉ mỉ và trải nghiệm các dòng sản phẩm áo blouse cao cấp tại The KIM trong suốt hai năm qua. The KIM là một thương hiệu Việt Nam mà mình tin tưởng và ủng hộ",
    picture:
    "/images/media/feedbacks/odmoxm.png",
  },
  {
    name: "BS CKII Hoàng Quốc Tưởng",
    role: "Giảng viên bộ môn Nhi Khoa, Trường Đại Học Y Dược TPHCM",
    content:
      "Bằng sự tỉ mỉ và chỉn chu, cùng chế độ chăm sóc khách hàng rất tốt, The KIM đã mang đến cho mình một chiếc áo Blouse và những bộ Scrub không chỉ đẹp từ chất liệu đến form dáng, mà còn đem lại cảm giác vô cùng thoải mái. Vote 5 sao cho chất lượng",
    picture:
      "/images/media/feedbacks/gxhyll.png",
  },
  {
    name: "Dr Trần Vũ Quang",
    role: "CEO TMV EVA",
    content:
      "Mình biết đến The KIM qua lời giới thiệu của một người bạn, lần đầu tiên mình trải nghiệm dịch vụ tại The KIM mình cảm thấy rất hài lòng, dịch vụ cao cấp và chăm sóc khách hàng rất tốt, đổi trả miễn phí cho khách hàng khi xảy ra sự cố và mình nhận lại những sản phẩm thực sự ưng ý, đẹp và cao cấp. Mình rất thích và tin tưởng The KIM",
    picture:
      "/images/media/feedbacks/wbqztb.png",
  },
  {
    name: "Chị Phạm Ngọc Yến Phương",
    role: "Giám đốc khu vực miền Nam TMV Ngọc Dung",
    content:
      "Cám ơn The KIM đã đem đến cho mình chiếc áo blouse trên cả mong đợi, được may đo thật tỉ mỉ và chỉnh sửa theo yêu cầu, mình rất hài lòng về sản phẩm và dịch vụ tại The KIM",
    picture:
      "/images/media/feedbacks/jxs5qz.png",
  },
  {
    name: "TS BS HỒNG CHUYÊN",
    role: "Giảng viên bộ môn Da Liễu ĐHYD TPHCM",
    content:
      "The KIM đã chinh phục mình bằng một sản phẩm chất lượng và thái độ phục vụ nhiệt tình, đặc biệt là may đo theo yêu cầu, mình rất tin tưởng và yên tâm khi sử dụng sản phẩm tại The KIM và sẽ giới thiệu đến mọi người biết đến.",
    picture:
      "/images/media/feedbacks/m7tsob.png",
  },
  {
    name: "Ts Bs Lê Văn Minh",
    role: "Trưởng khoa Y Trường ĐHYD Cần Thơ",
    content:
      "The KIM là một thương hiệu đến từ Cần Thơ, và là một trong thương hiệu cao cấp về áo Blouse hàng đầu tại Việt Nam, trong suốt thời gian qua mình đã tin tưởng và sử dụng dịch vụ tại The KIM, chất lượng dịch vụ vô cùng tốt cùng chất lượng sản phẩm đạt độ hoàn thiện cao. Đánh giá 5 sao cho chất lượng.",
    picture:
      "/images/media/feedbacks/exjywg.png",
  },
  {
    name: "Dr Christina",
    role: "Founder of The Phoenix Medical Academy, USA",
    content:
      "Mình sinh sống và làm việc tại Mỹ đã lâu, nay mình có cơ hội được trải nghiệm chiếc áo blouse cao cấp Made In Việt Nam, mình thực sự ấn tượng bởi sự chỉn chu thương hiệu, sự cao cấp trong từng chi tiết như các thương hiệu quốc tế mình từng mặc, mình tin tưởng và giới thiệu The KIM đến mọi người.",
    picture:
      "/images/media/feedbacks/ymdxnt.png",
  },
  {
    name: "Dr Phạm Sỹ.",
    role: "",
    content:
      "Điều mình ấn tượng nhất ở The KIM đó chính là chế độ hậu mãi rất tốt, chính sách bảo vệ quyền lợi khách hàng tối ưu và dành mọi điều tốt nhất cho khách hàng, thái độ làm việc chuyên nghiệp, sự chỉn chu và tỉ mỉ trong từng khâu đã thực sự chinh phục mình từ chiếc áo đầu tiên.",
    picture:
      "/images/media/feedbacks/lhzlkd.png",
  },
  {
    name: "",
    role: "",
    content: "",
    picture: "",
  },
  {
    name: "",
    role: "",
    content: "",
    picture: "",
  },
]

export function TrustIndicators() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <section
          id="testimonials"
          className="py-12 md:py-20 px-2 md:px-8 lg:px-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 font-[family-name:var(--font-space-grotesk)]">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Hàng nghìn chuyên gia y tế tin tưởng và sử dụng sản phẩm của chúng tôi
            </p>
          </div>

<Swiper
  modules={[Autoplay, Pagination]}
  loop
  autoHeight={false}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={700}
  spaceBetween={28}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  }}
  className="pb-14"
>
  {testimonials
    .filter((t) => t.name && t.content)
    .map((testimonial, index) => (
      <SwiperSlide
        key={index}
        className="!h-auto flex"
      >
        <Card className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="flex h-full flex-1 flex-col p-0">
            {/* IMAGE */}
            <div className="h-[420px] overflow-hidden rounded-t-3xl bg-white">
              <img
                src={testimonial.picture}
                alt={testimonial.name}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col px-8 py-8 text-center">

              {/* Quote */}
              <div className="mb-5 text-7xl leading-none text-zinc-200 font-serif">
                "
              </div>

              {/* Review */}
              <div className="flex-1 flex items-center">
                <p className="mx-auto italic text-[17px] leading-8 text-zinc-600">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                  {testimonial.name}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                  {testimonial.role || "Chuyên gia y tế"}
                </p>
              </div>

            </div>
          </CardContent>
        </Card>
      </SwiperSlide>
    ))}
</Swiper>
        </section>
      </div>
    </section>
  )
}
