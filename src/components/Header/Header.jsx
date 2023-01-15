import React, { useState } from 'react'
import './Header.css'

import Popup from '../Popup'

function Header({ balance, children }) {
	const [payloadPopupIsOpen, setPayloadPopupIsOpen] = useState(false)
	const [withdrawPopupIsOpen, setWithdrawPopupIsOpen] = useState(false)

	function OnClickPayloadButton() {
		if (payloadPopupIsOpen) {
			setPayloadPopupIsOpen(false)
		}
		else {
			setPayloadPopupIsOpen(true)
		}
	}

	function OnClickWithdrawButton() {
		if (withdrawPopupIsOpen) {
			setWithdrawPopupIsOpen(false)
		}
		else {
			setWithdrawPopupIsOpen(true)
		}
	}

  return (
		<header>
			<span>Баланс: {balance}</span>
			<div>
				<button style={{margin: '0', padding: '0.75em 1.5em'}} onClick={() => OnClickPayloadButton()}>Пополнить</button>
				<button style={{margin: '0 20px', padding: '0.75em 1.5em'}} onClick={() => OnClickWithdrawButton()}>Снять</button>
			</div>
			

			<Popup isOpen={payloadPopupIsOpen} setIsOpen={setPayloadPopupIsOpen}>
				<h3>Пополнение баланса</h3>
				<p style={{fontWeight: '500', marginTop: '20px'}}>Чтобы пополнить свой счёт в казино, Вам нужно сделать перевод на карту EB-0000 и в комментарий к переводу указать Ваш логин, который Вы писали при регистрации. Пополнение выполнится в автоматическом режиме</p>
				<img src={require('../../assets/payload-example.png')} alt="Пример пополнения счёта" style={{width: '25em', borderRadius: '14px', border: '1px solid #27292b',marginTop: '20px'}} />
			</Popup>

			<Popup isOpen={withdrawPopupIsOpen} setIsOpen={setWithdrawPopupIsOpen}>
				<h3>Вывод алмазов</h3>
				<p style={{margin: '20px 0'}}>Для того, чтобы вывести свои выигранные алмазы, Вам нужно только заполнить фору ниже</p>

				<div className='group'>
					<label>Кол-во алмазов</label>
					<input type="number" />
				</div>

				<div className='group'>
					<label>Номер карты для перевода</label>
					<input type="number" />
				</div>

				<button>Вывести</button>
			</Popup>
		</header>
	)
}	

export default Header