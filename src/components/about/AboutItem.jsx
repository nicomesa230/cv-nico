import React from 'react'

export const AboutItem = ({ skills, aboutSkills, softSkills, languages, interests }) => {
  return (
    <div>
      <aside>
        <h1>Habilidades</h1>
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={skill.icon}
            alt={skill.name}
            title={skill.name}
          />
        ))}
      </aside>
      <aside>
        <h1>Conocimientos</h1>
        {aboutSkills.map((aboutsk) => (
          <img
            key={aboutsk.name}
            src={aboutsk.icon}
            alt={aboutsk.name}
            title={aboutsk.name}
          />
        ))}
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
        <ul>
          {languages.map((idioma, idx) => (
            <li key={idx}>
              <img
                src={idioma.icon}
                alt={idioma.name}
                title={idioma.name}
                style={{ width: 24, height: 16, verticalAlign: 'middle', marginRight: 8 }}
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