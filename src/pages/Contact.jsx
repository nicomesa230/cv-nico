import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { ContactList } from '../components/contact/ContactList'
import { Footer } from '../components/layout/Footer'

export const Contact = () => {
  const [search, setSearch]= useState('')
  return (
    <>
    <Header onSearch={setSearch}/>
      <div className='contact'>
        <h1>Contáctame</h1>
        <ContactList search={search}/>
      </div>
    <Footer/>
    </>
  )
}
