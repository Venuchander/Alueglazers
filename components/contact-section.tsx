'use client'

import { motion }   from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-sm sm:text-base">+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-sm sm:text-base">info@alueglazers.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-sm sm:text-base">Valasaravakkam, Chennai, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}