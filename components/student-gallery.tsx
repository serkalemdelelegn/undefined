"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users, Award, Lightbulb } from "lucide-react"

const galleryItems = [
  {
    image: "/ethiopian-students-working-on-robotics-project-in-.jpg",
    title: "Robotics Innovation Lab",
    description: "Students at Addis Ababa STEM Center developing autonomous robots for agricultural applications",
    category: "Robotics",
    location: "Addis Ababa",
    participants: 24,
  },
  {
    image: "/young-ethiopian-entrepreneurs-presenting-business-.jpg",
    title: "Entrepreneurship Pitch Day",
    description: "Young innovators presenting sustainable technology solutions to address local challenges",
    category: "Entrepreneurship",
    location: "Hawassa",
    participants: 18,
  },
  {
    image: "/ethiopian-students-conducting-chemistry-experiment.jpg",
    title: "Advanced Chemistry Research",
    description: "High school students conducting research on water purification methods using local materials",
    category: "Research",
    location: "Bahir Dar",
    participants: 15,
  },
  {
    image: "/ethiopian-girls-coding-and-programming-computers-i.jpg",
    title: "Girls in Tech Program",
    description: "Female students learning advanced programming and developing mobile applications",
    category: "Technology",
    location: "Mekelle",
    participants: 32,
  },
  {
    image: "/ethiopian-students-building-and-testing-solar-pane.jpg",
    title: "Renewable Energy Project",
    description: "Students designing and building solar energy solutions for rural communities",
    category: "Engineering",
    location: "Jimma",
    participants: 20,
  },
  {
    image: "/ethiopian-students-using-3d-printers-and-digital-f.jpg",
    title: "Digital Fabrication Workshop",
    description: "Learning 3D printing, laser cutting, and digital design in our state-of-the-art FabLab",
    category: "FabLab",
    location: "Dire Dawa",
    participants: 28,
  },
]

export function StudentGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Robotics", "Entrepreneurship", "Research", "Technology", "Engineering", "FabLab"]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(filteredItems.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(filteredItems.length / 3)) % Math.ceil(filteredItems.length / 3))
  }

  const visibleItems = filteredItems.slice(currentIndex * 3, (currentIndex + 1) * 3)
  const gradientTextClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
  const gradientButtonClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"
  
  

  return (
    <section className="py-10 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-white text-sm font-medium mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC]">
            <Users className="h-4 w-4" />
            Student Showcase
            
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${gradientTextClass} text-balance`}>Our Students in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Witness the incredible work being done by Ethiopian students across our STEM centers, from cutting-edge
            research to innovative entrepreneurship projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
  {categories.map((category) => (
    <Button
      key={category}
      onClick={() => {
        setSelectedCategory(category)
        setCurrentIndex(0)
      }}
      className={`rounded-full transition-all hover:scale-105 
        ${
          selectedCategory === category
            ? "bg-gradient-to-br from-[#2b5d5f] to-[#1fa39e] text-white border-none hover:from-[#214b4c] hover:to-[#188982]"
            : "border border-primary/20 text-primary bg-transparent hover:bg-gradient-to-br hover:from-[#367375] hover:to-[#24C3BC] hover:text-white"
        }`}
    >
      {category}
    </Button>
  ))}
</div>



        {/* Gallery Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-card/50 backdrop-blur"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white bg-gradient-to-br from-[#367375] to-[#24C3BC]">{item.category}</Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      {item.participants} participants
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium">{item.location}</span>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>Active Project</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          {Math.ceil(filteredItems.length / 3) > 1 && (
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full hover:scale-110 transition-all bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(filteredItems.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full hover:scale-110 transition-all bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
            <Lightbulb className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Join Our Community</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your STEM Journey?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover opportunities to learn, create, and innovate at STEMpower Ethiopia centers across the country.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all">
            Find Your Nearest Center
          </Button>
        </div> */}
      </div>
    </section>
  )
}
