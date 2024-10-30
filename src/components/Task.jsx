import './Task.scss';

export default function Task({ task, onDelTask, onCompleteTask }) {
	return (
		<li className={`task ${task.isCompleted ? 'completed' : ''}`}>
			<label className="checkbox">
				<input className="checkbox-control" type="checkbox" onChange={() => onCompleteTask(task)} />
				<span className="checkbox-emulator"></span>
			</label>
			<span className="task-title">{task.title}</span>
			<button
				className="del-button"
				type="button"
				onClick={() => {
					onDelTask(task);
				}}
			>
				<span className="visually-hidden">delete task</span>
			</button>
		</li>
	);
}
