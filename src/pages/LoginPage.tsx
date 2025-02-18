import { ChangeEvent, FunctionComponent, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { isEmptyString } from "../utils/isEmptyString";

interface LoginPageProps
{

}

interface LoginPageState
{
	email: string;
	password: string;
}

const LoginPage: FunctionComponent<LoginPageProps> = () =>
{
	const [inputValue, setInputValue] = useState<LoginPageState>({
		email: "",
		password: "",
	});

	const [error, setError] = useState<LoginPageState | null>({
		email: "",
		password: "",
	});

	const submitHandler = (e: ChangeEvent<HTMLFormElement>) =>
	{
		e.preventDefault();
		formValidation();
	}

	function formValidation() 
	{
		const isEmailEmpty = isEmptyString(inputValue.email);
		const isPasswordEmpty = isEmptyString(inputValue.password);

		setError((prevState) =>
		({
			...prevState,
			email: isEmailEmpty ? "Email is Required" : "",
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
							label="Email"
							fullWidth
							type="email"
							name="email"
							value={inputValue.email}
							margin="normal"
							error={!!error?.email}
							helperText={error?.email}
							onChange={setInputValues}
						/>
						<TextField
							label="Password"
							fullWidth
							type="password"
							name="password"
							value={inputValue.password}
							margin="normal"
							error={!!error?.password}
							helperText={error?.password}
							onChange={setInputValues}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 2 }}
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