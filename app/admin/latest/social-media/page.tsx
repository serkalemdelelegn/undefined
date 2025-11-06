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
import { Plus, Edit, Trash2, Users, Eye, TrendingUp, Heart, MessageCircle, Share2, ExternalLink } from "lucide-react"
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
    stat1Value: string
    stat1Label: string
    stat2Value: string
    stat2Label: string
    stat3Value: string
    stat3Label: string
  }
}

interface SocialPost {
  id: string
  platform: "Instagram" | "Facebook" | "LinkedIn" | "Twitter" | "TikTok"
  content: string
  date: string
  link: string
  imageFile?: File
  imagePreview?: string
  likes?: number
  comments?: number
  shares?: number
}

export default function SocialMediaPage() {
  const [heroBanner, setHeroBanner] = useState<HeroBanner>({
    badge: "Social Media Updates",
    title: "Follow Our Journey on Social Media",
    description:
      "Stay connected with our daily updates, inspiring stories, and behind-the-scenes moments from the STEMpower Ethiopia community across all social platforms.",
    statistics: {
      stat1Value: "25K+",
      stat1Label: "Total Followers",
      stat2Value: "150K+",
      stat2Label: "Monthly Reach",
      stat3Value: "8.5%",
      stat3Label: "Engagement Rate",
    },
  })

  const [posts, setPosts] = useState<SocialPost[]>([
    {
      id: "1",
      platform: "Instagram",
      content:
        "Behind the scenes at our STEM workshop! ✨ Students learning hands-on electronics and circuit design. The excitement and curiosity in their eyes is what drives us every day!",
      date: "2024-03-01",
      link: "https://instagram.com/stempower",
      likes: 3421,
      comments: 198,
      shares: 0,
    },
  ])

  const [isHeroDialogOpen, setIsHeroDialogOpen] = useState(false)
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<SocialPost | null>(null)
  const [formData, setFormData] = useState({
    platform: "Instagram" as SocialPost["platform"],
    content: "",
    date: new Date().toISOString().split("T")[0],
    link: "",
    likes: 0,
    comments: 0,
    shares: 0,
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

  const handleEdit = (post: SocialPost) => {
    setEditingPost(post)
    setFormData({
      platform: post.platform,
      content: post.content,
      date: post.date,
      link: post.link,
      likes: post.likes || 0,
      comments: post.comments || 0,
      shares: post.shares || 0,
      imageFile: null,
      imagePreview: post.imagePreview || "",
    })
    setIsPostDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((p) => p.id !== id))
    }
  }

  const handleSavePost = () => {
    if (editingPost) {
      setPosts(
        posts.map((p) =>
          p.id === editingPost.id
            ? {
                ...p,
                ...formData,
                imageFile: formData.imageFile || p.imageFile,
                imagePreview: formData.imagePreview || p.imagePreview,
              }
            : p,
        ),
      )
    } else {
      setPosts([
        ...posts,
        {
          id: Date.now().toString(),
          platform: formData.platform,
          content: formData.content,
          date: formData.date,
          link: formData.link,
          likes: formData.likes,
          comments: formData.comments,
          shares: formData.shares,
          imageFile: formData.imageFile || undefined,
          imagePreview: formData.imagePreview || undefined,
        },
      ])
    }
    setIsPostDialogOpen(false)
    setEditingPost(null)
    setFormData({
      platform: "Instagram",
      content: "",
      date: new Date().toISOString().split("T")[0],
      link: "",
      likes: 0,
      comments: 0,
      shares: 0,
      imageFile: null,
      imagePreview: "",
    })
  }

  const handleSaveHero = () => {
    setIsHeroDialogOpen(false)
  }

  const getPlatformColor = (platform: string) => {
    const colors = {
      Instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
      Facebook: "bg-blue-600",
      LinkedIn: "bg-blue-700",
      Twitter: "bg-sky-500",
      TikTok: "bg-black",
    }
    return colors[platform as keyof typeof colors] || "bg-gray-600"
  }

  return (
    <div>
      <AdminHeader title="Social Media Posts" description="Manage social media content and hero banner" />
      <div className="p-6 max-w-7xl">
        <BackButton />

        <div className="flex justify-end mb-6">
          <Button className="bg-[#00BFA6] hover:bg-[#00A693]">Save All Changes</Button>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="hero">Hero Banner</TabsTrigger>
            <TabsTrigger value="posts">Social Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Hero Banner Section</CardTitle>
                    <CardDescription>Customize the hero banner for the social media page</CardDescription>
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
                        <div className="grid gap-4 md:grid-cols-2">
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
                <div className="rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 p-8 text-white">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                      {heroBanner.badge}
                    </span>
                  </div>
                  <h2 className="mb-4 text-4xl font-bold">{heroBanner.title}</h2>
                  <p className="mb-8 text-lg text-white/90">{heroBanner.description}</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                      <Users className="mb-2 h-6 w-6" />
                      <div className="text-3xl font-bold">{heroBanner.statistics.stat1Value}</div>
                      <div className="text-sm text-white/80">{heroBanner.statistics.stat1Label}</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                      <Eye className="mb-2 h-6 w-6" />
                      <div className="text-3xl font-bold">{heroBanner.statistics.stat2Value}</div>
                      <div className="text-sm text-white/80">{heroBanner.statistics.stat2Label}</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                      <TrendingUp className="mb-2 h-6 w-6" />
                      <div className="text-3xl font-bold">{heroBanner.statistics.stat3Value}</div>
                      <div className="text-sm text-white/80">{heroBanner.statistics.stat3Label}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">All Social Media Posts</h2>
                <p className="text-sm text-muted-foreground">{posts.length} posts across all platforms</p>
              </div>
              <Dialog open={isPostDialogOpen} onOpenChange={setIsPostDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#00BFA6] hover:bg-[#00A693]"
                    onClick={() => {
                      setEditingPost(null)
                      setFormData({
                        platform: "Instagram",
                        content: "",
                        date: new Date().toISOString().split("T")[0],
                        link: "",
                        likes: 0,
                        comments: 0,
                        shares: 0,
                        imageFile: null,
                        imagePreview: "",
                      })
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingPost ? "Edit Social Media Post" : "Add New Post"}</DialogTitle>
                    <DialogDescription>Share updates across social media platforms</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="platform">Platform</Label>
                      <select
                        id="platform"
                        value={formData.platform}
                        onChange={(e) =>
                          setFormData({ ...formData, platform: e.target.value as SocialPost["platform"] })
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter">Twitter</option>
                        <option value="TikTok">TikTok</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Post Image</Label>
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
                      <Label htmlFor="content">Post Content</Label>
                      <Textarea
                        id="content"
                        rows={4}
                        placeholder="Write your post content..."
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Post Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="link">Link to Original Post</Label>
                      <Input
                        id="link"
                        placeholder="https://instagram.com/p/..."
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="likes">Likes</Label>
                        <Input
                          id="likes"
                          type="number"
                          value={formData.likes}
                          onChange={(e) => setFormData({ ...formData, likes: Number.parseInt(e.target.value) || 0 })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comments">Comments</Label>
                        <Input
                          id="comments"
                          type="number"
                          value={formData.comments}
                          onChange={(e) => setFormData({ ...formData, comments: Number.parseInt(e.target.value) || 0 })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shares">Shares</Label>
                        <Input
                          id="shares"
                          type="number"
                          value={formData.shares}
                          onChange={(e) => setFormData({ ...formData, shares: Number.parseInt(e.target.value) || 0 })}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" onClick={() => setIsPostDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSavePost} className="bg-[#00BFA6] hover:bg-[#00A693]">
                        {editingPost ? "Update" : "Add"} Post
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        {post.imagePreview && (
                          <img
                            src={post.imagePreview || "/placeholder.svg"}
                            alt="Post"
                            className="h-24 w-24 rounded object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`text-xs px-3 py-1 rounded-full text-white ${getPlatformColor(post.platform)}`}
                            >
                              {post.platform}
                            </span>
                          </div>
                          <p className="text-sm mb-2">{post.content}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {post.likes?.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              {post.comments?.toLocaleString()}
                            </span>
                            {post.shares ? (
                              <span className="flex items-center gap-1">
                                <Share2 className="h-3 w-3" />
                                {post.shares?.toLocaleString()}
                              </span>
                            ) : null}
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#00BFA6] hover:underline mt-2 inline-flex items-center gap-1"
                          >
                            View Original Post <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
