import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType =
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
	user: UserType | null;
}

const loginState = localStorage.getItem("TUG_LoginToken");

const initialState: AuthState = loginState ? JSON.parse(loginState) :
	{
		isAuth: false,
		user: null,
	}

export const authSlice = createSlice({
	initialState,
	name: "auth",
	reducers: {
		login: (state, action: PayloadAction<{ user: UserType }>) =>
		{
			state.isAuth = true;
			state.user = action.payload.user;
			localStorage.setItem("TUG_LoginToken", JSON.stringify(state));
		},
	}
})


export const { login } = authSlice.actions;

export default authSlice.reducer;