"use client"

import { useState, useEffect } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { BackButton } from "@/components/ui/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase, Lightbulb, Code, Users, Plus } from "lucide-react"
import { CreateDynamicPageModal, type DynamicPageData } from "@/components/create-dynamic-page-modal"
import { DynamicPageCard } from "@/components/dynamic-page-card"

const subSections = [
  {
    name: "Business Development Services",
    href: "/admin/programs/entrepreneurship/business-development",
    description: "Startup support and mentorship programs",
    icon: Briefcase,
  },
  {
    name: "Incubation",
    href: "/admin/programs/entrepreneurship/incubation",
    description: "Early-stage business incubation and resources",
    icon: Lightbulb,
  },
  {
    name: "Digital Skills",
    href: "/admin/programs/entrepreneurship/digital-skills",
    description: "Technology and digital literacy training",
    icon: Code,
  },
  {
    name: "Soft Skills",
    href: "/admin/programs/entrepreneurship/soft-skills",
    description: "Leadership and communication training",
    icon: Users,
  },
]

export default function EntrepreneurshipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dynamicPages, setDynamicPages] = useState<(DynamicPageData & { id: string })[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDynamicPages()
  }, [])

  const fetchDynamicPages = async () => {
    try {
      const response = await fetch("/api/dynamic-pages/entrepreneurship")
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
      const response = await fetch("/api/dynamic-pages/entrepreneurship", {
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
      const response = await fetch(`/api/dynamic-pages/entrepreneurship?id=${id}`, {
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
      <AdminHeader
        title="Entrepreneurship & Incubation"
        description="Manage entrepreneurship program content and offerings"
      />
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
                    alert("Edit functionality coming soon!")
                  }}
                  onDelete={handleDeletePage}
                  subsection="Entrepreneurship"
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
        subsection="Entrepreneurship"
      />
    </div>
  )
}
