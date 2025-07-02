import React from 'react'
import projects from '../../data/projects'
import { ProjectItem } from './ProjectItem'

export const ProjectList = () => {
  return (
    <>
    <section>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </section>
    </>
  )
}
