import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import EmergencyPage from './pages/EmergencyPage'

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Hero />
    <Services />
    <Features />
    <Testimonials />
    <Contact />
  </motion.div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App