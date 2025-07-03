import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { ContactList } from '../components/contact/ContactList'
import { Footer } from '../components/layout/Footer'
import '../styles/contact.css'

export const Contact = () => {
  return (
    <>
    <Header />
      <div className='contact'>
        <h1>Contáctame</h1>
        <ContactList />
      </div>
    <Footer/>
    </>
  )
}
