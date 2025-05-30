import React from 'react'

const Logo = ({ className = '', size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="capyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-primary)" />
          <stop offset="100%" stopColor="var(--accent-secondary)" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="24" cy="24" r="22" fill="url(#capyGradient)" />
      
      {/* Ultra-simple capybara - just 3 overlapping circles */}
      <circle cx="24" cy="28" r="12" fill="white" />
      <circle cx="24" cy="18" r="8" fill="white" />
      
      {/* Minimal ears */}
      <circle cx="19" cy="12" r="2.5" fill="white" />
      <circle cx="29" cy="12" r="2.5" fill="white" />
      
      {/* Just two dots for eyes */}
      <circle cx="21" cy="17" r="1.5" fill="var(--accent-primary)" />
      <circle cx="27" cy="17" r="1.5" fill="var(--accent-primary)" />
    </svg>
  )
}

export default Logo
