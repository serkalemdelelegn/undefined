"use client"

import { useRef, useState, useEffect } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { BackButton } from "@/components/ui/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Trophy, GraduationCap, Tv, Plus } from "lucide-react"
import { LaboratoryProgramsSection } from "@/components/laboratory-programs-section"
import { CreateDynamicPageModal, type DynamicPageData } from "@/components/create-dynamic-page-modal"
import { DynamicPageCard } from "@/components/dynamic-page-card"

const subSections = [
  {
    name: "STEM Centers",
    href: "/admin/programs/stem-operations/stem-centers",
    description: "148 centers across Ethiopia",
    icon: Building2,
  },
  {
    name: "Science Fairs",
    href: "/admin/programs/stem-operations/science-fairs",
    description: "National competitions and exhibitions",
    icon: Trophy,
  },
  {
    name: "University STEM Outreach",
    href: "/admin/programs/stem-operations/university-outreach",
    description: "Higher education partnerships",
    icon: GraduationCap,
  },
  {
    name: "STEM TV",
    href: "/admin/programs/stem-operations/stem-tv",
    description: "Educational video content",
    icon: Tv,
  },
]

export default function StemOperationsPage() {
  const labProgramsRef = useRef<{ openAddDialog: () => void }>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dynamicPages, setDynamicPages] = useState<(DynamicPageData & { id: string })[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDynamicPages()
  }, [])

  const fetchDynamicPages = async () => {
    try {
      const response = await fetch("/api/dynamic-pages/stem-operations")
      if (response.ok) {
        const pages = await response.json()
        setDynamicPages(pages)
      }
    } catch (error) {
      console.error("Error fetching pages:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSavePage = async (data: DynamicPageData) => {
    try {
      const response = await fetch("/api/dynamic-pages/stem-operations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const newPage = await response.json()
        setDynamicPages([...dynamicPages, newPage])
        alert("Page created successfully!")
      }
    } catch (error) {
      console.error("Error saving page:", error)
      throw error
    }
  }

  const handleDeletePage = async (id: string) => {
    try {
      const response = await fetch(`/api/dynamic-pages/stem-operations?id=${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setDynamicPages(dynamicPages.filter((p) => p.id !== id))
        alert("Page deleted successfully!")
      }
    } catch (error) {
      console.error("Error deleting page:", error)
    }
  }

  return (
    <div>
      <AdminHeader title="STEM Operations" description="Manage STEM operations programs and initiatives" />
      <div className="p-6 max-w-6xl">
        <BackButton />

        {/* Main Subsections */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Subsections</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subSections.map((section) => (
              <Card key={section.href} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00BFA6]/10">
                        <section.icon className="h-5 w-5 text-[#00BFA6]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.name}</CardTitle>
                        <CardDescription className="text-xs">{section.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href={section.href}>
                    <Button className="w-full bg-[#00BFA6] hover:bg-[#00A693]">
                      Manage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Laboratory Programs Section */}
        <div className="mt-12">
          <div className="mb-6">
            <Button onClick={() => labProgramsRef.current?.openAddDialog()} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Plus className="mr-2 h-4 w-4" />
              Add New Laboratory Program
            </Button>
          </div>
          <LaboratoryProgramsSection ref={labProgramsRef} showAddButton={false} />
        </div>

        {/* Dynamic Pages Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Dynamic Pages</h2>
            <Button onClick={() => setIsModalOpen(true)} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Plus className="mr-2 h-4 w-4" />
              Create Dynamic Page
            </Button>
          </div>

          {isLoading ? (
            <p className="text-muted-foreground">Loading pages...</p>
          ) : dynamicPages.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No dynamic pages yet. Create one to get started!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dynamicPages.map((page) => (
                <DynamicPageCard
                  key={page.id}
                  page={page}
                  onEdit={() => {
                    alert("Edit functionality coming soon!")
                  }}
                  onDelete={handleDeletePage}
                  subsection="STEM Operations"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <CreateDynamicPageModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSave={handleSavePage}
        subsection="STEM Operations"
      />
    </div>
  )
}
