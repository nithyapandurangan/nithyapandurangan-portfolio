"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const skillsData = {
  Programming: {
    skills: ["HTML", "CSS", "JavaScript", "Python", "TypeScript", "Java", "C", "C++"],
    color: "#E41F7B",
  },
  Databases: {
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Cloud SQL"],
    color: "#E41F7B",
  },
  "Frameworks & Libraries": {
    skills: [
      "ReactJS",
      "React Native",
      "Redux",
      "Next.js",
      "Node.js",
      "Express",
      "Flask",
      "Bootstrap",
      "Tailwind CSS",
      "React Flow",
    ],
    color: "#E41F7B",
  },
  "Cloud & DevOps": {
    skills: [
      "Google Cloud Platform (GCP)",
      "AWS",
      "Vercel",
      "Git", 
      "GitHub",
      "GitLab",
      "Jenkins", 
      "Docker",
      "CI/CD",
      "REST APIs", 
      "Postman API", 
      "SonarQube"],
    color: "#E41F7B",
  },
   "GenAI & Automation": {
    skills: [
      "UiPath",
      "Power Automate",
      "Power Apps",
      "Excel Automation",
      "UI Automation",
      "Robot Process Automation (RPA)",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Prompt Engineering",
    ],
    color: "#E41F7B",
  },
  Design: {
    skills: ["UI/UX Design", "Figma", "Canva", "Photoshop","Responsive Design", "Wireframing", "Prototyping","AdobeXD", "UX Research", "Design Systems"],
    color: "#E41F7B",
  },
}

const certificationsData = [
  {
    title: "UiPath Associate Automation Developer",
    issuer: "UiPath Academy",
    date: "September 2025",
    description:
      "Certified in building, managing, and deploying enterprise-grade automations with UiPath Studio and Orchestrator.",
    image: "/UiPathCert.png", 
    verifyUrl: "https://credentials.uipath.com/608f8e3b-b388-4f93-93e3-f11378b1f9fa#acc.NVQcAhCd", 
    technologies: ["UiPath Studio", "RPA", "Automation"],
    detailedDescription:
      "The certification demonstrates the ability to design, build, test, & deploy automation workflows using UiPath Studio & follow best practices for scalable enterprise automation solutions.",
    features: [
      "Hands-on automation projects with UiPath Studio",
      "Knowledge of Orchestrator for deployment & management",
      "Strong grasp of UI, Excel and Email Automation",
    ],
  },
    {
    title: "Worldline PayTech Pioneer Course",
    issuer: "Worldline Global Services",
    date: "April 2025",
    description:
      "Underwent comprehensive training for 7 months in enterprise-level technologies, making me proficient in full-stack development.",
    image: "/Worldline.jpg",
    verifyUrl: "https://drive.google.com/file/d/1WOiWTQtbfXWS8J4yQgfAhGshNpAQbj8f/view?usp=sharing",
    technologies: ["Full Stack", "Java", "PostgreSQL", "CI/CD", ],
    detailedDescription:
      "Intensive full-stack development program with focus on enterprise-level technologies and best practices. Covered payment processing systems, security protocols, and scalable architecture design.",
    features: ["Built scalable backend with Java & Spring Boot", 
              "Exposure to DevOps and CI/CD pipelines", 
              "Utilised tools like Docker, Jenkins and SonarQube for development and testing",
              "Exposure to gRPC and RESTful APIs",
            ],
  },
  {
    title: "NPTEL Discipline Star",
    issuer: "IIT Madras",
    date: "Dec 2024",
    description:
      "Awarded for completing 50+ weeks of learning in Computer Science with scores above 65% in all courses, demonstrating consistent academic excellence.",
    image: "/nptel.jpeg",
    verifyUrl: "https://drive.google.com/file/d/13YCDI4T6AqD-Eqm7hTdg9vf1lOWoVRsL/view",
    technologies: ["Industrial Internet of Things", "Computer Graphics"],
    detailedDescription:
      "Earned recognition from IIT Madras by maintaining academic excellence across multiple NPTEL courses. Gained a strong foundation in both theoretical and applied computer science subjects, completing challenging weekly assessments and programming assignments",
    features: [
      "Exposure to industry-relevant CS topics from IIT faculty",
      "Recognized by NPTEL for academic consistency",
      "65%+ scores in all courses",
    ],
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera",
    date: "June 2024",
    description:
      "Completed a hands-on certification covering the end-to-end UX design process, from user research and wireframing to prototyping.",
    image: "/UX.png",
    verifyUrl: "https://drive.google.com/drive/folders/1wGrRNuW4I1te1VhfFOJuiLovqvTEYWYh",
    technologies: ["UX Design", "User Research", "Prototyping"],
    detailedDescription:
      "Gained industry-relevant UX skills through applied projects including a recreation of the nike landing page and an app to browse movies across various languages. Strengthened my empathy-driven design thinking, iterative testing, and accessibility-first approach to UI/UX challenges.",
    features: ["Practiced usability testing and UX research", 
                "Deep understanding of inclusive design", 
                "Completed peer reviews and client-style design briefs", ],
  },
  
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [flippedCard, setFlippedCard] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef(null)

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        container.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const scrollCertifications = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.cert-card')?.offsetWidth || 400
      const gap = 32 // 2rem gap
      const scrollAmount = cardWidth + gap
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E41F7B] mb-4">Skills</h2>
          <p className="text-xl text-gray-300">My technical toolkit for building amazing applications</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              {/* Skills category cards */}
              <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 relative overflow-hidden h-full flex flex-col justify-between min-h-[200px]">
                <div className="relative z-10 flex-grow"> 
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="text-[#E41F7B] text-lg font-mono">&lt;&gt;</div>
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#E41F7B",
                          color: "#ffffff",
                        }}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 text-sm font-medium rounded-full border border-gray-600/60 cursor-pointer transition-all duration-200 hover:border-[#E41F7B]"
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Proficiency Levels</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: "ReactJS", level: 90 },
              { skill: "JavaScript", level: 90 },
              { skill: "Python", level: 85 },
              { skill: "UI/UX Design", level: 85 },
              { skill: "Next.js", level: 80 },
              { skill: "Typescript", level: 75 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-[#E41F7B] font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800/80 rounded-full h-2 border border-gray-600/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#86003C] to-[#E41F7B] h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications with horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header with navigation buttons */}
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
            
            {/* Navigation buttons for desktop */}
            <div className="hidden md:flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCertifications('left')}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full transition-all ${
                  canScrollLeft 
                    ? 'bg-[#E41F7B] hover:bg-[#86003C] text-white' 
                    : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCertifications('right')}
                disabled={!canScrollRight}
                className={`p-2 rounded-full transition-all ${
                  canScrollRight 
                    ? 'bg-[#E41F7B] hover:bg-[#86003C] text-white' 
                    : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Scrollable container */}
          <div className="relative">
            {/* Mobile navigation buttons */}
            <div className="flex md:hidden justify-center gap-2 mb-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCertifications('left')}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full transition-all ${
                  canScrollLeft 
                    ? 'bg-[#E41F7B] hover:bg-[#86003C] text-white' 
                    : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCertifications('right')}
                disabled={!canScrollRight}
                className={`p-2 rounded-full transition-all ${
                  canScrollRight 
                    ? 'bg-[#E41F7B] hover:bg-[#86003C] text-white' 
                    : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Certifications carousel */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cert-card flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] h-[550px] md:h-[500px] perspective-1000"
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
                        <div className="relative z-10">
                          {/* Certificate Image */}
                          <div className="relative overflow-hidden group h-48 z-10">
                            <Image
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.title}
                              width={400}
                              height={300}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">Click to flip</span>
                            </div>
                          </div>

                          {/* Certificate Content */}
                          <div className="p-6 flex-1 flex flex-col relative z-10">
                            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{cert.title}</h3>
                            <p className="text-[#E41F7B] font-semibold mb-2">{cert.issuer}</p>
                            <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed line-clamp-4">
                              {cert.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {cert.technologies.map((tech, techIndex) => (
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
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"    
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#E41F7B] hover:bg-[#86003C] text-white text-sm font-medium rounded-xl transition-colors mt-auto"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>View Certificate</span>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 h-full flex flex-col p-6 relative overflow-hidden">
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold text-white mb-4">{cert.title}</h3>

                          <div className="flex-1 space-y-4">
                            <div>
                              <h4 className="text-[#E41F7B] font-semibold mb-2">Detailed Description</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{cert.detailedDescription}</p>
                            </div>

                            <div>
                              <h4 className="text-[#E41F7B] font-semibold mb-2">Key Features</h4>
                              <ul className="space-y-1">
                                {cert.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="text-gray-300 text-sm flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#E41F7B] rounded-full"></span>
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
                              href={cert.verifyUrl}
                              target="_blank" 
                              rel="noopener noreferrer" 
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-[#E41F7B] hover:bg-[#86003C] text-white text-sm font-medium rounded-xl transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>View Certificate</span>
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
        </motion.div>
      </div>

      {/* CSS for hiding scrollbar and 3D transforms */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
