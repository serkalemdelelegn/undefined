"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Plus,
  Edit,
  Trash2,
  Save,
  Building,
  Users,
  GraduationCap,
  Award,
  Lightbulb,
  Globe,
  TrendingUp,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ImpactStat {
  id: string
  icon: string
  title: string
  value: number
  displayValue: string
  description: string
  progress: number
  trend: string
  location: string
}

interface AdditionalMetric {
  id: string
  value: string
  label: string
}

const iconOptions = [
  { value: "Building", label: "Building", icon: Building },
  { value: "Users", label: "Users", icon: Users },
  { value: "GraduationCap", label: "Graduation Cap", icon: GraduationCap },
  { value: "Award", label: "Award", icon: Award },
  { value: "Lightbulb", label: "Lightbulb", icon: Lightbulb },
  { value: "Globe", label: "Globe", icon: Globe },
]

export default function ImpactDashboardPage() {
  const [sectionData, setSectionData] = useState({
    badge: "Our Impact Across Ethiopia",
    title: "Transforming Lives Through STEM Education",
    description:
      "From bustling cities to remote villages, STEMpower Ethiopia is creating opportunities for young minds to explore, innovate, and lead. Our comprehensive programs reach every corner of the nation, building a brighter future through science and technology.",
  })

  const [impactStats, setImpactStats] = useState<ImpactStat[]>([
    {
      id: "1",
      icon: "Building",
      title: "STEM Centers",
      value: 61,
      displayValue: "61+",
      description: "Active hands-on STEM learning centers across Ethiopia",
      progress: 75,
      trend: "+8 this year",
      location: "Nationwide Coverage",
    },
    {
      id: "2",
      icon: "Users",
      title: "Students Impacted",
      value: 100000,
      displayValue: "100K+",
      description: "Young minds empowered through our comprehensive programs",
      progress: 88,
      trend: "+25K this year",
      location: "All Regions",
    },
    {
      id: "3",
      icon: "GraduationCap",
      title: "Science Fair Participants",
      value: 7000,
      displayValue: "7K+",
      description: "Students showcasing innovations in annual competitions",
      progress: 78,
      trend: "+800 this year",
      location: "Regional & National",
    },
    {
      id: "4",
      icon: "Award",
      title: "Science Fairs Organized",
      value: 155,
      displayValue: "155+",
      description: "Local and national science fairs celebrating excellence",
      progress: 88,
      trend: "+25 this year",
      location: "Multi-Regional",
    },
    {
      id: "5",
      icon: "Lightbulb",
      title: "FabLabs & Maker Spaces",
      value: 25,
      displayValue: "25+",
      description: "Innovation hubs with cutting-edge fabrication technology",
      progress: 65,
      trend: "+5 this year",
      location: "Major Cities",
    },
    {
      id: "6",
      icon: "Globe",
      title: "Young Entrepreneurs",
      value: 500,
      displayValue: "500+",
      description: "Innovators supported through incubation programs",
      progress: 70,
      trend: "+120 this year",
      location: "Nationwide",
    },
  ])

  const [additionalMetrics, setAdditionalMetrics] = useState<AdditionalMetric[]>([
    { id: "1", value: "11+", label: "Regions Covered" },
    { id: "2", value: "95%", label: "Student Satisfaction" },
    { id: "3", value: "200+", label: "Partner Organizations" },
    { id: "4", value: "3,600+", label: "Entrepreneurship Graduates" },
  ])

  const [isStatDialogOpen, setIsStatDialogOpen] = useState(false)
  const [editingStat, setEditingStat] = useState<ImpactStat | null>(null)
  const [isMetricDialogOpen, setIsMetricDialogOpen] = useState(false)
  const [editingMetric, setEditingMetric] = useState<AdditionalMetric | null>(null)

  const addStat = () => {
    const newStat: ImpactStat = {
      id: Date.now().toString(),
      icon: "Building",
      title: "",
      value: 0,
      displayValue: "",
      description: "",
      progress: 0,
      trend: "",
      location: "",
    }
    setEditingStat(newStat)
    setIsStatDialogOpen(true)
  }

  const editStat = (stat: ImpactStat) => {
    setEditingStat({ ...stat })
    setIsStatDialogOpen(true)
  }

  const saveStat = () => {
    if (!editingStat) return
    const existing = impactStats.find((s) => s.id === editingStat.id)
    if (existing) {
      setImpactStats(impactStats.map((s) => (s.id === editingStat.id ? editingStat : s)))
    } else {
      setImpactStats([...impactStats, editingStat])
    }
    setIsStatDialogOpen(false)
    setEditingStat(null)
  }

  const deleteStat = (id: string) => {
    if (confirm("Are you sure you want to delete this stat?")) {
      setImpactStats(impactStats.filter((s) => s.id !== id))
    }
  }

  const addMetric = () => {
    const newMetric: AdditionalMetric = {
      id: Date.now().toString(),
      value: "",
      label: "",
    }
    setEditingMetric(newMetric)
    setIsMetricDialogOpen(true)
  }

  const editMetric = (metric: AdditionalMetric) => {
    setEditingMetric({ ...metric })
    setIsMetricDialogOpen(true)
  }

  const saveMetric = () => {
    if (!editingMetric) return
    const existing = additionalMetrics.find((m) => m.id === editingMetric.id)
    if (existing) {
      setAdditionalMetrics(additionalMetrics.map((m) => (m.id === editingMetric.id ? editingMetric : m)))
    } else {
      setAdditionalMetrics([...additionalMetrics, editingMetric])
    }
    setIsMetricDialogOpen(false)
    setEditingMetric(null)
  }

  const deleteMetric = (id: string) => {
    if (confirm("Are you sure you want to delete this metric?")) {
      setAdditionalMetrics(additionalMetrics.filter((m) => m.id !== id))
    }
  }

  return (
    <div>
      <AdminHeader title="Impact Dashboard" description="Manage homepage impact statistics and metrics" />
      <div className="p-6 max-w-6xl space-y-6">
        <Link href="/admin/home">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Section Header */}
        <Card>
          <CardHeader>
            <CardTitle>Section Header</CardTitle>
            <CardDescription>Configure the impact dashboard section header</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="badge">Badge Text</Label>
              <Input
                id="badge"
                value={sectionData.badge}
                onChange={(e) => setSectionData({ ...sectionData, badge: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Section Title</Label>
              <Input
                id="title"
                value={sectionData.title}
                onChange={(e) => setSectionData({ ...sectionData, title: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Section Description</Label>
              <Textarea
                id="description"
                rows={3}
                value={sectionData.description}
                onChange={(e) => setSectionData({ ...sectionData, description: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Main Impact Stats */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Main Impact Statistics</CardTitle>
                <CardDescription>Large stat cards with progress indicators</CardDescription>
              </div>
              <Button onClick={addStat} className="bg-[#00BFA6] hover:bg-[#00A693]">
                <Plus className="mr-2 h-4 w-4" />
                Add Stat
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactStats.map((stat) => {
                const IconComponent = iconOptions.find((opt) => opt.value === stat.icon)?.icon || Building
                return (
                  <Card key={stat.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      {/* Top section with icon and trend */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-[#00BFA6]">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-sm text-amber-600 font-medium">
                          <TrendingUp className="h-4 w-4" />
                          <span>{stat.trend}</span>
                        </div>
                      </div>

                      {/* Edit/Delete buttons */}
                      <div className="flex gap-1 mb-3 justify-end">
                        <Button variant="ghost" size="sm" onClick={() => editStat(stat)}>
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteStat(stat.id)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Large number */}
                      <div className="text-4xl font-bold mb-2 text-gray-900">{stat.displayValue}</div>

                      {/* Title */}
                      <div className="text-sm font-semibold text-gray-900 mb-2">{stat.title}</div>

                      {/* Description */}
                      <div className="text-xs text-gray-600 mb-4 line-clamp-2">{stat.description}</div>

                      {/* Progress section */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-700">Progress</span>
                          <span className="text-xs font-semibold text-gray-900">{stat.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#00BFA6] h-2 rounded-full transition-all"
                            style={{ width: `${stat.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Location indicator */}
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span>{stat.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Additional Metrics */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Additional Metrics</CardTitle>
                <CardDescription>Small metric cards displayed below main stats</CardDescription>
              </div>
              <Button onClick={addMetric} className="bg-[#00BFA6] hover:bg-[#00A693]">
                <Plus className="mr-2 h-4 w-4" />
                Add Metric
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalMetrics.map((metric) => (
                <Card key={metric.id}>
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-end gap-1 mb-2">
                      <Button variant="ghost" size="sm" onClick={() => editMetric(metric)}>
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteMetric(metric.id)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-2xl font-bold text-[#00BFA6] mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stat Dialog */}
        <Dialog open={isStatDialogOpen} onOpenChange={setIsStatDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingStat?.title || "New Impact Stat"}</DialogTitle>
              <DialogDescription>Configure impact statistic details</DialogDescription>
            </DialogHeader>
            {editingStat && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="icon">Icon</Label>
                  <Select
                    value={editingStat.icon}
                    onValueChange={(value) => setEditingStat({ ...editingStat, icon: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <option.icon className="h-4 w-4" />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={editingStat.title}
                      onChange={(e) => setEditingStat({ ...editingStat, title: e.target.value })}
                      placeholder="STEM Centers"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="displayValue">Display Value</Label>
                    <Input
                      id="displayValue"
                      value={editingStat.displayValue}
                      onChange={(e) => setEditingStat({ ...editingStat, displayValue: e.target.value })}
                      placeholder="61+"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={2}
                    value={editingStat.description}
                    onChange={(e) => setEditingStat({ ...editingStat, description: e.target.value })}
                    placeholder="Active hands-on STEM learning centers..."
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="progress">Progress (%)</Label>
                    <Input
                      id="progress"
                      type="number"
                      min="0"
                      max="100"
                      value={editingStat.progress}
                      onChange={(e) =>
                        setEditingStat({ ...editingStat, progress: Number.parseInt(e.target.value) || 0 })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trend">Trend</Label>
                    <Input
                      id="trend"
                      value={editingStat.trend}
                      onChange={(e) => setEditingStat({ ...editingStat, trend: e.target.value })}
                      placeholder="+8 this year"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={editingStat.location}
                      onChange={(e) => setEditingStat({ ...editingStat, location: e.target.value })}
                      placeholder="Nationwide Coverage"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setIsStatDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={saveStat} className="bg-[#00BFA6] hover:bg-[#00A693]">
                    <Save className="mr-2 h-4 w-4" />
                    Save Stat
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Metric Dialog */}
        <Dialog open={isMetricDialogOpen} onOpenChange={setIsMetricDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingMetric?.label || "New Metric"}</DialogTitle>
              <DialogDescription>Configure additional metric</DialogDescription>
            </DialogHeader>
            {editingMetric && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metricValue">Value</Label>
                  <Input
                    id="metricValue"
                    value={editingMetric.value}
                    onChange={(e) => setEditingMetric({ ...editingMetric, value: e.target.value })}
                    placeholder="11+"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metricLabel">Label</Label>
                  <Input
                    id="metricLabel"
                    value={editingMetric.label}
                    onChange={(e) => setEditingMetric({ ...editingMetric, label: e.target.value })}
                    placeholder="Regions Covered"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setIsMetricDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={saveMetric} className="bg-[#00BFA6] hover:bg-[#00A693]">
                    <Save className="mr-2 h-4 w-4" />
                    Save Metric
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
