"use client"

import type React from "react"

import { useState } from "react"
import { BackButton } from "@/components/ui/back-button"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Calendar, Upload, FileText, Download, Users, BookOpen, TrendingUp } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface HeroBanner {
  badge: string
  title: string
  description: string
  statistics: {
    subscribers: string
    newsletters: string
    monthlyReaders: string
  }
}

interface Newsletter {
  id: string
  badge: string
  title: string
  date: string
  topic: string
  source: string
  description: string
  readTime: string
  image: string
  pdfFile: string
  featured: boolean
}

export default function NewsletterPage() {
  const [heroBanner, setHeroBanner] = useState<HeroBanner>({
    badge: "STEMpower Newsletters",
    title: "Stay Connected",
    description:
      "Explore our latest stories, achievements, and updates from the STEMpower Ethiopia community. Get insights into how we're transforming STEM education across the nation through innovation, collaboration, and dedication.",
    statistics: {
      subscribers: "5,000+",
      newsletters: "48+",
      monthlyReaders: "12,000+",
    },
  })

  const [isHeroDialogOpen, setIsHeroDialogOpen] = useState(false)
  const [heroFormData, setHeroFormData] = useState(heroBanner)

  const [newsletters, setNewsletters] = useState<Newsletter[]>([
    {
      id: "1",
      badge: "Monthly Digest",
      title: "STEMpower Ethiopia Monthly Digest - March 2024",
      date: "2024-03-15",
      topic: "Community Updates",
      source: "STEMpower Ethiopia",
      description:
        "Celebrating International Women's Day with our female STEM leaders, new partnerships announced, and upcoming robotics competition details.",
      readTime: "8 min read",
      image: "/students-in-science-lab.jpg",
      pdfFile: "/newsletters/march-2024.pdf",
      featured: true,
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingNewsletter, setEditingNewsletter] = useState<Newsletter | null>(null)
  const [formData, setFormData] = useState({
    badge: "",
    title: "",
    date: new Date().toISOString().split("T")[0],
    topic: "",
    source: "",
    description: "",
    readTime: "",
    image: "",
    pdfFile: "",
    featured: false,
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, [field]: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, pdfFile: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEdit = (newsletter: Newsletter) => {
    setEditingNewsletter(newsletter)
    setFormData({
      badge: newsletter.badge,
      title: newsletter.title,
      date: newsletter.date,
      topic: newsletter.topic,
      source: newsletter.source,
      description: newsletter.description,
      readTime: newsletter.readTime,
      image: newsletter.image,
      pdfFile: newsletter.pdfFile,
      featured: newsletter.featured,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this newsletter?")) {
      setNewsletters(newsletters.filter((n) => n.id !== id))
    }
  }

  const handleSave = () => {
    if (editingNewsletter) {
      setNewsletters(newsletters.map((n) => (n.id === editingNewsletter.id ? { ...n, ...formData } : n)))
    } else {
      setNewsletters([...newsletters, { id: Date.now().toString(), ...formData }])
    }
    setIsDialogOpen(false)
    setEditingNewsletter(null)
    setFormData({
      badge: "",
      title: "",
      date: new Date().toISOString().split("T")[0],
      topic: "",
      source: "",
      description: "",
      readTime: "",
      image: "",
      pdfFile: "",
      featured: false,
    })
  }

  const handleSaveHero = () => {
    setHeroBanner(heroFormData)
    setIsHeroDialogOpen(false)
  }

  return (
    <div>
      <AdminHeader title="Newsletter Management" description="Manage newsletter hero banner and content" />
      <div className="p-6 max-w-7xl">
        <BackButton />

        <Tabs defaultValue="hero" className="mt-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="hero">Hero Banner</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Hero Banner</CardTitle>
                    <CardDescription>Manage the newsletter page hero section</CardDescription>
                  </div>
                  <Dialog open={isHeroDialogOpen} onOpenChange={setIsHeroDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setHeroFormData(heroBanner)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Hero
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Hero Banner</DialogTitle>
                        <DialogDescription>Update the newsletter page hero section</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="hero-badge">Badge Text</Label>
                          <Input
                            id="hero-badge"
                            value={heroFormData.badge}
                            onChange={(e) => setHeroFormData({ ...heroFormData, badge: e.target.value })}
                            placeholder="STEMpower Newsletters"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hero-title">Title</Label>
                          <Input
                            id="hero-title"
                            value={heroFormData.title}
                            onChange={(e) => setHeroFormData({ ...heroFormData, title: e.target.value })}
                            placeholder="Stay Connected"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hero-description">Description</Label>
                          <Textarea
                            id="hero-description"
                            rows={4}
                            value={heroFormData.description}
                            onChange={(e) => setHeroFormData({ ...heroFormData, description: e.target.value })}
                            placeholder="Explore our latest stories..."
                          />
                        </div>
                        <div className="space-y-4">
                          <Label>Statistics</Label>
                          <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor="stat-subscribers">Subscribers</Label>
                              <Input
                                id="stat-subscribers"
                                value={heroFormData.statistics.subscribers}
                                onChange={(e) =>
                                  setHeroFormData({
                                    ...heroFormData,
                                    statistics: { ...heroFormData.statistics, subscribers: e.target.value },
                                  })
                                }
                                placeholder="5,000+"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="stat-newsletters">Newsletters</Label>
                              <Input
                                id="stat-newsletters"
                                value={heroFormData.statistics.newsletters}
                                onChange={(e) =>
                                  setHeroFormData({
                                    ...heroFormData,
                                    statistics: { ...heroFormData.statistics, newsletters: e.target.value },
                                  })
                                }
                                placeholder="48+"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="stat-readers">Monthly Readers</Label>
                              <Input
                                id="stat-readers"
                                value={heroFormData.statistics.monthlyReaders}
                                onChange={(e) =>
                                  setHeroFormData({
                                    ...heroFormData,
                                    statistics: { ...heroFormData.statistics, monthlyReaders: e.target.value },
                                  })
                                }
                                placeholder="12,000+"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-3 pt-4">
                          <Button variant="outline" onClick={() => setIsHeroDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleSaveHero} className="bg-[#00BFA6] hover:bg-[#00A693]">
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Preview */}
                <div className="bg-gradient-to-br from-[#00BFA6] to-[#00A693] rounded-lg p-8 text-white">
                  <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <BookOpen className="h-4 w-4" />
                      {heroBanner.badge}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">{heroBanner.title}</h1>
                    <p className="text-lg text-white/90 max-w-3xl mx-auto">{heroBanner.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <Users className="h-8 w-8 mx-auto mb-3" />
                        <div className="text-3xl font-bold">{heroBanner.statistics.subscribers}</div>
                        <div className="text-sm text-white/80 mt-1">Subscribers</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <BookOpen className="h-8 w-8 mx-auto mb-3" />
                        <div className="text-3xl font-bold">{heroBanner.statistics.newsletters}</div>
                        <div className="text-sm text-white/80 mt-1">Newsletters</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <TrendingUp className="h-8 w-8 mx-auto mb-3" />
                        <div className="text-3xl font-bold">{heroBanner.statistics.monthlyReaders}</div>
                        <div className="text-sm text-white/80 mt-1">Monthly Readers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="newsletters" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">All Newsletters</h2>
                <p className="text-sm text-muted-foreground">{newsletters.length} total newsletters</p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#00BFA6] hover:bg-[#00A693]"
                    onClick={() => {
                      setEditingNewsletter(null)
                      setFormData({
                        badge: "",
                        title: "",
                        date: new Date().toISOString().split("T")[0],
                        topic: "",
                        source: "",
                        description: "",
                        readTime: "",
                        image: "",
                        pdfFile: "",
                        featured: false,
                      })
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Newsletter
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingNewsletter ? "Edit Newsletter" : "Add New Newsletter"}</DialogTitle>
                    <DialogDescription>
                      {editingNewsletter ? "Update the newsletter details" : "Create a new newsletter"}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="badge">Badge</Label>
                        <Input
                          id="badge"
                          value={formData.badge}
                          onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                          placeholder="Monthly Digest, Featured, etc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="STEMpower Ethiopia Monthly Digest - March 2024"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="topic">Topic/Category</Label>
                        <Input
                          id="topic"
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          placeholder="Community Updates, Events, etc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="source">Source</Label>
                        <Input
                          id="source"
                          value={formData.source}
                          onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                          placeholder="STEMpower Ethiopia"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="read-time">Read Time</Label>
                      <Input
                        id="read-time"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        placeholder="8 min read"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Brief description of the newsletter content..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Newsletter Image</Label>
                      <div className="flex items-center gap-4">
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, "image")}
                          className="flex-1"
                        />
                        {formData.image && (
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden border">
                            <img
                              src={formData.image || "/placeholder.svg"}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pdf">PDF File</Label>
                      <div className="flex items-center gap-4">
                        <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfUpload} className="flex-1" />
                        {formData.pdfFile && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <FileText className="h-4 w-4" />
                            PDF uploaded
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor="featured" className="cursor-pointer">
                        Mark as Featured
                      </Label>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSave} className="bg-[#00BFA6] hover:bg-[#00A693]">
                        {editingNewsletter ? "Update" : "Create"} Newsletter
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {newsletters.map((newsletter) => (
                <Card key={newsletter.id} className={newsletter.featured ? "border-[#00BFA6]" : ""}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        {newsletter.image ? (
                          <>
                            <img
                              src={newsletter.image || "/placeholder.svg"}
                              alt={newsletter.title}
                              className="w-full h-full object-cover"
                            />
                            {newsletter.featured && (
                              <div className="absolute top-3 left-3 bg-[#00BFA6] text-white px-3 py-1 rounded-full text-xs font-medium">
                                ⭐ Featured
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Upload className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-[#00BFA6]/10 text-[#00BFA6] px-3 py-1 rounded-full text-xs font-medium mb-2">
                              {newsletter.badge}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{newsletter.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(newsletter.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                              <span>•</span>
                              <span>{newsletter.readTime}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">{newsletter.description}</p>
                            <div className="flex items-center gap-3">
                              <Button variant="default" size="sm" className="bg-[#00BFA6] hover:bg-[#00A693]">
                                Read Full Newsletter
                              </Button>
                              {newsletter.pdfFile && (
                                <Button variant="outline" size="sm">
                                  <Download className="mr-2 h-3 w-3" />
                                  Download PDF
                                </Button>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(newsletter)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDelete(newsletter.id)}>
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
