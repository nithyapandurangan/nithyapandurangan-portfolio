"use client"

import { motion } from "framer-motion"
import { Download, Mail, Phone, MapPin, Award, Code, Users, Crown, Linkedin } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hi! I'm Nithya - a Full Stack Developer passionate about building modern, intuitive, and scalable web applications. Skilled in React, UI/UX Design, Automation and production-ready web apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Professional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#E41F7B] mb-6">Professional Highlights</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Award className="w-4 h-4 text-[#FF8BA0]" />
                <span className="text-gray-300 text-sm">NPTEL Discipline Star - IIT Madras</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-10 h-10 text-[#FF8BA0]" />
                <span className="text-gray-300 text-sm">Current Full-Stack Automation Engineer Intern at Worldline, working on Gen AI, Automation & Full-Stack solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-[#FF8BA0]" />
                <span className="text-gray-300 text-sm">Hands-on experience with Gen AI, Automation, React & Next.js </span>
              </div>
            </div>
          </motion.div>

          {/* Positions of Responsibility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#E41F7B] mb-6">Leadership</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Crown className="w-4 h-4 text-[#FF8BA0]" />
                <span className="text-gray-300 text-sm">Club President - Aura Design Club</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-[#FF8BA0]" />
                <span className="text-gray-300 text-sm">Design Team Lead - SSN & SNUC's Tech & Cultural Fests for 2 years</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-[#FF8BA0]" />
                <span className="text-gray-300 text-sm">Mentored 50+ students in coding, UI/UX, & visual design</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#E41F7B] mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#FF8BA0]" />
                <span className="text-white text-sm">nithyapandurangan.30@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-[#FF8BA0]" />
                <span className="text-white text-sm">@nithya-pandurangan</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#FF8BA0]" />
                <span className="text-white text-sm">Hyderabad, India</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-3xl font-bold text-[#E41F7B]">8.44</div>
                <div className="text-sm text-gray-300">CGPA</div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-3xl font-bold text-[#E41F7B]">4+</div>
                <div className="text-sm text-gray-300">Internships</div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-3xl font-bold text-[#E41F7B]">15+</div>
                <div className="text-sm text-gray-300">Technologies Known</div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-3xl font-bold text-[#E41F7B]">2025</div>
                <div className="text-sm text-gray-300">Graduate</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="/Nithya_Pandurangan_Resume.pdf" download>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#E41F7B] hover:bg-[#86003C] text-white font-semibold rounded-full transition-colors duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
