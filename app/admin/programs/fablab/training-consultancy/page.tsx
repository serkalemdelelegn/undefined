"use client"

import type React from "react"

import { useState } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Save, Plus, Trash2, Edit, Users, MapPin, Lightbulb, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Stat {
  id: string
  icon: string
  value: string
  label: string
}

interface Offering {
  id: string
  title: string
  description: string
  image: string
}

interface Partner {
  id: string
  name: string
  logo: string
}

export default function TrainingConsultancyPage() {
  const [isSaving, setIsSaving] = useState(false)

  const [isStatDialogOpen, setIsStatDialogOpen] = useState(false)
  const [isOfferingDialogOpen, setIsOfferingDialogOpen] = useState(false)
  const [isPartnerDialogOpen, setIsPartnerDialogOpen] = useState(false)
  const [editingStat, setEditingStat] = useState<Stat | null>(null)
  const [editingOffering, setEditingOffering] = useState<Offering | null>(null)
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null)

  // Hero Banner Data
  const [heroData, setHeroData] = useState({
    badge: "FabLab Program",
    title: "STEM Training & Consultancy",
    description:
      "Evidence-driven programs that strengthen systems, build local capacity, and launch high-impact Maker Spaces & FabLabs.",
  })

  // Statistics Data
  const [stats, setStats] = useState<Stat[]>([
    { id: "1", icon: "users", value: "5000+", label: "Teachers trained" },
    { id: "2", icon: "map-pin", value: "120+", label: "Institutions served" },
    { id: "3", icon: "lightbulb", value: "45+", label: "Maker Spaces launched" },
    { id: "4", icon: "search", value: "All", label: "Regions covered" },
  ])

  // What We Offer Data
  const [offerings, setOfferings] = useState<Offering[]>([
    {
      id: "1",
      title: "Teacher Training",
      description: "Active learning, lab safety, assessment for learning, and classroom technology integration.",
      image: "",
    },
    {
      id: "2",
      title: "Curriculum Development",
      description: "Competency-based STEM curricula, local relevance, and hands-on modules aligned to standards.",
      image: "",
    },
    {
      id: "3",
      title: "Maker Space & FabLab Setup",
      description: "Facility design, equipment sourcing, workflows, and operations playbooks for safe usage.",
      image: "",
    },
  ])

  // Trusted Partners Data
  const [partnersSection, setPartnersSection] = useState({
    title: "Trusted by partners",
    description: "We collaborate with education leaders and development partners nationwide.",
  })

  const [partners, setPartners] = useState<Partner[]>([
    { id: "1", name: "Partner 1", logo: "" },
    { id: "2", name: "Partner 2", logo: "" },
    { id: "3", name: "Partner 3", logo: "" },
  ])

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Training & Consultancy page updated successfully!")
  }

  const addStat = () => {
    const newStat: Stat = { id: Date.now().toString(), icon: "users", value: "", label: "" }
    setEditingStat(newStat)
    setIsStatDialogOpen(true)
  }

  const editStat = (stat: Stat) => {
    setEditingStat({ ...stat })
    setIsStatDialogOpen(true)
  }

  const saveStat = () => {
    if (!editingStat) return
    const existing = stats.find((s) => s.id === editingStat.id)
    if (existing) {
      setStats(stats.map((s) => (s.id === editingStat.id ? editingStat : s)))
    } else {
      setStats([...stats, editingStat])
    }
    setIsStatDialogOpen(false)
    setEditingStat(null)
  }

  const deleteStat = (id: string) => {
    setStats(stats.filter((s) => s.id !== id))
  }

  const addOffering = () => {
    const newOffering: Offering = { id: Date.now().toString(), title: "", description: "", image: "" }
    setEditingOffering(newOffering)
    setIsOfferingDialogOpen(true)
  }

  const editOffering = (offering: Offering) => {
    setEditingOffering({ ...offering })
    setIsOfferingDialogOpen(true)
  }

  const saveOffering = () => {
    if (!editingOffering) return
    const existing = offerings.find((o) => o.id === editingOffering.id)
    if (existing) {
      setOfferings(offerings.map((o) => (o.id === editingOffering.id ? editingOffering : o)))
    } else {
      setOfferings([...offerings, editingOffering])
    }
    setIsOfferingDialogOpen(false)
    setEditingOffering(null)
  }

  const handleOfferingImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingOffering) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingOffering({ ...editingOffering, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const deleteOffering = (id: string) => {
    setOfferings(offerings.filter((o) => o.id !== id))
  }

  const addPartner = () => {
    const newPartner: Partner = { id: Date.now().toString(), name: "", logo: "" }
    setEditingPartner(newPartner)
    setIsPartnerDialogOpen(true)
  }

  const editPartner = (partner: Partner) => {
    setEditingPartner({ ...partner })
    setIsPartnerDialogOpen(true)
  }

  const savePartner = () => {
    if (!editingPartner) return
    const existing = partners.find((p) => p.id === editingPartner.id)
    if (existing) {
      setPartners(partners.map((p) => (p.id === editingPartner.id ? editingPartner : p)))
    } else {
      setPartners([...partners, editingPartner])
    }
    setIsPartnerDialogOpen(false)
    setEditingPartner(null)
  }

  const handlePartnerLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingPartner) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingPartner({ ...editingPartner, logo: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const deletePartner = (id: string) => {
    setPartners(partners.filter((p) => p.id !== id))
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="h-6 w-6" />
      case "map-pin":
        return <MapPin className="h-6 w-6" />
      case "lightbulb":
        return <Lightbulb className="h-6 w-6" />
      case "search":
        return <Search className="h-6 w-6" />
      default:
        return <Users className="h-6 w-6" />
    }
  }

  return (
    <div>
      <div className="flex items-center gap-2 px-6 pt-6">
        <Link
          href="/admin/programs/fablab"
          className="flex items-center gap-2 text-[#367375] hover:text-[#24C3BC] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to FabLab</span>
        </Link>
      </div>
      <AdminHeader title="Training & Consultancy" description="Manage the Training & Consultancy page content" />
      <div className="p-6 max-w-6xl">
        <div className="space-y-6">
          {/* Hero Banner Section */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Banner</CardTitle>
              <CardDescription>Main banner with title and description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="badge">Badge Text</Label>
                <Input
                  id="badge"
                  value={heroData.badge}
                  onChange={(e) => setHeroData({ ...heroData, badge: e.target.value })}
                  placeholder="FabLab Program"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-title">Title</Label>
                <Input
                  id="hero-title"
                  value={heroData.title}
                  onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                  placeholder="STEM Training & Consultancy"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-description">Description</Label>
                <Textarea
                  id="hero-description"
                  rows={3}
                  value={heroData.description}
                  onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                  placeholder="Evidence-driven programs..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Statistics Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Statistical Information</CardTitle>
                  <CardDescription>Key metrics and achievements</CardDescription>
                </div>
                <Button onClick={addStat} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Stat
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <Card key={stat.id}>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="h-12 w-12 rounded-full bg-[#00BFA6] flex items-center justify-center text-white">
                          {getIconComponent(stat.icon)}
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" onClick={() => editStat(stat)}>
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteStat(stat.id)}>
                            <Trash2 className="h-3 w-3 text-destructive" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-[#00BFA6]">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What We Offer Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>What We Offer</CardTitle>
                  <CardDescription>Services and programs offered</CardDescription>
                </div>
                <Button onClick={addOffering} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Offering
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {offerings.map((offering) => (
                  <Card key={offering.id} className="overflow-hidden">
                    {offering.image && (
                      <div className="h-48 bg-muted">
                        <img
                          src={offering.image || "/placeholder.svg"}
                          alt={offering.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-balance">{offering.title}</h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{offering.description}</p>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => editOffering(offering)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteOffering(offering.id)}>
                          <Trash2 className="h-3 w-3 text-destructive" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trusted Partners Section */}
          <Card>
            <CardHeader>
              <CardTitle>Trusted by Partners</CardTitle>
              <CardDescription>Partner logos and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="partners-title">Section Title</Label>
                  <Input
                    id="partners-title"
                    value={partnersSection.title}
                    onChange={(e) => setPartnersSection({ ...partnersSection, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partners-description">Section Description</Label>
                  <Textarea
                    id="partners-description"
                    rows={2}
                    value={partnersSection.description}
                    onChange={(e) => setPartnersSection({ ...partnersSection, description: e.target.value })}
                  />
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <Label>Partner Logos</Label>
                  <Button onClick={addPartner} className="bg-[#00BFA6] hover:bg-[#00A693]">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Partner
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {partners.map((partner) => (
                    <Card key={partner.id}>
                      <CardContent className="p-4 space-y-3">
                        <div className="h-24 bg-white border rounded-lg flex items-center justify-center">
                          {partner.logo ? (
                            <img
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              className="max-h-20 max-w-full object-contain"
                            />
                          ) : (
                            <div className="text-xs text-gray-400">No logo</div>
                          )}
                        </div>
                        <p className="text-sm font-medium text-center">{partner.name || "Unnamed Partner"}</p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-transparent"
                            onClick={() => editPartner(partner)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => deletePartner(partner.id)}>
                            <Trash2 className="h-3 w-3 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSave} disabled={isSaving} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save All Changes"}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isStatDialogOpen} onOpenChange={setIsStatDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Statistic</DialogTitle>
            <DialogDescription>Update the statistic information</DialogDescription>
          </DialogHeader>
          {editingStat && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Icon</Label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={editingStat.icon}
                  onChange={(e) => setEditingStat({ ...editingStat, icon: e.target.value })}
                >
                  <option value="users">Users</option>
                  <option value="map-pin">Map Pin</option>
                  <option value="lightbulb">Lightbulb</option>
                  <option value="search">Search</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="statValue">Value</Label>
                <Input
                  id="statValue"
                  placeholder="e.g., 5000+"
                  value={editingStat.value}
                  onChange={(e) => setEditingStat({ ...editingStat, value: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="statLabel">Label</Label>
                <Input
                  id="statLabel"
                  placeholder="e.g., Teachers trained"
                  value={editingStat.label}
                  onChange={(e) => setEditingStat({ ...editingStat, label: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsStatDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveStat} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isOfferingDialogOpen} onOpenChange={setIsOfferingDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingOffering?.title || "New Offering"}</DialogTitle>
            <DialogDescription>Add or edit service offering</DialogDescription>
          </DialogHeader>
          {editingOffering && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="offeringTitle">Title</Label>
                <Input
                  id="offeringTitle"
                  placeholder="e.g., Teacher Training"
                  value={editingOffering.title}
                  onChange={(e) => setEditingOffering({ ...editingOffering, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="offeringDescription">Description</Label>
                <Textarea
                  id="offeringDescription"
                  rows={3}
                  placeholder="Describe the offering..."
                  value={editingOffering.description}
                  onChange={(e) => setEditingOffering({ ...editingOffering, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="offeringImage">Image</Label>
                <div className="space-y-3">
                  <Input id="offeringImage" type="file" accept="image/*" onChange={handleOfferingImageUpload} />
                  {editingOffering.image && (
                    <div className="h-48 rounded-lg overflow-hidden border">
                      <img
                        src={editingOffering.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsOfferingDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveOffering} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isPartnerDialogOpen} onOpenChange={setIsPartnerDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingPartner?.name || "New Partner"}</DialogTitle>
            <DialogDescription>Add or edit partner information</DialogDescription>
          </DialogHeader>
          {editingPartner && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="partnerName">Partner Name</Label>
                <Input
                  id="partnerName"
                  placeholder="e.g., Addis Ababa University"
                  value={editingPartner.name}
                  onChange={(e) => setEditingPartner({ ...editingPartner, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partnerLogo">Logo</Label>
                <div className="space-y-3">
                  <Input id="partnerLogo" type="file" accept="image/*" onChange={handlePartnerLogoUpload} />
                  {editingPartner.logo && (
                    <div className="p-4 bg-white border rounded-lg flex items-center justify-center h-32">
                      <img
                        src={editingPartner.logo || "/placeholder.svg"}
                        alt="Preview"
                        className="max-h-24 max-w-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsPartnerDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={savePartner} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
