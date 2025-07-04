import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { ProjectList } from '../components/projects/ProjectList'
import { Footer } from '../components/layout/Footer'
import '../styles/project.css'

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
