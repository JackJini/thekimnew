"use client"

import React from "react"
import Image from "next/image"

/* ===================== Constants (icon URLs) ===================== */
const ICONS = {
  messenger:
    "/images/media/icon/messenger.png",
  zalo:
    "/images/media/icon/zalo.png",
  phone:
    "/images/media/icon/phone.png",
}

/* ===================== Helpers ===================== */
function formatPhone(p: string) {
  const d = p.replace(/\D/g, "")
  if (d.length === 10) return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`
  if (d.length === 11) return `${d.slice(0, 4)} ${d.slice(4, 8)} ${d.slice(8)}`
  return p
}
function telHrefFromPhone(p: string) {
  const d = p.replace(/\D/g, "")
  return d.length >= 10 && d[0] === "0" ? `tel:+84${d.slice(1)}` : `tel:${d}`
}

/* ===================== Inline Zalo Link ===================== */
export function ZaloChatLink({
  phone = "0939142100",
  className = "",
  title,
}: {
  phone?: string
  className?: string
  title?: string
}) {
  const label = `Chat Zalo ${formatPhone(phone)}`
  return (
    <a
      href={`https://zalo.me/thekimbrand`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      title={title || label}
    >
      <Image
        src={ICONS.zalo}
        alt="Zalo"
        width={18}
        height={18}
        className="h-4.5 w-4.5 object-contain pointer-events-none select-none"
      />
    </a>
  )
}

/* ===================== Floating Buttons (small) ===================== */
export function HotLineButton({
  phone = "0939142100",
  messenger = "thekimblousecantho",
}: {
  phone?: string
  messenger?: string
}) {
  const zaloLabel = `Chat Zalo ${formatPhone(phone)}`
  const telHref = telHrefFromPhone(phone)
  const messengerHref = messenger.startsWith("http")
    ? messenger
    : `https://m.me/${messenger}`

  // Kích thước nhỏ
  const BTN_SIZE = "w-12 h-12" // 48px
  const ICON_24 = "h-6 w-6"    // 24px
  const GAP = "gap-3"          // nhỏ hơn

  return (
    <div className={`fixed right-3 top-4/5 -translate-y-1/2 z-50 flex flex-col items-center ${GAP}`}>
      {/* Messenger */}
      <a
        href={messengerHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Messenger"
        title="Chat Messenger"
        className={`relative block ${BTN_SIZE}`}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#213C4A] opacity-40" />
        <span className="absolute inset-0 rounded-full bg-[#213C4A] hover:bg-[#0A1A2F] text-white flex items-center justify-center shadow-lg transition-all duration-300">
          <Image
            src={ICONS.messenger}
            alt="Messenger"
            width={24}
            height={24}
            className={`${ICON_24} object-contain pointer-events-none select-none`}
          />
        </span>
      </a>

      {/* Zalo */}
      <a
        href={`https://zalo.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={zaloLabel}
        title={zaloLabel}
        className={`relative block ${BTN_SIZE}`}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#213C4A] opacity-40" />
        <span className="absolute inset-0 rounded-full bg-[#213C4A] hover:bg-[#0A1A2F] text-white flex items-center justify-center shadow-lg transition-all duration-300">
          <Image
            src={ICONS.zalo}
            alt="Zalo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain pointer-events-none select-none"
          />
        </span>
      </a>

      {/* Hotline */}
      <a
        href={telHref}
        aria-label={`Gọi ${formatPhone(phone)}`}
        title={`Gọi ${formatPhone(phone)}`}
        className={`relative block ${BTN_SIZE}`}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#213C4A] opacity-40" />
        <span className="absolute inset-0 rounded-full bg-[#213C4A] hover:bg-[#0A1A2F] text-white flex items-center justify-center shadow-lg transition-all duration-300">
          <Image
            src={ICONS.phone}
            alt="Hotline"
            width={24}
            height={24}
            className={`${ICON_24} object-contain pointer-events-none select-none`}
          />
        </span>
      </a>
    </div>
  )
}
