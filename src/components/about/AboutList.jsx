import React from 'react'
import about from '../../data/about'
import { AboutItem } from './AboutItem'

export const AboutList = () => {

  return (
    <section>
      {about.map((ab, index) => (
        <AboutItem key={index} {...ab} />
      ))}
    </section>
  )
}