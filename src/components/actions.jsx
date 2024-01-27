import Button from './button';
import Search from './search';
import { useState } from 'react';
import TaskModal from './taskModal';

export default function Actions() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex items-center space-x-5'>
			<Search />
			<Button color='info' name='Add Task' onClick={() => setIsOpen(true)} />
			<Button color='danger' name='Delete All' />
			{isOpen ? <TaskModal mode='add' onClose={() => setIsOpen(false)} /> : null}
		</div>
	);
}
