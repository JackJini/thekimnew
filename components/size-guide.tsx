import Image from "next/image"

type Row = Record<string, number | string>

type Chart = {
  title: string
  image?: string
  columns: { key: string; label: string }[]
  rows: Row[]
  note?: string
}

const scrubCharts: Chart[] = [
  {
    title: "THÔNG SỐ ĐO SCRUB NỮ",
    image: "",
    columns: [
      { key: "size", label: "Size" },
      { key: "vai", label: "Vai" },
      { key: "nach", label: "Vòng Nách" },
      { key: "tay", label: "Dài Tay" },
      { key: "v1", label: "Vòng 1" },
      { key: "v2", label: "Vòng 2" },
      { key: "v3", label: "Vòng 3" },
      { key: "daiAo", label: "Dài Áo" },
      { key: "bapDui", label: "Bắp Đùi )" },
      { key: "daiQuan", label: "Dài Quần" },
      { key: "canNang", label: "Cân Nặng" },
    ],
    rows: [
      { size: "S",   vai: 35, nach: 44, tay: 18, v1: 90,  v2: 82,  v3: 100, daiAo: 60, bapDui: 58, daiQuan: 92,  canNang: "45 - 50KG" },
      { size: "M",   vai: 36, nach: 46, tay: 18, v1: 94,  v2: 86,  v3: 104, daiAo: 62, bapDui: 60, daiQuan: 93,  canNang: "50 - 55KG" },
      { size: "L",   vai: 36, nach: 48, tay: 18, v1: 98,  v2: 90,  v3: 108, daiAo: 64, bapDui: 62, daiQuan: 94,  canNang: "55 - 60KG" },
      { size: "XL",  vai: 37, nach: 50, tay: 19, v1: 102, v2: 94,  v3: 112, daiAo: 65, bapDui: 64, daiQuan: 95,  canNang: "60 - 65KG" },
      { size: "2XL", vai: 39, nach: 52, tay: 20, v1: 106, v2: 98,  v3: 116, daiAo: 66, bapDui: 66, daiQuan: 96,  canNang: "> 65KG"   },
      { size: "3XL", vai: 40, nach: 54, tay: 21, v1: 110, v2: 102, v3: 120, daiAo: 67, bapDui: 68, daiQuan: 97,  canNang: ">70KG"    },
      { size: "4XL", vai: 41, nach: 56, tay: 22, v1: 114, v2: 106, v3: 124, daiAo: 68, bapDui: 70, daiQuan: 98,  canNang: ">75KG"    },
      { size: "5XL", vai: 42, nach: 58, tay: 23, v1: 118, v2: 110, v3: 128, daiAo: 69, bapDui: 72, daiQuan: 99,  canNang: ">80KG"    },
      { size: "6XL", vai: 43, nach: 60, tay: 24, v1: 122, v2: 114, v3: 132, daiAo: 70, bapDui: 74, daiQuan: 100, canNang: ">85KG"    },
    ],
    note: "Sai số ± 1CM",
  },
  {
    title: "THÔNG SỐ ĐO SCRUB NAM",
    image: "",
    columns: [
      { key: "size", label: "Size" },
      { key: "vai", label: "Vai" },
      { key: "nach", label: "Vòng Nách" },
      { key: "tay", label: "Dài Tay" },
      { key: "v1", label: "Vòng 1" },
      { key: "v2", label: "Vòng 2" },
      { key: "v3", label: "Vòng 3" },
      { key: "daiAo", label: "Dài Áo" },
      { key: "bapDui", label: "Bắp Đùi" },
      { key: "daiQuan", label: "Dài Quần" },
      { key: "canNang", label: "Cân Nặng" },
    ],
    rows: [
      { size: "S",   vai: 46, nach: 56, tay: 22, v1: 100, v2: 96,  v3: 96,  daiAo: 71, bapDui: 62, daiQuan: 92,  canNang: "50 - 60KG" },
      { size: "M",   vai: 47, nach: 58, tay: 23, v1: 104, v2: 100, v3: 100, daiAo: 72, bapDui: 64, daiQuan: 93,  canNang: "60 - 66KG" },
      { size: "L",   vai: 48, nach: 60, tay: 24, v1: 108, v2: 104, v3: 104, daiAo: 73, bapDui: 66, daiQuan: 94,  canNang: "66 - 72KG" },
      { size: "XL",  vai: 49, nach: 62, tay: 25, v1: 112, v2: 108, v3: 108, daiAo: 74, bapDui: 68, daiQuan: 95,  canNang: "72 - 75KG" },
      { size: "2XL", vai: 50, nach: 64, tay: 26, v1: 116, v2: 112, v3: 112, daiAo: 75, bapDui: 70, daiQuan: 96,  canNang: "> 75KG"   },
      { size: "3XL", vai: 51, nach: 66, tay: 27, v1: 120, v2: 116, v3: 116, daiAo: 76, bapDui: 71, daiQuan: 97,  canNang: ">80KG"    },
      { size: "4XL", vai: 52, nach: 68, tay: 28, v1: 124, v2: 120, v3: 120, daiAo: 77, bapDui: 72, daiQuan: 98,  canNang: ">85KG"    },
      { size: "5XL", vai: 53, nach: 70, tay: 29, v1: 128, v2: 124, v3: 124, daiAo: 78, bapDui: 73, daiQuan: 99,  canNang: ">90KG"    },
      { size: "6XL", vai: 54, nach: 72, tay: 30, v1: 132, v2: 128, v3: 128, daiAo: 79, bapDui: 74, daiQuan: 100, canNang: ">95KG"    },
    ],
    note: "Sai số ± 1CM",
  },
]

const blouseCharts: Chart[] = [
  {
    title: "THÔNG SỐ ĐO BLOUSE NỮ",
    image: "",
    columns: [
      { key: "size", label: "Size" },
      { key: "vai", label: "Vai" },
      { key: "bapTay", label: "Bắp Tay" },
      { key: "tay", label: "Dài Tay" },
      { key: "ongTay", label: "Ống Tay" },
      { key: "v1", label: "Vòng 1" },
      { key: "v2", label: "Vòng 2" },
      { key: "v3", label: "Vòng 3" },
      { key: "daiAo", label: "Dài Áo" },
      { key: "canNang", label: "Cân Nặng" },
    ],
    rows: [
      { size: "S",   vai: 37, bapTay: 38, tay: 51, ongTay: 11, v1: 88,  v2: 72,  v3: 96,  daiAo: 91, canNang: "45 - 50KG" },
      { size: "M",   vai: 38, bapTay: 40, tay: 52, ongTay: 12, v1: 92,  v2: 76,  v3: 100, daiAo: 92, canNang: "50 - 55KG" },
      { size: "L",   vai: 39, bapTay: 42, tay: 53, ongTay: 12, v1: 96,  v2: 80,  v3: 104, daiAo: 93, canNang: "55 - 60KG" },
      { size: "XL",  vai: 40, bapTay: 44, tay: 54, ongTay: 13, v1: 100, v2: 84,  v3: 108, daiAo: 94, canNang: "60 - 65KG" },
      { size: "XXL", vai: 41, bapTay: 46, tay: 55, ongTay: 13, v1: 104, v2: 86,  v3: 112, daiAo: 95, canNang: "> 65KG"   },
      { size: "3XL", vai: 42, bapTay: 48, tay: 56, ongTay: 13, v1: 108, v2: 90,  v3: 116, daiAo: 96, canNang: ">70KG"    },
      { size: "4XL", vai: 43, bapTay: 50, tay: 57, ongTay: 14, v1: 112, v2: 94,  v3: 120, daiAo: 97, canNang: ">75KG"    },
      { size: "5XL", vai: 44, bapTay: 52, tay: 58, ongTay: 14, v1: 116, v2: 98,  v3: 124, daiAo: 98, canNang: ">80KG"    },
      { size: "6XL", vai: 45, bapTay: 54, tay: 59, ongTay: 14, v1: 120, v2: 102, v3: 128, daiAo: 99, canNang: ">85KG"    },
    ],
    note: "Sai số ± 1CM",
  },
  {
    title: "THÔNG SỐ ĐO BLOUSE NAM",
    image: "",
    columns: [
      { key: "size", label: "Size" },
      { key: "vai", label: "Vai" },
      { key: "bapTay", label: "Bắp Tay" },
      { key: "tay", label: "Dài Tay" },
      { key: "ongTay", label: "Ống Tay" },
      { key: "v1", label: "Vòng 1" },
      { key: "v2", label: "Vòng 2" },
      { key: "v3", label: "Vòng 3" },
      { key: "daiAo", label: "Dài Áo" },
      { key: "canNang", label: "Cân Nặng" },
    ],
    rows: [
      { size: "S",   vai: 44, bapTay: 44, tay: 56, ongTay: 14, v1: 98,  v2: 96,  v3: 104, daiAo: 98, canNang: "50 - 60KG" },
      { size: "M",   vai: 45, bapTay: 46, tay: 57, ongTay: 14, v1: 102, v2: 100, v3: 108, daiAo: 99, canNang: "60 - 66KG" },
      { size: "L",   vai: 46, bapTay: 48, tay: 58, ongTay: 15, v1: 106, v2: 104, v3: 112, daiAo: 100, canNang: "66 - 72KG" },
      { size: "XL",  vai: 47, bapTay: 50, tay: 59, ongTay: 15, v1: 110, v2: 108, v3: 116, daiAo: 101, canNang: "72 - 75KG" },
      { size: "XXL", vai: 48, bapTay: 52, tay: 60, ongTay: 15, v1: 114, v2: 112, v3: 120, daiAo: 102, canNang: "> 75KG"   },
      { size: "3XL", vai: 49, bapTay: 54, tay: 61, ongTay: 15, v1: 118, v2: 116, v3: 124, daiAo: 103, canNang: ">80KG"    },
      { size: "4XL", vai: 50, bapTay: 56, tay: 62, ongTay: 15, v1: 122, v2: 120, v3: 128, daiAo: 104, canNang: ">85KG"    },
      { size: "5XL", vai: 51, bapTay: 58, tay: 63, ongTay: 16, v1: 126, v2: 124, v3: 132, daiAo: 105, canNang: ">90KG"    },
      { size: "6XL", vai: 52, bapTay: 60, tay: 64, ongTay: 16, v1: 130, v2: 128, v3: 136, daiAo: 106, canNang: ">95KG"    },
    ],
    note: "Sai số ± 1CM",
  },
]

// ---------- UI ----------

function Table({ chart }: { chart: Chart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="bg-[#213C4A] text-white px-5 py-4">
        <h3 className="text-center font-semibold">{chart.title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {chart.columns.map((c) => (
                <th key={c.key} className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {chart.rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {chart.columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {chart.note && (
        <div className="px-5 py-3 text-xs text-right text-gray-500 border-t">{chart.note}</div>
      )}
    </div>
  )
}

export default function SizeGuide() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 space-y-16">
        {/* SCRUB */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center">Hướng Dẫn Chọn Size – Scrub</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {scrubCharts.map((c, i) => (
              <Table key={i} chart={c} />
            ))}
          </div>
        </div>

        {/* BLOUSE */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center">Hướng Dẫn Chọn Size – Blouse</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blouseCharts.map((c, i) => (
              <Table key={i} chart={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
