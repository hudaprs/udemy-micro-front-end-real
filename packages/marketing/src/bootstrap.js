// React
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './App'

const mount = el => {
	ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
	const devRootEl = document.querySelector('#_marketing-dev-root')

	if (devRootEl) {
		mount(devRootEl)
	}
}

export { mount }
