import React from 'react'
import experience from '../../data/experience'
import { ExperienceItem } from './ExperienceItem'

export const ExperienceList = ({ search }) => {
  const filtered = experience.filter(exp =>
    (exp.position && exp.position.toLowerCase().includes((search || '').toLowerCase())) ||
    (exp.company && exp.company.toLowerCase().includes((search || '').toLowerCase()))
  )
  return (
    <section>
      {filtered.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  )
}