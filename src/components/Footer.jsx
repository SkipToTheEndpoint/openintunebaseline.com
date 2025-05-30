import React from 'react'
import { Github, ExternalLink, Heart, Newspaper, Twitter } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>OpenIntuneBaseline</h3>
              <p>
                Community-driven endpoint security baseline for Microsoft Intune. 
                Making enterprise security accessible to everyone.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Project</h4>
                <a href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
                <a href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline/releases" target="_blank" rel="noopener noreferrer">
                  Releases
                </a>
                <a href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline/issues" target="_blank" rel="noopener noreferrer">
                  Issues
                </a>
              </div>
              
              <div className="link-group">
                <h4>Documentation</h4>
                <a href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline/wiki" target="_blank" rel="noopener noreferrer">
                  Wiki
                </a>
                <a href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline/discussions" target="_blank" rel="noopener noreferrer">
                  Discussions
                </a>
                <a href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                  Contributing
                </a>
              </div>
              
              <div className="link-group">
                <h4>Resources</h4>
                <a href="https://winadmins.io/discord" target="_blank" rel="noopener noreferrer">
                  WinAdmins Discord
                </a>
                <a href="https://techcommunity.microsoft.com/t5/microsoft-intune/ct-p/MicrosoftIntune" target="_blank" rel="noopener noreferrer">
                  Intune Tech Community
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>
                &copy; {currentYear} SkipToTheEndpoint.
              </p>
            </div>
            
            <div className="footer-bottom-right">
              <p className="made-with-love">
                Made with <Heart size={16} className="heart" /> by the community
              </p>
              <div className="footer-social">
                <a href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://skiptotheendpoint.co.uk" target="_blank" rel="noopener noreferrer" aria-label="Blog">
                  <Newspaper size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
