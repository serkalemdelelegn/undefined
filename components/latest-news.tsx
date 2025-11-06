import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    title: "STEMpower Ethiopia Monthly Digest - March 2024",
    excerpt:
      "Celebrating International Women's Day with our female STEM leaders, new partnerships announced, and upcoming robotics competition details.",
    date: "March 15, 2024",
    category: "Newsletter",
    image: "/ethiopian-students-in-stem-lab.jpg",
    href: "/latest/news/newsletter/stempower-monthly-digest-march-2024",
  },
  {
    title: "Innovation Spotlight: Student Projects Making Impact",
    excerpt: "Discover how our students are using STEM skills to solve real-world problems in their communities.",
    date: "March 8, 2024",
    category: "Impact Stories",
    image: "/ethiopian-students-presenting-project.jpg",
    href: "/latest/news/newsletter/innovation-spotlight-student-projects",
  },
  {
    title: "New FabLab Opening in Addis Ababa",
    excerpt: "We're excited to announce our newest maker space equipped with 3D printers, laser cutters, and more.",
    date: "March 1, 2024",
    category: "Announcements",
    image: "/modern-fablab-maker-space.jpg",
    href: "/latest/news/newsletter/new-fablab-addis-ababa",
  },
  {
    title: "Teacher Training Program: Building STEM Capacity",
    excerpt: "Over 200 teachers completed our intensive STEM pedagogy training program this quarter.",
    date: "February 22, 2024",
    category: "Programs",
    image: "/teachers-in-training-workshop.jpg",
    href: "/latest/news/newsletter/teacher-training-program-2024",
  },
]
const gradientTextClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
const gradientButtonClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"

export function LatestNews() {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className={`text-4xl md:text-4xl mb-6 ${gradientTextClass} text-balance`}>Latest News</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest achievements and upcoming initiatives.
            </p>
          </div>
          <Button
  variant="outline"
  asChild
  className="hidden sm:flex bg-transparent bg-gradient-to-br from-[#2b5d5f] to-[#1fa39e] text-white 
             hover:from-[#234e50] hover:to-[#188c87] transition-all duration-300 hover:scale-105"
>
  <Link href="/latest/news/newsletter" className="flex items-center">
    View All News
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 ">
                  <Badge className="bg-primary text-primary-foreground bg-gradient-to-br from-[#2b5d5f] to-[#1fa39e] text-white">{item.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  <Link href={item.href} className="text-balance">
                    {item.title}
                  </Link>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">{item.excerpt}</p>
                <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                  <Link href={item.href} className="group/link">
                    Read More
                    <ExternalLink className="ml-2 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/latest/news/newsletter">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
