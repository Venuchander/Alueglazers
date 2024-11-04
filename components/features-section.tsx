'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Sliders, HeadphonesIcon } from 'lucide-react'

const features = [
  { title: 'Quality Assurance', description: 'Rigorous testing ensures top-notch products', icon: CheckCircle },
  { title: 'Customization', description: 'Tailored solutions to fit your specific needs', icon: Sliders },
  { title: 'Expert Installation', description: 'Professional fitting for optimal performance', icon: Shield },
  { title: 'After-Sales Support', description: 'Dedicated customer service post-installation', icon: HeadphonesIcon },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why Choose ALUEGLAZERS?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-100 rounded-full p-3">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}