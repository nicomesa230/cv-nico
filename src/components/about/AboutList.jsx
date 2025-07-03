import React from 'react'
import about from '../../data/about'
import { AboutItem } from './AboutItem'

const TITLES = [
  'habilidades',
  'conocimientos',
  'habilidades blandas',
  'idiomas',
  'otros intereses'
]

export const AboutList = ({ search }) => {
  const searchText = (search || '').toLowerCase().trim()

  // Si el texto de búsqueda coincide con alguno de los títulos, mostrar solo esa tarjeta
  const filteredAbout = about.map(ab => {
    if (!searchText) return ab

    // Determina qué secciones mostrar según el título buscado
    const show = TITLES.filter(title => title.includes(searchText))
    if (show.length === 0) return null

    return {
      skills: show.includes('habilidades') ? ab.skills : [],
      aboutSkills: show.includes('conocimientos') ? ab.aboutSkills : [],
      softSkills: show.includes('habilidades blandas') ? ab.softSkills : [],
      languages: show.includes('idiomas') ? ab.languages : [],
      interests: show.includes('otros intereses') ? ab.interests : []
    }
  }).filter(Boolean)

  return (
    <section>
      {filteredAbout.map((ab, index) => (
        <AboutItem key={index} {...ab} />
      ))}
    </section>
  )
}