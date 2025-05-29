import { motion } from 'framer-motion'
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'

const ServicesPage = () => {
  const services = [
    {
      title: "Residential Plumbing Services",
      items: [
        { name: "Drain & Sewer Services", details: ["Drain cleaning and unclogging", "Sewer line inspection", "Root removal"] },
        { name: "Water Heater Services", details: ["Installation", "Repair", "Maintenance"] },
        { name: "Leak Detection & Repair", details: ["Hidden leak detection", "Pipe repairs", "Fixture leaks"] },
        { name: "Fixture Installation", details: ["Toilets", "Faucets", "Sinks", "Showers"] }
      ]
    },
    {
      title: "Commercial Plumbing Services", 
      items: [
        { name: "Restaurant Plumbing", details: ["Kitchen plumbing", "Grease traps", "Health compliance"] },
        { name: "Office Buildings", details: ["Restroom plumbing", "Break rooms", "ADA compliance"] },
        { name: "Retail & Industrial", details: ["Large-scale installation", "Backflow prevention"] },
        { name: "Maintenance Services", details: ["Scheduled contracts", "Emergency on-call"] }
      ]
    },
    {
      title: "Gas Line Services",
      items: [
        { name: "Gas Line Installation", details: ["New installations", "Extensions", "Underground lines"] },
        { name: "Gas Appliance Hookups", details: ["Ranges", "Water heaters", "Fireplaces", "Dryers"] },
        { name: "Gas Safety Services", details: ["Leak detection", "Pressure testing", "Safety inspections"] },
        { name: "Compliance & Permits", details: ["Permits", "Inspections", "Code compliance"] }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Professional Plumbing & Gas Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive solutions for residential and commercial properties across Central Mississippi
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((service, idx) => (
                  <div key={idx} className="service-card">
                    <h3 className="text-xl font-bold text-primary-700 mb-4">
                      {service.name}
                    </h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-center text-gray-700">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for professional plumbing and gas services.
          </p>
          <motion.a
            href="tel:6012916057"
            whileHover={{ scale: 1.05 }}
            className="btn-primary text-lg inline-flex items-center"
          >
            <PhoneIcon className="h-6 w-6 mr-2" />
            Call (601) 291-6057
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage