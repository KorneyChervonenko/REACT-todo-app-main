import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskStatus, changeTaskTitle, delTask } from '../TaskList/taskListSlice';

import { reorderTaskList } from '../TaskList/taskListSlice';

import './Task.scss';

export default function Task({ task, index, draggedIndex, draggedEnterIndex }) {
	const dispatch = useDispatch();

	const tasks = useSelector((store) => store.taskList.tasks);

	function dragStart(index) {
		// setDraggedIndex(index);
		draggedIndex.current = index;
	}

	function dragEnter(index) {
		if (draggedIndex === index) return;
		// setDraggedEnterIndex(index);
		draggedEnterIndex.current = index;
	}

	function dragEnd() {
		const draggedTask = tasks.at(draggedIndex.current);
		const tasksExceptDragged = tasks.filter((task) => draggedTask.id !== task.id);
		const newTasks = [
			...tasksExceptDragged.slice(0, draggedEnterIndex.current),
			draggedTask,
			...tasksExceptDragged.slice(draggedEnterIndex.current),
		];
		// setTasks(newTasks);
		// dispatch({ type: 'replace_tasks_list', payload: { newTasks } });
		dispatch(reorderTaskList(newTasks));
		draggedIndex.current = 0;
		draggedEnterIndex.current = 0;
		// setDraggedIndex(null);
		// setDraggedEnterIndex(null);
	}

	return (
		<li
			index={index}
			className={`task ${task.isCompleted ? 'completed' : ''}`}
			draggable
			onDragStart={() => dragStart(index)}
			onDragEnter={() => dragEnter(index)}
			onDragEnd={dragEnd}
		>
			<label className="checkbox">
				<input
					className="checkbox-control"
					type="checkbox"
					// onChange={() => onCompleteTask(task)}
					// onChange={() => dispatch({ type: 'toggle_completed', payload: { selectedTask: task } })}
					onChange={() => dispatch(toggleTaskStatus(task))}
					checked={task.isCompleted}
				/>
				<span className="checkbox-emulator"></span>
			</label>

			{/* <span className="task-title">{task.title}</span> */}

			<input
				className="task-title"
				type="text"
				value={task.title}
				onChange={(e) => dispatch(changeTaskTitle(task, e.target.value))}
			/>

			<button
				className="del-button"
				type="button"
				onClick={() => dispatch(delTask(task))}
				// onClick={() => dispatch({ type: 'del_task', payload: { selectedTask: task } })}
			>
				<span className="visually-hidden">delete task</span>
			</button>
		</li>
	);
}
