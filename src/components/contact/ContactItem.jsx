import React from 'react'

export const ContactItem = ({ name, title, phone, email, github, linkedin, location, interestsLinks }) => {
  return (
    <div className="contact-item">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>Teléfono: {phone}</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
      <p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
      <p>Ubicación: {location}</p>
      <div className="links">
        {interestsLinks && interestsLinks.map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <img src={link.icon} alt={link.label} style={{ width: 24, height: 24, verticalAlign: 'middle' }} /> {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}