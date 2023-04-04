// React
import React, { useRef, useEffect } from 'react'

// Marketing App
import { mount } from 'marketing/MarketingApp'

export default () => {
	const ref = useRef(null)

	useEffect(() => {
		mount(ref.current)
	}, [])

	return <div ref={ref} />
}