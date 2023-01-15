import React from 'react'
import { Navigate } from 'react-router-dom'

function RequireLogin({ isLogin, children }) {
	if (!isLogin) {
		console.log('endpoint')
		return <Navigate to='/login' />
	}

	return children
}

export default RequireLogin