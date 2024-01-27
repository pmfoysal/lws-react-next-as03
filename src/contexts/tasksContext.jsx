import tasksData from '@/data/tasks.json';
import { createContext, useReducer } from 'react';
import tasksReducer from '@/reducers/tasksReducer';
import searchReducer from '@/reducers/searchReducer';

export const TasksContext = createContext(null);

export default function TasksProvider({ children }) {
	const [search, dispatchSearch] = useReducer(searchReducer, '');
	const [tasks, dispatchTasks] = useReducer(tasksReducer, tasksData);

	return (
		<TasksContext.Provider value={{ search, dispatchSearch, tasks, dispatchTasks }}>{children}</TasksContext.Provider>
	);
}
