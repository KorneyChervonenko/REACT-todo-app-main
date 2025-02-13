import { configureStore } from '@reduxjs/toolkit';

// import addTaskFormReducer from './features/AddTaskForm/addTaskFormSlice';
// import customerReducer from './features/customers/customerSlice';
import taskListReducer from './features/TaskList/taskListSlice';
import controlReducer from './features/Control/controlSlice';

const store = configureStore({
	reducer: {
		control: controlReducer,
		taskList: taskListReducer,
	},
});

export default store;
