import React from 'react'
import contact from '../../data/contact'
import { ContactItem } from './ContactItem'

export const ContactList = ({ search }) => {
  const filtered = contact.filter(con =>
    con.name.toLowerCase().includes((search || '').toLowerCase()) ||
    (con.description && con.description.toLowerCase().includes((search || '').toLowerCase()))
  )
  return (
    <section>
      {filtered.map((con, index) => (
        <ContactItem key={index} {...con} />
      ))}
    </section>
  )
}