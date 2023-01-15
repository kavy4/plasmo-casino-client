import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios'

function Login({ setIsLogin }) {
	const navigate = useNavigate()

	const [newAccount, setNewAccount] = useState({
		login: '',
		password: ''
	})

	const [error, setError] = useState('')

	async function OnClickReadyButton(newUser) {
		const response = await axios.get('/api/get-user')
		const userList = JSON.parse(response.data)

		userList.map(user => {
			if (user.login == newUser.login) {
				if (user.password == newUser.password) {
					console.log('да')
					setIsLogin(true)
					return navigate('/')
				}
			}
		})

		setError('Не правильный логин или пароль')
	}

  return (
		<div id='login-card'>
			<h1 id='title'>Вход</h1>

			<hr />

			<div className='group'>
				<label>Логин</label>
				<input type="text" value={newAccount.login} onChange={(event) => setNewAccount({ ...newAccount, login: event.target.value })} />
			</div>

			<div className='group'>
				<label>Пароль</label>
				<input type="password" value={newAccount.password} onChange={(event) => setNewAccount({ ...newAccount, password: event.target.value })} />
			</div>

			<p style={{marginBottom: '15px', color: 'red', fontSize: '18px'}}>{ error }</p>

			<button onClick={() => OnClickReadyButton(newAccount)}>Готово</button>

			<p>Ещё нет аккаунта? <Link className='login-link' to='/register'>Регистрация</Link></p>
		</div>
	)
}

export default Login