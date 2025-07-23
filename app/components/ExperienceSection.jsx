"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experienceData = [
  {
    title: "Trainee Full Stack Engineer",
    company: "Worldline Global Services",
    location: "Chennai, India",
    period: "Nov 2024 – May 2025",
    description:
      "Mastered comprehensive full-stack development training, completing all technical assignments with exceptional performance including Linux Commands, Microservices, Java, C++, PostgreSQL, MongoDB, SonarQube, Jenkins, Postman, GitLab, Git, and CI/CD Pipelines, achieving 92% score on the final assessment.",
    technologies: ["Java", "C++", "PostgreSQL", "MongoDB","CI/CD", "Jenkins", "GitLab", "Postman", "SonarQube"],
  },
  {
    title: "Full Stack Development Intern",
    company: "Manasa Spices Pvt. Ltd.",
    location: "Chennai, India",
    period: "Oct 2024 – Nov 2024",
    description:
      "Developed a fully responsive and functional e-commerce website that facilitates online sales & showcases the company's diverse range of spices sourced directly from farmers in Kerala and Tamil Nadu. Designed and implemented responsive Next.js-based UI using a Figma-driven design system, resulting in improved user engagement and streamlined purchasing process.",
    technologies: ["Next.js", "Tailwind CSS", "Razorpay", "Figma", "MongoDB", "Responsive Design", "E-commerce"],
  },
  {
    title: "Software Development Intern",
    company: "Ingenium Automation Pvt. Ltd.",
    location: "Chennai, India",
    period: "May 2024 – Sep 2024",
    description:
      "Built & deployed a feature-rich website for an IoT-based startup using ReactJS, Framer Motion, and Tailwind CSS, enhancing user engagement by effectively showcasing their products, solutions, and services offered. Developed the UI and design-system for the company to create an intuitive user experience .",
    technologies: ["ReactJS", "Framer Motion", "Tailwind CSS", "FrontEnd Development", "UI/UX Design", "Figma"],
  },
  {
    title: "UI/UX Mobile App Development Intern",
    company: "MATIC - Modern Agriculture Technology Innovation Centre, IIITDM Kanchipuram",
    location: "Chennai, India",
    period: "Dec 2023 – Mar 2024",
    description:
      "Designed the interface of a cutting-edge Android mobile application for an IoT-based AgriTech startup which simplifies Mango De-sapping Machine procurement for farmers, FPOS, and packhouse owners through Figma prototyping and Flutter implementation, achieving 80% improvement in customer satisfaction metrics. Conducted user research and usability testing to optimize the user experience.",
    technologies: ["Figma", "Flutter", "UI/UX Design", "AgriTech"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-300">Professional journey and key achievements</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#E41F7B]"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot with date - Mobile responsive */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center z-10">
                <div className="w-4 h-4 bg-[#E41F7B] rounded-full border-4 border-black"></div>
                <div className="mt-2 px-2 py-1 bg-[#E41F7B] text-white text-xs font-medium rounded whitespace-nowrap hidden md:block">
                  {exp.period}
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-start space-x-3 mb-4">
                      <Briefcase className="w-6 h-6 text-[#E41F7B] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-[#E41F7B] font-semibold mb-2">{exp.company}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300 md:hidden">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#E41F7B] text-white text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
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
