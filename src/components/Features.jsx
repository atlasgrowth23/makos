import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Licensed & Insured",
      description: "Fully licensed professionals with comprehensive insurance for your peace of mind.",
      color: "text-green-500"
    },
    {
      icon: ClockIcon,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for urgent plumbing emergencies.",
      color: "text-blue-500"
    },
    {
      icon: UserGroupIcon,
      title: "20+ Years Experience",
      description: "Over two decades serving the Madison and Jackson communities.",
      color: "text-purple-500"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Upfront Pricing",
      description: "Transparent, honest pricing with detailed estimates before work begins.",
      color: "text-yellow-500"
    },
    {
      icon: TrophyIcon,
      title: "Quality Workmanship",
      description: "Premium materials and expert craftsmanship backed by warranties.",
      color: "text-orange-500"
    },
    {
      icon: HeartIcon,
      title: "Local Family Business",
      description: "Madison-based family business committed to our community.",
      color: "text-red-500"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Makos Plumbing & Gas</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of customers across Central Mississippi for reliable, professional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className={`w-16 h-16 ${feature.color} mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features