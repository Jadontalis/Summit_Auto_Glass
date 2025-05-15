import React from 'react'
import './Footer.css'

export function Footer() {
  return (
     <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Summit Auto Glass, LLC | All Rights Reserved.</p>
    </footer>
  )
}
