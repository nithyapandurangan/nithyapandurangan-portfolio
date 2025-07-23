"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Visual Ventures", href: "#visual-ventures" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      setIsOpen(false)
      
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start" 
        })
      }, 300)
    }
  }

  return (
    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800/50" : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Left side - Name */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="text-[#E41F7B] font-bold text-sm xl:text-lg whitespace-nowrap"
      >
        Nithya Pandurangan
      </motion.a>

      {/* Centered Navigation - Hidden on mobile */}
      <div className="hidden lg:flex items-center justify-center flex-1">
        <div className="flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className="text-white hover:text-[#E41F7B] transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact")}
            className="px-4 xl:px-6 py-2 bg-[#E41F7B] hover:bg-[#86003C] text-white rounded-full transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
          >
            Contact
          </motion.button>
        </div>
      </div>

      {/* Right side icons */}
      <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 absolute right-4 xl:right-8">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/nithyapandurangan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 xl:p-3 rounded-full hover:bg-gray-800/50 transition-colors"
        >
          <Github className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://linkedin.com/in/nithya-pandurangan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 xl:p-3 rounded-full hover:bg-gray-800/50 transition-colors"
        >
          <Linkedin className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
        </motion.a>
      </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/90 backdrop-blur-md border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white hover:text-[#E41F7B] transition-colors duration-200 py-2"
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection("#contact")}
                className="block w-full text-left px-4 py-2 bg-[#E41F7B] hover:bg-[#86003C] text-white rounded-lg transition-colors duration-200 mt-4"
              >
                Contact
              </motion.button>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800/50">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/nithyapandurangan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com/in/nithya-pandurangan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
