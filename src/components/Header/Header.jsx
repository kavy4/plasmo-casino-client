import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header({ children }) {
  return (
		<header><Link className='header-link' to='/'>{ children }</Link></header>
	)
}

export default Header