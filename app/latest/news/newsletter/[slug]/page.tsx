"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, ArrowLeft, Share2, Mail, User, ChevronLeft, ChevronRight, X, Twitter, Facebook, Linkedin } from 'lucide-react'
import Link from "next/link"
import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Newsletter data (in a real app, this would come from a database or CMS)
const newsletters = [
  {
    id: 1,
    slug: "stempower-monthly-digest-march-2024",
    title: "STEMpower Ethiopia Monthly Digest - March 2024",
    excerpt:
      "Celebrating International Women's Day with our female STEM leaders, new partnerships announced, and upcoming robotics competition details.",
    date: "March 15, 2024",
    author: "STEMpower Communications Team",
    category: "Monthly Digest",
    image: "/ethiopian-students-in-stem-lab.jpg",
    pdfUrl: "/newsletters/march-2024-digest.pdf",
    content: `
      <h2>Celebrating International Women's Day</h2>
      <p>This March, we're proud to spotlight the incredible women leading STEM innovation across Ethiopia. From our female students breaking barriers in robotics competitions to our women educators inspiring the next generation, their contributions are transforming our communities.</p>
      
      <h3>Featured Story: Meet Dr. Almaz Tesfaye</h3>
      <p>Dr. Almaz Tesfaye, one of our lead STEM educators, has been instrumental in developing our curriculum that has reached over 5,000 students. Her innovative teaching methods combine traditional Ethiopian wisdom with cutting-edge technology, creating a unique learning experience that resonates with students across the country.</p>
      
      <h2>New Partnerships Announced</h2>
      <p>We're excited to announce strategic partnerships with three major technology companies that will bring state-of-the-art equipment and training opportunities to our students:</p>
      <ul>
        <li><strong>IBM SkillsBuild:</strong> Providing digital skills training and certification programs</li>
        <li><strong>Microsoft Education:</strong> Donating 200 computers and software licenses</li>
        <li><strong>Arduino Foundation:</strong> Supporting our maker spaces with electronics kits and training</li>
      </ul>
      
      <h2>Upcoming Robotics Competition</h2>
      <p>Mark your calendars! The 5th Annual STEMpower Robotics Challenge will take place on April 20-22, 2024, at the Addis Ababa Science Museum. Over 50 teams from across Ethiopia will compete in categories including:</p>
      <ul>
        <li>Line Following Robots</li>
        <li>Autonomous Navigation</li>
        <li>Creative Problem Solving</li>
        <li>Sustainable Solutions Challenge</li>
      </ul>
      
      <h2>Student Spotlight</h2>
      <p>This month, we're featuring Yonas Bekele, a 16-year-old student who developed a solar-powered water purification system for his community. His project has already provided clean drinking water to over 500 families in rural areas.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we move into the second quarter of 2024, we're expanding our programs to reach 10 new schools and launching our first-ever online STEM courses. Stay tuned for more exciting updates!</p>
    `,
  },
  {
    id: 2,
    slug: "innovation-spotlight-student-projects",
    title: "Innovation Spotlight: Student Projects Making Impact",
    excerpt: "Discover how our students are using STEM skills to solve real-world problems in their communities.",
    date: "March 8, 2024",
    author: "Sarah Johnson",
    category: "Impact Stories",
    image: "/ethiopian-students-presenting-project.jpg",
    pdfUrl: "/newsletters/innovation-spotlight-march-2024.pdf",
    content: `
      <h2>Student Innovation Changing Lives</h2>
      <p>Our students are not just learning STEM concepts—they're applying them to solve real challenges in their communities. This newsletter highlights three outstanding projects that demonstrate the power of STEM education.</p>
      
      <h3>Project 1: Smart Irrigation System</h3>
      <p>A team of students from Bahir Dar developed an IoT-based irrigation system that helps farmers optimize water usage. Using soil moisture sensors and weather data, the system automatically adjusts watering schedules, reducing water consumption by 40% while improving crop yields.</p>
      
      <h3>Project 2: Mobile Health Clinic App</h3>
      <p>Students in Addis Ababa created a mobile application that connects rural communities with healthcare providers. The app allows users to schedule appointments, receive health tips, and access telemedicine services, bridging the healthcare gap in underserved areas.</p>
      
      <h3>Project 3: Renewable Energy Solutions</h3>
      <p>A group of young innovators designed a hybrid solar-wind power system specifically adapted for Ethiopian climate conditions. Their prototype is now being tested in three villages, providing reliable electricity to over 200 households.</p>
      
      <h2>Impact Metrics</h2>
      <p>These student projects have collectively:</p>
      <ul>
        <li>Benefited over 1,000 community members</li>
        <li>Saved an estimated 500,000 liters of water</li>
        <li>Provided electricity to 200+ households</li>
        <li>Connected 300+ patients with healthcare services</li>
      </ul>
      
      <h2>Recognition and Awards</h2>
      <p>All three projects received recognition at the National Innovation Fair and are being considered for implementation by local government agencies. The students have also been invited to present their work at the Pan-African STEM Conference in Nairobi this summer.</p>
    `,
  },
  {
    id: 3,
    slug: "new-fablab-addis-ababa",
    title: "Partnership Announcement: New FabLab Opening in Addis Ababa",
    excerpt: "We're excited to announce our newest maker space equipped with 3D printers, laser cutters, and more.",
    date: "March 1, 2024",
    author: "Michael Chen",
    category: "Announcements",
    image: "/modern-fablab-maker-space.jpg",
    pdfUrl: "/newsletters/fablab-announcement-march-2024.pdf",
    content: `
      <h2>A New Hub for Innovation</h2>
      <p>We're thrilled to announce the opening of our state-of-the-art FabLab in Addis Ababa, made possible through a generous partnership with the Fab Foundation and local technology companies. This 500-square-meter facility will serve as a hub for creativity, innovation, and hands-on learning.</p>
      
      <h2>World-Class Equipment</h2>
      <p>The new FabLab is equipped with cutting-edge tools and technology:</p>
      <ul>
        <li><strong>3D Printers:</strong> 10 FDM and 2 resin printers for rapid prototyping</li>
        <li><strong>Laser Cutters:</strong> Precision cutting and engraving machines</li>
        <li><strong>CNC Machines:</strong> Computer-controlled milling and routing</li>
        <li><strong>Electronics Lab:</strong> Soldering stations, oscilloscopes, and testing equipment</li>
        <li><strong>Woodworking Tools:</strong> Traditional and modern carpentry equipment</li>
        <li><strong>Textile Lab:</strong> Digital embroidery and sewing machines</li>
      </ul>
      
      <h2>Programs and Workshops</h2>
      <p>The FabLab will offer a variety of programs for students, educators, and entrepreneurs:</p>
      <ul>
        <li>After-school maker clubs for students aged 10-18</li>
        <li>Weekend workshops on 3D design, electronics, and programming</li>
        <li>Teacher training programs on integrating maker education</li>
        <li>Startup incubation support for young entrepreneurs</li>
        <li>Community open hours for public access</li>
      </ul>
      
      <h2>Grand Opening Event</h2>
      <p>Join us for the grand opening celebration on March 25, 2024! The event will feature:</p>
      <ul>
        <li>Facility tours and equipment demonstrations</li>
        <li>Student project exhibitions</li>
        <li>Hands-on workshops for all ages</li>
        <li>Keynote speeches from industry leaders</li>
        <li>Networking opportunities</li>
      </ul>
      
      <h2>How to Get Involved</h2>
      <p>Whether you're a student, educator, or community member, there are many ways to engage with the FabLab. Visit our website to register for workshops, book equipment time, or learn about volunteer opportunities.</p>
    `,
  },
  {
    id: 4,
    slug: "teacher-training-program-2024",
    title: "Teacher Training Program: Building STEM Capacity",
    excerpt: "Over 200 teachers completed our intensive STEM pedagogy training program this quarter.",
    date: "February 22, 2024",
    author: "Dr. Abebe Tadesse",
    category: "Programs",
    image: "/teachers-in-training-workshop.jpg",
    pdfUrl: "/newsletters/teacher-training-feb-2024.pdf",
    content: `
      <h2>Empowering Educators</h2>
      <p>This quarter, we successfully completed our most comprehensive teacher training program to date, with 215 educators from across Ethiopia participating in intensive STEM pedagogy workshops. These teachers are now equipped with modern teaching methods and resources to inspire the next generation of STEM leaders.</p>
      
      <h2>Training Curriculum</h2>
      <p>The program covered essential topics including:</p>
      <ul>
        <li>Inquiry-based learning methodologies</li>
        <li>Hands-on experimentation techniques</li>
        <li>Integration of technology in the classroom</li>
        <li>Project-based learning design</li>
        <li>Assessment and evaluation strategies</li>
        <li>Creating inclusive STEM environments</li>
      </ul>
      
      <h2>Participant Testimonials</h2>
      <p>"This training has completely transformed how I approach teaching science. My students are now more engaged and excited about learning." - Tigist Alemayehu, Biology Teacher</p>
      
      <p>"The hands-on activities and practical resources have given me the confidence to implement innovative teaching methods in my classroom." - Dawit Haile, Mathematics Teacher</p>
      
      <h2>Impact on Students</h2>
      <p>Early results show significant improvements in student engagement and performance in schools where trained teachers have implemented new methodologies. Student participation in STEM clubs has increased by 60%, and test scores have improved by an average of 25%.</p>
      
      <h2>Next Steps</h2>
      <p>We're planning to expand the program to reach 500 additional teachers in the next academic year, with specialized tracks for primary, secondary, and vocational education levels.</p>
    `,
  },
  {
    id: 5,
    slug: "national-science-fair-winners-2024",
    title: "Student Success: National Science Fair Winners",
    excerpt: "STEMpower students swept the top prizes at the National Science and Engineering Fair.",
    date: "February 15, 2024",
    author: "STEMpower Communications Team",
    category: "Achievements",
    image: "/students-with-science-fair-awards.jpg",
    pdfUrl: "/newsletters/science-fair-winners-feb-2024.pdf",
    content: `
      <h2>Outstanding Performance at National Science Fair</h2>
      <p>We're incredibly proud to announce that STEMpower students won 15 out of 20 top prizes at the 2024 National Science and Engineering Fair, including all three grand prizes. This remarkable achievement showcases the quality of STEM education and the dedication of our students and teachers.</p>
      
      <h2>Grand Prize Winners</h2>
      
      <h3>1st Place: Sustainable Water Filtration System</h3>
      <p>Hanna Bekele and her team developed an innovative water filtration system using locally available materials that removes 99.9% of contaminants. The system costs less than $10 to build and can provide clean water for a family of five.</p>
      
      <h3>2nd Place: AI-Powered Crop Disease Detection</h3>
      <p>Samuel Tesfaye created a mobile app that uses artificial intelligence to identify crop diseases from smartphone photos. The app provides treatment recommendations in multiple Ethiopian languages and has already been downloaded by over 1,000 farmers.</p>
      
      <h3>3rd Place: Solar-Powered Educational Kit</h3>
      <p>A team led by Meron Assefa designed a portable solar-powered kit containing basic electronics components and a microcontroller, enabling students in areas without electricity to learn programming and electronics.</p>
      
      <h2>Category Winners</h2>
      <p>STEMpower students also won first place in the following categories:</p>
      <ul>
        <li>Environmental Science</li>
        <li>Computer Science</li>
        <li>Engineering</li>
        <li>Mathematics</li>
        <li>Physics</li>
      </ul>
      
      <h2>International Opportunities</h2>
      <p>The grand prize winners have been invited to represent Ethiopia at the International Science and Engineering Fair (ISEF) in Los Angeles this May. We're working to secure funding and support for their participation.</p>
      
      <h2>Celebrating Excellence</h2>
      <p>Join us in celebrating these outstanding achievements at our awards ceremony on March 10, 2024, at the STEMpower headquarters. All winners, their families, and teachers are invited to attend.</p>
    `,
  },
  {
    id: 6,
    slug: "community-outreach-rural-areas",
    title: "Community Outreach: STEM Workshops in Rural Areas",
    excerpt: "Bringing hands-on STEM education to underserved communities across Ethiopia.",
    date: "February 8, 2024",
    author: "Rahel Mekonnen",
    category: "Outreach",
    image: "/outdoor-stem-workshop-ethiopia.jpg",
    pdfUrl: "/newsletters/community-outreach-feb-2024.pdf",
    content: `
      <h2>Expanding Access to STEM Education</h2>
      <p>Our mobile STEM workshop program has reached 15 rural communities this quarter, bringing hands-on science and technology education to over 2,000 students who previously had limited access to STEM resources. These workshops are breaking down barriers and inspiring young minds across Ethiopia.</p>
      
      <h2>Workshop Activities</h2>
      <p>Each community visit includes a full day of engaging activities:</p>
      <ul>
        <li><strong>Morning Session:</strong> Interactive science demonstrations and experiments</li>
        <li><strong>Afternoon Session:</strong> Hands-on building projects using simple materials</li>
        <li><strong>Evening Session:</strong> Stargazing and astronomy education</li>
        <li><strong>Teacher Training:</strong> Workshops for local educators on continuing STEM activities</li>
      </ul>
      
      <h2>Community Impact</h2>
      <p>The response from communities has been overwhelmingly positive. Parents report increased interest in education among their children, and local schools have started forming STEM clubs based on the activities introduced during our visits.</p>
      
      <h3>Success Story: Gondar Region</h3>
      <p>In the Gondar region, our workshop inspired a group of students to start a community science club. They've since conducted their own experiments and are teaching younger students, creating a ripple effect of STEM enthusiasm.</p>
      
      <h2>Partnerships</h2>
      <p>These outreach programs are made possible through partnerships with:</p>
      <ul>
        <li>Local government education offices</li>
        <li>Community leaders and elders</li>
        <li>Regional universities providing volunteer facilitators</li>
        <li>Corporate sponsors donating materials and transportation</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>We're planning to expand the program to reach 30 additional communities in the coming year. We're also developing a "STEM in a Box" kit that communities can use to continue activities between our visits.</p>
      
      <h2>How You Can Help</h2>
      <p>Support our outreach efforts by:</p>
      <ul>
        <li>Volunteering as a workshop facilitator</li>
        <li>Donating materials and supplies</li>
        <li>Sponsoring a community visit</li>
        <li>Sharing your STEM expertise through virtual sessions</li>
      </ul>
    `,
  },
]

export default function NewsletterDetailPage({ params }: { params: { slug: string } }) {
  const newsletter = newsletters.find((n) => n.slug === params.slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [showShareModal, setShowShareModal] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  if (!newsletter) {
    notFound()
  }

  const images = [
    newsletter.image,
    "/ethiopian-students-working-with-science-equipment-.jpg",
    "/young-ethiopian-entrepreneurs-in-fablab-maker-spac.jpg",
    "/ethiopian-students-participating-in-science-fair-w.jpg",
  ]

  useEffect(() => {
    if (!isAutoRotating) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoRotating, images.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
    setIsAutoRotating(false)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoRotating(false)
  }

  const handleDownload = async () => {
    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      doc.setFontSize(20)
      doc.setTextColor(54, 115, 117)
      doc.text(newsletter.title, 20, 20, { maxWidth: 170 })

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(`Date: ${newsletter.date}`, 20, 40)
      doc.text(`Author: ${newsletter.author}`, 20, 48)
      doc.text(`Category: ${newsletter.category}`, 20, 56)

      doc.setDrawColor(36, 195, 188)
      doc.line(20, 62, 190, 62)

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      const excerptLines = doc.splitTextToSize(newsletter.excerpt, 170)
      doc.text(excerptLines, 20, 70)

      const plainContent = newsletter.content.replace(/<[^>]*>/g, "").trim()
      const contentLines = doc.splitTextToSize(plainContent, 170)
      let yPosition = 70 + excerptLines.length * 7 + 10

      contentLines.forEach((line: string) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 7
      })

      doc.save(`${newsletter.slug}.pdf`)
    } catch (error) {
      console.error("PDF generation failed:", error)
      const element = document.createElement("a")
      const file = new Blob(
        [`${newsletter.title}\n\n${newsletter.excerpt}\n\n${newsletter.content.replace(/<[^>]*>/g, "")}`],
        { type: "text/plain" },
      )
      element.href = URL.createObjectURL(file)
      element.download = `${newsletter.slug}.txt`
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  }

  const handleShare = async () => {
    setShowShareModal(true)
  }

  const shareToSocial = (platform: string) => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : ""
    const shareText = `${newsletter.title} - ${newsletter.excerpt}`

    const urls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
    }

    if (urls[platform]) {
      window.open(urls[platform], "_blank", "width=600,height=400")
    }
  }

  const copyToClipboard = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : ""
    const shareText = `${newsletter.title}\n${newsletter.excerpt}\n${shareUrl}`

    try {
      await navigator.clipboard.writeText(shareText)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
        <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-13">
          <Button asChild variant="ghost" className="mb-6 text-white hover:bg-white/20 -ml-4">
            <Link href="/latest/news/newsletter">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Newsletters
            </Link>
          </Button>

          <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">{newsletter.category}</Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{newsletter.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-white/90 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{newsletter.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{newsletter.author}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleDownload} className="bg-white text-[#367375] hover:bg-white/90">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div><br />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md border-0 shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#367375]">Share Newsletter</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <button
                  onClick={() => shareToSocial("twitter")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  <Twitter className="w-5 h-5" />
                  Share on Twitter
                </button>
                <button
                  onClick={() => shareToSocial("facebook")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  <Facebook className="w-5 h-5" />
                  Share on Facebook
                </button>
                <button
                  onClick={() => shareToSocial("linkedin")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  <Linkedin className="w-5 h-5" />
                  Share on LinkedIn
                </button>
                <button
                  onClick={() => shareToSocial("whatsapp")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  Share on WhatsApp
                </button>
              </div>

              <button
                onClick={copyToClipboard}
                className={`w-full p-3 rounded-lg border-2 transition-all duration-300 font-semibold relative overflow-hidden ${
                  isCopied
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-[#24C3BC] text-[#367375] hover:bg-[#24C3BC]/10"
                }`}
              >
                <div className="flex flex-col items-center justify-center min-h-[24px]">
                  <span className={`transition-all duration-300 ${isCopied ? "opacity-0 -translate-y-2" : "opacity-100"}`}>
                    Copy Link to Clipboard
                  </span>
                  <span
                    className={`absolute transition-all duration-300 ${
                      isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    ✓ Successful copy
                  </span>
                </div>
              </button>
            </CardContent>
          </Card>
          
        </div>
      )}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="relative group">
          <div className="relative h-72 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${newsletter.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index)
                      setIsAutoRotating(false)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex ? "bg-white w-8 h-2" : "bg-white/50 w-2 h-2 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="border-0 shadow-xl overflow-hidden bg-white">
          <CardContent className="p-8 lg:p-16">
            <div
              className="prose prose-xl max-w-none
              prose-headings:font-bold prose-headings:text-[#367375]
              prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-8 prose-h2:border-b-4 prose-h2:border-[#24C3BC] prose-h2:pb-4 prose-h2:leading-tight
              prose-h3:text-2xl prose-h3:text-[#24C3BC] prose-h3:mt-10 prose-h3:mb-6 prose-h3:font-semibold
              prose-p:text-gray-800 prose-p:leading-9 prose-p:mb-8 prose-p:text-lg prose-p:tracking-normal
              prose-strong:text-[#367375] prose-strong:font-bold
              prose-em:text-[#24C3BC] prose-em:italic
              prose-ul:my-10 prose-ul:space-y-4 prose-ul:pl-8
              prose-li:text-gray-800 prose-li:leading-8 prose-li:text-lg prose-li:mb-3
              prose-li:marker:text-[#24C3BC] prose-li:marker:font-bold
              prose-a:text-[#24C3BC] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-[#24C3BC] prose-blockquote:bg-gradient-to-br prose-blockquote:from-[#367375]/5 prose-blockquote:to-[#24C3BC]/5 prose-blockquote:pl-8 prose-blockquote:py-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:my-10 prose-blockquote:rounded-r-lg
              prose-code:bg-gray-100 prose-code:text-[#367375] prose-code:px-3 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
            "
            >
              <div dangerouslySetInnerHTML={{ __html: newsletter.content }} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Newsletter Subscription CTA */}
      
      <Footer />
    </div>
  )
}