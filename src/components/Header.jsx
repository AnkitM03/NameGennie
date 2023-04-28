import React from 'react'
import './Header.css'
import { ReactComponent as Himg } from '../img/undraw_location_search_re_ttoj.svg';

const Header = ({headerexp}) => {
  return (
    <div className='header-container'>
       <div className={`header-text ${headerexp ? 'header-text-expanded':'header-text-contracted'}`}> Name Gennie</div>
       <Himg className={`head-img ${headerexp ? 'head-img-expanded':'head-img-contracted'}`}/>
    </div>
  )
}

export default Header;