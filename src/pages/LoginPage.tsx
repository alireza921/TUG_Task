import { FunctionComponent, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

interface LoginPageProps
{

}


interface LoginPageStaet
{
	email: string;
	password: string;
}

const LoginPage: FunctionComponent<LoginPageProps> = () =>
{
	const [state, setState] = useState<LoginPageStaet>({
		email: "",
		password: ""
	});

	const setInputValues = (e: React.ChangeEvent<HTMLInputElement>) =>
	{
		const { name, value } = e.target;
		setState((prevState) => ({
			...prevState, [name]: value
		}));
	}

	return (
		<>
			<Container maxWidth="xs">
				<Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }}>
					<Typography variant="h5" gutterBottom> Login </Typography>
					<form style={{ marginBottom: "12px" }}>
						<TextField
							label="Email"
							fullWidth
							type="email"
							name="email"
							value={state.email}
							margin="normal"
							onChange={setInputValues}
						/>
						<TextField
							label="Password"
							fullWidth
							type="password"
							name="password"
							value={state.password}
							margin="normal"
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