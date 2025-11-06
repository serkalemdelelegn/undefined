"use client"

import { useState, useEffect } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { BackButton } from "@/components/ui/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Wrench, GraduationCap, Zap, Plus } from "lucide-react"
import { CreateDynamicPageModal, type DynamicPageData } from "@/components/create-dynamic-page-modal"
import { DynamicPageCard } from "@/components/dynamic-page-card"

const subSections = [
  {
    name: "Maker Space",
    href: "/admin/programs/fablab/maker-space",
    description: "Creative fabrication labs and workspace management",
    icon: Wrench,
  },
  {
    name: "Training & Consultancy",
    href: "/admin/programs/fablab/training-consultancy",
    description: "Professional development and consulting services",
    icon: GraduationCap,
  },
  {
    name: "Services",
    href: "/admin/programs/fablab/services",
    description: "State of machineries and equipment",
    icon: Zap,
  },
  {
    name: "Products",
    href: "/admin/programs/fablab/products",
    description: "FabLab products and innovations",
    icon: Zap,
  },
]

export default function FabLabPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dynamicPages, setDynamicPages] = useState<(DynamicPageData & { id: string })[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDynamicPages()
  }, [])

  const fetchDynamicPages = async () => {
    try {
      const response = await fetch("/api/dynamic-pages/fablab")
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
      const response = await fetch("/api/dynamic-pages/fablab", {
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
      const response = await fetch(`/api/dynamic-pages/fablab?id=${id}`, {
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
      <AdminHeader title="FabLab" description="Manage FabLab programs and facilities" />
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
                    // Edit functionality can be added later
                    alert("Edit functionality coming soon!")
                  }}
                  onDelete={handleDeletePage}
                  subsection="FabLab"
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
        subsection="FabLab"
      />
    </div>
  )
}
