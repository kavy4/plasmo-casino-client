import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
	return (
		<div id='NotFoundPage'>
			<h1>По вашему запросу ничего не найдено</h1>
			<p>Возможно, вы ошиблись в ссылке. Попробуйте изменить ссылку или перейти на <Link className='notfoundpage-link' to='/'>главную</Link></p>
		</div>
	)
}

export default NotFoundPage