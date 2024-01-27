import getId from '@/utilities/getId';

export default function tasksReducer(tasks, action) {
	switch (action.type) {
		case 'added': {
			return [...tasks, { id: getId(tasks), isFavourite: false, ...action.payload }];
		}
		case 'edited': {
			return tasks.map(item => {
				if (item.id === action.payload.id) return action.payload;
				return item;
			});
		}
		case 'deleted': {
			return tasks.filter(item => item.id !== action.payload.id);
		}
		default: {
			throw new Error(`No action matched with ${action.type}`);
		}
	}
}
