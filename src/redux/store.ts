import { configureStore } from "@reduxjs/toolkit";
import { dummyjsonApiSlice } from "../services/dummyjsonApiSlice";
import { authSlice } from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		[dummyjsonApiSlice.reducerPath]: dummyjsonApiSlice.reducer,
		auth: authSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(dummyjsonApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;