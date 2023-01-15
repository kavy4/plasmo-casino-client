import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
	const navigate = useNavigate()
  return (
		<div id='login-card'>
			<h1 id='title'>Вход</h1>

			<hr />

			<div className='group'>
				<label>Логин</label>
				<input type="text" />
			</div>

			<div className='group'>
				<label>Пароль</label>
				<input type="password" />
			</div>

			<button onClick={() => navigate('/')}>Готово</button>

			<p>Ещё нет аккаунта? <Link className='login-link' to='/register'>Регистрация</Link></p>
		</div>
	)
}

export default Login