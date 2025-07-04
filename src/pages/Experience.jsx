import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { ExperienceList } from '../components/experience/ExperienceList'
import { Footer } from '../components/layout/Footer'
import '../styles/experience.css'

export const Experience = () => {

  return (
    <>
    <Header />
    <div className='experience'>
        <h1>Mi Experiencia</h1>
        <ExperienceList/>
    </div>
    <Footer/>
    </>
  )
}
