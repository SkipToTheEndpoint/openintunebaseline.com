import React from 'react'

const Logo = ({ className = '', size = 32 }) => {
  return (
    <img 
      src="/logo.svg"
      alt="OpenIntuneBaseline Logo"
      width={size} 
      height={size} 
      className={className}
      style={{ borderRadius: '50%' }}
    />
  )
}

export default Logo
