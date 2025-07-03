import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { EducationList } from '../components/education/EducationList'
import { Footer } from '../components/layout/Footer'

export const Education = () => {

  const [search, setSearch] = useState('')

  return (
    <>
        <Header onSearch={setSearch} />
        <div className='education'>
            <h1>Educación</h1>
            <EducationList search={search}/>
        </div>
        <Footer/>
    </>
  )
}
