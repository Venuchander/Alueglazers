'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const products = [
  { name: 'UPVC Windows', description: 'Energy-efficient and low-maintenance windows', image: '/placeholder.svg?height=600&width=800' },
  { name: 'UPVC Doors', description: 'Durable and secure entrance solutions', image: '/placeholder.svg?height=600&width=800' },
  { name: 'Aluminium Windows', description: 'Sleek and modern window designs', image: '/placeholder.svg?height=600&width=800' },
  { name: 'Aluminium Doors', description: 'Stylish and robust door systems', image: '/placeholder.svg?height=600&width=800' },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
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
          Our Premium Solutions
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="mb-4 text-sm sm:text-base">{product.description}</p>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-gray-900"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}