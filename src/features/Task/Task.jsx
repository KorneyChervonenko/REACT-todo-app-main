import { useDispatch, useSelector } from 'react-redux';
import {
	toggleTaskStatus,
	changeTaskTitle,
	delTask,
	updateTaskList,
} from '../TaskList/taskListSlice';

import './Task.scss';

export default function Task({ task, draggedTaskRef }) {
	const dispatch = useDispatch();
	const tasks = useSelector((store) => store.taskList.tasks);

	function handleDragStart(draggedTask) {
		draggedTaskRef.current = draggedTask;
	}

	function handleDrop(dropTargetTask) {
		const draggedTask = draggedTaskRef.current;
		const tasksExceptDragged = tasks.filter((task) => draggedTask.id !== task.id);
		const dropTargetTaskIndex = tasks.findIndex((task) => dropTargetTask.id === task.id);

		const reorderedTasks = [
			...tasksExceptDragged.slice(0, dropTargetTaskIndex),
			draggedTask,
			...tasksExceptDragged.slice(dropTargetTaskIndex),
		];

		dispatch(updateTaskList(reorderedTasks));
		draggedTaskRef.current = null;
	}

	function handleDragOver(e) {
		e.preventDefault();
	}

	return (
		<li
			className={`task ${task.isCompleted ? 'completed' : ''}`}
			draggable
			onDragStart={() => handleDragStart(task)}
			onDragOver={handleDragOver}
			onDrop={() => handleDrop(task)}
		>
			<label className="checkbox">
				<input
					className="checkbox-control"
					type="checkbox"
					onChange={() => dispatch(toggleTaskStatus(task))}
					checked={task.isCompleted}
				/>
				<span className="checkbox-emulator"></span>
			</label>

			<input
				className="task-title"
				type="text"
				value={task.title}
				onChange={(e) => dispatch(changeTaskTitle(task, e.target.value))}
			/>

			<button className="del-button" type="button" onClick={() => dispatch(delTask(task))}>
				<span className="visually-hidden">delete task</span>
			</button>
		</li>
	);
}
