"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

const educationData = [
  {
    id: 1,
    degree: "B.Tech Computer Science - IoT",
    institution: "Shiv Nadar University, Chennai",
    location: "Chennai, India",
    period: "2021-2025",
    grade: "CGPA: 8.44",
    highlights: [
      "Our Final-Year Capstone Project – Colour Analysis Tool awarded O Grade (Outstanding)",
      "Club President of Design Club for 2 years and was responsible for leading design initiatives",
    ],
    detailedInfo: {
      coursework: [
        "Data Structures & Algorithms",
        "Internet of Things",
        "AI & ML",
        "Object Oriented Programming",
        "Database Management",
      ],
      achievements: [
        "Design Lead of Website Development Team for the University's Tech and Cultural Fests (2024, 2025)",
        "First & Third Place in Inter-College Table Tennis Competition- Women's Singles & Doubles (2022, 2023)",
      ]
    },
  },
  {
    id: 2,
    degree: "Higher Secondary – 11th & 12th",
    institution: "Gautami Junior College",
    location: "Hyderabad, India",
    period: "2019-2021",
    grade: "12th Boards: 97.5%",
    highlights: [
      "Ranked amongst top 5 of my batch in Telangana State Board Intermediate Examinations",
      "Strong STEM Focus across Math, Physics, Chemistry",
    ],
    detailedInfo: {
      coursework: ["Mathematics", "Physics", "Chemistry", "French"],
      achievements: [
        "Awarded academic excellence scholarship by Aakash Institute for consistent performance",
        "Founded the school's debate club, enhancing public speaking and critical thinking abilities."
      ]
    },
  },
  {
    id: 3,
    degree: "High School – 10th",
    institution: "Vikas The Concept School",
    location: "Hyderabad, India",
    period: "2014-2019",
    grade: "10th Boards: 96%",
    highlights: [
      "Ranked amongst top 10 of my school for my results in CBSE Board Exam Results",
      "House Captain for 2 years, leading a team of 250+ students and organizing events",
    ],
    detailedInfo: {
      coursework: ["Mathematics", "Science", "Social Studies", "French", "English", "Hindi"],
      leadership: [
        "Active participant in Bharat Scouts and Guides for 2 years, fostering discipline and community service.",
        "Awarded the 'General Proficiency' Award for outstanding performance in school activities from 8th to 10th grade.",
      ]
    },
  },
]

export default function EducationSection() {
  const [flippedCard, setFlippedCard] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-gray-300">Academic journey and achievements</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#E41F7B]"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot with date (hidden on mobile) */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center z-10">
                <div className="w-4 h-4 bg-[#E41F7B] rounded-full border-4 border-black"></div>
                <div className="hidden md:block mt-2 px-2 py-1 bg-[#E41F7B] text-white text-xs font-medium rounded whitespace-nowrap">
                  {edu.period}
                </div>
              </div>

              {/* Content card */}
              <div
                className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:ml-12 md:mr-0" : "md:mr-12 md:ml-0"} pl-12 md:pl-0`}
              >
                <motion.div
                  className="relative w-full cursor-pointer preserve-3d"
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.02 }}
                  style={{ minHeight: "400px" }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 h-full flex flex-col">
                      <div className="relative z-10 flex-grow overflow-y-auto">
                        <div className="flex items-start space-x-3 mb-4">
                          <GraduationCap className="w-6 h-6 text-[#E41F7B] mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                            <p className="text-[#E41F7B] font-semibold mb-2">{edu.institution}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          {/* Show period only on mobile */}
                          <div className="flex items-center space-x-2 text-gray-300 md:hidden">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-[#E41F7B] text-white text-sm font-semibold rounded-full">
                            {edu.grade}
                          </span>
                        </div>

                        <h4 className="text-[#FF8BA0] font-semibold mb-2 mt-4">Highlights</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm pl-2">
                          {edu.highlights.map((point, i) => (
                            <li key={i} className="mb-1">{point}</li>
                          ))}
                        </ul>
                      </div>

                      <motion.div
                        className={`bg-transparent text-center py-3 transition-opacity duration-300 sticky bottom-0`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index && flippedCard !== index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-[#E41F7B] text-sm font-medium">Click to flip for details</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 overflow-hidden">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 h-full flex flex-col">
                      <div className="relative z-10 flex-grow overflow-y-auto">
                        <h3 className="text-xl font-bold text-white mb-4">{edu.degree}</h3>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-[#E41F7B] font-semibold mb-2">Coursework</h4>
                            <div className="flex flex-wrap gap-1">
                              {edu.detailedInfo.coursework.map((course, courseIndex) => (
                                <span
                                  key={courseIndex}
                                  className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-gray-600/60"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>

                          {edu.detailedInfo.achievements && (
                            <div>
                              <h4 className="text-[#E41F7B] font-semibold mb-2">Achievements</h4>
                              {Array.isArray(edu.detailedInfo.achievements) ? (
                                <ul className="list-disc list-inside text-gray-300 text-sm leading-relaxed space-y-1 pl-2">
                                  {edu.detailedInfo.achievements.map((item, i) => (
                                    <li key={i} className="mb-1">{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {edu.detailedInfo.achievements}
                                </p>
                              )}
                            </div>
                          )}

                          {edu.detailedInfo.leadership && (
                            <div>
                              <h4 className="text-[#E41F7B] font-semibold mb-2">Leadership</h4>
                              {Array.isArray(edu.detailedInfo.leadership) ? (
                                <ul className="list-disc list-inside text-gray-300 text-sm leading-relaxed space-y-1 pl-2">
                                  {edu.detailedInfo.leadership.map((item, i) => (
                                    <li key={i} className="mb-1">{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {edu.detailedInfo.leadership}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <motion.div
                        className={`bg-transparent text-center py-3 transition-opacity duration-300 cursor-pointer sticky bottom-0`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index && flippedCard === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setFlippedCard(null)
                        }}
                      >
                        <span className="text-[#E41F7B] text-sm font-medium">Click to flip back</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
