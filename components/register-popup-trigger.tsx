"use client"

import { useState, useEffect } from "react"
import RegisterModal from "./register-modal"

export default function RegisterPopupTrigger() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem("hasShownRegisterPopup")

    if (!hasShown) {
      const timer = setTimeout(() => {
        setOpen(true)
        sessionStorage.setItem("hasShownRegisterPopup", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  return <RegisterModal open={open} onOpenChange={setOpen} />
}
