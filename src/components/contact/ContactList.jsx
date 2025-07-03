import React from 'react'
import contact from '../../data/contact'
import { ContactItem } from './ContactItem'

export const ContactList = () => {
  return (
    <section>
      {contact.map((con, index) => (
        <ContactItem key={index} {...con} />
      ))}
    </section>
  )
}