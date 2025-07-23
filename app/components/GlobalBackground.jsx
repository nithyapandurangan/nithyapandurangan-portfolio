"use client"

import { useRef, useEffect, useCallback } from "react"
import * as THREE from "three"

export default function GlobalBackground({
  intensity = 1,
  particleCount = 600,
  colors = [0xff8ba0, 0xe41f7b, 0x86003c],
}) {
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

    // Create multiple particle systems with different colors and behaviors
    const particleSystems = []

    colors.forEach((color, index) => {
      const particlesGeometry = new THREE.BufferGeometry()
      const currentParticleCount = Math.floor(particleCount / colors.length)
      const posArray = new Float32Array(currentParticleCount * 3)

      for (let i = 0; i < currentParticleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (15 + index * 2)
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01 + index * 0.005,
        color: color,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.6 + index * 0.1,
      })
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particlesMesh)
      particleSystems.push(particlesMesh)
    })

    // Add some floating geometric shapes
    const geometries = [
      new THREE.RingGeometry(0.5, 0.7, 6),
      new THREE.CircleGeometry(0.3, 8),
      new THREE.PlaneGeometry(0.4, 0.4),
    ]

    const shapes = []
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.1,
        wireframe: Math.random() > 0.5,
      })
      const shape = new THREE.Mesh(geometry, material)
      shape.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10)
      shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      scene.add(shape)
      shapes.push(shape)
    }

    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)

      // Animate particles with different speeds and mouse interaction
      particleSystems.forEach((system, index) => {
        system.rotation.x += (0.0002 + index * 0.0001) * intensity
        system.rotation.y += (0.0003 + index * 0.0001) * intensity
        system.rotation.x += mouseY.current * 0.0001 * intensity
        system.rotation.y += mouseX.current * 0.0001 * intensity
      })

      // Animate floating shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += (0.001 + index * 0.0002) * intensity
        shape.rotation.y += (0.0015 + index * 0.0003) * intensity
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001 * intensity
      })

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
      particleSystems.forEach((system) => {
        system.geometry.dispose()
        if (Array.isArray(system.material)) {
          system.material.forEach((material) => material.dispose())
        } else {
          system.material.dispose()
        }
      })
      shapes.forEach((shape) => {
        shape.geometry.dispose()
        if (Array.isArray(shape.material)) {
          shape.material.forEach((material) => material.dispose())
        } else {
          shape.material.dispose()
        }
      })
      geometries.forEach((geometry) => geometry.dispose())
    }
  }, [handleMouseMove, intensity, particleCount, colors])

  return <div ref={mountRef} className="fixed inset-0 z-0" />
}
