import React from 'react'
import Header from './Header/Header'

function Layout({ balance, children }) {
  return (
		<>
			<Header balance={balance} />
			{ children }
		</>
	)
}

export default Layout