import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Madison, MS",
      rating: 5,
      text: "The most professional contractor I have dealt with ever. Excellent work and reliable service. They fixed our emergency pipe burst quickly and efficiently.",
      service: "Emergency Plumbing"
    },
    {
      name: "Mike Chen",
      location: "Jackson, MS", 
      rating: 5,
      text: "Fast response time and quality workmanship. Highly recommend Makos Plumbing for any plumbing needs. They installed our new water heater perfectly.",
      service: "Water Heater Installation"
    },
    {
      name: "Jennifer Davis",
      location: "Ridgeland, MS",
      rating: 5,
      text: "Professional, courteous, and fair pricing. They've been our go-to plumbers for years. Always reliable and trustworthy service.",
      service: "Regular Maintenance"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover-lift"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-gray-100 pt-3 sm:pt-4">
                <div className="text-sm sm:text-base font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-xs sm:text-sm text-blue-600 font-medium mt-1">{testimonial.service}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials