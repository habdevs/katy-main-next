import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { ChevronUpIcon } from '@heroicons/react/outline'

const BackToTopBtn = () => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			return window.scrollY > 600 ? setShow(true) : setShow(false)
		})
	})

	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	return (
		show && (
			<button
				onClick={() => scrollToTop()}
				className='bg-accent w-12 h-12 hover:bg-accent-hover text-primary rounded-full fixed right-8 bottom-8 cursor-pointer flex justify-center items-center transition-all'
			>
				<ChevronUpIcon className='w-9 h-8' />
			</button>
		)
	)
}

export default BackToTopBtn
