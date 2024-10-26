import './Task.scss';

export default function Task({ task }) {
	return (
		<li className={`task ${task.isCompleted ? 'completed' : ''}`}>
			{task.title}
			<button className="del-button" type="button">
				<span className="visually-hidden">delete task</span>
			</button>
		</li>
	);
}
