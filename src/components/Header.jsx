import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Moon, Sun } from 'lucide-react'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersDark = mediaQuery.matches
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    
    // Listen for system theme changes (only if no saved preference)
    const handleSystemThemeChange = (e) => {
      const hasManualPreference = localStorage.getItem('theme')
      if (!hasManualPreference) {
        setIsDarkMode(e.matches)
        if (e.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
    
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    
    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="header">
      <div className="container">        <div className="header-content">          <div className="logo">
            <Logo className="logo-icon" size={40} />
            <span className="logo-text">OpenIntuneBaseline</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          </nav>
            <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
