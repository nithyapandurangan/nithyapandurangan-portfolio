"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const projectsData = [
  {
    title: "AI-Assisted Product & Skincare Recommendation System",
    description:
      "Developed intelligent, real-time application for personalized skincare & colour palette recommendations based on user's facial features. Architected full-stack solution integrating ML model with ReactJS/Tailwind CSS frontend, Flask backend, and Shopify API.",
    image: "/ColourAnalysisTool.png",
    technologies: ["ReactJS", "Flask", "Machine Learning", "Tailwind CSS", "Shopify API"],
    githubUrl: "https://github.com/nithyapandurangan/colour-analysis-tool",
    detailedDescription:
      "This comprehensive beauty recommendation system uses OpenCV and ML (Random Forest) to analyze user skin, hair, undertone and eye tone to provide personalized product suggestions. The system integrates with Shopify's API to provide real-time product availability and pricing information.",
    features: ["End-to-end full-stack system (React + Flask + ML)", "Integrated Shopify API for live product suggestions", "ML-based skin, hair colour classification with real-time inference", "User feedback loop to refine and customize recommendations"],
  },
  {
    title: "ChatBotStudio",
    description:
      "ChatBotStudio is a modern, interactive chatbot flow builder designed to visually design and simulate conversational flows. Built the dashboard using React, React Flow, and Tailwind CSS with a focus on intuitive UI and robust functionality, ideal for prototyping complex chatbot interactions.",
    image: "/ChatBotStudio.png",
    technologies: ["ReactJS", "Javascript", "Tailwind CSS", "React Flow", "Radix UI", ],
    githubUrl: "https://github.com/nithyapandurangan/ChatBotStudio",
    detailedDescription:
      "ChatBotStudio offers a full-featured environment for designing, testing, and refining chatbot logic through a no-code interface. Users can create dynamic flows using various message types, simulate conditional branching in real-time, and export structured flow data for deployment or collaboration. The tool emphasizes scalability and extensibility, making it suitable for both rapid prototyping and production-ready workflows.",
    features: ["Drag-and-drop node-based flow creation", "Support for custom message types (e.g., conditional, text)", "Flow export as JSON/PNG for deployment or documentation", "Auto-save and error validation for connected flows"],
  },
  {
    title: "ElevateHome",
    description:
      "ElevateHome is a cutting-edge home automation solution utilizing the ESP32 device. The system enables remote management and monitoring of household appliances, enhancing homeowners' control, convenience, and energy efficiency. Architected the dashboard with simple HTML, CSS, and JavaScript.",
    image: "/ElevateHome.png",
    technologies: ["ESP32", "IoT", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/nithyapandurangan/ElevateHome",
    detailedDescription:
      "ElevateHome is an end-to-end IoT automation platform that empowers users to remotely control and monitor home appliances via an ESP32 microcontroller. The system integrates sensor-based data collection, real-time appliance status updates, and dynamic rule-based scheduling. With a HTML + JS based dashboard and PHP backend, it ensures seamless interaction between hardware and software, optimized for responsiveness and reliability.",
    features: ["ESP32-powered real-time device control", "Live sensor data dashboard", "Rule-based smart scheduling for appliances", "Custom card-sized PCB for easy integration into home systems"],
  },
  {
    title: "AgroNext",
    description:
      "AgroNext is a livestock health management platform designed to improve the efficiency and effectiveness of livestock care, monitoring while tracking their insemination schedule.  Did in-depth UX reasearch and designed the user interface and developed the Mobile application using React Native.",
    image: "/AgroNext.png",
    technologies: ["IoT", "Machine Learning", "React Native", "Python", "UX Research"],
    githubUrl: "https://github.com/nithyapandurangan/AgroNext",
    detailedDescription:
    "AgroNext is an AI-powered livestock management solution that leverages IoT sensor data and machine learning to monitor animal health, detect anomalies, and optimize care routines. Designed a user-friendly mobile application using React Native backed by extensive UX research. The platform includes real-time vitals tracking, breeding cycle alerts, and data-driven insights for veterinarians and farmers.",
    features: ["Insemination and breeding cycle management", "ML-based health issue prediction and alerts", "Mobile-first UI built with React Native for Farmers", "Real-time livestock vitals tracking via IoT sensors"],
  },
]

export default function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState(null)

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-300">Showcasing my technical skills through real-world applications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-[500px] perspective-1000"
            >
              <motion.div
                className="relative w-full h-full cursor-pointer preserve-3d"
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 overflow-hidden h-full flex flex-col relative">
                    {/* Project Image */}
                    <div className="relative overflow-hidden group h-48 z-10">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"

                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Click to flip</span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-gray-600/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#E41F7B] hover:bg-[#86003C] text-white text-sm font-medium rounded-xl transition-colors mt-auto"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Project</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 h-full flex flex-col p-6 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

                      <div className="flex-1 space-y-4">
                       {/* Show only on desktop */}
                        <div className="hidden md:block">
                          <h4 className="text-[#E41F7B] font-semibold mb-2">Detailed Description</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{project.detailedDescription}</p>
                        </div>
                        
                        {/* Always show features */}
                        <div>
                          <h4 className="text-[#E41F7B] font-semibold mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-gray-300 text-sm flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-[#E41F7B] rounded-full flex-shrink-0"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>     
                      </div>

                      <div className="flex space-x-3 mt-6">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-[#E41F7B] hover:bg-[#86003C] text-white text-sm font-medium rounded-xl transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Project</span>
                        </motion.a>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFlippedCard(null)}
                          className="px-4 py-3 border-2 border-gray-600/80 text-gray-300 hover:bg-gray-800/80 text-sm font-medium rounded-xl transition-colors"
                        >
                          Back
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
