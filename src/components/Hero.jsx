import React from 'react'
import { Shield, Users, Download, ExternalLink, UserCheck, PackageOpen, Brain } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Expertly-Crafted Endpoint Security for 
              <span className="highlight"> Microsoft Intune</span>
            </h1>
            <p className="hero-description">
              OpenIntuneBaseline provides a comprehensive, community-supported security baseline 
              for Microsoft Intune, helping organizations implement robust endpoint security 
              without compromising end user experience or managability.
            </p>
            <div className="hero-actions">
              <a 
                href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Download size={18} />
                Get Started
              </a>
              <a 
                href="#features"
                className="btn btn-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="card-title">Microsoft Intune</span>
              </div>
              <div className="hero-card-content">
                <div className="baseline-item">
                  <Shield size={16} />
                  <span>Device Security</span>
                  <div className="status enabled">Enabled</div>
                </div>
                <div className="baseline-item">
                  <Shield size={16} />
                  <span>User Experience</span>
                  <div className="status enabled">Enabled</div>
                </div>
                <div className="baseline-item">
                  <Shield size={16} />
                  <span>AV & Firewall</span>
                  <div className="status enabled">Enabled</div>
                </div>
                <div className="baseline-item">
                  <Shield size={16} />
                  <span>Compliance</span>
                  <div className="status enabled">Enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
