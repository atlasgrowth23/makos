import { motion } from 'framer-motion'
import { useState } from 'react'
import { PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    urgency: 'routine',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
            Contact Makos Plumbing & Gas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Get in touch for professional plumbing and gas services
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <a href="tel:6012916057" className="text-primary-600 hover:text-primary-700 text-lg font-medium">
                      (601) 291-6057
                    </a>
                    <p className="text-gray-600">Available for emergencies 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">141 Seville Way<br />Madison, MS 39110</p>
                    <p className="text-gray-600">Licensed and insured in Mississippi</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Emergency calls only
                    </p>
                    <p className="text-gray-600">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-bold text-red-800 mb-2">🚨 Plumbing Emergency?</h3>
                <p className="text-red-700 mb-4">
                  For immediate assistance with burst pipes, gas leaks, or other emergencies:
                </p>
                <motion.a
                  href="tel:6012916057"
                  whileHover={{ scale: 1.05 }}
                  className="btn-emergency"
                >
                  Call (601) 291-6057 Now
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
                >
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-800">Thank you! We'll contact you within 2 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="residential-plumbing">Residential Plumbing</option>
                    <option value="commercial-plumbing">Commercial Plumbing</option>
                    <option value="gas-services">Gas Line Services</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="water-heater">Water Heater Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="routine">Routine - Within a week</option>
                    <option value="soon">Soon - Within 2-3 days</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                    <option value="emergency">Emergency - ASAP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description of Issue *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your plumbing or gas service needs in detail..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Request
                </motion.button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll respond within 2 hours during business hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage