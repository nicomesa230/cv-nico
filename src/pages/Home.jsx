import React, { useState } from 'react'
import { Header } from '../components/layout/Header'
import { Container } from '../components/layout/Container'
import { Footer } from '../components/layout/Footer'

export const Home = () => {
  const [search, setSearch] = useState('')

  
  const handleSearch = (value) => {
    setSearch(value)
  }

  return (
    <>
    <Header onSearch={handleSearch}/>
    <Container search={search}/>
    <Footer/>
    </>
  )
}
