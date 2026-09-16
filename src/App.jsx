import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import AboutDoctor from './pages/AboutDoctor'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutDoctor />} />
            <Route path="/about-doctor" element={<AboutDoctor />} />
            <Route path="/profile" element={<AboutDoctor />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

