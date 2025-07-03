import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { ProjectList } from '../components/projects/ProjectList'
import { Footer } from '../components/layout/Footer'

export const Projects = () => {


  return (
    <>
    <Header/>
    <div className='projects'>
      <h1>Mis Proyectos</h1>
      <ProjectList />
    </div>
    <Footer/>
    </>
  )
}
