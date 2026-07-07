"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { submitRegistration } from "@/lib/actions"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

interface RegisterModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function RegisterModal({ open, onOpenChange }: RegisterModalProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "Nam",
    option: "SCRUB",
    customOption: "",
    size: "S",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setFormData({ name: "", phone: "", gender: "Nam", option: "SCRUB", customOption: "", size: "S" })
    formRef.current?.reset()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setStatusMessage("")

    const { name, phone, gender, option, customOption, size } = formData

    if (!name || !phone) {
      showError("Vui lòng điền đầy đủ thông tin bắt buộc")
      return
    }

    try {
      const formPayload = new FormData()
      formPayload.append("name", name)
      formPayload.append("phone", phone)
      formPayload.append("gender", gender)
      formPayload.append("option", option === "KHÁC" ? customOption : option)
      formPayload.append("size", size)

      await submitRegistration(formPayload)

      setSubmitStatus("success")
      setStatusMessage("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
      toast({ title: "🎉 Thành công", description: statusMessage, duration: 4000 })

      setTimeout(() => {
        resetForm()
        onOpenChange(false)
      }, 3000)
    } catch (err) {
      console.error(err)
      showError("Đăng ký thất bại. Vui lòng thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const showError = (msg: string) => {
    setSubmitStatus("error")
    setStatusMessage(msg)
    toast({ title: "Lỗi", description: msg, variant: "destructive" })
    setIsSubmitting(false)
  }

  const sizeOptions = formData.gender === "Nam" ? ["S", "M", "L", "XL", "XXL"] : ["XS", "S", "M", "L", "XL"]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-extrabold text-[#173249] uppercase">
            Đăng ký tư vấn
          </DialogTitle>
        </DialogHeader>

        {submitStatus !== "idle" && (
          <div
            className={`p-3 mt-4 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md transition ${
              submitStatus === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {submitStatus === "success" ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            <span>{statusMessage}</span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="mt-4 space-y-4">
          <Input
            name="name"
            placeholder="Họ và tên *"
            value={formData.name}
            onChange={handleInputChange}
            className="rounded-lg"
            disabled={isSubmitting || submitStatus === "success"}
          />

          <Input
            name="phone"
            placeholder="Số điện thoại *"
            value={formData.phone}
            onChange={handleInputChange}
            className="rounded-lg"
            disabled={isSubmitting || submitStatus === "success"}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-[#173249]"
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>

          <select
            name="option"
            value={formData.option}
            onChange={handleInputChange}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-[#173249]"
          >
            <option value="SCRUB">SCRUB</option>
            <option value="BLOUSE">BLOUSE</option>
            <option value="KHÁC">KHÁC</option>
          </select>

          {formData.option === "KHÁC" && (
            <Input
              name="customOption"
              placeholder="Vui lòng ghi rõ lựa chọn của bạn"
              value={formData.customOption}
              onChange={handleInputChange}
              className="rounded-lg"
            />
          )}

          <select
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-[#173249]"
          >
            {sizeOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <Button
            type="submit"
            className="w-full rounded-full text-white font-bold py-3 text-lg bg-[#173249] hover:bg-[#112533]"
            disabled={isSubmitting || submitStatus === "success"}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> ĐANG XỬ LÝ...
              </>
            ) : (
              "TƯ VẤN"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
