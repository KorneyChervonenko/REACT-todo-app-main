import Logo from './Logo.jsx';
import AddTaskForm from './AddTaskForm.jsx';
import TaskList from './TaskList.jsx';
import './App.scss';

export default function App() {
	return (
		<div className="App">
			<Logo />
			<AddTaskForm />
			<TaskList />
		</div>
	);
}
