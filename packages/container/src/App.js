// React
import React, { Suspense, lazy, useState } from 'react'

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
	// Common State
	const [isSignedIn, setIsSignedIn] = useState(false)

	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header
					isSignedIn={isSignedIn}
					onSignOut={() => setIsSignedIn(false)}
				/>
				<Suspense fallback={<>Loading...</>}>
					<Switch>
						<Route path='/auth'>
							<AuthApp onSignIn={() => setIsSignedIn(true)} />
						</Route>
						<Route path='/' component={MarketingApp} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	)
}
