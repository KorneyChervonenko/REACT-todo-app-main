import './AddTaskForm.scss';

function AddTaskForm() {
	return (
		<form className="addTaskForm">
			<span className="circle"></span>
			<input type="text" placeholder="Create a new todo…" />
		</form>
	);
}

export default AddTaskForm;
