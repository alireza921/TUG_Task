import { ChangeEvent, FunctionComponent, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { isEmptyString } from "../utils/isEmptyString";
import { useLoginMutation } from "../redux/apiSlice";
import { useNavigate } from "react-router-dom";
import { TUGRoutes } from "../TUGRoutes";

interface LoginPageProps
{

}

interface LoginPageState
{
	username: string;
	password: string;
}

const LoginPage: FunctionComponent<LoginPageProps> = () =>
{
	const navigate = useNavigate();

	const [inputValue, setInputValue] = useState<LoginPageState>({
		username: "",
		password: "",
	});

	const [validationError, setValidationError] = useState<LoginPageState | null>({
		username: "",
		password: "",
	});
	const [login, { isLoading, isSuccess }] = useLoginMutation();

	const submitHandler = async (e: ChangeEvent<HTMLFormElement>) =>
	{
		e.preventDefault();
		formValidation();
		try
		{
			const { username, password } = inputValue;
			await login({ username, password }).unwrap();
			if (isSuccess)
			{
				navigate(TUGRoutes.Dashboard);
			}
		} catch (error)
		{
			console.error("Login failed", error);
		}
	}

	function formValidation() 
	{
		const isEmailEmpty = isEmptyString(inputValue.username);
		const isPasswordEmpty = isEmptyString(inputValue.password);
		setValidationError((prevState) =>
		({
			...prevState,
			username: isEmailEmpty ? "Username  is Required" : "",
			password: isPasswordEmpty ? "Password is Required" : ""
		}));
	}

	const setInputValues = (e: React.ChangeEvent<HTMLInputElement>) =>
	{
		const { name, value } = e.target;
		setInputValue((prevState) => ({
			...prevState, [name]: value
		}));
	}


	return (
		<>
			<Container maxWidth="xs">
				<Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }}>
					<Typography variant="h5" gutterBottom> Login </Typography>
					<form
						onSubmit={submitHandler}
						style={{ marginBottom: "12px" }}
					>
						<TextField
							label="Username"
							fullWidth
							type="string"
							name="username"
							value={inputValue.username}
							margin="normal"
							error={!!validationError?.username}
							helperText={validationError?.username}
							onChange={setInputValues}
						/>
						<TextField
							label="Password"
							fullWidth
							type="password"
							name="password"
							value={inputValue.password}
							margin="normal"
							error={!!validationError?.password}
							helperText={validationError?.password}
							onChange={setInputValues}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 2 }}
							disabled={isLoading}
						>
							Login
						</Button>
					</form>
				</Box>
			</Container>
		</>
	);
}

export default LoginPage;