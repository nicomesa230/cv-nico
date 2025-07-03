import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/header.css'

export const Header = ({ onSearch }) => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchValue)
    }
  }

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
        <form onSubmit={handleSearch} style={{ display: 'inline-block', marginLeft: 16 }}>
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
        <div>
          <img src="/favicon.png" alt="Icono" />
          <p>Nico Mesa</p>
        </div>
      </header>
    </>
  )
}