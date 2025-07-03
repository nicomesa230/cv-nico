import React from 'react'

export const AboutItem = ({ skills, aboutSkills, softSkills, languages, interests }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', width: '100%' }}>
      <aside>
        <h1>Habilidades</h1>
        <div className="skills-list">
          {skills.map((skill) => (
            <span className="skill-item" key={skill.name}>
              <img src={skill.icon} alt={skill.name} title={skill.name} />
              {skill.name}
            </span>
          ))}
        </div>
      </aside>
      <aside>
        <h1>Conocimientos</h1>
        <div className="knowledge-list">
          {aboutSkills.map((aboutsk) => (
            <span className="knowledge-item" key={aboutsk.name}>
              <img src={aboutsk.icon} alt={aboutsk.name} title={aboutsk.name} />
              {aboutsk.name}
            </span>
          ))}
        </div>
      </aside>
      <aside>
        <h1>Habilidades blandas</h1>
        <ol>
          {softSkills.map((soft, idx) => (
            <li key={idx}>{soft}</li>
          ))}
        </ol>
      </aside>
      <aside>
        <h1>Idiomas</h1>
        <ul className="lang-list">
          {languages.map((idioma, idx) => (
            <li key={idx}>
              <img
                src={idioma.icon}
                alt={idioma.name}
                title={idioma.name}
              />
              {idioma.name} - {idioma.level}
            </li>
          ))}
        </ul>
      </aside>
      <aside>
        <h1>Otros intereses</h1>
        <ol>
          {interests.map((interes, idx) => (
            <li key={idx}>{interes}</li>
          ))}
        </ol>
      </aside>
    </div>
  )
}