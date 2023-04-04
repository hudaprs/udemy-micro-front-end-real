// React
import React from 'react'
import ReactDOM from 'react-dom'

const mount = el => {
	ReactDOM.render(<h1>Marketing</h1>, el)
}

if (process.env.NODE_ENV === 'development') {
	const devRootEl = document.querySelector('#_marketing-dev-root')

	if (devRootEl) {
		mount(devRootEl)
	}
}

export { mount }
