import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType
{
	id: number | null;
	username: string | null;
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	gender: string | null;
	image: string | null;
	accessToken: string | null;
	refreshToken: string | null;
}

interface AuthState
{
	isAuth: boolean;
	token: string | null;
	user: UserType | null;
}

const initialState: AuthState = {
	isAuth: false,
	user: null,
	token: null
}

export const authSlice = createSlice({
	initialState,
	name: "auth",
	reducers: {
		login: (state, action: PayloadAction<{ token: string; user: UserType }>) =>
		{
			state.isAuth = true;
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
	}
})


export const { login } = authSlice.actions;

export default authSlice.reducer;