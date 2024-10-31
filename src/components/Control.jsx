import './Control.scss';

export default function Control({ tasks }) {
	return (
		<div className="control">
			<div className="stats-and-clear">
				<div className="stats">X items left</div>
				<button type="reset">Clear Completed</button>
			</div>

			<div className="filter">
				<label>
					<input type="radio" name="filter" />
					All
				</label>
				<label>
					<input type="radio" name="filter" />
					Active
				</label>
				<label>
					<input type="radio" name="filter" />
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
