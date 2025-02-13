import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filterType: 'all',
};

const controlSlice = createSlice({
	name: 'control',
	initialState,
	reducers: {
		selectFilter(state, action) {
			state.filterType = action.payload;
		},
	},
});

export default controlSlice.reducer;
export const { selectFilter } = controlSlice.actions;
