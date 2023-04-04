// React
import React from 'react'

// React Router DOM
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// Material UI
import {
	StylesProvider,
	createGenerateClassName
} from '@material-ui/core/styles'

// Components
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma'
})

export default () => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/pricing' component={Pricing} />
						<Route path='/' component={Landing} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</div>
	)
}
