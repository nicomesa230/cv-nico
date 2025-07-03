import React from 'react'

export const EducationItem = ({degree, institution, img, period, description}) => {
  return (
    <div className="education-item">
      <h1>{degree}</h1>
      <h2>{institution}</h2>
      <img src={img} alt={institution} />
      <p>{period}</p>
      <div>
        {description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
    </div>
  )
}