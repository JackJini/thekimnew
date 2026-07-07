"use server"

export async function submitRegistration(formData: FormData) {
  // Extract form data matching the register modal fields
  const name = formData.get("name") as string
  const phone = formData.get("phone") as string
  const gender = formData.get("gender") as string
  const option = formData.get("option") as string
  const size = formData.get("size") as string

  // Basic validation
  if (!name || !phone) {
    throw new Error("Missing required fields")
  }

  // Prepare data for Google Sheets
  const timestamp = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  try {
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyU55LIFsq8K5sqxNFfFUwj3NRNFiDqbSM4OESiLlEaF3L98xnqlAnG9ImsJLIqeiwT/exec"

    console.log("[v0] Sending consultation data to Google Sheets:", {
      timestamp,
      name,
      phone,
      gender,
      option,
      size,
    })

    const formBody = new URLSearchParams({
      timestamp,
      name,
      phone,
      gender,
      option,
      size,
    })

    const response = await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // sửa lại header
  },
  body: JSON.stringify({
    timestamp,
    name,
    phone,
    gender,
    option,
    size,
  }),
  redirect: "follow",
})


    console.log("[v0] Google Sheets API response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] Google Sheets API error response:", errorText)
      throw new Error(`Google Sheets API returned ${response.status}: ${errorText}`)
    }

    const result = await response.text()
    console.log("[v0] Google Sheets API success response:", result)

    return { success: true, message: "Đăng ký tư vấn thành công" }
  } catch (error) {

    // Still log locally even if Google Sheets fails
    console.log("[v0] Consultation data (local backup):", {
      timestamp,
      name,
      phone,
      gender,
      option,
      size,
    })

    return { success: false, message: "Có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại." }
  }
}
