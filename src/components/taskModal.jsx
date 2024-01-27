import Button from './button';
import { useState } from 'react';

export default function TaskModal({ mode, task, onClose, dispatchTasks }) {
	const [title, setTitle] = useState(task?.title || '');
	const [tags, setTags] = useState(task?.tags?.join(', ') || '');
	const [priority, setPriority] = useState(task?.priority || '');
	const [description, setDescription] = useState(task?.description || '');

	const [errors, setErrors] = useState({
		title: false,
		description: false,
		tags: false,
		priority: false,
	});

	function handleChange(key, setter) {
		return event => {
			setter(event.target.value);
			setErrors(prev => ({ ...prev, [key]: false }));
		};
	}

	function isValid() {
		const newErrors = { ...errors };
		if (!tags) newErrors.tags = true;
		if (!title) newErrors.title = true;
		if (!priority) newErrors.priority = true;
		if (!description) newErrors.description = true;
		setErrors(newErrors);
		return Object.values(newErrors).every(item => item === false);
	}

	function handleTaskAdd() {
		dispatchTasks({
			type: 'added',
			payload: { title, description, tags: tags.split(',').filter(Boolean), priority },
		});
	}

	function handleTaskEdit() {
		dispatchTasks({
			type: 'edited',
			payload: { id: task.id, title, description, tags: tags.split(',').filter(Boolean), priority },
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (isValid()) {
			if (mode === 'add') handleTaskAdd();
			else handleTaskEdit();
			onClose();
		}
	}

	return (
		<div className='modal'>
			<form
				className='mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11'
				onSubmit={handleSubmit}>
				<h2 className='mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]'>Add New Task</h2>
				<div className='space-y-9 text-white lg:space-y-10'>
					<div className='space-y-2 lg:space-y-3'>
						<label htmlFor='title'>Title</label>
						<input
							className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
							type='text'
							name='title'
							id='title'
							value={title}
							onChange={handleChange('title', setTitle)}
						/>
						<Err isActive={errors.title} name='title' />
					</div>
					<div className='space-y-2 lg:space-y-3'>
						<label htmlFor='description'>Description</label>
						<textarea
							className='block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]'
							type='text'
							name='description'
							id='description'
							value={description}
							onChange={handleChange('description', setDescription)}></textarea>
						<Err isActive={errors.description} name='description' />
					</div>
					<div className='grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20'>
						<div className='space-y-2 lg:space-y-3'>
							<label htmlFor='tags'>Tags</label>
							<input
								className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
								type='text'
								name='tags'
								id='tags'
								value={tags}
								onChange={handleChange('tags', setTags)}
							/>
							<Err isActive={errors.tags} name='tags' />
						</div>
						<div className='space-y-2 lg:space-y-3'>
							<label htmlFor='priority'>Priority</label>
							<select
								className='block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5'
								name='priority'
								id='priority'
								value={priority}
								onChange={handleChange('priority', setPriority)}>
								<option value=''>Select Priority</option>
								<option value='low'>Low</option>
								<option value='medium'>Medium</option>
								<option value='high'>High</option>
							</select>
							<Err isActive={errors.priority} name='priority' />
						</div>
					</div>
				</div>
				<div className='mt-16 flex justify-center lg:mt-20 gap-4'>
					<Button color='danger' name='Close Modal' onClick={onClose} />
					<button
						type='submit'
						className='rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80'>
						Create Task
					</button>
				</div>
			</form>
		</div>
	);
}

function Err({ name, isActive }) {
	return isActive ? (
		<p className='text-red-400 text-[13px] font-normal !mt-1 leading-[1.25]'>
			we can&apos;t locate your {name}! Be a legend and add one ¬_¬
		</p>
	) : null;
}
