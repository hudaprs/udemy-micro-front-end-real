// React
import React, { Suspense, lazy } from 'react'

// React Router DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Material UI
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

// Components
import Header from './components/Header'

const AuthApp = lazy(() => import('./components/AuthApp'))
const MarketingApp = lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header />
				<Suspense fallback={<>Loading...</>}>
					<Switch>
						<Route path='/auth' component={AuthApp} />
						<Route path='/' component={MarketingApp} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	)
}
