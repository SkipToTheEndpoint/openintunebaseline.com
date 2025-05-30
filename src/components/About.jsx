import React, { useState, useEffect } from 'react'
import { Github, ExternalLink, Users, Star, Loader2, PackageOpen, GitFork, Eye } from 'lucide-react'
import './About.css'

const About = () => {
  const [repoStats, setRepoStats] = useState({
    stars: '...',
    forks: '...',
    watchers: '...',
    loading: true  })

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/SkipToTheEndpoint/OpenIntuneBaseline')
        if (response.ok) {
          const data = await response.json()
          setRepoStats({
            stars: data.stargazers_count.toLocaleString(),
            forks: data.forks_count.toLocaleString(),
            watchers: data.subscribers_count.toLocaleString(),
            loading: false
          })
        } else {
          // Fallback to static values if API fails
          setRepoStats({
            stars: '750+',
            forks: '150+',
            watchers: '75+',
            loading: false
          })
        }
      } catch (error) {
        console.warn('Failed to fetch GitHub stats:', error)
        // Fallback to static values
        setRepoStats({
          stars: '750+',
          forks: '150+',
          watchers: '75+',
          loading: false
        })
      }
    }

    fetchRepoStats()
  }, [])
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About OpenIntuneBaseline</h2>
            <p className="about-description">
              OpenIntuneBaseline is an open-source project that provides a comprehensive, 
              community-maintained security baseline for Microsoft Intune. Our mission is to 
              democratize enterprise-grade endpoint security by making proven configurations 
              accessible to organizations of all sizes.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>Community-First Approach</h3>
                <p>
                  Built and maintained by security professionals who understand real-world 
                  challenges and requirements.
                </p>
              </div>
              
              <div className="highlight-item">
                <h3>Proven in Production</h3>
                <p>
                  Our configurations are tested and validated in real enterprise environments 
                  before being shared with the community.
                </p>
              </div>
              
              <div className="highlight-item">
                <h3>Continuously Updated</h3>
                <p>
                  Regular updates ensure compatibility with the latest Microsoft Intune features 
                  and emerging security threats.
                </p>
              </div>
            </div>
            
            <div className="about-actions">
              <a 
                href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={18} />
                View on GitHub
              </a>
              <a 
                href="https://github.com/SkipToTheEndpoint/OpenIntuneBaseline/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={18} />
                Documentation
              </a>
            </div>
          </div>
            <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <Star size={24} />
                </div>
                <div className="stat-number">
                  {repoStats.loading ? (
                    <Loader2 size={16} className="loading-spinner" />
                  ) : (
                    repoStats.stars
                  )}
                </div>
                <div className="stat-label">GitHub Stars</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <GitFork size={24} />
                </div>
                <div className="stat-number">
                  {repoStats.loading ? (
                    <Loader2 size={16} className="loading-spinner" />
                  ) : (
                    repoStats.forks
                  )}
                </div>
                <div className="stat-label">Forks</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <Eye size={24} />
                </div>
                <div className="stat-number">
                  {repoStats.loading ? (
                    <Loader2 size={16} className="loading-spinner" />
                  ) : (
                    repoStats.watchers
                  )}
                </div>
                <div className="stat-label">Watchers</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <PackageOpen size={24} />
                </div>
                <div className="stat-number">Open Source</div>
                <div className="stat-label">Community Rocks!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
