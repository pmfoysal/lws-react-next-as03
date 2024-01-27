import Icons from './icons';

export default function Search({ value, onSearch }) {
	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleChange(event) {
		onSearch(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='flex'>
				<div className='relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]'>
					<input
						required
						type='search'
						value={value}
						id='search-dropdown'
						onChange={handleChange}
						placeholder='Search Task'
						className='z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none'
					/>
					<button type='submit' className='absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4'>
						<Icons name='search' />
						<span className='sr-only'>Search</span>
					</button>
				</div>
			</div>
		</form>
	);
}
