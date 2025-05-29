import { motion } from 'framer-motion'
import { PhoneIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const EmergencyPage = () => {
  const emergencyTypes = [
    {
      title: "🔥 Immediate Dangers - Call 911 First, Then Us",
      urgent: true,
      items: [
        "Gas leak with strong odor",
        "Major water line break causing flooding", 
        "Sewage backup in living areas",
        "Any situation threatening life or property"
      ]
    },
    {
      title: "💧 Water Emergencies",
      items: [
        "Burst pipes or major leaks",
        "No hot water (water heater failure)",
        "Flooding from plumbing failure",
        "Frozen pipes",
        "Main water line breaks"
      ]
    },
    {
      title: "🚽 Sewage & Drain Emergencies", 
      items: [
        "Complete drain blockage",
        "Sewage backup",
        "Toilet overflowing uncontrollably",
        "Multiple drains backing up"
      ]
    },
    {
      title: "⛽ Gas Emergencies",
      items: [
        "Suspected gas leaks",
        "Damaged gas lines", 
        "Gas appliance malfunctions",
        "Strong gas odors"
      ]
    }
  ]

  const responseSteps = [
    {
      number: 1,
      title: "Stay Calm & Assess",
      description: "Evaluate the situation. If there's immediate danger to life or property, call 911 first."
    },
    {
      number: 2, 
      title: "Stop the Water/Gas",
      description: "Locate and turn off the main water or gas valve if safe to do so."
    },
    {
      number: 3,
      title: "Call Us Immediately", 
      description: "We answer emergency calls 24/7 and will dispatch a technician immediately."
    },
    {
      number: 4,
      title: "Document & Wait",
      description: "Take photos for insurance if safe. Stay clear until our technician arrives."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Emergency Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ExclamationTriangleIcon className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-6">
              🚨 Emergency Plumbing Services
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Available 24/7 for urgent plumbing and gas emergencies
            </p>
            <motion.a
              href="tel:6012916057"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold text-xl rounded-lg shadow-2xl hover:bg-gray-100 transition-all transform animate-pulse"
            >
              <PhoneIcon className="h-8 w-8 mr-3" />
              Call (601) 291-6057 NOW
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            When to Call for Emergency Service
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border-l-4 ${
                  type.urgent 
                    ? 'bg-red-50 border-red-500 animate-pulse-slow' 
                    : 'bg-white border-primary-500 shadow-lg'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Emergency Response Steps
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responseSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't Wait - Call Now!
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Plumbing emergencies get worse over time. The sooner you call, the less damage and lower the repair costs.
            </p>
            <motion.a
              href="tel:6012916057"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold text-xl rounded-lg shadow-2xl hover:bg-gray-100 transition-all"
            >
              <PhoneIcon className="h-8 w-8 mr-3" />
              Emergency Line: (601) 291-6057
            </motion.a>
            <p className="text-red-100 mt-4">
              Available 24/7 • Rapid Response • Licensed & Insured
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default EmergencyPage