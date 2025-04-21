import { useEffect, useState } from "react"

export default function useWindowSize():number {
	const [width, setWidth] = useState(window.innerWidth)
	const handleResize = () => setWidth(window.innerWidth)
	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return width
}