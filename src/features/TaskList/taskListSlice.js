import { createSlice } from '@reduxjs/toolkit';

const tasksTitles = [
	'Complete online JavaScript course',
	'Jog around the park 3x',
	'10 minutes meditation',
	'Read for 1 hour',
	'Pick up groceries',
	'Complete Todo App on Frontend Mentor',
	'Very very very very very very very very long string',
];

const initTasks = tasksTitles.map((taskTitle) => ({
	title: taskTitle,
	isCompleted: false,
	id: crypto.randomUUID(),
}));

initTasks.at(2).isCompleted = true;

const storedValue = localStorage.getItem('tasks');

const initialState = {
	// tasks: initTasks,
	tasks: storedValue ? JSON.parse(storedValue) : initTasks,
};

const taskListSlice = createSlice({
	name: 'taskList',
	initialState,
	reducers: {
		addTask(state, action) {
			state.tasks.push(action.payload);
		},

		delTask(state, action) {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
		},

		delCompletedTasks(state) {
			state.tasks = state.tasks.filter((task) => !task.isCompleted);
		},

		updateTaskList(state, action) {
			state.tasks = action.payload;
		},

		toggleTaskStatus(state, action) {
			state.tasks = state.tasks.map((task) =>
				task.id === action.payload.id ? { ...task, isCompleted: !task.isCompleted } : task
			);
		},

		changeTaskTitle: {
			prepare(task, newTtile) {
				return {
					payload: { task, newTtile },
				};
			},

			reducer(state, action) {
				state.tasks = state.tasks.map((task) =>
					task.id === action.payload.task.id ? { ...task, title: action.payload.newTitle } : task
				);
			},
		},
	},
});

export default taskListSlice.reducer;
export const {
	addTask,
	delTask,
	delCompletedTasks,
	updateTaskList,
	toggleTaskStatus,
	changeTaskTitle,
} = taskListSlice.actions;
