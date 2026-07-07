"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import RegisterModal from "@/components/register-modal"

export function HotLineButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <div className="relative w-16 h-16">
          {/* Hiệu ứng vòng tròn */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#213C4A] opacity-50"></span>

          {/* Nút gọi chính */}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 bg-[#213C4A] hover:bg-[#1A313F] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            size="icon"
          >
            {/* Icon điện thoại */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.48.69.55 0 1 .45 1 1v3.5a1 1 0 01-1 1C10.07 21.07 2.93 13.93 2.93 5a1 1 0 011-1H7.5c.55 0 1 .45 1 1 0 1.15.24 2.36.69 3.48a1 1 0 01-.21 1.11l-2.36 2.2z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>

      
    </>
  )
}
