"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Building, Award, Lightbulb, Globe, TrendingUp, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

const impactStats = [
  {
    icon: Building,
    title: "STEM Centers",
    value: 61,
    displayValue: "61+",
    description: "Active hands-on STEM learning centers across Ethiopia",
    progress: 75,
    trend: "+8 this year",
    location: "Nationwide Coverage",
  },
  {
    icon: Users,
    title: "Students Impacted",
    value: 100000,
    displayValue: "100K+",
    description: "Young minds empowered through our comprehensive programs",
    progress: 88,
    trend: "+25K this year",
    location: "All Regions",
  },
  {
    icon: GraduationCap,
    title: "Science Fair Participants",
    value: 7000,
    displayValue: "7K+",
    description: "Students showcasing innovations in annual competitions",
    progress: 78,
    trend: "+800 this year",
    location: "Regional & National",
  },
  {
    icon: Award,
    title: "Science Fairs Organized",
    value: 155,
    displayValue: "155+",
    description: "Local and national science fairs celebrating excellence",
    progress: 88,
    trend: "+25 this year",
    location: "Multi-Regional",
  },
  {
    icon: Lightbulb,
    title: "FabLabs & Maker Spaces",
    value: 25,
    displayValue: "25+",
    description: "Innovation hubs with cutting-edge fabrication technology",
    progress: 65,
    trend: "+5 this year",
    location: "Major Cities",
  },
  {
    icon: Globe,
    title: "Young Entrepreneurs",
    value: 500,
    displayValue: "500+",
    description: "Innovators supported through incubation programs",
    progress: 70,
    trend: "+120 this year",
    location: "Nationwide",
  },
]

export function EnhancedImpactDashboard() {
  const [animatedValues, setAnimatedValues] = useState(impactStats.map(() => 0))

  useEffect(() => {
    const timers = impactStats.map((stat, index) => {
      return setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = stat.value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = Math.floor(current)
            return newValues
          })
        }, duration / steps)
      }, index * 200)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,188,162,0.08),rgba(255,255,255,0))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-10">
          
          <div className="flex justify-center">
      <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md"
      >
        <MapPin className="w-4 h-4" />
        Our impact across Ethiopia
      </Badge>
    </div><br />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            From bustling cities to remote villages, STEMpower Ethiopia is creating opportunities for young minds to
            explore, innovate, and lead. Our comprehensive programs reach every corner of the nation, building a
            brighter future through science and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
          {impactStats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-background/80 backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend}
                  </Badge>
                </div>
                <CardTitle className="text-3xl lg:text-4xl font-bold mb-2">
                  {index < animatedValues.length
                    ? animatedValues[index] >= 1000
                      ? `${Math.floor(animatedValues[index] / 1000)}${animatedValues[index] >= 1000000 ? "M" : "K"}+`
                      : `${animatedValues[index]}+`
                    : stat.displayValue}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Progress</span>
                    <span className="font-bold">{stat.progress}%</span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                </div>

                <div className="flex items-center text-xs text-muted-foreground pt-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  {stat.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
