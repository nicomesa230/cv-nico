import React from 'react'
import education from '../../data/education'
import { EducationItem } from './EducationItem'

export const EducationList = ({ search }) => {
  const filtered = education.filter(edu =>
    (edu.degree && edu.degree.toLowerCase().includes((search || '').toLowerCase())) ||
    (edu.institution && edu.institution.toLowerCase().includes((search || '').toLowerCase()))
  )
  return (
    <section>
      {filtered.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </section>
  )
}