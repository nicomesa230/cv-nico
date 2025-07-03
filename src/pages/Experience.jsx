import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { ExperienceList } from '../components/experience/ExperienceList'
import { Footer } from '../components/layout/Footer'

export const Experience = () => {

  const [search, setSearch]= useState('')

  return (
    <>
    <Header onSearch={setSearch}/>
    <div className='experience'>
        <h1>Mi Experiencia</h1>
        <ExperienceList search={search}/>
    </div>
    <Footer/>
    </>
  )
}
