"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const visualVenturesData = [
  {
    id: 1,
    title: "Instagram Post Design",
    category: "Social Media",
    image: "/insta.png",
    description: "Bold and modern Instagram post design for a tech event of Aura, the Design Club of Shiv Nadar University, featuring gradient backgrounds and clean typography.",
  },
    {
    id: 2,
    title: "Events Page UI Design",
    category: "UI Design",
    image: "/Instincts.png",
    description: "High-fidelity UI for Instincts'25 Events page (annual cultural fest of SSN Engineering College & Shiv Nadar University), combining retro-inspired visuals with intuitive navigation for a cultural fest experience.",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/Branding.png",
    description: "Complete brand identity and design system of Ingenium Automation Pvt. Ltd. was designed by me, including logo, colour palette, and typography.",
  },
  {
    id: 4,
    title: "Colour Analysis Tool - Website Landing Page",
    category: "Web Design",
    image: "/ColourAnalysisTool.png",
    description: "Developed a modern, eye-catching landing page for my colour analysis tool project, ensuring a sleek layout and clear call-to-action.",
  },
  {
    id: 5,
    title: "Ingenium Automation - Website Landing Page",
    category: "Web Design",
    image: "/Ingenium.png",
    description: "Professional website design for an automation startup with clean UI, structured content flow, and interactive visuals.",
  },
    {
    id: 6,
    title: "AgroNext- UI Mockup",
    category: "UI Design",
    image: "/AgroNextUI.png",
    description: "Low-fidelity UI mockup for an agritech app, focusing on minimalism, clarity, and ease of navigation for rural users.",
  },
  {
    id: 7,
    title: "Cultural Fest Advertisement",
    category: "Print Design",
    image: "/Adv.png?height=400&width=400",
    description: "Advertisement for Instincts'25, an annual cultural fest at SSN College of Engineering & Shiv Nadar University that was printed in The Hindu.",
  },
  {
    id: 8,
    title: "E-commerce Product Cards",
    category: "UI Design",
    image: "/Manasa.png",
    description: "Product card designs for e-commerce platform - Manasa Spices with focus on bright colors and clear product information.",
  },
  {
    id: 9,
    title: "Youtube Thumbnail Design",
    category: "Social Media",
    image: "/yt.png",
    description: "Youtube thumbnail for Shiv Nadar University's official YouTube channel for a freshers' orientation event - Enchante'22",
  },
  {
    id: 10,
    title: "AgriTech Startup Banner",
    category: "Print Design",
    image: "/Banner.png",
    description: "Exhibition banner for an AgriTech startup based off IIITDM Kancheepuram - MATIC, showcasing their innovative Mango procurement machine and its impact on the mango supply chain.",
  },
  { id: 11,
    title: "Business Overview UI Component",
    category: "UI Design",
    image: "/Products.png",
    description: "Concise, visually appealing information panel to communicate key company credentials, experience, and certifications with focus on iconography and layout.",
  },
  { id: 12,
    title: "Manasa Spices - Landing Page",
    category: "Web Design",
    image: "/Home.png",
    description: "Homepage design for a F2B E-commerce startup - Manasa Spices Ltd., with brand-consistent visuals, product focus, and conversion-driven layout.",
  },
]

const categories = ["All", "UI Design", "Social Media", "Branding", "Web Design", "Print Design"]

export default function VisualVenturesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const filteredProjects =
    selectedCategory === "All"
      ? visualVenturesData
      : visualVenturesData.filter((project) => project.category === selectedCategory)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length)
    setSelectedImage(filteredProjects[(currentImageIndex + 1) % filteredProjects.length])
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
    setSelectedImage(filteredProjects[(currentImageIndex - 1 + filteredProjects.length) % filteredProjects.length])
  }

  const openLightbox = (project) => {
    const index = filteredProjects.findIndex(p => p.id === project.id)
    setCurrentImageIndex(index)
    setSelectedImage(project)
  }

  return (
    <section id="visual-ventures" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Visual Ventures</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond code, I explore the realm of visual design and craft engaging experiences that captivate and inspire. Here's a glimpse!
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#E41F7B] text-white shadow-lg"
                  : "bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-gray-300 hover:border-[#E41F7B] hover:text-[#E41F7B]"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-900/80 backdrop-blur-sm border border-gray-700 h-full flex flex-col transition-all duration-300 group-hover:border-[#E41F7B]/50 group-hover:shadow-xl group-hover:shadow-[#E41F7B]/10">
                  <div className="aspect-square relative overflow-hidden rounded-t-xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center z-20">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-white mb-1 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-[#E41F7B] font-medium mb-2">{project.category}</p>
                    <p className="text-xs text-gray-300 line-clamp-2 flex-1">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              style={{ zIndex: 2147483647 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-3xl w-full my-8 bg-gray-900/95 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-8 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/70 transition-all z-50"
                >
                  <X className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Navigation Arrows */}
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/70 transition-all z-50"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" /> 
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/70 transition-all z-50"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" /> 
                    </button>
                  </>
                )}

                {/* Image */}
                <div className="relative">
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    width={800}
                    height={500}
                    className="w-full h-auto max-h-[50vh] object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-[#E41F7B] font-medium mb-3">{selectedImage.category}</p>
                  <p className="text-gray-300">{selectedImage.description}</p>
                  
                  {/* Progress Indicator */}
                  {filteredProjects.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {filteredProjects.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'w-8 bg-[#E41F7B]' 
                              : 'w-2 bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
