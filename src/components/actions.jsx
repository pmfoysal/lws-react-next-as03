import Button from './button';
import Search from './search';

export default function Actions() {
	return (
		<div className='flex items-center space-x-5'>
			<Search />
			<Button color='info' name='Add Task' />
			<Button color='danger' name='Delete All' />
		</div>
	);
}
