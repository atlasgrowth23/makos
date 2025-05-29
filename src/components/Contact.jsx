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
          
          <div className="flex flex-col gap-4 justify-center max-w-md mx-auto px-4">
            <a href="tel:6012916057" className="btn-emergency text-base sm:text-lg w-full text-center min-h-[56px] flex items-center justify-center">
              <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              Call (601) 291-6057
            </a>
            <Link to="/contact" className="w-full">
              <button className="btn-secondary text-base sm:text-lg w-full min-h-[56px] flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
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