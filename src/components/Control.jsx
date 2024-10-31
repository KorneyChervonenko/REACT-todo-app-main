// import { useState } from 'react';

import './Control.scss';

export default function Control({ tasks, onClearCompleted, filterType, setFilterType }) {
	const itemsLeft = tasks.reduce((accum, task) => accum + (task.isCompleted ? 0 : 1), 0);
	// const [filterType, setFilterType] = useState('all');

	function handleTypeChange(event) {
		// event.preventDefault();
		setFilterType(event.target.value);
		// console.log(event.target.value);
	}

	return (
		<div className="control">
			<div className="stats-and-clear">
				<div className="stats">{`${itemsLeft}`} items left</div>
				<button className="clear-completed-button" onClick={onClearCompleted}>
					Clear Completed
				</button>
			</div>

			<div className="filter">
				<label>
					{/* <input type="radio" name="filter" value="all" checked={filterType === 'all'} onChange={handleTypeChange} /> */}
					<input type="radio" name="filter" value="all" checked={filterType === 'all'} onChange={handleTypeChange} />
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

// function Demo() {
//   const [gender, setGender] = useState("Male");

//   function onChangeValue(event) {
//     setGender(event.target.value);
//     console.log(event.target.value);
//   }

//   return (
//     <div onChange={onChangeValue}>
//       <input type="radio" value="Male" name="gender" checked={gender === "Male"} /> Male
//       <input type="radio" value="Female" name="gender" checked={gender === "Female"}/> Female
//       <input type="radio" value="Other" name="gender" checked={gender === "Other"} /> Other
//     </div>
//   );
// }
