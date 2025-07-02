import React from 'react'

export const ProjectItem = ({ title, img, description, stack, link }) => {
  return (
    <>
    <div>
      <h2>{title}</h2>
      <img src={img} />
      <p>{description}</p>

      <div>
        {stack.map((tech) => (
          <img
            key={tech.name}
            src={tech.logo}
            alt={tech.name}
            title={tech.name}
          />
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Proyecto
      </a>
    </div>
    </>
  )
}
