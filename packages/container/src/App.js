// React
import React from 'react'

// React Router DOM
import { BrowserRouter } from 'react-router-dom'

// Material UI
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

// Components
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header />
				<MarketingApp />
			</StylesProvider>
		</BrowserRouter>
	)
}
