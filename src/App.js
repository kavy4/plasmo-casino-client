import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Casino from './pages/Casino/Casino'
import RequireLogin from './components/RequireLogin'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
		<Layout>
			<Routes>
				<Route path='/casino' element={ <RequireLogin isLogin={isLogin}>
					<Casino />
				</RequireLogin> } />

				<Route path='/' element={<Navigate to='/casino' />} />
				
				<Route path='/register' element={ <Register /> } />
				<Route path='/login' element={ <Login /> } />
			</Routes>
		</Layout>
  )
}

export default App