"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { BackButton } from "@/components/ui/back-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Newspaper, Eye, Clock, ArrowRight, TrendingUp, FileText, Upload } from "lucide-react"
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
  featuredImageFile?: File
  featuredImagePreview?: string
  featuredImageBadge: string
  featuredImageTitle: string
  statistics: {
    stat1Value: string
    stat1Label: string
    stat2Value: string
    stat2Label: string
    stat3Value: string
    stat3Label: string
  }
}

interface MediaCoverage {
  id: string
  category: string
  title: string
  outlet: string
  date: string
  excerpt: string
  link: string
  imageFile?: File
  imagePreview?: string
  views?: number
  readTime?: number
}

export default function MediaCoveragePage() {
  const [heroBanner, setHeroBanner] = useState<HeroBanner>({
    badge: "Media Coverage",
    title: "STEMpower in the News",
    description:
      "Discover how media outlets across Ethiopia and beyond are covering our mission to transform STEM education and empower the next generation of innovators.",
    featuredImageBadge: "Latest Coverage",
    featuredImageTitle: "Transforming Ethiopia's Future Through STEM Education",
    statistics: {
      stat1Value: "150+",
      stat1Label: "Media Mentions",
      stat2Value: "25+",
      stat2Label: "News Outlets",
      stat3Value: "2M+",
      stat3Label: "Total Reach",
    },
  })

  const [coverage, setCoverage] = useState<MediaCoverage[]>([
    {
      id: "1",
      category: "Education",
      title: "How FabLabs Are Nurturing Ethiopia's Next Generation of Innovators",
      outlet: "Addis Standard",
      date: "2024-03-10",
      excerpt:
        "In maker spaces across Addis Ababa and beyond, young Ethiopians are turning ideas into reality. STEMpower's FabLabs provide access to 3D printers and tools.",
      link: "https://example.com/article",
      views: 8500,
      readTime: 4,
    },
  ])

  const [isHeroDialogOpen, setIsHeroDialogOpen] = useState(false)
  const [isCoverageDialogOpen, setIsCoverageDialogOpen] = useState(false)
  const [editingCoverage, setEditingCoverage] = useState<MediaCoverage | null>(null)
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    outlet: "",
    date: new Date().toISOString().split("T")[0],
    excerpt: "",
    link: "",
    views: 0,
    readTime: 0,
    imageFile: null as File | null,
    imagePreview: "",
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({
        ...formData,
        imageFile: file,
        imagePreview: URL.createObjectURL(file),
      })
    }
  }

  const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setHeroBanner({
        ...heroBanner,
        featuredImageFile: file,
        featuredImagePreview: URL.createObjectURL(file),
      })
    }
  }

  const handleEdit = (item: MediaCoverage) => {
    setEditingCoverage(item)
    setFormData({
      category: item.category,
      title: item.title,
      outlet: item.outlet,
      date: item.date,
      excerpt: item.excerpt,
      link: item.link,
      views: item.views || 0,
      readTime: item.readTime || 0,
      imageFile: null,
      imagePreview: item.imagePreview || "",
    })
    setIsCoverageDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this media coverage?")) {
      setCoverage(coverage.filter((c) => c.id !== id))
    }
  }

  const handleSaveCoverage = () => {
    if (editingCoverage) {
      setCoverage(
        coverage.map((c) =>
          c.id === editingCoverage.id
            ? {
                ...c,
                ...formData,
                imageFile: formData.imageFile || c.imageFile,
                imagePreview: formData.imagePreview || c.imagePreview,
              }
            : c,
        ),
      )
    } else {
      setCoverage([
        ...coverage,
        {
          id: Date.now().toString(),
          category: formData.category,
          title: formData.title,
          outlet: formData.outlet,
          date: formData.date,
          excerpt: formData.excerpt,
          link: formData.link,
          views: formData.views,
          readTime: formData.readTime,
          imageFile: formData.imageFile || undefined,
          imagePreview: formData.imagePreview || undefined,
        },
      ])
    }
    setIsCoverageDialogOpen(false)
    setEditingCoverage(null)
    setFormData({
      category: "",
      title: "",
      outlet: "",
      date: new Date().toISOString().split("T")[0],
      excerpt: "",
      link: "",
      views: 0,
      readTime: 0,
      imageFile: null,
      imagePreview: "",
    })
  }

  const handleSaveHero = () => {
    setIsHeroDialogOpen(false)
  }

  return (
    <div>
      <AdminHeader title="Media Coverage" description="Manage media coverage, press mentions, and hero banner" />
      <div className="p-6 max-w-7xl">
        <BackButton />

        <div className="flex justify-end mb-6">
          <Button className="bg-[#00BFA6] hover:bg-[#00A693]">Save All Changes</Button>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="hero">Hero Banner</TabsTrigger>
            <TabsTrigger value="coverage">Media Coverage</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Hero Banner Section</CardTitle>
                    <CardDescription>Customize the hero banner for the media coverage page</CardDescription>
                  </div>
                  <Dialog open={isHeroDialogOpen} onOpenChange={setIsHeroDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Hero
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Hero Banner</DialogTitle>
                        <DialogDescription>Update the hero section content</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="badge">Badge Text</Label>
                          <Input
                            id="badge"
                            value={heroBanner.badge}
                            onChange={(e) => setHeroBanner({ ...heroBanner, badge: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={heroBanner.title}
                            onChange={(e) => setHeroBanner({ ...heroBanner, title: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            rows={3}
                            value={heroBanner.description}
                            onChange={(e) => setHeroBanner({ ...heroBanner, description: e.target.value })}
                          />
                        </div>

                        <div className="space-y-4 border-t pt-4">
                          <h3 className="font-semibold">Featured Image</h3>
                          <div className="space-y-2">
                            <Label htmlFor="heroImage">Hero Image</Label>
                            <div className="flex items-center gap-4">
                              <div className="flex-1">
                                <label
                                  htmlFor="heroImage"
                                  className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-[#00BFA6] transition-colors"
                                >
                                  <div className="text-center">
                                    <Upload className="mx-auto h-8 w-8 text-gray-400" />
                                    <p className="mt-2 text-sm text-gray-600">Click to upload hero image</p>
                                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                  </div>
                                  <input
                                    id="heroImage"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleHeroImageUpload}
                                    className="hidden"
                                  />
                                </label>
                              </div>
                              {heroBanner.featuredImagePreview && (
                                <img
                                  src={heroBanner.featuredImagePreview || "/placeholder.svg"}
                                  alt="Hero preview"
                                  className="h-24 w-24 rounded object-cover"
                                />
                              )}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="featuredBadge">Image Overlay Badge</Label>
                            <Input
                              id="featuredBadge"
                              placeholder="e.g., Latest Coverage"
                              value={heroBanner.featuredImageBadge}
                              onChange={(e) => setHeroBanner({ ...heroBanner, featuredImageBadge: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="featuredTitle">Image Overlay Title</Label>
                            <Input
                              id="featuredTitle"
                              placeholder="e.g., Transforming Ethiopia's Future"
                              value={heroBanner.featuredImageTitle}
                              onChange={(e) => setHeroBanner({ ...heroBanner, featuredImageTitle: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 border-t pt-4">
                          <div className="space-y-2">
                            <Label>Statistic 1 Value</Label>
                            <Input
                              value={heroBanner.statistics.stat1Value}
                              onChange={(e) =>
                                setHeroBanner({
                                  ...heroBanner,
                                  statistics: { ...heroBanner.statistics, stat1Value: e.target.value },
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Statistic 1 Label</Label>
                            <Input
                              value={heroBanner.statistics.stat1Label}
                              onChange={(e) =>
                                setHeroBanner({
                                  ...heroBanner,
                                  statistics: { ...heroBanner.statistics, stat1Label: e.target.value },
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Statistic 2 Value</Label>
                            <Input
                              value={heroBanner.statistics.stat2Value}
                              onChange={(e) =>
                                setHeroBanner({
                                  ...heroBanner,
                                  statistics: { ...heroBanner.statistics, stat2Value: e.target.value },
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Statistic 2 Label</Label>
                            <Input
                              value={heroBanner.statistics.stat2Label}
                              onChange={(e) =>
                                setHeroBanner({
                                  ...heroBanner,
                                  statistics: { ...heroBanner.statistics, stat2Label: e.target.value },
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Statistic 3 Value</Label>
                            <Input
                              value={heroBanner.statistics.stat3Value}
                              onChange={(e) =>
                                setHeroBanner({
                                  ...heroBanner,
                                  statistics: { ...heroBanner.statistics, stat3Value: e.target.value },
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Statistic 3 Label</Label>
                            <Input
                              value={heroBanner.statistics.stat3Label}
                              onChange={(e) =>
                                setHeroBanner({
                                  ...heroBanner,
                                  statistics: { ...heroBanner.statistics, stat3Label: e.target.value },
                                })
                              }
                            />
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
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-teal-500 to-teal-600">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left side - Content */}
                    <div className="p-8 text-white flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                            {heroBanner.badge}
                          </span>
                        </div>
                        <h2 className="mb-4 text-4xl font-bold">{heroBanner.title}</h2>
                        <p className="mb-6 text-lg text-white/90">{heroBanner.description}</p>
                      </div>
                      <div className="grid gap-3 grid-cols-3">
                        <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                          <FileText className="mb-2 h-5 w-5" />
                          <div className="text-2xl font-bold">{heroBanner.statistics.stat1Value}</div>
                          <div className="text-xs text-white/80">{heroBanner.statistics.stat1Label}</div>
                        </div>
                        <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                          <Newspaper className="mb-2 h-5 w-5" />
                          <div className="text-2xl font-bold">{heroBanner.statistics.stat2Value}</div>
                          <div className="text-xs text-white/80">{heroBanner.statistics.stat2Label}</div>
                        </div>
                        <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                          <TrendingUp className="mb-2 h-5 w-5" />
                          <div className="text-2xl font-bold">{heroBanner.statistics.stat3Value}</div>
                          <div className="text-xs text-white/80">{heroBanner.statistics.stat3Label}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Featured Image */}
                    <div className="relative min-h-[400px] bg-gray-200">
                      {heroBanner.featuredImagePreview ? (
                        <>
                          <img
                            src={heroBanner.featuredImagePreview || "/placeholder.svg"}
                            alt="Featured"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                            <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 mb-2">
                              {heroBanner.featuredImageBadge}
                            </span>
                            <h3 className="text-2xl font-bold text-white">{heroBanner.featuredImageTitle}</h3>
                          </div>
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center text-gray-500">
                            <Upload className="mx-auto h-12 w-12 mb-2" />
                            <p className="text-sm">Upload a featured image</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coverage" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">All Media Coverage</h2>
                <p className="text-sm text-muted-foreground">{coverage.length} media mentions</p>
              </div>
              <Dialog open={isCoverageDialogOpen} onOpenChange={setIsCoverageDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#00BFA6] hover:bg-[#00A693]"
                    onClick={() => {
                      setEditingCoverage(null)
                      setFormData({
                        category: "",
                        title: "",
                        outlet: "",
                        date: new Date().toISOString().split("T")[0],
                        excerpt: "",
                        link: "",
                        views: 0,
                        readTime: 0,
                        imageFile: null,
                        imagePreview: "",
                      })
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Coverage
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingCoverage ? "Edit Media Coverage" : "Add New Coverage"}</DialogTitle>
                    <DialogDescription>Track media mentions and coverage</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="image">Article Image</Label>
                      <div className="flex items-center gap-4">
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="flex-1"
                        />
                        {formData.imagePreview && (
                          <img
                            src={formData.imagePreview || "/placeholder.svg"}
                            alt="Preview"
                            className="h-16 w-16 rounded object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        placeholder="e.g., Education, Achievement, Innovation"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Article Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="outlet">Media Outlet</Label>
                        <Input
                          id="outlet"
                          placeholder="e.g., Addis Standard"
                          value={formData.outlet}
                          onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Publication Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        rows={3}
                        placeholder="Brief summary of the article..."
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="link">Article Link</Label>
                      <Input
                        id="link"
                        placeholder="https://..."
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="views">Views</Label>
                        <Input
                          id="views"
                          type="number"
                          placeholder="8500"
                          value={formData.views}
                          onChange={(e) => setFormData({ ...formData, views: Number.parseInt(e.target.value) || 0 })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="readTime">Read Time (minutes)</Label>
                        <Input
                          id="readTime"
                          type="number"
                          placeholder="4"
                          value={formData.readTime}
                          onChange={(e) => setFormData({ ...formData, readTime: Number.parseInt(e.target.value) || 0 })}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" onClick={() => setIsCoverageDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveCoverage} className="bg-[#00BFA6] hover:bg-[#00A693]">
                        {editingCoverage ? "Update" : "Add"} Coverage
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {coverage.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    {item.imagePreview && (
                      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                        <img
                          src={item.imagePreview || "/placeholder.svg"}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
                          {item.category}
                        </span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Newspaper className="h-3 w-3" />
                      <span>{item.outlet}</span>
                      <span>•</span>
                      <span>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="mb-2 font-semibold line-clamp-2">{item.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {item.views?.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.readTime} min read
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#00BFA6] hover:underline inline-flex items-center gap-1"
                      >
                        Read Article <ArrowRight className="h-3 w-3" />
                      </a>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(item)}>
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDelete(item.id)}>
                          <Trash2 className="h-3 w-3 text-destructive" />
                        </Button>
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
