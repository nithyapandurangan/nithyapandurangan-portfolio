"use client"

import { motion } from "framer-motion"
import { Heart, Coffee } from "lucide-react"

export default function Footer() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Footer background using consistent card styling */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e]/50 to-transparent"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E41F7B]/20 via-transparent to-[#86003C]/20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Witty Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              "Code is like humor. When you have to explain it, it's bad."
              <br />
              <span className="text-[#FF8BA0]">- Cory House</span>
            </p>

            <div className="hidden md:flex items-center justify-center space-x-2 text-gray-300 mb-6">
              <span>Built with way too much</span>
              <Coffee className="w-4 h-4 text-[#FF8BA0]" />
              <span>and just the right amount of obsession</span>
            </div>
          </motion.div>

          {/* Let's Talk Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(228, 31, 123, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-[#E41F7B] to-[#FF8BA0] hover:from-[#FF8BA0] hover:to-[#E41F7B] text-white font-semibold rounded-full transition-all duration-300 shadow-lg text-lg"
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-600/50"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-300 mb-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#E41F7B] fill-current" />
              <span>by Nithya Pandurangan</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
