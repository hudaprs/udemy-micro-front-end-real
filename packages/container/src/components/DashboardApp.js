// React
import React, { useRef, useEffect } from 'react'

// Auth App
import { mount } from 'dashboard/DashboardApp'

export default () => {
	const ref = useRef(null)

	useEffect(() => {
		mount(ref.current)
	}, [])

	return <div ref={ref} />
}
