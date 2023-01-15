import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import axios from './axios'
import './App.css'

import Layout from './components/Layout'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Casino from './pages/Casino/Casino'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import RequireLogin from './components/RequireLogin'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const [balance, setBalance] = useState(10)

  return (
		<Layout balance={balance}>
			<Routes>
				<Route path='/' element={ <RequireLogin isLogin={isLogin}>
					<Casino balance={balance} setBalance={setBalance} />
				</RequireLogin> } />
				
				<Route path='/register' element={ <Register setIsLogin={setIsLogin} /> } />
				<Route path='/login' element={ <Login setIsLogin={setIsLogin} /> } />
				<Route path='*' element={ <NotFoundPage /> } />
			</Routes>
		</Layout>
  )
}

export default App