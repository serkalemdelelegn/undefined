"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2, Eye, Save, Layout } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

interface ContentSection {
  id: string
  type: "text" | "image" | "cards" | "stats"
  title?: string
  content?: string
  imageUrl?: string
  items?: Array<{ title: string; description: string; icon?: string }>
}

interface DynamicPage {
  id: string
  title: string
  slug: string
  description: string
  heroImage: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  ctaText: string
  ctaLink: string
  sections: ContentSection[]
  status: "draft" | "published"
  createdAt: string
}

export default function DynamicPagesPage() {
  const { toast } = useToast()
  const [pages, setPages] = useState<DynamicPage[]>([
    {
      id: "1",
      title: "Research & Innovation",
      slug: "research-innovation",
      description: "Explore our cutting-edge research initiatives and innovation programs",
      heroImage: "/research-lab.jpg",
      heroTitle: "Research & Innovation",
      heroSubtitle: "Pioneering the Future",
      heroDescription: "Discover groundbreaking research and innovative solutions developed by our community",
      ctaText: "Learn More",
      ctaLink: "#",
      sections: [
        {
          id: "1",
          type: "text",
          title: "Our Research Focus",
          content: "We focus on cutting-edge research in STEM fields...",
        },
        {
          id: "2",
          type: "stats",
          items: [
            { title: "50+", description: "Research Projects" },
            { title: "100+", description: "Publications" },
          ],
        },
      ],
      status: "published",
      createdAt: "2025-01-15",
    },
  ])

  const [editingPage, setEditingPage] = useState<DynamicPage | null>(null)
  const [isAddingPage, setIsAddingPage] = useState(false)

  const handleSavePage = (page: DynamicPage) => {
    if (editingPage && editingPage.id) {
      setPages(pages.map((p) => (p.id === page.id ? page : p)))
      toast({ title: "Page Updated", description: "Dynamic page has been updated successfully." })
    } else {
      setPages([...pages, { ...page, id: Date.now().toString(), createdAt: new Date().toISOString() }])
      toast({ title: "Page Created", description: "New dynamic page has been created successfully." })
    }
    setEditingPage(null)
    setIsAddingPage(false)
  }

  const handleDeletePage = (id: string) => {
    setPages(pages.filter((p) => p.id !== id))
    toast({ title: "Page Deleted", description: "Dynamic page has been removed." })
  }

  const handleToggleStatus = (id: string) => {
    setPages(pages.map((p) => (p.id === id ? { ...p, status: p.status === "published" ? "draft" : "published" } : p)))
    toast({ title: "Status Updated", description: "Page status has been changed." })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dynamic Pages</h1>
          <p className="text-gray-600 mt-2">Create and manage custom pages with full layouts</p>
        </div>
        <Button onClick={() => setIsAddingPage(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create New Page
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <Card key={page.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{page.title}</CardTitle>
                  <CardDescription className="mt-1">/{page.slug}</CardDescription>
                </div>
                <Badge variant={page.status === "published" ? "default" : "secondary"}>{page.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{page.description}</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => setEditingPage(page)}>
                  <Pencil className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={`/${page.slug}`} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </a>
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleToggleStatus(page.id)}>
                  {page.status === "published" ? "Unpublish" : "Publish"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeletePage(page.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {pages.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Layout className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Dynamic Pages Yet</h3>
            <p className="text-gray-600 mb-4">Create your first dynamic page to get started</p>
            <Button onClick={() => setIsAddingPage(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Page
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Page Editor Dialog */}
      <Dialog
        open={isAddingPage || editingPage !== null}
        onOpenChange={() => {
          setIsAddingPage(false)
          setEditingPage(null)
        }}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingPage ? "Edit Page" : "Create New Page"}</DialogTitle>
            <DialogDescription>Configure page settings, hero section, and content sections</DialogDescription>
          </DialogHeader>
          <PageEditorForm
            page={
              editingPage || {
                id: "",
                title: "",
                slug: "",
                description: "",
                heroImage: "",
                heroTitle: "",
                heroSubtitle: "",
                heroDescription: "",
                ctaText: "Learn More",
                ctaLink: "#",
                sections: [],
                status: "draft",
                createdAt: "",
              }
            }
            onSave={handleSavePage}
            onCancel={() => {
              setIsAddingPage(false)
              setEditingPage(null)
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

function PageEditorForm({
  page,
  onSave,
  onCancel,
}: {
  page: DynamicPage
  onSave: (page: DynamicPage) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState(page)

  const addSection = (type: ContentSection["type"]) => {
    const newSection: ContentSection = {
      id: Date.now().toString(),
      type,
      title: "",
      content: "",
      items: type === "cards" || type === "stats" ? [{ title: "", description: "" }] : undefined,
    }
    setFormData({ ...formData, sections: [...formData.sections, newSection] })
  }

  const updateSection = (id: string, updates: Partial<ContentSection>) => {
    setFormData({
      ...formData,
      sections: formData.sections.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    })
  }

  const removeSection = (id: string) => {
    setFormData({
      ...formData,
      sections: formData.sections.filter((s) => s.id !== id),
    })
  }

  return (
    <div className="space-y-6">
      {/* Basic Info */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Basic Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Page Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Research & Innovation"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">URL Slug</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="research-innovation"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Meta Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={2}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="space-y-4 border-t pt-4">
        <h3 className="font-semibold text-lg">Hero Section</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heroImage">Hero Image URL</Label>
            <Input
              id="heroImage"
              value={formData.heroImage}
              onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
              placeholder="/placeholder.svg?height=400&width=1200"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="heroTitle">Hero Title</Label>
              <Input
                id="heroTitle"
                value={formData.heroTitle}
                onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
              <Input
                id="heroSubtitle"
                value={formData.heroSubtitle}
                onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroDescription">Hero Description</Label>
            <Textarea
              id="heroDescription"
              value={formData.heroDescription}
              onChange={(e) => setFormData({ ...formData, heroDescription: e.target.value })}
              rows={2}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ctaText">CTA Button Text</Label>
              <Input
                id="ctaText"
                value={formData.ctaText}
                onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ctaLink">CTA Button Link</Label>
              <Input
                id="ctaLink"
                value={formData.ctaLink}
                onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-4 border-t pt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Content Sections</h3>
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => addSection("text")}>
              <Plus className="h-3 w-3 mr-1" />
              Text
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={() => addSection("image")}>
              <Plus className="h-3 w-3 mr-1" />
              Image
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={() => addSection("cards")}>
              <Plus className="h-3 w-3 mr-1" />
              Cards
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={() => addSection("stats")}>
              <Plus className="h-3 w-3 mr-1" />
              Stats
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          {formData.sections.map((section, index) => (
            <div key={section.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <Badge>{section.type}</Badge>
                <Button type="button" variant="ghost" size="sm" onClick={() => removeSection(section.id)}>
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
              {section.type === "text" && (
                <div className="space-y-2">
                  <Input
                    placeholder="Section Title"
                    value={section.title || ""}
                    onChange={(e) => updateSection(section.id, { title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Content"
                    value={section.content || ""}
                    onChange={(e) => updateSection(section.id, { content: e.target.value })}
                    rows={3}
                  />
                </div>
              )}
              {section.type === "image" && (
                <div className="space-y-2">
                  <Input
                    placeholder="Image URL"
                    value={section.imageUrl || ""}
                    onChange={(e) => updateSection(section.id, { imageUrl: e.target.value })}
                  />
                  <Input
                    placeholder="Image Caption (optional)"
                    value={section.title || ""}
                    onChange={(e) => updateSection(section.id, { title: e.target.value })}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onSave(formData)}>
          <Save className="h-4 w-4 mr-2" />
          Save Page
        </Button>
      </DialogFooter>
    </div>
  )
}
