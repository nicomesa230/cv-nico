import React from 'react'
import experience from '../../data/experience'
import { ExperienceItem } from './ExperienceItem'

export const ExperienceList = () => {
  return (
    <section>
      {experience.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  )
}