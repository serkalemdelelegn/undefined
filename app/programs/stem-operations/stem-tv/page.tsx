import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Tv, Users, Globe, Calendar, Eye } from "lucide-react"

export default function STEMTVPage() {
  const recentEpisodes = [
    {
      title: "Media Reps Wowed by STEMpower Labs",
      duration: "06:31",
      description:
        "Media representatives explore STEMpower STEM Center and FabLab programs, discovering hands-on STEM activities.",
      views: "15K",
      date: "2024-12-15",
    },
    {
      title: "STEM TV Episode - Girls in STEM",
      duration: "07:41",
      description:
        "Highlighting the important role of girls in STEM education and showcasing female students' achievements.",
      views: "22K",
      date: "2024-12-01",
    },
    {
      title: "Ethiopian National Science Fair 2024 Part 2",
      duration: "08:56",
      description: "Coverage of the 9th National Science and Engineering Fair held at AASTU in Addis Ababa.",
      views: "18K",
      date: "2024-11-20",
    },
    {
      title: "UNESCO Conference on Transforming STEM in Africa",
      duration: "08:46",
      description: "STEMpower's participation in the UNESCO conference at African Union Headquarters.",
      views: "12K",
      date: "2024-11-10",
    },
  ]

  const programFeatures = [
    {
      title: "Satellite Broadcasting",
      description: "Reaches 5 million viewers through Walta satellite TV every Saturday",
      icon: Tv,
    },
    {
      title: "Local Production",
      description: "Produced by local talent in Amharic with student-age actors",
      icon: Users,
    },
    {
      title: "Global Access",
      description: "Available worldwide on YouTube with English captions",
      icon: Globe,
    },
    {
      title: "Regular Schedule",
      description: "Bi-weekly episodes every Saturday at 10:40-11:00 local time",
      icon: Calendar,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">STEM-TV</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Reaching every student in Ethiopia through bi-weekly STEM programming, inspiring youth to engage with
            science, technology, engineering, and mathematics.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              "Inside Every Child is a Scientist" - We endeavor to reach every student in Ethiopia, no matter how far
              from urban areas, through accessible STEM education programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Viewership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">5M</div>
              <div className="text-sm text-gray-600">Weekly Viewers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-gray-600">Episodes Produced</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-gray-600">Episodes per Month</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Broadcasting</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Episodes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentEpisodes.map((episode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{episode.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Play className="h-3 w-3" />
                          {episode.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {episode.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {episode.date}
                        </span>
                      </CardDescription>
                    </div>
                    <Button size="sm" className="ml-4">
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{episode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Broadcasting Schedule */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Broadcasting Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Walta Satellite TV</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Time:</strong> 10:40 - 11:00 Local Time
                </p>
                <p>
                  <strong>Day:</strong> Every Saturday
                </p>
                <p>
                  <strong>Language:</strong> Amharic
                </p>
                <p>
                  <strong>Audience:</strong> 5 Million Viewers
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">YouTube Channel</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Channel:</strong> STEMpower Ethiopia
                </p>
                <p>
                  <strong>Availability:</strong> Worldwide
                </p>
                <p>
                  <strong>Captions:</strong> English
                </p>
                <p>
                  <strong>Access:</strong> Free
                </p>
              </div>
              <Button className="mt-4">
                <Play className="h-4 w-4 mr-2" />
                Subscribe on YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
