// React
import React from 'react'
import ReactDOM from 'react-dom'

// React Router DOM
import { createMemoryHistory, createBrowserHistory } from 'history'

// Components
import App from './App'

const mount = (el, { onNavigate, defaultHistory }) => {
	const history = defaultHistory || createMemoryHistory()

	if (onNavigate) {
		history.listen(onNavigate)
	}

	ReactDOM.render(<App history={history} />, el)

	return {
		onParentNavigate: ({ pathname: nextPathname }) => {
			const { pathname } = history.location

			if (pathname !== nextPathname) {
				history.push(nextPathname)
			}
		}
	}
}

if (process.env.NODE_ENV === 'development') {
	const devRootEl = document.querySelector('#_marketing-dev-root')

	if (devRootEl) {
		mount(devRootEl, {
			defaultHistory: createBrowserHistory()
		})
	}
}

export { mount }
