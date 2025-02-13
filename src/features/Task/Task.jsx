import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskStatus, changeTaskTitle, delTask } from '../TaskList/taskListSlice';

import './Task.scss';

export default function Task({
	task,
	// onDelTask,
	// onCompleteTask,
	index,
	dragStart,
	dragEnter,
	dragEnd,
}) {
	const dispatch = useDispatch();

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
