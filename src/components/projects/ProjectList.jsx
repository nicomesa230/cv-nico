import React from 'react'
import projects from '../../data/projects'
import { ProjectItem } from './ProjectItem'

export const ProjectList = ({ search }) => {
  const filtered = projects.filter(project =>
    project.title.toLowerCase().includes((search || '').toLowerCase()) ||
    (project.description && project.description.toLowerCase().includes((search || '').toLowerCase()))
  )
  return (
    <section>
      {filtered.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </section>
  )
}