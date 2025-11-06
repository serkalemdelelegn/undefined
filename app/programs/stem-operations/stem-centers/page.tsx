"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  MapPin,
  Users,
  Calendar,
  Award,
  Building2,
  Sparkles,
  GraduationCap,
  Mail,
  Phone,
  User,
  DollarSign,
  Beaker,
  Search,
  ArrowUp,
  ArrowDown,
  Globe,
} from "lucide-react"
import Image from "next/image"
import { useState, useMemo } from "react"

export default function STEMCentersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [displayCount, setDisplayCount] = useState(6)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc") // default to newest first

  const allCenters = [
    {
      host: "Foka STEM Training Center",
      city: "Bishoftu",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Mr. Eyob Ayechew",
      phone: "+251912066189",
      email: "eyoba@stempower.org",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX", "MECX", "OPTX", "3DP", "CHMX", "SOLP"],
      funder: "GFCT",
      yearEstablished: "2010",
      featured: true,
      imageQuery:
        "Ethiopian students working with electronics and 3D printing equipment in modern STEM laboratory Bishoftu",
    },
    {
      host: "Kallamino Special High School STEM Center",
      city: "Mekelle",
      region: "Tigray",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Mr. Daniel Tesfaye",
      phone: "+251920864574",
      email: "getwaydan@gmail.com",
      website: "https://www.muu.edu.et",
      labs: ["COMP", "ELEX", "MECX", "OPTX", "3DP"],
      funder: "GFCT",
      yearEstablished: "2011",
      imageQuery: "Ethiopian high school students learning electronics and mechanics in STEM lab Mekelle",
    },
    {
      host: "Gondar University STEM Center",
      city: "Gondar",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Mr. Girma Workie",
      phone: "+251918729057",
      email: "workiegirma@gmail.com",
      website: "https://www.gu.edu.et",
      labs: ["COMP", "ELEX", "MECX", "OPTX", "3DP", "CHMX", "SOLP"],
      funder: "GFCT",
      yearEstablished: "2013",
      featured: true,
      imageQuery: "Ethiopian university students in chemistry and solar power laboratory at Gondar University",
    },
    {
      host: "Addis Ababa Science & Technology University STEM Center",
      city: "Addis Ababa",
      region: "Federal",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Bereket Walle",
      phone: "+251910486859",
      email: "bereket.walle@aastu.edu.et",
      website: "https://www.aastu.edu.et",
      labs: ["COMP", "ELEX", "3DP", "CHMX"],
      funder: "GFCT",
      yearEstablished: "2013",
      imageQuery:
        "Ethiopian students working with computers and 3D printers in modern university STEM center Addis Ababa",
    },
    {
      host: "Bahirdar University STEM Center",
      city: "Bahirdar",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Dr. Tesfa Tegegne",
      phone: "+251918762686",
      email: "tesfat@gmail.com",
      website: "https://www.bdu.edu.et",
      labs: ["COMP", "ELEX", "MECX", "OPTX", "3DP", "AERO", "HISC", "SOLP"],
      funder: "GFCT",
      yearEstablished: "2014",
      featured: true,
      imageQuery: "Ethiopian students in comprehensive aerospace and advanced science laboratory facility Bahirdar",
    },
    {
      host: "AASTU Science Museum",
      city: "Addis Ababa",
      region: "Federal",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Ms. Wede / Mr. Alemseged Moreda",
      phone: "+251988109843",
      email: "wudiye21@gmail.com",
      website: "https://www.aastu.edu.et",
      labs: ["COMP", "ELEX", "MECX", "OPTX", "3DP"],
      funder: "GFCT",
      yearEstablished: "2014",
      imageQuery:
        "Ethiopian children exploring interactive science exhibits and technology displays in museum Addis Ababa",
    },
    {
      host: "Hawassa University STEM Center",
      city: "Hawassa",
      region: "Sidama",
      country: "Ethiopia",
      cluster: "ST-S",
      contact: "Dr. Misrak Getahun",
      phone: "+251912189020",
      email: "misgebe@yahoo.com",
      website: "https://www.hu.edu.et",
      labs: ["COMP", "BIO", "ELEX", "MECX", "OPTX", "3DP", "CHMX"],
      funder: "GFCT",
      yearEstablished: "2014",
      imageQuery: "Ethiopian students conducting biology and chemistry experiments in university laboratory Hawassa",
    },
    {
      host: "Jigjiga University STEM Center",
      city: "Jigjiga",
      region: "Ethio-Somali",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Mr. Abdulahi Abdinur",
      phone: "+251972252573",
      email: "a_abdinurr@yahoo.com",
      website: "https://www.ju.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2014",
      imageQuery: "Ethiopian students learning computer programming and electronics in Jigjiga university",
    },
    {
      host: "Asosa University STEM Center",
      city: "Asossa",
      region: "Benishangul-Gumuz",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Getachew Geleta",
      phone: "+251920230207",
      email: "getachew9267@gmail.com",
      website: "https://www.asu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2015",
      imageQuery: "Ethiopian students working with computers and electronic circuits in western Ethiopia Asossa",
    },
    {
      host: "Wollega University STEM Center",
      city: "Nekemet",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Amayou Belissa",
      phone: "+251922224949",
      email: "bamayou@gmail.com",
      website: "https://www.wollegauniversity.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2015",
      imageQuery: "Ethiopian university students in computing and electronics laboratory in Oromia region Nekemet",
    },
    {
      host: "Kotebe Science Shared Campus STEM Center",
      city: "Addis Ababa",
      region: "Federal",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Mr. Abel",
      phone: "+251939411696",
      email: "maranathaabel@gmail.com",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2015",
      imageQuery: "Ethiopian students collaborating on technology projects in shared campus STEM facility Addis Ababa",
    },
    {
      host: "Asaita High School STEM Center",
      city: "Asaita",
      region: "Afar",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Mr. Mohamed Ali",
      phone: "+251921326139",
      email: "alimgt2012@yahoo.com",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2015",
      imageQuery: "Ethiopian high school students learning technology and electronics in Afar region Asaita",
    },
    {
      host: "Adama Science & Technology University STEM Center",
      city: "Adama",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Dr. Worku Jifara",
      phone: "+251973731040",
      email: "worku.jifara@gmail.com",
      website: "https://www.adamastu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2016",
      imageQuery: "Ethiopian students in modern science and technology university laboratory in Adama",
    },
    {
      host: "Liqa Special School STEM Center",
      city: "Wolaita",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Desalegn Dawit",
      phone: "+251920412472",
      email: "desboy46@gmail.com",
      website: "https://www.stempower.org",
      labs: ["BIO", "CHEM", "PHY", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2018",
      imageQuery: "Ethiopian students conducting biology chemistry and physics experiments in special school Wolaita",
    },
    {
      host: "Haromaya University STEM Center",
      city: "Haromaya",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Dr. Asfaw Kebede",
      phone: "+251912441024",
      email: "asfaw649@gmail.com",
      website: "https://www.haramaya.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2019",
      imageQuery: "Ethiopian university students working on computer and electronics projects at Haromaya",
    },
    {
      host: "Gode Polytechnic College STEM Center",
      city: "Gode",
      region: "Ethio-Somali",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Mr. Mohamed Abdi",
      phone: "+251915747716",
      email: "nigeriagodey12@gmail.com",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2019",
      imageQuery: "Ethiopian polytechnic students learning technical skills in computer and electronics lab Gode",
    },
    {
      host: "Harar Aboker Secondary School STEM Center",
      city: "Harari",
      region: "Harari",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Mr. Daniel Birhanu",
      phone: "+251933269987",
      email: "danielbirane@yahoo.com",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2019",
      imageQuery: "Ethiopian secondary school students engaged in computer programming and electronics in Harar",
    },
    {
      host: "Woldia University STEM Center",
      city: "Woldia",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Mr. Melaku Adal",
      phone: "+251912964549",
      email: "adalmelaku@gmail.com",
      website: "https://www.woldia.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2019",
      imageQuery: "Ethiopian students working with technology and electronics at Woldia University",
    },
    {
      host: "Ethiopian Academy of Sciences STEM Center",
      city: "Addis Ababa",
      region: "Federal",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Mr. Mesfin Engdawork",
      phone: "+251936659835",
      email: "engdamesfin@yahoo.com",
      website: "https://www.eas.org.et",
      labs: ["COMP", "ELEX", "3DP", "SOLP"],
      funder: "GFCT",
      yearEstablished: "2019",
      imageQuery: "Ethiopian students in advanced 3D printing and solar power laboratory at Academy of Sciences",
    },
    {
      host: "Addis Ababa Institute of Technology (AAiT) STEM Center",
      city: "Addis Ababa",
      region: "Federal",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Dr. Bisrat Derebssa",
      phone: "+251929139442",
      email: "bisrtt@gmail.com",
      website: "https://www.aait.edu.et",
      labs: ["COMP", "ELEX", "3DP", "CHMX"],
      funder: "STEMpower",
      yearEstablished: "2019",
      imageQuery: "Ethiopian engineering students working with 3D printers and chemistry equipment at AAiT",
    },
    {
      host: "Wollo University STEM Center",
      city: "Dessie",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Asst. Prof. Dagnachew Mullu",
      phone: "+251920359567",
      email: "dagnache.mullu@yahoo.com",
      website: "https://www.wollouni.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students exploring 3D printing and computer technology at Wollo University Dessie",
    },
    {
      host: "Debre Berhan University STEM Center",
      city: "Debre Berhan",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Dr. Said Mohammed",
      phone: "+251913139855",
      email: "seidmuhamed@dbu.edu.et",
      website: "https://www.dbu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2019",
      imageQuery: "Ethiopian university students working with electronics and 3D printing at Debre Berhan",
    },
    {
      host: "Debre Markos University STEM Center",
      city: "Debre Markos",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Dr. Tafere Melaku",
      phone: "+25192907770",
      email: "mihretalemayehu@gmail.com",
      website: "https://www.dmu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "GFCT",
      yearEstablished: "2019",
      imageQuery: "Ethiopian students learning computer science and 3D printing technology at Debre Markos",
    },
    {
      host: "Dilla University STEM Center",
      city: "Dilla",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Tekalign Tadesse",
      phone: "+251912021793",
      email: "tekalign.chem@gmail.com",
      website: "https://www.dilla.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2019",
      imageQuery: "Ethiopian students in computer and electronics laboratory in southern Ethiopia Dilla",
    },
    {
      host: "Kebridahar University STEM Center",
      city: "Kebridahar",
      region: "Ethio-Somali",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Abdulfeta Ahmed",
      phone: "+251911268822",
      email: "raabbiyey@gmail.com",
      website: "https://www.kdu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2020",
      imageQuery: "Ethiopian students working with 3D printing and technology in Somali region university Kebridahar",
    },
    {
      host: "Arba Minch University STEM Center",
      city: "Arba Minch",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Dr. Binyam Wondale",
      phone: "+251911383337",
      email: "biniamw2005@yahoo.com",
      website: "https://www.amu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2020",
      imageQuery: "Ethiopian university students engaged in electronics and 3D printing at Arba Minch",
    },
    {
      host: "Dire Dawa University STEM Center",
      city: "Dire Dawa",
      region: "Federal",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Dr. Abdurahman Mohammed",
      phone: "+251911234567",
      email: "abdurahman@ddu.edu.et",
      website: "https://www.ddu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "GFCT",
      yearEstablished: "2020",
      imageQuery: "Ethiopian students in modern computing and electronics laboratory Dire Dawa University",
    },
    {
      host: "Samara University STEM Center",
      city: "Samara",
      region: "Afar",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Mr. Ahmed Yasin",
      phone: "+251922345678",
      email: "ahmed.yasin@su.edu.et",
      website: "https://www.samara.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2020",
      imageQuery: "Ethiopian students learning technology in Afar region Samara University STEM lab",
    },
    {
      host: "Mekdela Amba University STEM Center",
      city: "Tulu Awuliya",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Mr. Getachew Alemu",
      phone: "+251933456789",
      email: "getachew.alemu@mau.edu.et",
      website: "https://www.mau.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "STEMpower",
      yearEstablished: "2021",
      imageQuery: "Ethiopian students in electronics and computing lab Mekdela Amba University",
    },
    {
      host: "Injibara University STEM Center",
      city: "Injibara",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Dr. Mulugeta Tesfaye",
      phone: "+251944567890",
      email: "mulugeta.t@iu.edu.et",
      website: "https://www.iu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "GFCT",
      yearEstablished: "2021",
      imageQuery: "Ethiopian students working with 3D printing technology at Injibara University",
    },
    {
      host: "Mizan Tepi University STEM Center",
      city: "Mizan Teferi",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Solomon Bekele",
      phone: "+251955678901",
      email: "solomon.bekele@mtu.edu.et",
      website: "https://www.mtu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2021",
      imageQuery: "Ethiopian students in computer and electronics laboratory Mizan Tepi University",
    },
    {
      host: "Bule Hora University STEM Center",
      city: "Bule Hora",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Dr. Tadesse Gemechu",
      phone: "+251966789012",
      email: "tadesse.gemechu@bhu.edu.et",
      website: "https://www.bhu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2021",
      imageQuery: "Ethiopian students exploring technology and 3D printing at Bule Hora University",
    },
    {
      host: "Raya University STEM Center",
      city: "Maychew",
      region: "Tigray",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Mr. Gebrehiwot Aregawi",
      phone: "+251977890123",
      email: "gebrehiwot.a@ru.edu.et",
      website: "https://www.ru.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2021",
      imageQuery: "Ethiopian students learning electronics and computing in Tigray region Raya University",
    },
    {
      host: "Adigrat University STEM Center",
      city: "Adigrat",
      region: "Tigray",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Dr. Hailemariam Gebre",
      phone: "+251988901234",
      email: "hailemariam.g@adu.edu.et",
      website: "https://www.adu.edu.et",
      labs: ["COMP", "ELEX", "3DP", "CHMX"],
      funder: "GFCT",
      yearEstablished: "2021",
      imageQuery: "Ethiopian students in chemistry and 3D printing laboratory Adigrat University",
    },
    {
      host: "Aksum University STEM Center",
      city: "Aksum",
      region: "Tigray",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Mr. Yohannes Tekle",
      phone: "+251999012345",
      email: "yohannes.tekle@aku.edu.et",
      website: "https://www.aku.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2022",
      imageQuery: "Ethiopian students working with computers and electronics at historic Aksum University",
    },
    {
      host: "Oda Bultum University STEM Center",
      city: "Chiro",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Dr. Mohammed Hassan",
      phone: "+251910123456",
      email: "mohammed.hassan@obu.edu.et",
      website: "https://www.obu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2022",
      imageQuery: "Ethiopian students in modern STEM laboratory with 3D printers Oda Bultum University Chiro",
    },
    {
      host: "Mettu University STEM Center",
      city: "Mettu",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Dereje Tadesse",
      phone: "+251921234567",
      email: "dereje.tadesse@meu.edu.et",
      website: "https://www.meu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2022",
      imageQuery: "Ethiopian students learning technology in western Oromia Mettu University",
    },
    {
      host: "Dembi Dollo University STEM Center",
      city: "Dembi Dollo",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Abebe Gemechu",
      phone: "+251932345678",
      email: "abebe.gemechu@ddu.edu.et",
      website: "https://www.ddu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2022",
      imageQuery: "Ethiopian students in electronics and computing lab Dembi Dollo University",
    },
    {
      host: "Madda Walabu University STEM Center",
      city: "Bale Robe",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Dr. Abdi Kedir",
      phone: "+251943456789",
      email: "abdi.kedir@mwu.edu.et",
      website: "https://www.mwu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2022",
      imageQuery: "Ethiopian students working with 3D printing and electronics Madda Walabu University",
    },
    {
      host: "Wachemo University STEM Center",
      city: "Hossana",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Yonas Alemayehu",
      phone: "+251954567890",
      email: "yonas.alemayehu@wcu.edu.et",
      website: "https://www.wcu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2022",
      imageQuery: "Ethiopian students in computer and electronics laboratory Wachemo University Hossana",
    },
    {
      host: "Wolaita Sodo University STEM Center",
      city: "Wolaita Sodo",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Dr. Dawit Wolde",
      phone: "+251965678901",
      email: "dawit.wolde@wsu.edu.et",
      website: "https://www.wsu.edu.et",
      labs: ["COMP", "ELEX", "3DP", "BIO"],
      funder: "GFCT",
      yearEstablished: "2022",
      imageQuery: "Ethiopian students in biology and technology laboratory Wolaita Sodo University",
    },
    {
      host: "Debre Tabor University STEM Center",
      city: "Debre Tabor",
      region: "Amhara",
      country: "Ethiopia",
      cluster: "ET-N",
      contact: "Mr. Alemayehu Belay",
      phone: "+251976789012",
      email: "alemayehu.belay@dtu.edu.et",
      website: "https://www.dtu.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2023",
      imageQuery: "Ethiopian students exploring 3D printing and computing at Debre Tabor University",
    },
    {
      host: "Semera University STEM Center",
      city: "Semera",
      region: "Afar",
      country: "Ethiopia",
      cluster: "ET-E",
      contact: "Mr. Ali Mohammed",
      phone: "+251987890123",
      email: "ali.mohammed@semu.edu.et",
      website: "https://www.semu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2023",
      imageQuery: "Ethiopian students learning technology in Afar region Semera University",
    },
    {
      host: "Jinka University STEM Center",
      city: "Jinka",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Tesfaye Abera",
      phone: "+251998901234",
      email: "tesfaye.abera@ju.edu.et",
      website: "https://www.ju.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2023",
      imageQuery: "Ethiopian students in computing and electronics lab Jinka University southern Ethiopia",
    },
    {
      host: "Assosa Polytechnic College STEM Center",
      city: "Assosa",
      region: "Benishangul-Gumuz",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Bekele Negash",
      phone: "+251909012345",
      email: "bekele.negash@apc.edu.et",
      website: "https://www.apc.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2023",
      imageQuery: "Ethiopian polytechnic students learning 3D printing and electronics Assosa",
    },
    {
      host: "Gambella University STEM Center",
      city: "Gambella",
      region: "Gambella",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Ojulu Okello",
      phone: "+251910234567",
      email: "ojulu.okello@gu.edu.et",
      website: "https://www.gu.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2023",
      imageQuery: "Ethiopian students working with technology in Gambella University western Ethiopia",
    },
    {
      host: "Salale University STEM Center",
      city: "Fitche",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Dr. Girma Teshome",
      phone: "+251921345678",
      email: "girma.teshome@su.edu.et",
      website: "https://www.su.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2023",
      imageQuery: "Ethiopian students in 3D printing and electronics laboratory Salale University Fitche",
    },
    {
      host: "Ambo University STEM Center",
      city: "Ambo",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-C",
      contact: "Dr. Bekele Hundie",
      phone: "+251932456789",
      email: "bekele.hundie@ambou.edu.et",
      website: "https://www.ambou.edu.et",
      labs: ["COMP", "ELEX", "3DP", "CHMX"],
      funder: "GFCT",
      yearEstablished: "2023",
      imageQuery: "Ethiopian students in chemistry and technology laboratory Ambo University",
    },
    {
      host: "Jimma University STEM Center",
      city: "Jimma",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Dr. Alemayehu Refera",
      phone: "+251943567890",
      email: "alemayehu.refera@ju.edu.et",
      website: "https://www.ju.edu.et",
      labs: ["COMP", "ELEX", "3DP", "BIO", "CHMX"],
      funder: "GFCT",
      yearEstablished: "2023",
      imageQuery: "Ethiopian students in comprehensive biology and chemistry STEM laboratory Jimma University",
    },
    {
      host: "Metu Polytechnic College STEM Center",
      city: "Metu",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Tadesse Bekele",
      phone: "+251954678901",
      email: "tadesse.bekele@mpc.edu.et",
      website: "https://www.mpc.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian polytechnic students working with 3D printers and electronics Metu",
    },
    {
      host: "Nekemte Polytechnic College STEM Center",
      city: "Nekemte",
      region: "Oromia",
      country: "Ethiopia",
      cluster: "ET-W",
      contact: "Mr. Gemechu Wakjira",
      phone: "+251965789012",
      email: "gemechu.wakjira@npc.edu.et",
      website: "https://www.npc.edu.et",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students learning electronics and computing at Nekemte Polytechnic",
    },
    {
      host: "Bonga University STEM Center",
      city: "Bonga",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Mekonnen Tadesse",
      phone: "+251976890123",
      email: "mekonnen.tadesse@bou.edu.et",
      website: "https://www.bou.edu.et",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students exploring technology and 3D printing Bonga University",
    },
    {
      host: "Bench Maji Zone STEM Center",
      city: "Mizan Aman",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Yohannes Girma",
      phone: "+251987901234",
      email: "yohannes.girma@bmz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students in electronics and computing lab Bench Maji Zone",
    },
    {
      host: "Gedeo Zone STEM Center",
      city: "Dilla",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Abebe Chala",
      phone: "+251998012345",
      email: "abebe.chala@gz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students learning technology in Gedeo Zone STEM center",
    },
    {
      host: "Konso Special Woreda STEM Center",
      city: "Konso",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Kalayu Korra",
      phone: "+251909123456",
      email: "kalayu.korra@ksw.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students in community STEM center learning electronics Konso",
    },
    {
      host: "Segen Area Peoples Zone STEM Center",
      city: "Arba Minch",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Daniel Desta",
      phone: "+251910345678",
      email: "daniel.desta@sapz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "GFCT",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students working with 3D printing technology Segen Area Peoples Zone",
    },
    {
      host: "Gurage Zone STEM Center",
      city: "Welkite",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Mulugeta Worku",
      phone: "+251921456789",
      email: "mulugeta.worku@gz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX"],
      funder: "GFCT",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students in electronics and computing laboratory Gurage Zone Welkite",
    },
    {
      host: "Hadiya Zone STEM Center",
      city: "Hossana",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Yosef Yohannes",
      phone: "+251932567890",
      email: "yosef.yohannes@hz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students exploring 3D printing and technology Hadiya Zone Hossana",
    },
    {
      host: "Hadiya Zone STEM Center",
      city: "Hossana",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Yosef Yohannes",
      phone: "+251932567890",
      email: "yosef.yohannes@hz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students exploring 3D printing and technology Hadiya Zone Hossana",
    },
    {
      host: "Hadiya Zone STEM Center",
      city: "Hossana",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Yosef Yohannes",
      phone: "+251932567890",
      email: "yosef.yohannes@hz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students exploring 3D printing and technology Hadiya Zone Hossana",
    },
    {
      host: "Hadiya Zone STEM Center",
      city: "Hossana",
      region: "Southern",
      country: "Ethiopia",
      cluster: "ET-S",
      contact: "Mr. Yosef Yohannes",
      phone: "+251932567890",
      email: "yosef.yohannes@hz.edu.et",
      website: "https://www.stempower.org",
      labs: ["COMP", "ELEX", "3DP"],
      funder: "STEMpower",
      yearEstablished: "2024",
      imageQuery: "Ethiopian students exploring 3D printing and technology Hadiya Zone Hossana",
    },
  ]

  const labTypes: Record<string, string> = {
    COMP: "Computing",
    ELEX: "Electronics",
    "3DP": "3D Printing",
    MECX: "Mechanics",
    OPTX: "Optics",
    CHMX: "Chemistry",
    SOLP: "Solar Power",
    BIO: "Biology",
    AERO: "Aerospace",
    HISC: "Hi-Science",
    CHEM: "Chemistry",
    PHY: "Physics",
  }

  const regionalStats = allCenters.reduce(
    (acc, center) => {
      acc[center.region] = (acc[center.region] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const filteredCenters = useMemo(() => {
    let centers = allCenters

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      centers = centers.filter((center) => {
        return (
          center.host.toLowerCase().includes(query) ||
          center.city.toLowerCase().includes(query) ||
          center.region.toLowerCase().includes(query) ||
          center.contact.toLowerCase().includes(query) ||
          center.labs.some((lab) => lab.toLowerCase().includes(query)) ||
          center.labs.some((lab) => labTypes[lab]?.toLowerCase().includes(query))
        )
      })
    }

    // Apply sorting
    centers = [...centers].sort((a, b) => {
      const yearA = Number.parseInt(a.yearEstablished)
      const yearB = Number.parseInt(b.yearEstablished)
      return sortOrder === "asc" ? yearA - yearB : yearB - yearA
    })

    return centers
  }, [searchQuery, allCenters, sortOrder])

  const featuredCenters = filteredCenters.filter((center) => center.featured)

  const displayedCenters = filteredCenters.slice(0, displayCount)
  const hasMoreCenters = displayCount < filteredCenters.length

  const loadMore = () => {
    setDisplayCount((prev) => prev + 6)
  }

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    setDisplayCount(6) // Reset display count when sorting changes
  }
  const impactStats = [
    { number: allCenters.length, label: "STEM Centers", icon: Building2 },
    { number: Object.keys(regionalStats).length, label: "Regions", icon: MapPin },
    { number: "50k+", label: "Students Served", icon: GraduationCap },
    { number: "15+", label: "Years of impact", icon: Calendar },
  ]
  const gradientTextClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-transparent bg-clip-text font-bold"
  const gradientButtonClass = "bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white hover:opacity-90 transition-all"
  

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white">
            <div className="absolute inset-0 bg-[url('/abstract-science-pattern.png')] bg-cover bg-center opacity-20" />
            <div className="container relative mx-auto px-4 py-20 md:py-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center">
                  <Badge className="mb-6 bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-lg border-white/30 hover:bg-white/30 text-sm font-medium px-3 py-1.5 rounded-full flex items-center">
                    <Sparkles className="h-3 w-3 mr-1.5" />
                    Empowering Africa's Next Generation Since 2010
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">61 STEM Centers Across Ethiopia</h1>

                <p className="text-lg text-cyan-100 max-w-3xl mx-auto text-pretty">
                  Specialized learning hubs where education meets innovation. From our first center in Bishoftu's Foka
                  area in 2009, we've grown into a nation-wide movement driving peace, development, and opportunity
                  through science and technology.
                </p>
              </div>
            </div>{" "}
            <br />
            <br />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
          </section>

          {/* Stats Cards */}
          <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-white/10 backdrop-blur-md rounded-xl scale-95 hover:scale-100"
                  >
                    <CardContent className="pt-4 pb-3 px-2">
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
          </section>

          <br />
          <br />
          <br />

          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by center name, city, region, contact, or laboratory type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base border-2 border-[#4db8b8]/30 focus:border-[#4db8b8] rounded-xl shadow-sm"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-3 text-center">
                Found {filteredCenters.length} center{filteredCenters.length !== 1 ? "s" : ""} matching "{searchQuery}"
              </p>
            )}
          </div>

          {/* Featured Centers */}
          {featuredCenters.length > 0 && (
            <div className="mb-16">
              <div className="flex justify-center">
              <Badge
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold 
        border-primary/20 bg-gradient-to-br from-[#367375] to-[#24C3BC] 
        text-white rounded-full shadow-md "
      >
        <MapPin className="w-4 h-4" />
        Featured centers
      </Badge>
      </div><br />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuredCenters.map((center, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-2xl transition-all border-2 border-[#367375]/30 hover:border-[#24C3BC] overflow-hidden"
                  >
                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#4db8b8]/10 to-teal-50">
                      <Image
                        src={`/.jpg?height=400&width=600&query=${encodeURIComponent(center.imageQuery)}`}
                        alt={`${center.host} - Students in STEM laboratory`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-br from-[#367375] to-[#24C3BC] text-white shadow-lg">
                          {index === 0 ? "First Center - 2010" : "Most Comprehensive"}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3 text-[#1a5f5f]">{center.host}</CardTitle>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-700">
                              <MapPin className="h-4 w-4 flex-shrink-0 text-[#4db8b8]" />
                              <span>
                                {center.city}, {center.region}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Calendar className="h-4 w-4 flex-shrink-0 text-[#4db8b8]" />
                              <span>Established {center.yearEstablished}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <User className="h-4 w-4 flex-shrink-0 text-[#4db8b8]" />
                              <span>{center.contact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-[#1a5f5f] mb-2 flex items-center gap-2">
                            <Beaker className="h-4 w-4" />
                            Available Laboratories ({center.labs.length})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {center.labs.map((lab, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-[#4db8b8]/10 text-[#1a5f5f]">
                                {lab}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 border-t space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Phone className="h-4 w-4 flex-shrink-0 text-[#4db8b8]" />
                            <a href={`tel:${center.phone}`} className="hover:text-[#1a5f5f] font-medium">
                              {center.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Mail className="h-4 w-4 flex-shrink-0 text-[#4db8b8]" />
                            <a href={`mailto:${center.email}`} className="hover:text-[#1a5f5f] break-all">
                              {center.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <DollarSign className="h-4 w-4 flex-shrink-0 text-[#4db8b8]" />
                            <span>Funded by {center.funder}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm text-gray-700">
                            <Globe className="h-4 w-4 flex-shrink-0 text-[#4db8b8]" />
                            <a
                              href={center.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#1a5f5f] break-all leading-tight"
                            >
                              Visit Site
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Centers Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 max-w-6xl mx-auto">
              <div>
                <h2 className={`text-4xl md:text-4xl mb-6 ${gradientTextClass} text-balance`}>
                  {searchQuery ? "Search Results" : "All STEM Centers"}
                </h2>
                <p className="text-gray-700">
                  {searchQuery
                    ? `Showing ${displayedCenters.length} of ${filteredCenters.length} center${filteredCenters.length !== 1 ? "s" : ""}`
                    : `Showing ${displayedCenters.length} of ${filteredCenters.length} centers`}
                </p>
              </div>

              <Button
                onClick={toggleSortOrder}
                variant="outline"
                className="flex items-center gap-2 border-2 border-[#367375]/30 hover:border-[#24C3BC] text-white bg-gradient-to-br from-[#367375] to-[#24C3BC]"
              >
                {sortOrder === "desc" ? (
                  <>
                    <ArrowDown className="h-4 w-4" />
                    Newest First
                  </>
                ) : (
                  <>
                    <ArrowUp className="h-4 w-4" />
                    Oldest First
                  </>
                )}
              </Button>
            </div>

            {filteredCenters.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No centers found</h3>
                <p className="text-gray-600">Try adjusting your search terms</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {displayedCenters.map((center, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl transition-all border-2 border-gray-200 hover:border-[#4db8b8] group overflow-hidden"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-teal-50">
                        <Image
                          src={`/.jpg?height=300&width=400&query=${encodeURIComponent(center.imageQuery)}`}
                          alt={`${center.host} laboratory`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="text-xs bg-white/90 backdrop-blur-sm text-[#1a5f5f]">
                            {center.cluster}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <CardTitle className="text-lg leading-tight group-hover:text-[#1a5f5f] transition-colors">
                            {center.host}
                          </CardTitle>
                        </div>
                        <div className="space-y-1.5 text-sm">
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#4db8b8]" />
                            <span className="text-xs">
                              {center.city}, {center.region}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-[#4db8b8]" />
                            <span className="text-xs">Est. {center.yearEstablished}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h4 className="text-xs font-semibold text-[#1a5f5f] mb-2 flex items-center gap-1.5">
                            <Beaker className="h-3.5 w-3.5" />
                            Laboratories ({center.labs.length})
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {center.labs.map((lab, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs px-2 py-0.5 bg-[#4db8b8]/10 text-[#1a5f5f]"
                              >
                                {lab}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t space-y-2">
                          <div className="flex items-start gap-2 text-xs text-gray-700">
                            <User className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#4db8b8]" />
                            <span className="leading-tight">{center.contact}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-700">
                            <Phone className="h-3.5 w-3.5 flex-shrink-0 text-[#4db8b8]" />
                            <a href={`tel:${center.phone}`} className="hover:text-[#1a5f5f] font-medium">
                              {center.phone}
                            </a>
                          </div>
                          <div className="flex items-start gap-2 text-xs text-gray-700">
                            <Mail className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#4db8b8]" />
                            <a href={`mailto:${center.email}`} className="hover:text-[#1a5f5f] break-all leading-tight">
                              {center.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <DollarSign className="h-3.5 w-3.5 flex-shrink-0 text-[#4db8b8]" />
                            <Badge variant="outline" className="text-xs border-[#4db8b8]/30 text-[#1a5f5f]">
                              {center.funder}
                            </Badge>
                          </div>
                          <div className="flex items-start gap-2 text-xs text-gray-700">
                            <Globe className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#4db8b8]" />
                            <a
                              href={center.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#1a5f5f] break-all leading-tight"
                            >
                              Visit Site
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {hasMoreCenters && (
                  <div className="text-center mt-12">
                    <Button
                      onClick={loadMore}
                      size="lg"
                      className="bg-gradient-to-br from-[#367375] to-[#24C3BC] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg"
                    >
                      Load More Centers
                      <span className="ml-2 text-sm opacity-90">
                        ({filteredCenters.length - displayCount} remaining)
                      </span>
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* What Makes Centers Special */}
          {/* <div className="bg-gradient-to-br from-[#367375] to-[#24C3BC] rounded-3xl p-12 mb-16 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">What Makes Our STEM Centers Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hands-On Innovation</h3>
                <p className="text-white/90 leading-relaxed">
                  Fully equipped labs with modern technologies where students explore engineering and science through
                  practical, guided experiences with expert mentors.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Anchors</h3>
                <p className="text-white/90 leading-relaxed">
                  More than classrooms—our centers host local gatherings, science fairs, and regional competitions,
                  creating spaces where knowledge is shared and communities unite.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">University Partnerships</h3>
                <p className="text-white/90 leading-relaxed">
                  Located on or near university campuses, ensuring academic oversight, fostering collaboration, and
                  building long-term sustainability.
                </p>
              </div>
            </div>
          </div> */}

          {/* Laboratory Types */}
          <div className="mb-16 pl-10 pr-10">
            <h2 className={`text-4xl md:text-4xl mb-6 text-center ${gradientTextClass} text-balance`}>Specialized Laboratory Programs</h2>
            <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
              From virtual computing and electronics to 3D printing and specialized programs in basic sciences, chemical
              engineering, and biomechanics.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(labTypes).map(([code, name], index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-[#367375]/30 rounded-xl p-4 text-center hover:border-[#24C3BC] hover:shadow-lg transition-all"
                >
                  <div className="text-2xl mb-2">🔬</div>
                  <div className="font-semibold text-sm text-[#1a5f5f]">{name}</div>
                  <div className="text-xs text-gray-600 mt-1">{code}</div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </main>
      <Footer />
    </div>
  )
}
