import Button from './button';
import Search from './search';

export default function Actions() {
	return (
		<div className='flex items-center space-x-5'>
			<Search />
			<Button color='bg-blue-500' />
			<Button color='bg-red-500' />
		</div>
	);
}
