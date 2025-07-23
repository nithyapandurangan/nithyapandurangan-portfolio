"use client"

import { useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Image from "next/image"
import * as THREE from "three"

function ThreeBackground() {
  const mountRef = useRef(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const handleMouseMove = useCallback((event) => {
    mouseX.current = (event.clientX / window.innerWidth) * 2 - 1
    mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1
  }, [])

  useEffect(() => {
    const currentMount = mountRef.current
    if (!currentMount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    currentMount.appendChild(renderer.domElement)

    // Create multiple particle systems with different colors and sizes
    const particleSystems = []

    // Main particles
    const particlesGeometry1 = new THREE.BufferGeometry()
    const particlesCount1 = 800
    const posArray1 = new Float32Array(particlesCount1 * 3)

    for (let i = 0; i < particlesCount1 * 3; i++) {
      posArray1[i] = (Math.random() - 0.5) * 15
    }

    particlesGeometry1.setAttribute("position", new THREE.BufferAttribute(posArray1, 3))
    const particlesMaterial1 = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xff8ba0,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particlesMesh1 = new THREE.Points(particlesGeometry1, particlesMaterial1)
    scene.add(particlesMesh1)
    particleSystems.push(particlesMesh1)

    // Secondary particles
    const particlesGeometry2 = new THREE.BufferGeometry()
    const particlesCount2 = 400
    const posArray2 = new Float32Array(particlesCount2 * 3)

    for (let i = 0; i < particlesCount2 * 3; i++) {
      posArray2[i] = (Math.random() - 0.5) * 12
    }

    particlesGeometry2.setAttribute("position", new THREE.BufferAttribute(posArray2, 3))
    const particlesMaterial2 = new THREE.PointsMaterial({
      size: 0.025,
      color: 0xe41f7b,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particlesMesh2 = new THREE.Points(particlesGeometry2, particlesMaterial2)
    scene.add(particlesMesh2)
    particleSystems.push(particlesMesh2)

    // Accent particles
    const particlesGeometry3 = new THREE.BufferGeometry()
    const particlesCount3 = 200
    const posArray3 = new Float32Array(particlesCount3 * 3)

    for (let i = 0; i < particlesCount3 * 3; i++) {
      posArray3[i] = (Math.random() - 0.5) * 8
    }

    particlesGeometry3.setAttribute("position", new THREE.BufferAttribute(posArray3, 3))
    const particlesMaterial3 = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x86003c,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particlesMesh3 = new THREE.Points(particlesGeometry3, particlesMaterial3)
    scene.add(particlesMesh3)
    particleSystems.push(particlesMesh3)

    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)

      // Animate particles with different speeds and mouse interaction
      particlesMesh1.rotation.x += 0.0003
      particlesMesh1.rotation.y += 0.0005
      particlesMesh1.rotation.x += mouseY.current * 0.0001
      particlesMesh1.rotation.y += mouseX.current * 0.0001

      particlesMesh2.rotation.x -= 0.0002
      particlesMesh2.rotation.y += 0.0008
      particlesMesh2.rotation.x += mouseY.current * 0.0002
      particlesMesh2.rotation.y += mouseX.current * 0.0002

      particlesMesh3.rotation.x += 0.0004
      particlesMesh3.rotation.y -= 0.0003
      particlesMesh3.rotation.x += mouseY.current * 0.0001
      particlesMesh3.rotation.y += mouseX.current * 0.0001

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement)
      }
      renderer.dispose()
      particlesGeometry1.dispose()
      particlesMaterial1.dispose()
      particlesGeometry2.dispose()
      particlesMaterial2.dispose()
      particlesGeometry3.dispose()
      particlesMaterial3.dispose()
    }
  }, [handleMouseMove])

  return <div ref={mountRef} className="absolute inset-0 z-0" />
}

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Nithya_Pandurangan_Resume.pdf"
    link.click()
  }

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black text-white">
      <ThreeBackground />

      <div className="relative z-10 p-4 max-w-5xl mx-auto w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
        >
          Hi, I'm <span className="text-[#E41F7B]">Nithya Pandurangan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-3xl text-[#FF8BA0] font-medium mb-6"
        >
          Full Stack Engineer with Frontend Passion
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-12"
        >
          Crafting seamless digital experiences through innovative code and intuitive design
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(228, 31, 123, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-[#E41F7B] hover:bg-[#86003C] text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Let's Connect
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 139, 160, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="px-8 py-4 bg-transparent border-2 border-[#FF8BA0] hover:bg-[#FF8BA0] hover:text-black text-[#FF8BA0] font-semibold rounded-full text-lg transition-all duration-300 shadow-lg flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
