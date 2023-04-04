// React
import React from 'react'

// React Router DOM
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// Material UI
import { StylesProvider } from '@material-ui/core/styles'

// Components
import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
	return (
		<div>
			<StylesProvider>
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
