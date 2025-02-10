import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "../Slice/Slice"; // Import the default export

const store = configureStore({
	reducer: {
		position: positionReducer, // Correctly assign the reducer
	},
});

export default store; // Ensure it is exported as default
