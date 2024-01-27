import './index.css';
import App from './app/app';
import ReactDOM from 'react-dom/client';
import TasksProvider from './contexts/tasksContext';

ReactDOM.createRoot(document.getElementById('pmfoysal')).render(
	<TasksProvider>
		<App />
	</TasksProvider>
);
