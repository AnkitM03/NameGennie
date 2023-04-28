import React from 'react'
import './Searchbar.css'

const Searchbar = ({changeHandler}) => {

    

  return (
    <div className='header-container'>
        <input placeholder='keyword' className='search-input' onChange={(text)=>changeHandler(text.target.value)}/>    
    </div>
  )
}

export default Searchbar;