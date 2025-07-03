import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { AboutList } from '../components/about/AboutList'
import { Footer } from '../components/layout/Footer'
import '../styles/about.css'

export const About = () => {
  const [search, setSearch]= useState('')
  return (
    <>
    <Header onSearch={setSearch}/>
    <div className='about'>
        <h1>Sobre mi</h1>
        <AboutList search={search}/>
    </div>
    <Footer/>
    </>
  )
}
