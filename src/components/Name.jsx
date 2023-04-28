import React from 'react'
import './Name.css'

const Name = ({n}) => {

  const url = "https://www.namecheap.com/domains/registration/results/?domain="




  return (
    <a href={`${url}${n}`} className='card-link' target="_blank" rel="noopener noreferrer">
        <div className='result-name-card'>
            <p className='result-name'>{n}</p>
        </div>
      </a>
  )
}

export default Name