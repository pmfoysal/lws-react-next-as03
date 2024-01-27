import Button from './button';
import Search from './search';
import { useState } from 'react';
import TaskModal from './taskModal';
import useTasks from '@/hooks/useTasks';

export default function Actions() {
	const [isOpen, setIsOpen] = useState(false);
	const { search, dispatchTasks, dispatchSearch } = useTasks();

	function handleSearch(value) {
		dispatchSearch({ type: 'search', payload: value });
	}

	function handleDeleteAll() {
		dispatchTasks({ type: 'deletedAll' });
	}

	return (
		<div className='flex items-center space-x-5'>
			<Search value={search} onSearch={handleSearch} />
			<Button color='info' name='Add Task' onClick={() => setIsOpen(true)} />
			<Button color='danger' name='Delete All' onClick={handleDeleteAll} />
			{isOpen ? <TaskModal mode='add' onClose={() => setIsOpen(false)} dispatchTasks={dispatchTasks} /> : null}
		</div>
	);
}
