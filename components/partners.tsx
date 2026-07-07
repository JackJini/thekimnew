import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  {
    name: "BỆNH VIỆN CHỢ RẪY",
    logo: "/images/media/partners/choray.png",
    description: "",
  },
  {
    name: "BỆNH VIỆN ĐẠI HỌC Y DƯỢC",
    logo: "/images/media/partners/dhyd.png",
    description: "",
  },
  {
    name: "BÊNH VIÊN QUÂN Y 175",
    logo: "/images/media/partners/175.png",
    description: "",
  },
  {
    name: "BỆNH VIỆN DA LIỄU TP.HCM",
    logo: "/images/media/partners/dalieu.jpg",
    description: "",
  },
  {
    name: "BỆNH VIỆN RĂNG HÀM MẶT TP.HCM",
    logo: "/images/media/partners/rhm.png",
    description: "",
  },
  {
    name: "BỆNH VIỆN QUÂN Y 120",
    logo: "/images/media/partners/120.jpg",
    description: "",
  },
  {
    name: "BỆNH VIỆN HỮU NGHỊ VIỆT ĐỨC",
    logo: "/images/media/partners/vietduc.jpg",
    description: "",
  },
  {
    name: "BỆNH VIỆN HOÀN MỸ",
    logo: "/images/media/partners/hoanmy.png",
    description: "",
  },
  {
    name: "BỆNH VIỆN MẮT TP.HCM",
    logo: "/images/media/partners/mathcm.png",
    description: "",
  },
  {
    name: "BỆNH VIỆN RĂNG HÀM MẶT SÀI GÒN",
    logo: "/images/media/partners/rhmsg.jpg",
    description: "",
  },
  {
    name: "BỆNH VIỆN THẨM MỸ SIAM THAILAND",
    logo: "/images/media/partners/siam.jpg",
    description: "",
  },
  {
    name: "BỆNH VIỆN THẨM MỸ NAM AN",
    logo: "/images/media/partners/naman.png",
    description: "",
  },
  {
    name: "PEACE DENTISTRY",
    logo: "/images/media/partners/peace.png",
    description: "",
  },
  {
    name: "NHA KHOA THUỲ ANH",
    logo: "/images/media/partners/thuyanh.jpg",
    description: "",
  },
  {
    name: "TÂM PHÚC SMILE",
    logo: "/images/media/partners/tamphuc.png",
    description: "",
  },
  {
    name: "PHÒNG KHÁM DA LIỄU THẨM MỸ ÁNH TÚ",
    logo: "/images/media/partners/anhtu.png",
    description: "",
  },
  {
    name: "HESY DENTAL STUDIO",
    logo: "/images/media/partners/hesy.jpg",
    description: "",
  },
  {
    name: "PREMIER DENTAL",
    logo: "/images/media/partners/premier.jpg",
    description: "",
  },
  {
    name: "LG CLINIC",
    logo: "/images/media/partners/lg.png",
    description: "",
  },
  {
    name: "SOFWAVE",
    logo: "/images/media/partners/sofwave.png",
    description: "",
  },
  {
    name: "THU CÚC BEAUTY",
    logo: "/images/media/partners/thucuc.png",
    description: "",
  },
  {
    name: "FOTONA",
    logo: "/images/media/partners/fotona.png",
    description: "",
  },
  {
    name: "NEAUVIA",
    logo: "/images/media/partners/neauvia.png",
    description: "",
  },
  {
    name: "ZO SKIN HEALTH",
    logo: "/images/media/partners/zo.png",
    description: "",
  },

]

export function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Đối Tác Của Chúng Tôi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Được tin tưởng bởi các bệnh viện và cơ sở y tế hàng đầu Việt Nam
          </p>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {partners.map((partner, index) => (
    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
      <CardContent className="p-6 text-center">
        <div className="relative h-20 mb-4 flex items-center justify-center">
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={partner.name}
            width={200}
            height={80}
            className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">{partner.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{partner.description}</p>
      </CardContent>
    </Card>
  ))}
</div>


        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-emerald-700 font-medium text-sm">Hơn 500+ cơ sở y tế đang tin tưởng sử dụng</span>
          </div>
        </div>
      </div>
    </section>
  )
}
