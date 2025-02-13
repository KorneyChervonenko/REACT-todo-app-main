import { useState } from 'react';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './features/Logo/Logo.jsx';
import AddTaskForm from './features/AddTaskForm/AddTaskForm.jsx';
import TaskList from './features/TaskList/TaskList.jsx';
import Control from './features/Control/Control.jsx';

import './App.scss';
import { Provider } from 'react-redux';
import store from './store.js';

console.clear();

export default function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Logo />
				<AddTaskForm />
				<TaskList />
				<Control />
			</Provider>
			<p className="dnd-promo">Drag and drop to reorder list</p>
		</div>
	);
}
