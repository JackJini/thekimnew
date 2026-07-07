"use client"

import { useState } from "react"
import { ShoppingCart, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import RegisterModal from "@/components/register-modal"

export function FloatingBuyButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToBottom = () => {
    const h = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    )
    window.scrollTo({ top: h, behavior: "smooth" })
  }

  return (
    <>
      {/* Stack 3 nút: Lên đầu • Mua hàng • Xuống cuối */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
        {/* Lên đầu trang */}
        <Button
          onClick={scrollToTop}
          className="h-10 w-10 p-0 rounded-full bg-white text-[#213C4A] hover:bg-gray-100 border shadow-lg"
          size="icon"
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>

        {/* Mua hàng */}
        <Button
          onClick={() => setIsModalOpen(true)}
          className="h-14 w-14 p-0 rounded-full bg-[#213C4A] hover:bg-[#1A313F] text-white shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
          aria-label="Mua hàng"
          title="Mua hàng"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Mua Hàng</span>
        </Button>

        {/* Xuống cuối trang */}
        <Button
          onClick={scrollToBottom}
          className="h-10 w-10 p-0 rounded-full bg-white text-[#213C4A] hover:bg-gray-100 border shadow-lg"
          size="icon"
          aria-label="Xuống cuối trang"
          title="Xuống cuối trang"
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      </div>

      <RegisterModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
