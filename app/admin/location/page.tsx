"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2, Save, MapPin } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface STEMCenter {
  id: string
  name: string
  host: string
  city: string
  country: string
  mapLink: string
}

export default function LocationManagementPage() {
  const { toast } = useToast()
  const [centers, setCenters] = useState<STEMCenter[]>([
    {
      id: "1",
      name: "Université d'Abomey-Calavi STEM Center",
      host: "Université d'Abomey-Calavi",
      city: "Dangbo",
      country: "Benin",
      mapLink: "https://maps.google.com/maps?q=Dangbo,Benin",
    },
  ])

  const [editingCenter, setEditingCenter] = useState<STEMCenter | null>(null)
  const [isAddingCenter, setIsAddingCenter] = useState(false)

  const handleSaveCenter = (center: STEMCenter) => {
    if (editingCenter && editingCenter.id) {
      setCenters(centers.map((c) => (c.id === center.id ? center : c)))
      toast({ title: "Center Updated", description: "STEM center information has been updated." })
    } else {
      setCenters([...centers, { ...center, id: Date.now().toString() }])
      toast({ title: "Center Added", description: "New STEM center has been added." })
    }
    setEditingCenter(null)
    setIsAddingCenter(false)
  }

  const handleDeleteCenter = (id: string) => {
    setCenters(centers.filter((c) => c.id !== id))
    toast({ title: "Center Deleted", description: "STEM center has been removed." })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">STEM Center Locations</h1>
        <p className="text-gray-600 mt-2">Manage all STEM center branches and their information</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>STEM Centers</CardTitle>
              <CardDescription>View and manage all STEM center branches</CardDescription>
            </div>
            <Button onClick={() => setIsAddingCenter(true)} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Plus className="h-4 w-4 mr-2" />
              Add Center
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {centers.map((center) => (
              <div key={center.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm line-clamp-2">{center.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      <span className="font-medium">HOST:</span> {center.host}
                    </p>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">CITY:</span> {center.city}
                    </p>
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">COUNTRY:</span> {center.country}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => setEditingCenter(center)}
                    >
                      <Pencil className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleDeleteCenter(center.id)}
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                  {center.mapLink && (
                    <a
                      href={center.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs text-[#00BFA6] hover:text-[#00A693] font-medium"
                    >
                      <MapPin className="h-3 w-3" />
                      View on Map
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Center Dialog */}
      <Dialog
        open={isAddingCenter || editingCenter !== null}
        onOpenChange={() => {
          setIsAddingCenter(false)
          setEditingCenter(null)
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingCenter ? "Edit STEM Center" : "Add STEM Center"}</DialogTitle>
            <DialogDescription>Manage STEM center information and location</DialogDescription>
          </DialogHeader>
          <STEMCenterForm
            center={
              editingCenter || {
                id: "",
                name: "",
                host: "",
                city: "",
                country: "",
                mapLink: "",
              }
            }
            onSave={handleSaveCenter}
            onCancel={() => {
              setIsAddingCenter(false)
              setEditingCenter(null)
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

function STEMCenterForm({
  center,
  onSave,
  onCancel,
}: {
  center: STEMCenter
  onSave: (center: STEMCenter) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState(center)

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {/* Center Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Center Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g., Université d'Abomey-Calavi STEM Center"
        />
      </div>

      {/* Host */}
      <div className="space-y-2">
        <Label htmlFor="host">Host Institution</Label>
        <Input
          id="host"
          value={formData.host}
          onChange={(e) => setFormData({ ...formData, host: e.target.value })}
          placeholder="e.g., Université d'Abomey-Calavi"
        />
      </div>

      {/* City */}
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          placeholder="e.g., Dangbo"
        />
      </div>

      {/* Country */}
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          placeholder="e.g., Benin"
        />
      </div>

      {/* Map Link */}
      <div className="space-y-2">
        <Label htmlFor="mapLink" className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          Google Maps Link
        </Label>
        <Input
          id="mapLink"
          value={formData.mapLink}
          onChange={(e) => setFormData({ ...formData, mapLink: e.target.value })}
          placeholder="https://maps.google.com/maps?q=..."
        />
        <p className="text-xs text-gray-500">Paste the Google Maps link for the center location</p>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onSave(formData)} className="bg-[#00BFA6] hover:bg-[#00A693]">
          <Save className="h-4 w-4 mr-2" />
          Save Center
        </Button>
      </DialogFooter>
    </div>
  )
}
