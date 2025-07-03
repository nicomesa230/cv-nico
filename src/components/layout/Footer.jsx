import React from 'react'
import '../../styles/footer.css'

export const Footer = () => {
  return (
    <>
    <footer>
      <a href="https://github.com/nicomesa230"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" /></a>
      © {new Date().getFullYear()} Nico Mesa
      <a href="https://www.linkedin.com/in/nicolas-mesa-munoz/"><img src="https://kirisama.com/recursos/linkedin-logo-black.svg" alt="LinkedIn" /></a>
    </footer>
    </>
  )
}
