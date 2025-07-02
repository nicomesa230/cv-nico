import React from 'react'
import education from '../../data/education'
import { EducationItem } from './EducationItem'

export const EducationList = () => {
  return (
    <>
        <section>
            {education.map((edu, index)=>(
                <EducationItem key={index} {...edu} />
            ))}
        </section>
    </>
  )
}
