// React
import React, { useRef, useEffect } from 'react'

// React Router DOM
import { useHistory } from 'react-router-dom'

// Auth App
import { mount } from 'auth/AuthApp'

export default () => {
	const ref = useRef(null)
	const history = useHistory()

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			initialPath: history.location.pathname,
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