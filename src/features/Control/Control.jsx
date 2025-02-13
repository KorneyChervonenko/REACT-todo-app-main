import { useDispatch, useSelector } from 'react-redux';
import { delCompletedTasks } from '../TaskList/taskListSlice';
import { selectFilter } from './controlSlice.js';

import './Control.scss';

export default function Control() {
	const dispatch = useDispatch();
	const tasks = useSelector((store) => store.taskList.tasks);
	const filterType = useSelector((store) => store.control.filterType);

	const itemsLeft = tasks.reduce((accum, task) => accum + (task.isCompleted ? 0 : 1), 0);

	function handleTypeChange(event) {
		// setFilterType(event.target.value);
		selectFilter(event.target.value);
	}

	return (
		<div className="control">
			<div className="stats-and-clear">
				<div className="stats">{`${itemsLeft}`} items left</div>
				<button
					className="clear-completed-button"
					onClick={() => {
						dispatch(delCompletedTasks());
					}}
				>
					Clear Completed
				</button>
			</div>

			<div className="filter">
				<label>
					<input
						type="radio"
						name="filter"
						value="all"
						checked={filterType === 'all'}
						onChange={handleTypeChange}
					/>
					All
				</label>
				<label>
					<input
						type="radio"
						name="filter"
						value="active"
						checked={filterType === 'active'}
						onChange={handleTypeChange}
					/>
					Active
				</label>
				<label>
					<input
						type="radio"
						name="filter"
						value="completed"
						checked={filterType === 'completed'}
						onChange={handleTypeChange}
					/>
					Completed
				</label>
			</div>
		</div>
	);
}
