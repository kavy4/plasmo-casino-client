import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
	const [userAccount, setUserAccount] = useState({
		login: '',
		password: ''
	})

	return (
		<div id='register-card'>
			<h1 id='title'>Регистрация</h1>

			<hr />

			<div className='group'>
				<label>Логин<p style={{fontSize: '14px'}}>(по нему будут зачисляться алми)</p></label>
				<input type='text' value={userAccount.login} onChange={(event) => setUserAccount({ ...userAccount, login: event.target.value })} />
			</div>

			<div className='group'>
				<label>Пароль</label>
				<input type='password' value={userAccount.password} onChange={(event) => setUserAccount({ ...userAccount, password: event.target.value })} />
			</div>

			<button>Готово</button>

			<p>Уже есть аккаунт? <Link className='register-link' to='/login'>Войти</Link></p>
		</div>
	)
}

export default Register