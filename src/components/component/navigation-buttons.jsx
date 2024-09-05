'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function NavigationButtons() {
  useEffect(() => {
    // Smooth scroll function
    const smoothScroll = (e, target) => {
      e.preventDefault()
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.nav-button')
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => 
        smoothScroll(e, button.getAttribute('href') || ''))
    })

    // Cleanup
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', (e) => 
          smoothScroll(e, button.getAttribute('href') || ''))
      })
    };
  }, [])

  return (
    (<div className="flex space-x-4">
      <Button
        href="#about"
        className="nav-button bg-pink-500 text-white border border-pink-600 hover:bg-pink-600 transition-colors duration-300">
        Sobre Nosotros
      </Button>
      <Button
        href="#contact"
        className="nav-button bg-pink-500 text-white border border-pink-600 hover:bg-pink-600 transition-colors duration-300">
        Contactanos
      </Button>
      <Button
        href="#products"
        className="nav-button bg-pink-500 text-white border border-pink-600 hover:bg-pink-600 transition-colors duration-300">
        Productos
      </Button>
    </div>)
  );
}