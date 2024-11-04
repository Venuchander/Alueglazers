'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Modern glazing"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-40" />
      <motion.div
        className="container mx-auto px-4 z-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Redefine Your Space
          <br />
          <span className="text-blue-300">with Premium Glazing</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Experience the perfect blend of aesthetics and functionality with our cutting-edge UPVC and Aluminium solutions.
        </motion.p>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
>
  <motion.div
    style={{ display: 'inline-block' }} // Ensures the scaling is centered
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" } 
    }}
    whileTap={{ 
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" } 
    }}
  >
    <Button
      size="lg"
      className="bg-blue-600 text-white font-semibold rounded-lg px-8 py-3 transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Explore Our Products
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </motion.div>
</motion.div>

      </motion.div>
    </section>
  )
}