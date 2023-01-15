import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Casino from './pages/Casino/Casino'

function App() {
  const [isLogin, setIsLogin] = useState(false)

	

  return (
		<Layout>
			<Routes>
				<Route path='/register' element={ <Register /> } />
				<Route path='/login' element={ <Login /> } />
				<Route path='/casino' element={ <Casino /> } />
				<Route path='/' element={ <Casino /> } />
			</Routes>
		</Layout>
  )
}

export default App