import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import axios from '../../axios'

function Register({ setIsLogin }) {
	const navigate = useNavigate()

	const [newAccount, setNewAccount] = useState({
		login: '',
		password: ''
	})

	const [error, setError] = useState('')

	async function OnClickReadyButton(newUser) {
		if (newUser.password.length < 7) {
			return setError('Пароль должен быть больше 7 символов')
		}

		const response = await axios.get('/api/get-user')
		const userList = JSON.parse(response.data)
		let isUniq = true

		userList.map(user => {
			if (user.login == newUser.login) {
				isUniq = false
				setError('Найден пользователь с таким же логином')
			}
		})

		if (isUniq) {
			axios.post('/api/register', newUser)
			console.log('да')
			setIsLogin(true)
			navigate('/')
		}
	} 

	return (
		<div id='register-card'>
			<h1 id='title'>Регистрация</h1>

			<hr />

			<div className='group'>
				<label>Логин<p style={{fontSize: '14px'}}>(по нему будут зачисляться алми)</p></label>
				<input type='text' value={newAccount.login} onChange={(event) => setNewAccount({ ...newAccount, login: event.target.value })} />
			</div>

			<div className='group'>
				<label>Пароль</label>
				<input type='password' value={newAccount.password} onChange={(event) => setNewAccount({ ...newAccount, password: event.target.value })} />
			</div>

			<p style={{marginBottom: '15px', color: 'red', fontSize: '18px'}}>{error}</p>

			<button onClick={() => OnClickReadyButton(newAccount)}>Готово</button>

			<p>Уже есть аккаунт? <Link className='register-link' to='/login'>Войти</Link></p>
		</div>
	)
}

export default Register