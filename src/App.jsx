import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'

// Lazy-loaded pages — each becomes its own JS chunk
const Home        = lazy(() => import('./pages/Home'))
const AboutDoctor = lazy(() => import('./pages/AboutDoctor'))
const Contact     = lazy(() => import('./pages/Contact'))

// Minimal loading fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-[var(--acc-1)] border-t-transparent animate-spin" />
        <p className="text-sm text-gray-400 tracking-wide">Loading…</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"            element={<Home />} />
              <Route path="/about"       element={<AboutDoctor />} />
              <Route path="/about-doctor" element={<AboutDoctor />} />
              <Route path="/profile"     element={<AboutDoctor />} />
              <Route path="/contact"     element={<Contact />} />
              <Route path="/contact-us"  element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App
