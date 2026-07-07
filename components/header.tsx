"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useState, type MouseEvent } from "react"

const HEADER_OFFSET = 72 // ~h-16 (64px) + chút đệm

type NavItem = {
  id: "home" | "scrub" | "blouse" | "accessories" | "aboutus"
  label: string
}

const NAV_LINKS: NavItem[] = [
  { id: "home", label: "TRANG CHỦ" },
  { id: "scrub", label: "SCRUB" },
  { id: "blouse", label: "BLOUSE" },
  { id: "accessories", label: "SẢN PHẨM KHÁC" },
  { id: "aboutus", label: "VỀ CHÚNG TÔI" },
]

function MobileMenu({ onGo }: { onGo: (id: NavItem["id"]) => void }) {
  return (
    <nav className="flex-1 px-6 py-4">
      <ul className="space-y-4">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => onGo(link.id)}
              className="block w-full text-left text-base font-medium text-gray-800 hover:text-[#173249] transition-colors py-3 border-b border-gray-100 last:border-b-0"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const smoothScrollTo = (targetId: NavItem["id"]) => {
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(targetId)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: "smooth" })
  }

  const handleClick =
    (id: NavItem["id"]) =>
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      setIsOpen(false)
      smoothScrollTo(id)
    }

  const hrefFor = (id: NavItem["id"]) => (id === "home" ? "#" : `#${id}`)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/media/icon/logofull.png"
              alt="The Kim logo"
              width={160}
              height={80}
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={hrefFor(link.id)}
                onClick={handleClick(link.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <strong>{link.label}</strong>
              </a>
            ))}
          </nav>

          {/* Mobile nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Mở menu</span>
                </Button>
              </SheetTrigger>

              {/* Panel kiểu như ảnh: chiếm ~75vw, phần còn lại mờ */}
              <SheetContent
                side="right"
                className="right-0 top-0 bottom-0 w-[75vw] max-w-[350px] p-0 z-[70] bg-white shadow-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-end px-4 pt-4 pb-2">
                    {/* Nút đóng được SheetContent render sẵn */}
                  </div>

                  <MobileMenu
                    onGo={(id) => {
                      setIsOpen(false)
                      smoothScrollTo(id)
                    }}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
