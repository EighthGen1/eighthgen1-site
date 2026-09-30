import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import RouteTransition from '../components/layout/RouteTransition'

import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import WorkPage from '../pages/WorkPage'
import VisionPage from '../pages/VisionPage'
import WhyUsPage from '../pages/WhyUsPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />

        <RouteTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </RouteTransition>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes