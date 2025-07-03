import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import apps from '../../data/app'
import '../../styles/container.css'

export const Container = () => {

  //Inicializamos array, useState & useEffect para devolver estos 2 textos cada 3 segundos al renderizar el componente
  const texts = ['Nico Mesa, Desarrollador web', 'Bienvenido a mi CV']
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className='container'>
        <h1 className="fade-text">{texts[current]}</h1>
        <div className='icon'>
          {apps.map(app => (
            <button
              key={app.label}
              onClick={() => navigate(app.path)}
            >
              <img src={app.icon} alt={app.label} />
              <span>{app.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}