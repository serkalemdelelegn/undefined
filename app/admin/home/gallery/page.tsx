"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Save, ImageIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

interface GalleryItem {
  id: string
  image: string
  title: string
  description: string
  category: string
  location: string
  participants: number
}

const categories = ["Robotics", "Entrepreneurship", "Research", "Technology", "Engineering", "FabLab"]

export default function StudentGalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: "1",
      image: "/ethiopian-students-working-on-robotics-project-in-.jpg",
      title: "Robotics Innovation Lab",
      description: "Students at Addis Ababa STEM Center developing autonomous robots for agricultural applications",
      category: "Robotics",
      location: "Addis Ababa",
      participants: 24,
    },
    {
      id: "2",
      image: "/young-ethiopian-entrepreneurs-presenting-business-.jpg",
      title: "Entrepreneurship Pitch Day",
      description: "Young innovators presenting sustainable technology solutions to address local challenges",
      category: "Entrepreneurship",
      location: "Hawassa",
      participants: 18,
    },
    {
      id: "3",
      image: "/ethiopian-students-conducting-chemistry-experiment.jpg",
      title: "Advanced Chemistry Research",
      description: "High school students conducting research on water purification methods using local materials",
      category: "Research",
      location: "Bahir Dar",
      participants: 15,
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)

  const addItem = () => {
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      image: "",
      title: "",
      description: "",
      category: "Robotics",
      location: "",
      participants: 0,
    }
    setEditingItem(newItem)
    setIsDialogOpen(true)
  }

  const editItem = (item: GalleryItem) => {
    setEditingItem({ ...item })
    setIsDialogOpen(true)
  }

  const saveItem = () => {
    if (!editingItem) return
    const existing = galleryItems.find((i) => i.id === editingItem.id)
    if (existing) {
      setGalleryItems(galleryItems.map((i) => (i.id === editingItem.id ? editingItem : i)))
    } else {
      setGalleryItems([...galleryItems, editingItem])
    }
    setIsDialogOpen(false)
    setEditingItem(null)
  }

  const deleteItem = (id: string) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      setGalleryItems(galleryItems.filter((i) => i.id !== id))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingItem) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingItem({ ...editingItem, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <AdminHeader title="Student Gallery" description="Manage student project showcase gallery" />
      <div className="p-6 max-w-6xl">
        <Link href="/admin/home">
          <Button variant="outline" size="sm" className="mb-6 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Showcase student projects and activities across STEM centers</p>
          <Button onClick={addItem} className="bg-[#00BFA6] hover:bg-[#00A693]">
            <Plus className="mr-2 h-4 w-4" />
            Add Gallery Item
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48">
                {item.image ? (
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                )}
                <Badge className="absolute top-3 left-3 bg-[#00BFA6]">{item.category}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{item.title || "Untitled"}</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" onClick={() => editItem(item)}>
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteItem(item.id)}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{item.location}</span>
                  <span>{item.participants} participants</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingItem?.title || "New Gallery Item"}</DialogTitle>
              <DialogDescription>Configure student project showcase item</DialogDescription>
            </DialogHeader>
            {editingItem && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Project Image</Label>
                  <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} />
                  {editingItem.image && (
                    <img
                      src={editingItem.image || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={editingItem.title}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                    placeholder="Robotics Innovation Lab"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={3}
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    placeholder="Students at Addis Ababa STEM Center..."
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={editingItem.location}
                      onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                      placeholder="Addis Ababa"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participants">Participants</Label>
                    <Input
                      id="participants"
                      type="number"
                      value={editingItem.participants}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, participants: Number.parseInt(e.target.value) || 0 })
                      }
                      placeholder="24"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={saveItem} className="bg-[#00BFA6] hover:bg-[#00A693]">
                    <Save className="mr-2 h-4 w-4" />
                    Save Item
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
