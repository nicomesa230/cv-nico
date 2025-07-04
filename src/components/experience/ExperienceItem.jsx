import React from 'react'

export const ExperienceItem = ({ position, company, img, period, description, stack }) => {
  return (
    <>
      <div className="experience-item">
        <h1>{position}</h1>
        <h2>{company}</h2>
        <img src={img} alt={company} />
        <p>{period}</p>
        <div>
          {description.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>
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
      </div>
    </>
  )
}
