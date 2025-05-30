import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  WrenchScrewdriverIcon, 
  HomeIcon, 
  BuildingOfficeIcon,
  FireIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "0px 0px -100px 0px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      icon: HomeIcon,
      title: "Residential Plumbing",
      description: "Complete home plumbing solutions from leak repairs to full bathroom renovations.",
      features: ["Leak Detection & Repair", "Water Heater Services", "Drain Cleaning", "Fixture Installation"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Commercial Plumbing",
      description: "Professional commercial services for businesses, restaurants, and office buildings.",
      features: ["Restaurant Plumbing", "Office Buildings", "Preventive Maintenance", "Code Compliance"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FireIcon,
      title: "Gas Line Services",
      description: "Safe and reliable gas line installation, repair, and maintenance services.",
      features: ["Gas Line Installation", "Leak Detection", "Appliance Hookups", "Safety Inspections"],
      image: "https://images.unsplash.com/photo-1571201317259-8e3ee6bd0b16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Emergency Repairs",
      description: "24/7 emergency plumbing services when you need us most.",
      features: ["24/7 Availability", "Rapid Response", "Emergency Repairs", "Damage Prevention"],
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section ref={ref} className="py-12 sm:py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Expert Solutions for Every{' '}
            <span className="gradient-text">Plumbing Need</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From routine maintenance to complex installations, we deliver professional plumbing and gas services 
            that you can trust for your home or business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="service-card group relative overflow-hidden"
              >
                {/* Service Image */}
                <div className="w-full h-40 sm:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <CheckCircleIcon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Plumbing Services?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert solutions from Madison's most trusted plumbing professionals. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col gap-4 justify-center max-w-md mx-auto">
              <a href="tel:6012916057" className="btn-emergency w-full text-center min-h-[48px] flex items-center justify-center">
                Call (601) 291-6057
              </a>
              <Link to="/services" className="w-full">
                <button className="btn-secondary w-full min-h-[48px] flex items-center justify-center">
                  View All Services
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services