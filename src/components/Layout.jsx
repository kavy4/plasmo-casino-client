import React from 'react'
import Header from './Header/Header'

function Layout({ children }) {
  return (
		<>
			<Header>Plasmo Casino</Header>
			{ children }
		</>
	)
}

export default Layout