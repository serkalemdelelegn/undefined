"use client"
import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Building2,
  Users,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  Briefcase,
  Tag,
  Search,
  Filter,
  Calendar,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const supportedBusinesses = [
  {
    name: "2D and Rotary CNC Machine",
    owner: "George Girmay",
    phone: "+251 98 707 7304",
    email: "",
    sector: "Manufacturing",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2023-01-15",
  },
  {
    name: "Agricultural Chemical Spray and Arial Mapping Drone",
    owner: "Mekonen Asmare",
    phone: "+251 98 698 8369",
    email: "",
    sector: "Engineering/Agriculture",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2023-02-20",
  },
  {
    name: "Akolle",
    owner: "Dawit Workneh",
    phone: "+251963167684",
    email: "workenhdawit@gmail.com",
    sector: "Technology/Agriculture",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2023-03-10",
  },
  {
    name: "Aluminum Works",
    owner: "Amanuel Zewdie",
    phone: "+251 90 007 0009",
    email: "amanuelzewdie16@gmail.com",
    sector: "Engineering/Service",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2023-01-25",
  },
  {
    name: "Animal feed production using Hydroponic technology",
    owner: "Yonas Nigussie & Abenezer Abebe",
    phone: "+251 91 270 6937",
    email: "",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2023-04-05",
  },
  {
    name: "Automated Jacquard Needle Loom",
    owner: "Natnael Kassahun",
    phone: "+251973153901",
    email: "natnaelkassahun26@gmai.com",
    sector: "Engineering/Manufacturing",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2023-02-14",
  },
  {
    name: "Ayat Mar",
    owner: "Mikiyas Bitew",
    phone: "+251932943285",
    email: "mikibitew@gmail.com",
    sector: "Food",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2023-05-18",
  },
  {
    name: "Bahredin Omer food product retaill",
    owner: "BAHREDIN OUMER",
    phone: "+251911064256",
    email: "bahruoumer@gmail.com",
    sector: "Food",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2023-03-22",
  },
  {
    name: "Bereketoch/Yori Derkosh",
    owner: "Yordanos Gidey",
    phone: "+251 90 416 1827",
    email: "yordigidey19@gmail.com",
    sector: "Food",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2023-06-01",
  },
  {
    name: "Biniyam Commision and Brokers",
    owner: "BINIYAM BELAYNEH",
    phone: "+251978473255",
    email: "benkabodugg098@gmail.com",
    sector: "Service",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2023-04-12",
  },
  {
    name: "Bruh Hiwot",
    owner: "Dr. Tizita",
    phone: "+251 93 501 2736",
    email: "tizitaalemumare8@gmail.com",
    sector: "Health/Social Enterprise",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2023-07-08",
  },
  {
    name: "Chinet-Alle",
    owner: "Misganaw Mhiretu",
    phone: "+251 97 443 7905",
    email: "nhmeyamhiretu12@gmail.com",
    sector: "Technology/Service",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2023-05-20",
  },
  {
    name: "Construction by Henok",
    owner: "Henok Tefera",
    phone: "+251935371153",
    email: "",
    sector: "Engineering",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2023-08-15",
  },
  {
    name: "Conte Catering",
    owner: "Seble Geremew",
    phone: "+251 96 678 9630",
    email: "contepastry@gmail.com",
    sector: "Service/Food",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2023-06-25",
  },
  {
    name: "Dairy and Poultry Products Supply",
    owner: "Mulugeta Merheba",
    phone: "+251913798338",
    email: "mulugetamerheba@gmail.com",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2023-09-10",
  },
  {
    name: "Eco-Pet: Recycling of plastic fibers into synthetic fiber",
    owner: "Zerihun Lakew",
    phone: "+251 91 060 0852",
    email: "zerulak@gmail.com",
    sector: "Manufacturing",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2023-07-30",
  },
  {
    name: "Enat Genfo House",
    owner: "PAULOS GIRMACHEW",
    phone: "+251914675760",
    email: "Paulosgirmachew@gmail.com",
    sector: "Food/Service",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2023-10-05",
  },
  {
    name: "Ethanol production from fruit waste",
    owner: "Bekalu Yeshigeta",
    phone: "+251 92 029 0410",
    email: "bekaluyeshigeta03@gmail.com",
    sector: "Manufacturing",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2023-08-22",
  },
  {
    name: "Ethio-Melk",
    owner: "Yilma Tadesse",
    phone: "+251 92 056 4487",
    email: "yilmatadesse2004@gmail.com",
    sector: "Manufacturing",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2023-11-12",
  },
  {
    name: "E-Top Machinery",
    owner: "Joshua Hailemariam and Tewodros Estifanos",
    phone: "+251 91 270 2570",
    email: "",
    sector: "Engineering/Manufacturing",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2023-09-28",
  },
  {
    name: "Fetan Delivery",
    owner: "Lewi Haile, Abenezer Kebede, Mihretu Petros, Manyazewal Dawit",
    phone: "+251 91 496 8831",
    email: "velilehai31@gmail.com",
    sector: "Service",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2023-12-01",
  },
  {
    name: "Fissha Mulugeta",
    owner: "Fissha Mulugeta",
    phone: "+251 91 375 6977",
    email: "mulugetafisha0@gmail.com",
    sector: "Service",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2023-10-18",
  },
  {
    name: "G Farm Organic Fertlizer",
    owner: "Betelhem Zewede",
    phone: "+251920952985",
    email: "",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2024-01-08",
  },
  {
    name: "Gig Agenagn",
    owner: "Mohammed Ibrahim, Abduljebar Sani",
    phone: "+251 91 050 7045",
    email: "findmohibsh@gmail.com",
    sector: "Service",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2023-11-25",
  },
  {
    name: "Green Ethiopia Organic Fertilizer",
    owner: "Ghionawit Gebru, Biruktawit Dawit",
    phone: "+251 97 311 2811",
    email: "ghionawitgebru@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2024-02-14",
  },
  {
    name: "Helo Sandal and Shoe Manufacturing",
    owner: "Yonas Duguma",
    phone: "+251949468819",
    email: "yonasduguma27@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2024-01-20",
  },
  {
    name: "Husky Energy and Technology",
    owner: "Hoheyat Berhanu, Yohannes Wasihun",
    phone: "+251 92 335 4313",
    email: "hoheyat@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2024-03-05",
  },
  {
    name: "Kese Event Organizing Activities & Logistics Supplies",
    owner: "KAHSU ABERA",
    phone: "+251913034049",
    email: "amorkese@gmail.com",
    sector: "Service",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2024-02-22",
  },
  {
    name: "LEWEQESH",
    owner: "Bersabeh Hailu, Yordanos Baheru, Selamawit Fikadu, Fikir Hailu",
    phone: "+251 91 161 8515",
    email: "bersabehhailu604@gmail.com",
    sector: "Service/Tourism",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2024-04-10",
  },
  {
    name: "Mama's Chicken",
    owner: "Daniel Tadesse, Natnael Teka",
    phone: "+251 91 131 5633",
    email: "danieltadesse999@gmail.com",
    sector: "Food/Agriculture",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2024-03-18",
  },
  {
    name: "Marvelous terrazzo",
    owner: "ELSABET GIRMA",
    phone: "+251940053255",
    email: "lisagirma55@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2024-05-02",
  },
  {
    name: "Mechot Wheelchair",
    owner: "Ephrem Asfaw",
    phone: "+251913347477",
    email: "",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2024-04-15",
  },
  {
    name: "Medaf Academy",
    owner: "Abeba Lijalem and Nebiyou Yonas",
    phone: "+251 92 770 7632",
    email: "abebamedaf@gmail.com",
    sector: "Technology/Education",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2024-06-01",
  },
  {
    name: "Mesfin Kifle Structural Metal Products",
    owner: "MESFIN KIFLE",
    phone: "+251911664465",
    email: "mkifle2010@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2024-05-20",
  },
  {
    name: "Messob Digital Trading PLC",
    owner: "BISRAT MULUGETA TFERA",
    phone: "+251947233335",
    email: "heraldbmt@gmail.com",
    sector: "Technology/Service",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2024-07-08",
  },
  {
    name: "Micks Mushroom",
    owner: "HaileMichael Dessalegn",
    phone: "+251 92 153 7750",
    email: "usmi277@gmail.com",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2024-06-12",
  },
  {
    name: "Mix-Fam Baby Food",
    owner: "Selsebil Ahmed",
    phone: "+251 91 167 3347",
    email: "selseahmedj@gmail.com",
    sector: "Manufacturing/Food",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2024-08-05",
  },
  {
    name: "Mushroom Agro Processing",
    owner: "Yoftahe Samuel",
    phone: "+251 92 442 9289",
    email: "yoftahesamuel@gmail.com",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2024-07-22",
  },
  {
    name: "Organic mineral fertilizer and livestock feed processing",
    owner: "Asegid Shiferaw",
    phone: "+251 91 315 9796",
    email: "aseshe10@gmail.com",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2024-09-10",
  },
  {
    name: "Pomace Pulp by Nardos and Partners",
    owner: "Nardos Alemu, Semira Jemal, Lidiya Tadesse, Lamerot Damene",
    phone: "+251 94 307 4133",
    email: "nardosalemu88@gmail.com",
    sector: "Manufacturing/product",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2024-08-28",
  },
  {
    name: "Poultry Farming",
    owner: "Dawit Assefa and Rahel Assefa",
    phone: "+251 96 587 4003",
    email: "dassefa09@gmail.com",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2024-10-15",
  },
  {
    name: "Prism Optometry",
    owner: "Dawit Fekadu",
    phone: "+2510923756401",
    email: "fekadudawit24@gmail.com",
    sector: "Health/Service",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2024-09-20",
  },
  {
    name: "Punt Flour from Gipto",
    owner: "Sitotaw Abera and Bezawit Mesfin",
    phone: "+251934811573",
    email: "sikalabera92@gmail.com",
    sector: "Agriculture/Food",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2024-11-05",
  },
  {
    name: "Rectangular Multidimensional Extractor",
    owner: "Ermias Nigusea, Teklit Berhanu",
    phone: "+251 93 964 8949",
    email: "ermiasnigussie93@gmail.com",
    sector: "Manufacturing",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2024-10-18",
  },
  {
    name: "Ring Charcoal Production",
    owner: "Tariku Teklewold",
    phone: "+251921750649",
    email: "tarikuteklewold87@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2024-12-01",
  },
  {
    name: "Rubber Powder Production",
    owner: "Firew Zerihun",
    phone: "+251930380980",
    email: "firewzer@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2024-11-12",
  },
  {
    name: "Ruby Coffee",
    owner: "Samrawit Endale",
    phone: "+251 91 171 5064",
    email: "",
    sector: "Service",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2024-12-20",
  },
  {
    name: "Run Printing Service Provider PLC",
    owner: "Rehmet Yeshanew Hussen",
    phone: "+251922147859",
    email: "ryfgmz87@gmail.com",
    sector: "Service",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2024-11-28",
  },
  {
    name: "Sekela (Hap Leather Manufacturing)",
    owner: "Fitsum Desta",
    phone: "+251 91 362 1409",
    email: "fitsumdesta21@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2025-01-10",
  },
  {
    name: "Selam",
    owner: "Eden Berihun",
    phone: "+251932140297",
    email: "edenberihun19@gmail.com",
    sector: "Health/Service",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2024-12-15",
  },
  {
    name: "Semi_Link",
    owner: "Semayawit Bahru",
    phone: "+251939508022",
    email: "semayawitbbw@gmail.com",
    sector: "Technology/Service",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2025-02-05",
  },
  {
    name: "Small Scale Wind Turbine",
    owner: "Seblewongel Tesfu",
    phone: "+251 91 181 5779",
    email: "seble_tesfu@yahoo.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2025-01-22",
  },
  {
    name: "Solomon Edessa",
    owner: "Solomon Edessa",
    phone: "+251912480043",
    email: "solomonedessa@gmail.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2025-03-08",
  },
  {
    name: "Sweep Easy",
    owner: "Sintayehu Tadesse",
    phone: "+251 91 137 5512",
    email: "sintood@gmail.com",
    sector: "Engineering/Product",
    status: "Licensed",
    donor: "IMF",
    fundingDate: "2025-02-18",
  },
  {
    name: "Tech -Me Engineering",
    owner: "Dawit Fekadu Mengistu",
    phone: "+251945820319",
    email: "dawitfe82020@gmail.com",
    sector: "Engineering/Product",
    status: "Licensed",
    donor: "World Bank",
    fundingDate: "2025-04-01",
  },
  {
    name: "Think-Hub",
    owner: "Abel Teweldebirhan and Abel Ababu",
    phone: "+251 91 246 2133",
    email: "abelteweldebirhan462133@gmail.com",
    sector: "Technology/Education",
    status: "Licensed",
    donor: "USAID",
    fundingDate: "2025-03-15",
  },
  {
    name: "Wujo Digital Iqub",
    owner: "Abenezer Engida, Mickyas Balchu, Million Girmay, Michael Wedajo, Matiyas Berhane",
    phone: "+251 93 213 1300",
    email: "abenezerE@wujo.app",
    sector: "Technology/Service",
    status: "Licensed",
    donor: "Mastercard Foundation",
    fundingDate: "2025-05-10",
  },
  {
    name: "Yaroktech Composite",
    owner: "Abebayehu Abdela",
    phone: "+251913252917",
    email: "abexmesc@yahoo.com",
    sector: "Manufacturing/Product",
    status: "Licensed",
    donor: "European Union",
    fundingDate: "2025-04-20",
  },
  {
    name: "Yetem Delivery",
    owner: "Liku Solomon, Dawit Geremew, Henos Getu",
    phone: "+251 91 238 3538",
    email: "",
    sector: "Service",
    status: "Licensed",
    donor: "Gates Foundation",
    fundingDate: "2025-06-05",
  },
]

const sectorColors: Record<string, string> = {
  Manufacturing: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "Engineering/Agriculture": "bg-green-500/10 text-green-700 border-green-500/20",
  "Technology/Agriculture": "bg-teal-500/10 text-teal-700 border-teal-500/20",
  "Engineering/Service": "bg-purple-500/10 text-purple-700 border-purple-500/20",
  "Agriculture/Food": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  "Engineering/Manufacturing": "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
  Food: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  "Health/Social Enterprise": "bg-red-500/10 text-red-700 border-red-500/20",
  "Technology/Service": "bg-cyan-500/10 text-cyan-700 border-cyan-500/20",
  Engineering: "bg-slate-500/10 text-slate-700 border-slate-500/20",
  "Service/Food": "bg-amber-500/10 text-amber-700 border-amber-500/20",
  Service: "bg-violet-500/10 text-violet-700 border-violet-500/20",
  "Manufacturing/Product": "bg-sky-500/10 text-sky-700 border-sky-500/20",
  "Manufacturing/Food": "bg-lime-500/10 text-lime-700 border-lime-500/20",
  "Technology/Education": "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/20",
  "Health/Service": "bg-rose-500/10 text-rose-700 border-rose-500/20",
  "Service/Tourism": "bg-pink-500/10 text-pink-700 border-pink-500/20",
  "Food/Agriculture": "bg-green-500/10 text-green-700 border-green-500/20",
  "Manufacturing/product": "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "Engineering/Product": "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
}

const impactStats = [
  { number: "59", label: "Total Businesses", icon: Building2 },
  { number: "100%", label: "Licensed Rate", icon: CheckCircle },
  { number: "12+", label: "Active Sectors", icon: Briefcase },
  { number: "150+", label: "Entrepreneurs", icon: Users },
]

export default function SupportedBusinessesPage() {
  const [displayCount, setDisplayCount] = useState(8)
  const [donorSearch, setDonorSearch] = useState("")
  const [selectedDonor, setSelectedDonor] = useState("all")
  const [selectedSector, setSelectedSector] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")

  const uniqueDonors = useMemo(() => {
    const donors = Array.from(new Set(supportedBusinesses.map((b) => b.donor)))
    return donors.sort()
  }, [])

  const uniqueSectors = useMemo(() => {
    const sectors = Array.from(new Set(supportedBusinesses.map((b) => b.sector)))
    return sectors.sort()
  }, [])

  const uniqueYears = useMemo(() => {
    const years = Array.from(new Set(supportedBusinesses.map((b) => new Date(b.fundingDate).getFullYear())))
    return years.sort((a, b) => b - a)
  }, [])

  const filteredBusinesses = useMemo(() => {
    return supportedBusinesses.filter((business) => {
      const matchesDonor = selectedDonor === "all" || business.donor === selectedDonor
      const matchesSector = selectedSector === "all" || business.sector === selectedSector
      const matchesYear =
        selectedYear === "all" || new Date(business.fundingDate).getFullYear().toString() === selectedYear
      const matchesSearch = donorSearch === "" || business.donor.toLowerCase().includes(donorSearch.toLowerCase())

      return matchesDonor && matchesSector && matchesYear && matchesSearch
    })
  }, [selectedDonor, selectedSector, selectedYear, donorSearch])

  const displayedBusinesses = filteredBusinesses.slice(0, displayCount)
  const hasMoreBusinesses = displayCount < filteredBusinesses.length

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 8)
  }

  const handleFilterChange = () => {
    setDisplayCount(8)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
          <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] opacity-20 bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-18">
            <div className="max-w-4xl mx-auto text-center">
              <Button variant="ghost" size="sm" className="mb-4 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/programs/entrepreneurship/business-development">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to BDS
                </Link>
              </Button>
              <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Success Stories
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance leading-tight">
                Businesses We've Supported
              </h1>
              <p className="text-base md:text-lg text-emerald-50 mb-6 text-pretty leading-relaxed">
                Meet the innovative entrepreneurs and ventures that have grown through our Business Development Services
                program. These success stories demonstrate the transformative power of strategic support and mentorship.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
        </section>

        <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {impactStats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <Card
            key={index}
            className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-white/10 backdrop-blur-md rounded-xl scale-95 hover:scale-100"
          >
            <CardContent className="pt-4 pb-4 px-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-full flex items-center justify-center mx-auto mb-2 shadow-md shadow-[#24C3BC]/30">
                <IconComponent className="h-4 w-4 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
              </div>
              <div className="text-2xl font-bold text-[#367375] mb-1">{stat.number}</div>
              <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  </div>

        <section className="max-w-6xl mx-auto px-4 py-16">
  <div className="text-center mb-10">
    
    <div className="flex justify-center">
              <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md "
      >
        <Building2 className="w-4 h-4" />
        Our Portfolio
      </Badge>
      </div><br />
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text mb-4 text-balance">
      Transforming Ideas into Impact
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
      From manufacturing to technology innovation, our supported businesses are driving positive change across Ethiopia
    </p>
  </div>

  <Card className="mb-8 border-2 border-[#367375]/20">
  <CardContent className="p-6">
    {/* Header */}
    <div className="flex items-center gap-2 mb-4">
      <Filter className="h-5 w-5 text-gradient-to-br from-[#367375] to-[#24C3BC]" />
      <h3 className="text-lg font-semibold text-gray-900">Filter Success Stories</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Donor Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-gradient-to-br from-[#367375] to-[#24C3BC]" />
          Filter by Donor
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search donors..."
            value={donorSearch}
            onChange={(e) => {
              setDonorSearch(e.target.value);
              handleFilterChange();
            }}
            className="pl-9"
          />
        </div>
        <Select
          value={selectedDonor}
          onValueChange={(value) => {
            setSelectedDonor(value);
            handleFilterChange();
          }}
        >
          <SelectTrigger className="w-full" />
          <SelectContent>
            <SelectItem
              value="all"
              className="radix-state-highlighted:bg-gradient-to-br radix-state-highlighted:from-[#367375]/30 radix-state-highlighted:to-[#24C3BC]/30 radix-state-highlighted:text-white
                         radix-state-on:bg-gradient-to-br radix-state-on:from-[#367375]/30 radix-state-on:to-[#24C3BC]/30 radix-state-on:text-white"
            >
              All Donors
            </SelectItem>
            {uniqueDonors
              .filter((donor) =>
                donor.toLowerCase().includes(donorSearch.toLowerCase())
              )
              .map((donor) => (
                <SelectItem
                  key={donor}
                  value={donor}
                  className="radix-state-highlighted:bg-gradient-to-br radix-state-highlighted:from-[#367375]/30 radix-state-highlighted:to-[#24C3BC]/30 radix-state-highlighted:text-white
                             radix-state-on:bg-gradient-to-br radix-state-on:from-[#367375]/30 radix-state-on:to-[#24C3BC]/30 radix-state-on:text-white"
                >
                  {donor}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sector Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Tag className="h-4 w-4 text-gradient-to-br from-[#367375] to-[#24C3BC]" />
          Filter by Sector
        </label>
        <Select
          value={selectedSector}
          onValueChange={(value) => {
            setSelectedSector(value);
            handleFilterChange();
          }}
        >
          <SelectTrigger className="w-full" />
          <SelectContent>
            <SelectItem
              value="all"
              className="radix-state-highlighted:bg-gradient-to-br radix-state-highlighted:from-[#367375]/30 radix-state-highlighted:to-[#24C3BC]/30 radix-state-highlighted:text-white
                         radix-state-on:bg-gradient-to-br radix-state-on:from-[#367375]/30 radix-state-on:to-[#24C3BC]/30 radix-state-on:text-white"
            >
              All Sectors
            </SelectItem>
            {uniqueSectors.map((sector) => (
              <SelectItem
                key={sector}
                value={sector}
                className="radix-state-highlighted:bg-gradient-to-br radix-state-highlighted:from-[#367375]/30 radix-state-highlighted:to-[#24C3BC]/30 radix-state-highlighted:text-white
                           radix-state-on:bg-gradient-to-br radix-state-on:from-[#367375]/30 radix-state-on:to-[#24C3BC]/30 radix-state-on:text-white"
              >
                {sector}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Year Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gradient-to-br from-[#367375] to-[#24C3BC]" />
          Filter by Year
        </label>
        <Select
          value={selectedYear}
          onValueChange={(value) => {
            setSelectedYear(value);
            handleFilterChange();
          }}
        >
          <SelectTrigger className="w-full" />
          <SelectContent>
            <SelectItem
              value="all"
              className="radix-state-highlighted:bg-gradient-to-br radix-state-highlighted:from-[#367375]/30 radix-state-highlighted:to-[#24C3BC]/30 radix-state-highlighted:text-white
                         radix-state-on:bg-gradient-to-br radix-state-on:from-[#367375]/30 radix-state-on:to-[#24C3BC]/30 radix-state-on:text-white"
            >
              All Years
            </SelectItem>
            {uniqueYears.map((year) => (
              <SelectItem
                key={year}
                value={year.toString()}
                className="radix-state-highlighted:bg-gradient-to-br radix-state-highlighted:from-[#367375]/30 radix-state-highlighted:to-[#24C3BC]/30 radix-state-highlighted:text-white
                           radix-state-on:bg-gradient-to-br radix-state-on:from-[#367375]/30 radix-state-on:to-[#24C3BC]/30 radix-state-on:text-white"
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>

    {/* Active Filters */}
    {(selectedDonor !== "all" ||
      selectedSector !== "all" ||
      selectedYear !== "all") && (
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        <span className="text-sm text-muted-foreground">Active filters:</span>
        {selectedDonor !== "all" && (
          <Badge className="bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 text-gradient-to-br from-[#367375] to-[#24C3BC] border border-[#367375]/20">
            Donor: {selectedDonor}
          </Badge>
        )}
        {selectedSector !== "all" && (
          <Badge className="bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 text-gradient-to-br from-[#367375] to-[#24C3BC] border border-[#24C3BC]/20">
            Sector: {selectedSector}
          </Badge>
        )}
        {selectedYear !== "all" && (
          <Badge className="bg-gray-100 text-gray-700 border border-gray-200">
            Year: {selectedYear}
          </Badge>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setSelectedDonor("all");
            setSelectedSector("all");
            setSelectedYear("all");
            setDonorSearch("");
            handleFilterChange();
          }}
          className="h-6 text-xs text-gradient-to-br from-[#367375] to-[#24C3BC] hover:bg-gradient-to-br hover:from-[#367375]/10 hover:to-[#24C3BC]/10"
        >
          Clear all
        </Button>
      </div>
    )}

    <p className="text-sm text-muted-foreground mt-4">
      Showing {filteredBusinesses.length} of {supportedBusinesses.length} businesses
    </p>
  </CardContent>
</Card>






  {/* Business Cards */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
    {displayedBusinesses.map((business, index) => (
      <Card
        key={index}
        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-[#367375]/20 overflow-hidden"
      >
        <CardContent className="p-3">
          <div className="flex items-start justify-between mb-1.5">
            <div className="w-7 h-7 bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <Building2 className="h-3.5 w-3.5 text-white" />
            </div>
            <Badge className="bg-gradient-to-br from-[#367375]/10 to-[#24C3BC]/10 text-[#367375] border border-[#24C3BC]/20 text-[9px] px-1.5 py-0">
              {business.status}
            </Badge>
          </div>

          <h3 className="text-xs font-bold text-gray-900 mb-1.5 line-clamp-2 leading-tight min-h-[2rem]">
            {business.name}
          </h3>

          {/* Sector */}
          <Badge className="bg-[#367375]/10 text-[#367375] border border-[#367375]/20 mb-1 text-[9px] font-medium px-1.5 py-0">
            <Tag className="h-2 w-2 mr-0.5" />
            {business.sector}
          </Badge>

          {/* Donor */}
          <Badge className="bg-[#24C3BC]/10 text-[#24C3BC] border border-[#24C3BC]/20 mb-1.5 text-[9px] font-medium px-1.5 py-0">
            <DollarSign className="h-2 w-2 mr-0.5" />
            {business.donor}
          </Badge>

          <div className="space-y-1 mb-1.5 pt-1.5 border-t border-gray-100">
            <div className="flex items-start gap-1">
              <Users className="h-2.5 w-2.5 text-[#367375] flex-shrink-0 mt-0.5" />
              <p className="text-[9px] text-muted-foreground line-clamp-2 leading-snug">{business.owner}</p>
            </div>

            {business.phone && (
              <div className="flex items-start gap-1">
                <Phone className="h-2.5 w-2.5 text-[#24C3BC] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${business.phone}`}
                  className="text-[9px] text-muted-foreground hover:text-[#24C3BC] transition-colors line-clamp-1"
                >
                  {business.phone}
                </a>
              </div>
            )}

            {business.email && (
              <div className="flex items-start gap-1">
                <Mail className="h-2.5 w-2.5 text-[#367375] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${business.email}`}
                  className="text-[9px] text-muted-foreground hover:text-[#367375] transition-colors line-clamp-1 break-all"
                >
                  {business.email}
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>

  {hasMoreBusinesses && (
    <div className="mt-12 text-center">
      <Button
        size="lg"
        variant="outline"
        className="min-w-[240px] shadow-md border border-[#24C3BC]/40 text-[#367375] hover:bg-gradient-to-br hover:from-[#367375] hover:to-[#24C3BC] hover:text-white transition-all"
        onClick={handleLoadMore}
      >
        Load More Success Stories
      </Button>
      <p className="text-sm text-muted-foreground mt-3">
        Showing {displayedBusinesses.length} of {filteredBusinesses.length} businesses
      </p>
    </div>
  )}
</section>



       
      </div>
      <Footer />
    </>
  )
}
