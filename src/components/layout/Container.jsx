import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apps from '../../data/app'

export const Container = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  
  const [searchValue, setSearchValue] = useState('')

  const filteredApps = apps.filter(app =>
    app.label.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(searchValue)
  }

  return (
    <>
      <div className='container'>
        <div className='search'>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Buscar sección..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <button type="submit" aria-label="Buscar" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-icon-download-in-svg-png-gif-file-formats--find-zoom-large-small-editor-user-interface-vol-3-pack-icons-19652.png?f=webp&w=128"
                alt="Buscar"
                style={{ width: 15, height: 15, objectFit: 'contain' }}
              />
            </button>
          </form>
        </div>
        <div className='icon'>
          {filteredApps.map(app => (
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