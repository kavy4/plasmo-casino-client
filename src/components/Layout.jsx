import React from 'react'
import Header from './Header/Header'

function Layout({ balance, children }) {
  return (
		<>
			<Header balance={balance}>Plasmo Casino</Header>
			{ children }
		</>
	)
}

export default Layout