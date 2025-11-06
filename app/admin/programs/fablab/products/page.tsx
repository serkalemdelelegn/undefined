"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Save, Plus, Trash2, Edit, CheckCircle2, Package, ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { EditableHeroSection } from "@/components/editable-hero-section"
import { EditableStatisticsSection } from "@/components/editable-statistics-section"

interface Product {
  id: string
  name: string
  category: "Science Kits" | "Manufacturing Solution"
  subcategory?: string
  price: string
  availability: string
  description: string
  overview: string
  keyFeatures: string[]
  whatsIncluded: string[]
  applications: string[]
  image: string
}

interface Statistic {
  id: string
  number: string
  title: string
}

interface HeroData {
  badge: string
  title: string
  description: string
}

export default function ProductsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const [heroData, setHeroData] = useState<HeroData>({
    badge: "Product Management",
    title: "Products",
    description: "Manage FabLab products and educational kits",
  })

  const [statistics, setStatistics] = useState<Statistic[]>([
    { id: "1", number: "12", title: "Total Products" },
    { id: "2", number: "8", title: "Available" },
    { id: "3", number: "4", title: "Out of Stock" },
    { id: "4", number: "3", title: "Categories" },
  ])

  // Products Data
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Basic Logic Gates",
      category: "Science Kits",
      subcategory: "Physics",
      price: "Br 9,499.00",
      availability: "Available",
      description:
        "Explore digital electronics and computer science fundamentals with hands-on logic gate experiments and circuit building activities.",
      overview:
        "This comprehensive digital electronics kit introduces students to the building blocks of modern computing. Learn how logic gates form the foundation of digital circuits, processors, and computer systems through interactive experiments.",
      keyFeatures: [
        "AND, OR, NOT, NAND, NOR, XOR gates included",
        "Truth table exercises and verification",
        "Circuit building and testing capabilities",
        "Digital logic concepts explained clearly",
        "LED indicators for visual feedback",
        "Progressive learning modules",
      ],
      whatsIncluded: [
        "Logic gate ICs (various types)",
        "Breadboard and mounting board",
        "LED indicators and resistors",
        "Power supply and switches",
        "Connecting wires",
        "Comprehensive instruction manual",
      ],
      applications: [
        "Digital circuit design",
        "Boolean algebra applications",
        "Computer science fundamentals",
        "Logic circuit analysis",
        "Sequential and combinational circuits",
      ],
      image: "",
    },
  ])

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Products page updated successfully!")
  }

  // Product handlers
  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: "",
      category: "Science Kits",
      subcategory: "",
      price: "",
      availability: "Available",
      description: "",
      overview: "",
      keyFeatures: [],
      whatsIncluded: [],
      applications: [],
      image: "",
    }
    setEditingProduct(newProduct)
    setIsProductDialogOpen(true)
  }

  const editProduct = (product: Product) => {
    setEditingProduct({ ...product })
    setIsProductDialogOpen(true)
  }

  const saveProduct = () => {
    if (!editingProduct) return
    const existing = products.find((p) => p.id === editingProduct.id)
    if (existing) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
    } else {
      setProducts([...products, editingProduct])
    }
    setIsProductDialogOpen(false)
    setEditingProduct(null)
  }

  const deleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editingProduct) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditingProduct({ ...editingProduct, image: reader.result as string })
      }
      reader.readAsDataURL(file)
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

      <div className="px-6 py-6">
        <EditableHeroSection data={heroData} onSave={setHeroData} />
      </div>

      <div className="px-6 pb-6">
        <EditableStatisticsSection statistics={statistics} onSave={setStatistics} />
      </div>

      <div className="p-6 max-w-6xl">
        <div className="space-y-6">
          {/* Products Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Products Catalog</CardTitle>
                  <CardDescription>Manage available products and kits</CardDescription>
                </div>
                <Button onClick={addProduct} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="h-64 md:h-auto bg-muted">
                        {product.image ? (
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Package className="h-16 w-16 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="md:col-span-2 p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs border-[#00BFA6] text-[#00BFA6]">
                                {product.category}
                              </Badge>
                              {product.subcategory && (
                                <Badge variant="secondary" className="text-xs">
                                  {product.subcategory}
                                </Badge>
                              )}
                              <Badge
                                variant={product.availability === "Available" ? "default" : "secondary"}
                                className="text-xs bg-[#00BFA6]"
                              >
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                {product.availability}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                            <p className="text-2xl font-bold text-[#00BFA6] mb-3">{product.price}</p>
                            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => editProduct(product)}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => deleteProduct(product.id)}>
                              <Trash2 className="h-3 w-3 text-destructive" />
                            </Button>
                          </div>
                        </div>

                        {product.overview && (
                          <div className="border-t pt-4">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#00BFA6] flex items-center justify-center text-white">
                                <Package className="h-4 w-4" />
                              </div>
                              Product Overview
                            </h4>
                            <p className="text-sm text-gray-600">{product.overview}</p>
                          </div>
                        )}

                        {product.keyFeatures.length > 0 && (
                          <div className="border-t pt-4">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#00BFA6] flex items-center justify-center text-white">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              Key Features
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {product.keyFeatures.map((feature, idx) => (
                                <li key={idx} className="text-sm flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-[#00BFA6] mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.whatsIncluded.length > 0 && (
                          <div className="border-t pt-4">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#00BFA6] flex items-center justify-center text-white">
                                <Package className="h-4 w-4" />
                              </div>
                              What's Included
                            </h4>
                            <ul className="space-y-1">
                              {product.whatsIncluded.map((item, idx) => (
                                <li key={idx} className="text-sm flex items-start gap-2">
                                  <span className="text-[#00BFA6]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.applications.length > 0 && (
                          <div className="border-t pt-4">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#00BFA6] flex items-center justify-center text-white">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              Applications & Uses
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {product.applications.map((app, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
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

      {/* Product Dialog */}
      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProduct?.name || "New Product"}</DialogTitle>
            <DialogDescription>Add or edit product information</DialogDescription>
          </DialogHeader>
          {editingProduct && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  placeholder="e.g., Basic Logic Gates"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="productCategory">Product Category</Label>
                  <Select
                    value={editingProduct.category}
                    onValueChange={(value: "Science Kits" | "Manufacturing Solution") =>
                      setEditingProduct({ ...editingProduct, category: value })
                    }
                  >
                    <SelectTrigger id="productCategory">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Science Kits">Science Kits</SelectItem>
                      <SelectItem value="Manufacturing Solution">Manufacturing Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productSubcategory">Subcategory (Optional)</Label>
                  <Input
                    id="productSubcategory"
                    placeholder="e.g., Physics, Chemistry, Agriculture"
                    value={editingProduct.subcategory || ""}
                    onChange={(e) => setEditingProduct({ ...editingProduct, subcategory: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="productPrice">Price</Label>
                  <Input
                    id="productPrice"
                    placeholder="e.g., Br 9,499.00"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productAvailability">Availability</Label>
                  <Select
                    value={editingProduct.availability}
                    onValueChange={(value) => setEditingProduct({ ...editingProduct, availability: value })}
                  >
                    <SelectTrigger id="productAvailability">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Available">Available</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                      <SelectItem value="Pre-order">Pre-order</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="productDescription">Short Description</Label>
                <Textarea
                  id="productDescription"
                  rows={2}
                  placeholder="Brief product description..."
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productOverview">Product Overview</Label>
                <Textarea
                  id="productOverview"
                  rows={3}
                  placeholder="Detailed product overview..."
                  value={editingProduct.overview}
                  onChange={(e) => setEditingProduct({ ...editingProduct, overview: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productFeatures">Key Features (one per line)</Label>
                <Textarea
                  id="productFeatures"
                  rows={4}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  value={editingProduct.keyFeatures.join("\n")}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      keyFeatures: e.target.value.split("\n").filter(Boolean),
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productIncluded">What's Included (one per line)</Label>
                <Textarea
                  id="productIncluded"
                  rows={4}
                  placeholder="Item 1&#10;Item 2&#10;Item 3"
                  value={editingProduct.whatsIncluded.join("\n")}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      whatsIncluded: e.target.value.split("\n").filter(Boolean),
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productApplications">Applications (comma-separated)</Label>
                <Textarea
                  id="productApplications"
                  rows={2}
                  placeholder="Application 1, Application 2, Application 3"
                  value={editingProduct.applications.join(", ")}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      applications: e.target.value
                        .split(",")
                        .map((app) => app.trim())
                        .filter(Boolean),
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productImage">Product Image</Label>
                <div className="space-y-3">
                  <Input id="productImage" type="file" accept="image/*" onChange={handleProductImageUpload} />
                  {editingProduct.image && (
                    <div className="h-48 rounded-lg overflow-hidden border">
                      <img
                        src={editingProduct.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsProductDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveProduct} className="bg-[#00BFA6] hover:bg-[#00A693]">
                  Save Product
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
