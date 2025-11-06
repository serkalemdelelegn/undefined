"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Save, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { EditableHeroSection } from "@/components/editable-hero-section"
import { EditableStatisticsSection } from "@/components/editable-statistics-section"
import { EditableMachinerySection } from "@/components/editable-machinery-section"

interface HeroData {
  badge: string
  title: string
  description: string
}

interface Statistic {
  id: string
  number: string
  title: string
}

interface Machinery {
  id: string
  title: string
  description: string
  keyFeatures: string[]
  commonApplications: string[]
  precision: string
  power: string
  area: string
  image: string
}

export default function ServicesPage() {
  const [isSaving, setIsSaving] = useState(false)

  const [heroData, setHeroData] = useState<HeroData>({
    badge: "Services",
    title: "FabLab Services",
    description: "Explore our state-of-the-art machinery and equipment available for your projects",
  })

  const [statistics, setStatistics] = useState<Statistic[]>([
    { id: "1", number: "15", title: "Equipment Types" },
    { id: "2", number: "24/7", title: "Access Hours" },
    { id: "3", number: "500+", title: "Projects Completed" },
    { id: "4", number: "98%", title: "Uptime" },
  ])

  const [machineries, setMachineries] = useState<Machinery[]>([
    {
      id: "1",
      title: "3D Printers",
      description:
        "Advanced 3D printing technology for rapid prototyping and product development. Create complex geometries and functional parts with precision.",
      keyFeatures: [
        "Rapid prototyping of complex designs",
        "Multiple material support (PLA, ABS, PETG)",
        "High precision layer resolution",
        "Large build volume capacity",
        "Perfect for product development",
      ],
      commonApplications: ["Product prototyping", "Educational models", "Custom parts fabrication", "Design iteration"],
      precision: "±0.1mm",
      power: "500W",
      area: "2m x 3m",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JiDrJTAMe9uTfuGMnguaWPpfDBAMrJ.png",
    },
  ])

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Services page updated successfully!")
  }

  return (
    <div>
      <div className="flex items-center gap-2 px-6 pt-6">
        <Link
          href="/admin/programs/fablab"
          className="flex items-center gap-2 text-[#367375] hover:text-[#24C3BC] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to FabLab</span>
        </Link>
      </div>

      <div className="px-6 py-6">
        <EditableHeroSection data={heroData} onSave={setHeroData} />
      </div>

      <div className="px-6 pb-6">
        <EditableStatisticsSection statistics={statistics} onSave={setStatistics} />
      </div>

      <div className="p-6 max-w-6xl">
        <div className="space-y-6">
          <EditableMachinerySection machineries={machineries} onSave={setMachineries} />

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSave} disabled={isSaving} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save All Changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
