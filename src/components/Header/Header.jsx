import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header({ balance, children }) {
  return (
		<header><Link className='header-link' to='/'>{ children }</Link>Баланс: {balance}<button style={{margin: '0'}}>Пополнить</button></header>
	)
}	

export default Header