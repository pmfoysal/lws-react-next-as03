const icons = {
	search: (
		<svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
			<path
				strokeWidth='2'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
			/>
		</svg>
	),
	star: (
		<svg
			width='24'
			height='24'
			fill='none'
			strokeWidth='2'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-star'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
		</svg>
	),
	'star-fill': (
		<svg
			width='24'
			height='24'
			fill='yellow'
			strokeWidth='2'
			stroke='yellow'
			viewBox='0 0 24 24'
			strokeLinecap='round'
			strokeLinejoin='round'
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-star'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
		</svg>
	),
};

export default function Icons({ name }) {
	return icons[name] || null;
}
