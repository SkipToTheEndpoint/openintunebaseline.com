import React from 'react'
import { Shield, Users, Zap, FileText, Settings, CheckCircle, UserCheck, BookOpenCheck, CheckCircle2 } from 'lucide-react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: "Comprehensive Policies",
      description: "Complete baseline covering all the device configurations to enhance your managed endpoints."
    },
    {
      icon: <UserCheck size={32} />,
      title: "User Experience Focused",
      description: "Exceeds all other security frameworks by enhancing user experience and productivity."
    },
    {
      icon: <Shield size={32} />,
      title: "Industry Alignment",
      description: "Embraces frameworks like CIS, NCSC, and other security standards for maximum endpoint security."
    },
    {
      icon: <Zap size={32} />,
      title: "Easy Implementation",
      description: "Ready-to-deploy configuration templates that can be quickly imported into your Microsoft Intune environment."
    },
    {
      icon: <Settings size={32} />,
      title: "Customizable",
      description: "Designed to allow maximum flexibility and scaling to environments of any size."
    },
    {
      icon: <BookOpenCheck size={32} />,
      title: "Tried and Tested",
      description: "Extensively deployed in production environments, not just tested on VMs."
    }

  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose OpenIntuneBaseline?</h2>
          <p className="section-subtitle">
            Built by experts, driven by community.
            <br />
            Experience enterprise-grade security, without the complexity!
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
