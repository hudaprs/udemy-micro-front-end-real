// React
import React from 'react'

// React Router DOM
import { Switch, Route, Router } from 'react-router-dom'

// Material UI
import {
	StylesProvider,
	createGenerateClassName
} from '@material-ui/core/styles'

// Components
import SignIn from './components/Signin'
import SignUp from './components/Signup'

const generateClassName = createGenerateClassName({
	productionPrefix: 'au'
})

export default ({ history }) => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route exact path='/auth/signin' component={SignIn} />
						<Route exact path='/auth/signup' component={SignUp} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	)
}
