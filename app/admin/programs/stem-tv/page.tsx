"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Save, Plus, Edit, Trash2, Video } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface VideoContent {
  id: string
  title: string
  description: string
  url: string
  duration: string
  category: string
}

export default function StemTvPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: "STEM TV",
    description: "Educational video content bringing quality STEM education to students across Ethiopia.",
    overview:
      "STEM TV provides engaging educational video content covering various STEM subjects. Our videos are designed to complement classroom learning and make STEM education accessible to students in remote areas.",
  })

  const [videos, setVideos] = useState<VideoContent[]>([
    {
      id: "1",
      title: "Introduction to Physics",
      description: "Basic physics concepts for grade 9 students",
      url: "https://youtube.com/watch?v=example1",
      duration: "15:30",
      category: "Physics",
    },
    {
      id: "2",
      title: "Chemistry Experiments",
      description: "Safe and educational chemistry demonstrations",
      url: "https://youtube.com/watch?v=example2",
      duration: "20:45",
      category: "Chemistry",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingVideo, setEditingVideo] = useState<VideoContent | null>(null)
  const [videoForm, setVideoForm] = useState({
    title: "",
    description: "",
    url: "",
    duration: "",
    category: "",
  })

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("STEM TV program updated successfully!")
  }

  const handleEdit = (video: VideoContent) => {
    setEditingVideo(video)
    setVideoForm({
      title: video.title,
      description: video.description,
      url: video.url,
      duration: video.duration,
      category: video.category,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this video?")) {
      setVideos(videos.filter((v) => v.id !== id))
    }
  }

  const handleSaveVideo = () => {
    if (editingVideo) {
      setVideos(videos.map((v) => (v.id === editingVideo.id ? { ...v, ...videoForm } : v)))
    } else {
      setVideos([...videos, { id: Date.now().toString(), ...videoForm }])
    }
    setIsDialogOpen(false)
    setEditingVideo(null)
    setVideoForm({ title: "", description: "", url: "", duration: "", category: "" })
  }

  return (
    <div>
      <AdminHeader title="STEM TV" description="Manage educational video content and media" />
      <div className="p-6 max-w-6xl">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Program Overview</CardTitle>
              <CardDescription>Main program information and description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Program Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overview">Detailed Overview</Label>
                <Textarea
                  id="overview"
                  rows={4}
                  value={formData.overview}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save Overview"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Video Content</CardTitle>
                  <CardDescription>{videos.length} videos available</CardDescription>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-[#00BFA6] hover:bg-[#00A693]"
                      onClick={() => {
                        setEditingVideo(null)
                        setVideoForm({ title: "", description: "", url: "", duration: "", category: "" })
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Video
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{editingVideo ? "Edit Video" : "Add New Video"}</DialogTitle>
                      <DialogDescription>
                        {editingVideo ? "Update the video details below" : "Add a new educational video"}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="video-title">Title</Label>
                        <Input
                          id="video-title"
                          value={videoForm.title}
                          onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="video-description">Description</Label>
                        <Textarea
                          id="video-description"
                          rows={3}
                          value={videoForm.description}
                          onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="video-url">Video URL</Label>
                        <Input
                          id="video-url"
                          placeholder="https://youtube.com/watch?v=..."
                          value={videoForm.url}
                          onChange={(e) => setVideoForm({ ...videoForm, url: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="video-duration">Duration</Label>
                          <Input
                            id="video-duration"
                            placeholder="15:30"
                            value={videoForm.duration}
                            onChange={(e) => setVideoForm({ ...videoForm, duration: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="video-category">Category</Label>
                          <Input
                            id="video-category"
                            placeholder="Physics, Chemistry, etc."
                            value={videoForm.category}
                            onChange={(e) => setVideoForm({ ...videoForm, category: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSaveVideo} className="bg-[#00BFA6] hover:bg-[#00A693]">
                          {editingVideo ? "Update" : "Add"} Video
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {videos.map((video) => (
                  <div key={video.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00BFA6]/10">
                      <Video className="h-6 w-6 text-[#00BFA6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{video.category}</span>
                        <span>•</span>
                        <span>{video.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(video)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(video.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
