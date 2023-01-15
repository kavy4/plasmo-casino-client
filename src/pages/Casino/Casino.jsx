import React, { useState } from 'react'
import './Casino.css'

function Casino({ balance, setBalance }) {
	const [bet, setBet] = useState(0)
	const [change, setChange] = useState(0)
	const [error, setError] = useState('')

	function Logic() {
		const randomNumber = Math.floor(Math.random() * 2)
		if (bet > balance) {
			return setError('Не хватает денег')
		}

		if (change == randomNumber) {
			setBalance(Math.floor(balance + bet))
			console.log('ура')
		}
		else {
			setBalance(balance - bet)
			console.log('не ура')
		}
	}

	return (
		<div id='casino-card'>
			<div className='group'>
				<label>Сумма ставки</label>
				<input type="number" value={bet} onChange={(event) => setBet(event.target.value)} />
			</div>

			<div className='group'>
				<label>Выберите число от 0 до 1</label>
				<input type="number" value={change} onChange={(event) => {
					if (event.target.value > -1 && event.target.value < 2) {
						setChange(event.target.value)
					}
				}} />
			</div>

			<p style={{marginBottom: '15px', color: 'red', fontSize: '18px'}}>{ error }</p>

			<button onClick={() => Logic()}>Ставка</button>
		</div>
	)
}

export default Casino