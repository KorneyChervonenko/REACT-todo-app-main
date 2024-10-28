import { useState } from 'react';
import Logo from './Logo.jsx';
import AddTaskForm from './AddTaskForm.jsx';
import TaskList from './TaskList.jsx';
import './App.scss';

console.clear();
const tasksTitles = [
	'Complete online JavaScript course',
	'Jog around the park 3x',
	'10 minutes meditation',
	'Read for 1 hour',
	'Pick up groceries',
	'Complete Todo App on Frontend Mentor',
];

const initTasks = tasksTitles.map((taskTitle) => ({ title: taskTitle, isCompleted: false, id: crypto.randomUUID() }));
initTasks.at(2).isCompleted = true;

console.log(initTasks);

export default function App() {
	const [tasks, setTasks] = useState([...initTasks]);

	function handleDelTask(taskToDel) {
		setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskToDel.id));
	}

	function handleCompleteTask(taskToComplete) {
		setTasks((currentTasks) =>
			currentTasks.map((task) => (task.id === taskToComplete.id ? { ...task, isCompleted: !task.isCompleted } : task))
		);
	}

	return (
		<div className="App">
			<Logo />
			<AddTaskForm />
			<TaskList tasks={tasks} onDelTask={handleDelTask} onCompleteTask={handleCompleteTask} />
		</div>
	);
}
