"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2, Save, Shield, User, Eye, EyeOff, Lock, ChevronDown, ChevronRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface PagePermission {
  page: string
  role: "view" | "edit" | "manage" | "none"
}

interface SubAdmin {
  id: string
  name: string
  username: string
  password: string
  email: string
  priority: number
  pagePermissions: PagePermission[]
  createdAt: string
}

const AVAILABLE_PAGES = [
  {
    id: "home",
    label: "Home",
    subPages: [
      { id: "home-hero", label: "Hero Section" },
      { id: "home-gallery", label: "Gallery" },
      { id: "home-impact", label: "Impact" },
      { id: "home-partners", label: "Partners" },
      { id: "home-footer", label: "Footer" },
    ],
  },
  {
    id: "latest",
    label: "Latest News",
    subPages: [
      { id: "latest-announcements", label: "Announcements" },
      { id: "latest-events", label: "Events" },
      { id: "latest-newsletter", label: "Newsletter" },
      { id: "latest-media-coverage", label: "Media Coverage" },
      { id: "latest-social-media", label: "Social Media" },
    ],
  },
  {
    id: "programs",
    label: "Programs",
    subPages: [
      { id: "programs-stem-tv", label: "STEM TV" },
      { id: "programs-stem-operations", label: "STEM Operations", hasNested: true },
      { id: "programs-entrepreneurship", label: "Entrepreneurship", hasNested: true },
      { id: "programs-fablab", label: "FabLab", hasNested: true },
    ],
  },
  {
    id: "about",
    label: "About",
    subPages: [
      { id: "about-stem-center", label: "STEM Center" },
      { id: "about-stempower-members", label: "STEMPower Members" },
    ],
  },
  { id: "contact", label: "Contact Us" },
  { id: "footer", label: "Footer" },
  { id: "location", label: "Locations" },
  { id: "header", label: "Header Navigation" },
]

const ROLE_OPTIONS = [
  { value: "none", label: "No Access" },
  { value: "view", label: "View Only" },
  { value: "edit", label: "Can Edit" },
  { value: "manage", label: "Full Manage" },
]

export default function AccountManagementPage() {
  const { toast } = useToast()
  const [subAdmins, setSubAdmins] = useState<SubAdmin[]>([
    {
      id: "1",
      name: "John Doe",
      username: "johndoe",
      password: "password123",
      email: "john@stempower.com",
      priority: 1,
      pagePermissions: [
        { page: "contact", role: "manage" },
        { page: "footer", role: "edit" },
        { page: "latest-announcements", role: "manage" },
      ],
      createdAt: new Date().toISOString(),
    },
  ])

  const [editingAdmin, setEditingAdmin] = useState<SubAdmin | null>(null)
  const [isAddingAdmin, setIsAddingAdmin] = useState(false)

  const handleSaveAdmin = (admin: SubAdmin) => {
    if (editingAdmin && editingAdmin.id) {
      setSubAdmins(subAdmins.map((a) => (a.id === admin.id ? admin : a)))
      toast({ title: "Admin Updated", description: "Sub-admin information has been updated." })
    } else {
      setSubAdmins([...subAdmins, { ...admin, id: Date.now().toString(), createdAt: new Date().toISOString() }])
      toast({ title: "Admin Added", description: "New sub-admin has been added." })
    }
    setEditingAdmin(null)
    setIsAddingAdmin(false)
  }

  const handleDeleteAdmin = (id: string) => {
    setSubAdmins(subAdmins.filter((a) => a.id !== id))
    toast({ title: "Admin Deleted", description: "Sub-admin has been removed." })
  }

  const getPermissionCount = (admin: SubAdmin) => {
    return admin.pagePermissions.filter((p) => p.role !== "none").length
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Account Management</h1>
        <p className="text-gray-600 mt-2">
          Manage sub-admin accounts with page and sub-page specific role-based access
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Sub-Admins</CardTitle>
              <CardDescription>Manage all sub-admin accounts and their page permissions</CardDescription>
            </div>
            <Button onClick={() => setIsAddingAdmin(true)} className="bg-[#00BFA6] hover:bg-[#00A693]">
              <Plus className="h-4 w-4 mr-2" />
              Add Sub-Admin
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Username</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 font-semibold">Permissions</th>
                  <th className="text-left py-3 px-4 font-semibold">Priority</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subAdmins.map((admin) => (
                  <tr key={admin.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        {admin.name}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs">{admin.username}</td>
                    <td className="py-3 px-4">{admin.email}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        <Lock className="h-3 w-3" />
                        {getPermissionCount(admin)} pages
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <Shield className="h-4 w-4 text-[#00BFA6]" />
                        {admin.priority}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingAdmin(admin)}
                          className="bg-transparent"
                        >
                          <Pencil className="h-3 w-3" />
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteAdmin(admin.id)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Admin Dialog */}
      <Dialog
        open={isAddingAdmin || editingAdmin !== null}
        onOpenChange={() => {
          setIsAddingAdmin(false)
          setEditingAdmin(null)
        }}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingAdmin ? "Edit Sub-Admin" : "Add Sub-Admin"}</DialogTitle>
            <DialogDescription>
              Manage sub-admin account, credentials, and page-specific permissions including sub-pages
            </DialogDescription>
          </DialogHeader>
          <SubAdminForm
            admin={
              editingAdmin || {
                id: "",
                name: "",
                username: "",
                password: "",
                email: "",
                priority: 1,
                pagePermissions: [],
                createdAt: new Date().toISOString(),
              }
            }
            onSave={handleSaveAdmin}
            onCancel={() => {
              setIsAddingAdmin(false)
              setEditingAdmin(null)
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

function SubAdminForm({
  admin,
  onSave,
  onCancel,
}: {
  admin: SubAdmin
  onSave: (admin: SubAdmin) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState(admin)
  const [showPassword, setShowPassword] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const handlePermissionChange = (pageId: string, role: "view" | "edit" | "manage" | "none") => {
    const existing = formData.pagePermissions.find((p) => p.page === pageId)
    if (existing) {
      setFormData({
        ...formData,
        pagePermissions: formData.pagePermissions.map((p) => (p.page === pageId ? { ...p, role } : p)),
      })
    } else {
      setFormData({
        ...formData,
        pagePermissions: [...formData.pagePermissions, { page: pageId, role }],
      })
    }
  }

  const getPermissionRole = (pageId: string) => {
    return formData.pagePermissions.find((p) => p.page === pageId)?.role || "none"
  }

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4 border-b pb-6">
        <h3 className="font-semibold text-gray-900">Basic Information</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g., john@stempower.com"
            />
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div className="space-y-4 border-b pb-6">
        <h3 className="font-semibold text-gray-900">Login Credentials</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              placeholder="e.g., johndoe"
            />
            <p className="text-xs text-gray-500">Used for login</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-500">Minimum 8 characters recommended</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority Level</Label>
          <Input
            id="priority"
            type="number"
            min="1"
            max="10"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: Number.parseInt(e.target.value) })}
            placeholder="1-10"
          />
          <p className="text-xs text-gray-500">Higher priority admins have precedence (1-10)</p>
        </div>
      </div>

      {/* Page Permissions */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Page & Sub-Page Permissions</h3>
        <p className="text-sm text-gray-600">Assign different roles for each page and sub-page</p>

        <div className="space-y-2 max-h-96 overflow-y-auto border rounded-lg p-4 bg-gray-50">
          {AVAILABLE_PAGES.map((page) => (
            <div key={page.id}>
              {/* Main Page */}
              <div className="flex items-center justify-between p-3 bg-white rounded border mb-2">
                <div className="flex items-center gap-2">
                  {page.subPages && (
                    <button onClick={() => toggleSection(page.id)} className="p-0 hover:bg-gray-100 rounded">
                      {expandedSections.includes(page.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  )}
                  <span className="font-medium text-gray-900">{page.label}</span>
                </div>
                <Select
                  value={getPermissionRole(page.id)}
                  onValueChange={(value: any) => handlePermissionChange(page.id, value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLE_OPTIONS.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sub-Pages */}
              {page.subPages && expandedSections.includes(page.id) && (
                <div className="ml-6 space-y-2 mb-2">
                  {page.subPages.map((subPage) => (
                    <div
                      key={subPage.id}
                      className="flex items-center justify-between p-3 bg-white rounded border border-gray-200"
                    >
                      <span className="text-sm text-gray-700 ml-2">→ {subPage.label}</span>
                      <Select
                        value={getPermissionRole(subPage.id)}
                        onValueChange={(value: any) => handlePermissionChange(subPage.id, value)}
                      >
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {ROLE_OPTIONS.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
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
        <Button onClick={() => onSave(formData)} className="bg-[#00BFA6] hover:bg-[#00A693]">
          <Save className="h-4 w-4 mr-2" />
          Save Admin
        </Button>
      </DialogFooter>
    </div>
  )
}
