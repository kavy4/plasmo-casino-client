import React from 'react'

function Popup({ isOpen, setIsOpen ,children }) {
	if (isOpen) {
		return (
			<div style={{position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => setIsOpen(false)}>
				<div style={{padding: '25px', borderRadius: '14px', border: '1px solid #27292b', width: '60vw', background: '#111414'}} onClick={(event) => event.stopPropagation()}>{children}</div>
			</div>
		)
	}
}

export default Popup