"use client"

import type React from "react"

import { useState, useRef } from "react"
import { AdminHeader } from "@/components/ui/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Plus, Trash2, MapPin, Calendar, User, Phone, Mail, DollarSign, Edit, Upload, Filter } from "lucide-react"
import { LaboratoryProgramsSection } from "@/components/laboratory-programs-section"

interface Center {
  id: string
  name: string
  city: string
  region: string
  establishedYear: string
  director: string
  laboratories: string[]
  phone?: string
  email?: string
  website?: string
  fundedBy: string
  image: string
  featuredBadge?: string
}

const availableLabs = ["COMP", "ELEX", "MECX", "OPTX", "3DP", "CHMX", "SOLP", "AERO", "HISC"]

export default function StemCentersPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCenter, setEditingCenter] = useState<Center | null>(null)
  const [editingType, setEditingType] = useState<"featured" | "all">("all")

  const [hero, setHero] = useState({
    badge: "Empowering Africa's Next Generation Since 2010",
    title: "61 STEM Centers Across Ethiopia",
    description:
      "Specialized learning hubs where education meets innovation. From our first center in Bishoftu's Foka area in 2009, we've grown into a nation-wide movement driving peace, development, and opportunity through science and technology.",
  })

  const [statistics, setStatistics] = useState({
    totalCenters: "58",
    regions: "11",
    studentsServed: "50k+",
    yearsOfImpact: "15+",
  })

  const [featuredCenters, setFeaturedCenters] = useState<Center[]>([
    {
      id: "1",
      name: "Foka STEM Training Center",
      city: "Bishoftu",
      region: "Oromia",
      establishedYear: "2010",
      director: "Mr. Eyob Ayechew",
      laboratories: ["COMP", "ELEX", "MECX", "OPTX", "3DP", "CHMX", "SOLP"],
      phone: "+251912066189",
      email: "eyoba@stempower.org",
      website: "https://www.stempower.org",
      fundedBy: "GFCT",
      image: "/stem-laboratory-students.jpg",
      featuredBadge: "First Center - 2010",
    },
    {
      id: "2",
      name: "Gondar University STEM Center",
      city: "Gondar",
      region: "Amhara",
      establishedYear: "2013",
      director: "Mr. Girma Workie",
      laboratories: ["COMP", "ELEX", "MECX", "OPTX", "3DP", "CHMX", "SOLP"],
      phone: "+251918729057",
      email: "workiegirma@gmail.com",
      website: "https://www.gondaruniversity.edu.et",
      fundedBy: "GFCT",
      image: "/university-stem-laboratory.jpg",
      featuredBadge: "Most Comprehensive",
    },
    {
      id: "3",
      name: "Bahirdar University STEM Center",
      city: "Bahirdar",
      region: "Amhara",
      establishedYear: "2014",
      director: "Dr. Tesfa Tegegne",
      laboratories: ["COMP", "ELEX", "MECX", "OPTX", "3DP", "AERO", "HISC", "SOLP"],
      phone: "+251918762686",
      email: "tesfat@gmail.com",
      website: "https://www.bahirdaruniversity.edu.et",
      fundedBy: "GFCT",
      image: "/modern-stem-center.jpg",
      featuredBadge: "Most Comprehensive",
    },
  ])

  const [allCenters, setAllCenters] = useState<Center[]>([
    {
      id: "4",
      name: "Kallamino Special High School STEM Center",
      city: "Mekelle",
      region: "Tigray",
      establishedYear: "2011",
      director: "Mr. Daniel Tesfaye",
      laboratories: ["COMP", "ELEX", "MECX", "OPTX", "3DP"],
      phone: "+251920864574",
      email: "getwaydan@gmail.com",
      website: "https://www.kallamino.edu.et",
      fundedBy: "GFCT",
      image: "/stem-laboratory-students.jpg",
    },
  ])

  const [featuredFilter, setFeaturedFilter] = useState({ region: "all", laboratory: "all" })
  const [allCentersFilter, setAllCentersFilter] = useState({ region: "all", laboratory: "all" })
  const [imagePreview, setImagePreview] = useState<string>("")

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("STEM Centers updated successfully!")
  }

  const addFeaturedCenter = () => {
    const newCenter: Center = {
      id: Date.now().toString(),
      name: "",
      city: "",
      region: "",
      establishedYear: "",
      director: "",
      laboratories: [],
      phone: "",
      email: "",
      website: "",
      fundedBy: "",
      image: "",
      featuredBadge: "",
    }
    setEditingCenter(newCenter)
    setEditingType("featured")
    setIsDialogOpen(true)
  }

  const addAllCenter = () => {
    const newCenter: Center = {
      id: Date.now().toString(),
      name: "",
      city: "",
      region: "",
      establishedYear: "",
      director: "",
      laboratories: [],
      phone: "",
      email: "",
      website: "",
      fundedBy: "",
      image: "",
    }
    setEditingCenter(newCenter)
    setEditingType("all")
    setIsDialogOpen(true)
  }

  const editCenter = (center: Center, type: "featured" | "all") => {
    setEditingCenter({ ...center })
    setEditingType(type)
    setIsDialogOpen(true)
  }

  const saveCenter = () => {
    if (!editingCenter) return

    if (editingType === "featured") {
      const existing = featuredCenters.find((c) => c.id === editingCenter.id)
      if (existing) {
        setFeaturedCenters(featuredCenters.map((c) => (c.id === editingCenter.id ? editingCenter : c)))
      } else {
        setFeaturedCenters([...featuredCenters, editingCenter])
      }
    } else {
      const existing = allCenters.find((c) => c.id === editingCenter.id)
      if (existing) {
        setAllCenters(allCenters.map((c) => (c.id === editingCenter.id ? editingCenter : c)))
      } else {
        setAllCenters([...allCenters, editingCenter])
      }
    }

    setIsDialogOpen(false)
    setEditingCenter(null)
  }

  const deleteCenter = (id: string, type: "featured" | "all") => {
    if (confirm("Are you sure you want to delete this center?")) {
      if (type === "featured") {
        setFeaturedCenters(featuredCenters.filter((c) => c.id !== id))
      } else {
        setAllCenters(allCenters.filter((c) => c.id !== id))
      }
    }
  }

  const toggleLaboratory = (labCode: string) => {
    if (!editingCenter) return

    if (editingCenter.laboratories.includes(labCode)) {
      setEditingCenter({
        ...editingCenter,
        laboratories: editingCenter.laboratories.filter((l) => l !== labCode),
      })
    } else {
      setEditingCenter({
        ...editingCenter,
        laboratories: [...editingCenter.laboratories, labCode],
      })
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setImagePreview(result)
        if (editingCenter) {
          setEditingCenter({ ...editingCenter, image: result })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const filterCenters = (centers: Center[], filter: { region: string; laboratory: string }) => {
    return centers.filter((center) => {
      const regionMatch = filter.region === "all" || center.region === filter.region
      const labMatch = filter.laboratory === "all" || center.laboratories.includes(filter.laboratory)
      return regionMatch && labMatch
    })
  }

  const getUniqueRegions = (centers: Center[]) => {
    return Array.from(new Set(centers.map((c) => c.region))).sort()
  }

  const CenterCard = ({ center, type }: { center: Center; type: "featured" | "all" }) => (
    <Card className="overflow-hidden">
      {center.image && (
        <div className="h-48 overflow-hidden bg-muted">
          <img src={center.image || "/placeholder.svg"} alt={center.name} className="w-full h-full object-cover" />
        </div>
      )}
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-balance">{center.name || "Unnamed Center"}</h3>
            {center.featuredBadge && (
              <Badge className="bg-[#00BFA6] text-white shrink-0 ml-2">{center.featuredBadge}</Badge>
            )}
          </div>

          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>
                {center.city}, {center.region}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Established {center.establishedYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 shrink-0" />
              <span>{center.director}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Available Laboratories ({center.laboratories.length})</p>
          <div className="flex flex-wrap gap-1">
            {center.laboratories.map((lab) => (
              <Badge key={lab} variant="secondary" className="text-xs">
                {lab}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-1 text-sm text-muted-foreground pt-2 border-t">
          {center.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>{center.phone}</span>
            </div>
          )}
          {center.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>{center.email}</span>
            </div>
          )}
          {center.website && (
            <div className="flex items-center gap-2">
              <a
                href={center.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFA6] hover:underline flex items-center gap-2"
              >
                <span>🔗</span>
                <span>Visit Website</span>
              </a>
            </div>
          )}
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 shrink-0" />
            <span>Funded by {center.fundedBy}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent"
            onClick={() => editCenter(center, type)}
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="outline" size="sm" onClick={() => deleteCenter(center.id, type)}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const FilterSection = ({
    filter,
    setFilter,
    centers,
  }: {
    filter: { region: string; laboratory: string }
    setFilter: (filter: { region: string; laboratory: string }) => void
    centers: Center[]
  }) => (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Filters:</span>
      </div>
      <Select value={filter.region} onValueChange={(value) => setFilter({ ...filter, region: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Regions" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Regions</SelectItem>
          {getUniqueRegions(centers).map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={filter.laboratory} onValueChange={(value) => setFilter({ ...filter, laboratory: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Laboratories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Laboratories</SelectItem>
          {availableLabs.map((lab) => (
            <SelectItem key={lab} value={lab}>
              {lab}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {(filter.region !== "all" || filter.laboratory !== "all") && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilter({ region: "all", laboratory: "all" })}
          className="text-xs"
        >
          Clear Filters
        </Button>
      )}
    </div>
  )

  const labProgramsRef = useRef<{ openAddDialog: () => void }>(null)

  return (
    <div>
      <AdminHeader title="STEM Centers" description="Manage STEM centers across Ethiopia" />
      <div className="p-6 max-w-7xl">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Main hero banner for the STEM centers page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroBadge">Badge Text</Label>
                <Input
                  id="heroBadge"
                  placeholder="e.g., Empowering Africa's Next Generation Since 2010"
                  value={hero.badge}
                  onChange={(e) => setHero({ ...hero, badge: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Title</Label>
                <Input
                  id="heroTitle"
                  placeholder="e.g., 61 STEM Centers Across Ethiopia"
                  value={hero.title}
                  onChange={(e) => setHero({ ...hero, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroDescription">Description</Label>
                <Textarea
                  id="heroDescription"
                  rows={4}
                  placeholder="Enter the hero section description"
                  value={hero.description}
                  onChange={(e) => setHero({ ...hero, description: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistical Overview</CardTitle>
              <CardDescription>Key metrics about STEM Centers network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="totalCenters">Total STEM Centers</Label>
                  <Input
                    id="totalCenters"
                    value={statistics.totalCenters}
                    onChange={(e) => setStatistics({ ...statistics, totalCenters: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regions">Regions</Label>
                  <Input
                    id="regions"
                    value={statistics.regions}
                    onChange={(e) => setStatistics({ ...statistics, regions: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentsServed">Students Served</Label>
                  <Input
                    id="studentsServed"
                    value={statistics.studentsServed}
                    onChange={(e) => setStatistics({ ...statistics, studentsServed: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearsOfImpact">Years of Impact</Label>
                  <Input
                    id="yearsOfImpact"
                    value={statistics.yearsOfImpact}
                    onChange={(e) => setStatistics({ ...statistics, yearsOfImpact: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button onClick={addFeaturedCenter} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Plus className="mr-2 h-4 w-4" />
              Add Featured Center
            </Button>
            <Button onClick={addAllCenter} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Plus className="mr-2 h-4 w-4" />
              Add Center
            </Button>
            <Button onClick={() => labProgramsRef.current?.openAddDialog()} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Plus className="mr-2 h-4 w-4" />
              Add New Laboratory Program
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Featured Centers</CardTitle>
              <CardDescription>Highlight special centers with custom badges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FilterSection filter={featuredFilter} setFilter={setFeaturedFilter} centers={featuredCenters} />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filterCenters(featuredCenters, featuredFilter).map((center) => (
                  <CenterCard key={center.id} center={center} type="featured" />
                ))}
              </div>
              {filterCenters(featuredCenters, featuredFilter).length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No featured centers match the selected filters.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>All STEM Centers</CardTitle>
              <CardDescription>Complete list of STEM centers across Ethiopia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FilterSection filter={allCentersFilter} setFilter={setAllCentersFilter} centers={allCenters} />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filterCenters(allCenters, allCentersFilter).map((center) => (
                  <CenterCard key={center.id} center={center} type="all" />
                ))}
              </div>
              {filterCenters(allCenters, allCentersFilter).length === 0 && (
                <p className="text-center text-muted-foreground py-8">No centers match the selected filters.</p>
              )}
            </CardContent>
          </Card>

          <div className="mt-8">
            <LaboratoryProgramsSection ref={labProgramsRef} showAddButton={false} />
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSave} disabled={isSaving} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save All Changes"}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingCenter?.name || (editingType === "featured" ? "New Featured Center" : "New Center")}
            </DialogTitle>
            <DialogDescription>
              {editingType === "featured"
                ? "Add a featured center with a custom badge"
                : "Add a new STEM center to the network"}
            </DialogDescription>
          </DialogHeader>

          {editingCenter && (
            <div className="space-y-6 py-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="centerName">Center Name *</Label>
                  <Input
                    id="centerName"
                    placeholder="e.g., Foka STEM Training Center"
                    value={editingCenter.name}
                    onChange={(e) => setEditingCenter({ ...editingCenter, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="establishedYear">Established Year *</Label>
                  <Input
                    id="establishedYear"
                    placeholder="e.g., 2010"
                    value={editingCenter.establishedYear}
                    onChange={(e) => setEditingCenter({ ...editingCenter, establishedYear: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="e.g., Bishoftu"
                    value={editingCenter.city}
                    onChange={(e) => setEditingCenter({ ...editingCenter, city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region">Region *</Label>
                  <Input
                    id="region"
                    placeholder="e.g., Oromia"
                    value={editingCenter.region}
                    onChange={(e) => setEditingCenter({ ...editingCenter, region: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="director">Director Name *</Label>
                <Input
                  id="director"
                  placeholder="e.g., Mr. Eyob Ayechew"
                  value={editingCenter.director}
                  onChange={(e) => setEditingCenter({ ...editingCenter, director: e.target.value })}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="e.g., +251912066189"
                    value={editingCenter.phone || ""}
                    onChange={(e) => setEditingCenter({ ...editingCenter, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g., director@stempower.org"
                    value={editingCenter.email || ""}
                    onChange={(e) => setEditingCenter({ ...editingCenter, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="e.g., https://www.stempower.org"
                  value={editingCenter.website || ""}
                  onChange={(e) => setEditingCenter({ ...editingCenter, website: e.target.value })}
                />
              </div>

              <div className="space-y-3">
                <Label>Available Laboratories ({editingCenter.laboratories.length} selected)</Label>
                <div className="grid grid-cols-3 gap-3">
                  {availableLabs.map((lab) => (
                    <div key={lab} className="flex items-center space-x-2">
                      <Checkbox
                        id={`lab-${lab}`}
                        checked={editingCenter.laboratories.includes(lab)}
                        onCheckedChange={() => toggleLaboratory(lab)}
                      />
                      <label
                        htmlFor={`lab-${lab}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {lab}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fundedBy">Funded By</Label>
                  <Input
                    id="fundedBy"
                    placeholder="e.g., GFCT"
                    value={editingCenter.fundedBy}
                    onChange={(e) => setEditingCenter({ ...editingCenter, fundedBy: e.target.value })}
                  />
                </div>
                {editingType === "featured" && (
                  <div className="space-y-2">
                    <Label htmlFor="featuredBadge">Featured Badge Text</Label>
                    <Input
                      id="featuredBadge"
                      placeholder="e.g., First Center - 2010"
                      value={editingCenter.featuredBadge || ""}
                      onChange={(e) => setEditingCenter({ ...editingCenter, featuredBadge: e.target.value })}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUpload">Center Image</Label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("imageUpload")?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                  {(editingCenter.image || imagePreview) && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                      <img
                        src={editingCenter.image || imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveCenter} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Center
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
