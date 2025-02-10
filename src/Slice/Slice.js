import { createSlice, nanoid } from "@reduxjs/toolkit";

const inititalState = {
	positions: [],
};

export const positionSlice = createSlice({
	name: "position",
	initialState: inititalState,
	reducers: {
		addPosition: (state, action) => {
			let obj = action.payload;
			console.log(obj, "obj");
			state.positions.push(obj);
		},
		removePosition: (state, action) => {
			state.positions = state.positions.filter(
				(id) => id.id !== action.payload
			);
		},
	},
});

export const { addPosition, removePosition } = positionSlice.actions;
export default positionSlice.reducer;
