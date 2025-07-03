import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { EducationList } from '../components/education/EducationList'
import { Footer } from '../components/layout/Footer'
import '../styles/education.css'

export const Education = () => {


  return (
    <>
        <Header />
        <div className='education'>
            <h1>Educación</h1>
            <EducationList/>
        </div>
        <Footer/>
    </>
  )
}
