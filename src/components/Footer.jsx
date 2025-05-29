import { Link } from 'react-router-dom'
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Makos Plumbing & Gas</h3>
            <p className="text-gray-400 mb-4">
              20+ years of trusted service in Madison, Jackson, and Central Mississippi.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <span className="text-green-400 mr-2">✓</span>
              Licensed & Insured
            </div>
            <div className="flex items-center text-gray-400">
              <span className="text-green-400 mr-2">✓</span>
              24/7 Emergency Service
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary-400 mr-3" />
                <a href="tel:6012916057" className="hover:text-primary-400 transition-colors">
                  (601) 291-6057
                </a>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <div>141 Seville Way</div>
                  <div>Madison, MS 39110</div>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                  <div>Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Residential Plumbing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Commercial Plumbing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Gas Line Services</Link></li>
              <li><Link to="/emergency" className="hover:text-white transition-colors">Emergency Repairs</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Water Heater Service</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Madison, MS</li>
              <li>Jackson, MS</li>
              <li>Ridgeland, MS</li>
              <li>Canton, MS</li>
              <li>Clinton, MS</li>
              <li>Pearl, MS</li>
              <li>Brandon, MS</li>
              <li>Flowood, MS</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Makos Plumbing & Gas, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer