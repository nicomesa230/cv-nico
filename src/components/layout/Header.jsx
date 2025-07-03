import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/header.css'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <header>
        <div>
          <img
            src="https://www.svgrepo.com/show/451924/view-app-grid.svg"
            alt="App grid selector"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <img src="/favicon.png" alt="Icono" />
          <p>Nico Mesa</p>
        </div>
      </header>
    </>
  )
}