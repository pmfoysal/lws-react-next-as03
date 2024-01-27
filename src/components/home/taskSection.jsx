import Tag from '../tag';
import Icons from '../icons';
import { useState } from 'react';
import Actions from '../actions';
import TaskModal from '../taskModal';
import useTasks from '@/hooks/useTasks';
import Table, { Cell, Row } from '../table';

export default function TaskSection() {
	const { tasks, search, dispatchTasks } = useTasks();
	const [editableTask, setEditableTask] = useState({});

	function handleEdit(item) {
		return () => {
			setEditableTask(item);
		};
	}

	function handleFavourite(item) {
		return () => {
			dispatchTasks({ type: 'edited', payload: { ...item, isFavourite: !item.isFavourite } });
		};
	}

	function handleDelete(id) {
		return () => {
			const isConfirmed = confirm(
				`Warning: Deleting task is like pressing the 'self-destruct' button in a sci-fi movie, but with more virtual explosions and fewer epic spaceship battles.`
			);
			if (isConfirmed) {
				dispatchTasks({ type: 'deleted', payload: { id } });
			}
		};
	}

	const filteredTasks = tasks.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

	return (
		<section className='mb-20' id='tasks'>
			<div className='container'>
				<div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
					<div className='mb-14 items-center justify-between sm:flex'>
						<h2 className='text-2xl font-semibold max-sm:mb-4'>Your Tasks</h2>
						<Actions />
					</div>
					<div className='overflow-auto'>
						{filteredTasks.length ? (
							<Table>
								{filteredTasks.map(item => (
									<Row key={item.id}>
										<Cell>
											<div onClick={handleFavourite(item)} className='cursor-pointer'>
												<Icons name={!item.isFavourite ? 'star' : 'star-fill'} />
											</div>
										</Cell>
										<Cell>{item.title}</Cell>
										<Cell>{item.description}</Cell>
										<Cell>
											<ul className='flex justify-center gap-1.5 flex-wrap'>
												{item.tags.map((tv, ti) => (
													<li key={tv}>
														<Tag index={ti} name={tv} />
													</li>
												))}
											</ul>
										</Cell>
										<Cell className='text-center capitalize'>{item.priority}</Cell>
										<Cell>
											<div className='flex items-center justify-center space-x-3'>
												<button className='text-red-500' onClick={handleDelete(item.id)}>
													Delete
												</button>
												<button className='text-blue-500' onClick={handleEdit(item)}>
													Edit
												</button>
											</div>
										</Cell>
									</Row>
								))}
							</Table>
						) : (
							<h1 className='text-xl text-[#F5BF42] text-center py-12 bg-[#191D26] rounded-xl'>
								No Tasks Found, Please add one!
							</h1>
						)}
						{editableTask.priority ? (
							<TaskModal
								mode='edit'
								task={editableTask}
								dispatchTasks={dispatchTasks}
								onClose={() => setEditableTask({})}
							/>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}
