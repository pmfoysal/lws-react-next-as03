import tasksData from '@/data/tasks.json';
import { createContext, useState } from 'react';

export const TasksContext = createContext(null);

export default function TasksProvider({ children }) {
	const [search, setSearch] = useState('');
	const [tasks, setTasks] = useState(tasksData);

	return <TasksContext.Provider value={{ search, setSearch, tasks, setTasks }}>{children}</TasksContext.Provider>;
}
