import { motion } from 'framer-motion'
import { PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for professional plumbing and gas services in Madison, Jackson, and surrounding areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6012916057" className="btn-emergency text-lg">
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call (601) 291-6057
            </a>
            <Link to="/contact">
              <button className="btn-secondary text-lg">
                <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2" />
                Request Quote
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact