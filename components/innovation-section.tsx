'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Thermometer, Droplet } from 'lucide-react'

const innovations = [
  { title: 'Energy Efficiency', description: 'Our advanced glazing technology reduces heat transfer, lowering energy costs.', icon: Zap },
  { title: 'Enhanced Security', description: 'Multi-point locking systems ensure maximum protection for your property.', icon: Shield },
  { title: 'Climate Control', description: 'Maintain optimal indoor temperature with our climate-responsive solutions.', icon: Thermometer },
  { title: 'Weather Resistance', description: 'Engineered to withstand extreme weather conditions, ensuring longevity.', icon: Droplet },
]

export default function InnovationSection() {
  return (
    <section id="innovation" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovative Technology
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          {innovations.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <item.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}