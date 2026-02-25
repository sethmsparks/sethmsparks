import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Speaking from './pages/Speaking'
import Voice from './pages/Voice'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Elsewhere from './pages/Elsewhere'
import Contact from './pages/Contact'
import './styles/global.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">404</span>
        <h1 className="page-title">Page not found.</h1>
        <a href="/" className="btn">← Back Home</a>
      </div>
    </main>
  )
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/elsewhere" element={<Elsewhere />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
