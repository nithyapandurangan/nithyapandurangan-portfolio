"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import EducationSection from "./components/EducationSection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import VisualVenturesSection from "./components/VisualVenturesSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import GlobalBackground from "./components/GlobalBackground"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      <GlobalBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <VisualVenturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
