// React
import React, { useRef, useEffect } from 'react'

// React Router DOM
import { useHistory } from 'react-router-dom'

// Marketing App
import { mount } from 'marketing/MarketingApp'

export default () => {
	const ref = useRef(null)
	const history = useHistory()

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			onNavigate: ({ pathname: nextPathname }) => {
				const { pathname } = history.location

				if (pathname !== nextPathname) {
					history.push(nextPathname)
				}
			}
		})

		history.listen(onParentNavigate)
	}, [])

	return <div ref={ref} />
}
