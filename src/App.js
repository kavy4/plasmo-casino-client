import React, { useState, useEffect } from 'react'
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
  
  const [balance, setBalance] = useState(0)

  const [userAccount, setUserAccount] = useState({
	login: '',
	password: '',
	balance: balance
  })

  console.log(userAccount)

  useEffect(() => {
	axios.post('/api/save-user', userAccount)
  }, [balance])

  function LoginOrRegister(newAccount, newBalance = 0) {
	setIsLogin(true)
	setBalance(newBalance)
	setUserAccount({ ...userAccount, login: newAccount.login, password: newAccount.password })
  }

  return (
		<Layout balance={balance}>
			<Routes>
				<Route path='/' element={ <RequireLogin isLogin={isLogin}>
					<Casino balance={balance} setBalance={setBalance} />
				</RequireLogin> } />
				
				<Route path='/register' element={ <Register setIsLogin={LoginOrRegister} /> } />
				<Route path='/login' element={ <Login setIsLogin={LoginOrRegister} /> } />
				<Route path='*' element={ <NotFoundPage /> } />
			</Routes>
		</Layout>
  )
}

export default App