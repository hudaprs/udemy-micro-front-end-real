// React
import React, { Suspense, lazy, useState, useEffect } from 'react'

// React Router DOM
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Material UI
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

// Components
import Header from './components/Header'
import DashboardApp from './components/DashboardApp'

const AuthApp = lazy(() => import('./components/AuthApp'))
const MarketingApp = lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {
	// Common State
	const [isSignedIn, setIsSignedIn] = useState(false)

	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard')
		}
	}, [isSignedIn])

	return (
		<Router history={history}>
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

						<Route path='/dashboard'>
							{!isSignedIn && <Redirect to={'/'} />}
							<DashboardApp />
						</Route>

						<Route path='/' component={MarketingApp} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</Router>
	)
}
