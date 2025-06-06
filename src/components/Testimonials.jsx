import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/testimonials.json')
        const data = await response.json()
        setTestimonials(data)
      } catch (error) {
        console.error('Error loading testimonials:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  // Auto-cycle testimonials every 10 seconds
  useEffect(() => {
    if (testimonials.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (isLoading) {
    return (
      <div className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-loading">Loading testimonials...</div>
        </div>
      </div>
    )
  }

  if (testimonials.length === 0) {
    return null // Don't render if no testimonials
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What Other Admins Think
          </h2>
          <p className="testimonials-subtitle">
            Testimonials from IT admins successfully using the OpenIntuneBaseline
          </p>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonial-card">
            <div className="testimonial-title-container">
              <h3 className="testimonial-title">
                "{currentTestimonial.title}"
              </h3>
            </div>
            
            <blockquote className="testimonial-comment">
              {currentTestimonial.comment}
            </blockquote>
          </div>

          {/* Navigation buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="testimonial-nav-button prev"
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="testimonial-nav-button next"
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        <div className="testimonial-submit">
          <p>Already using it? Submit your testimonial here: <a href="https://stte.me/oibtestimonial" target="_blank" rel="noopener noreferrer">https://stte.me/oibtestimonial</a></p>
        </div>

        {/* Dots indicator */}
        {testimonials.length > 1 && (
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`testimonials-dot ${
                  index === currentIndex ? 'active' : ''
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsSection
