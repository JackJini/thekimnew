import { Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="text-sm font-light">
      {/* Top icons feature */}
      <div className="bg-[#173249] py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 px-4 text-white">
          {[
            { icon: "/images/media/icon/coworking.png", text: "Giao hàng miễn phí cho đơn hàng từ 3 triệu" },
            { icon: "/images/media/icon/verified.png", text: "Cam kết chính hãng" },
            { icon: "/images/media/icon/school.png", text: "Thêu tên vi tính theo yêu cầu" },
            { icon: "/images/media/icon/award.png", text: "Bảo hành trong 30 ngày" },
            { icon: "/images/media/icon/box.png", text: "Hỗ trợ đổi trả nếu không vừa size" },
            { icon: "/images/media/icon/landing.png", text: "Giao hàng tận nhà, trả tiền tận nơi (COD)" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <img src={item.icon} alt="icon" className="h-6 mt-1 filter invert" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Middle section: logo + info + social */}
      <div className="bg-white text-[#173249] py-10 border-t">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-4">
          {/* Logo */}
          <div className="flex-1 flex flex-col items-start md:items-center">
            <img
              src="/images/media/icon/logofull.png"
              alt="The KIM logo"
              className="h-20 mb-2 object-contain"
            />
            <p className="tracking-widest text-sm font-semibold text-center md:text-base leading-snug">
              KHI ĐẲNG CẤP & Y ĐỨC SONG HÀNH
            </p>
          </div>

          {/* Info */}
          <div className="flex-1 text-sm space-y-2">
            <p><strong>𝐅𝐥𝐚𝐠𝐬𝐡𝐢𝐩 𝐬𝐭𝐨𝐫𝐞:</strong> 245B Phan Đình Phùng, Phường Cầu Kiệu, Hồ Chí Minh.</p>
            <p><strong>Branch:</strong> 167 Nguyễn Văn Cừ, Phường Cái Khế, Cần Thơ</p>
            <p><strong>Phone:</strong> (+84) 939 142 100</p>
            <p><strong>Email:</strong> thekim.br@gmail.com</p>
          </div>

          {/* Social icons: Facebook • YouTube • Zalo */}
          <div className="flex-1 flex lg:justify-end space-x-4">
            <a
              href="https://www.facebook.com/thekimblousecantho"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3b5998] p-2 rounded-full"
              aria-label="Facebook The Kim"
              title="Facebook The Kim"
            >
              <Facebook className="text-white h-5 w-5" />
            </a>

            <a
              href="https://www.youtube.com/@thekimbrand9084"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] p-2 rounded-full"
              aria-label="YouTube The Kim"
              title="YouTube The Kim"
            >
              <Youtube className="text-white h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#173249] text-white text-xs text-center py-4">
        <p>© 2025 The Kim Brand</p>
        <p>VIETNAM | SINGAPORE | THAILAND | INDONESIA | HOLLAND | CAMPUCHIA | AMERICA</p>
      </div>
    </footer>
  )
}
