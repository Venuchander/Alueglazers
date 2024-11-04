'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          About ALUEGLAZERS
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div>
            <p className="text-gray-600 mb-4">
              Established in 2013, ALUEGLAZERS has become a beacon of excellence in the glazing industry. Our passion for crafting high-quality UPVC windows, doors, and aluminium solutions has positioned us as a leader in Valasaravakkam, Chennai.
            </p>
            <p className="text-gray-600">
              With a state-of-the-art R&D department, we continuously innovate to meet evolving market demands, ensuring our products are at the forefront of quality and functionality.
            </p>
          </motion.div>
          <motion.div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="ALUEGLAZERS facility"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}