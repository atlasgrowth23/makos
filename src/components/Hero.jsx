import { motion } from 'framer-motion'
import { ChevronDownIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with professional plumbing image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional plumber working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg"
          >
            Professional Plumbing & Gas Services
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Serving Madison, Jackson & Central Mississippi for over 20 years with expert plumbing and gas solutions
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white/90"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">20+ Years Experience</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:6012916057"
              className="btn-emergency text-lg px-8 py-4 shadow-2xl"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call (601) 291-6057
            </a>
            <Link to="/contact">
              <button className="btn-secondary text-lg px-8 py-4 shadow-xl">
                <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2" />
                Get Free Quote
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200 text-sm">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200 text-sm">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200 text-sm">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDownIcon className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero