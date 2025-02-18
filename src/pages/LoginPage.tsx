import { FunctionComponent } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

interface LoginPageProps
{

}

const LoginPage: FunctionComponent<LoginPageProps> = () =>
{
	return (
		<>
			<Container maxWidth="xs">
				<Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }}>
					<Typography variant="h5" gutterBottom> Login </Typography>
					<form style={{ marginBottom: "12px" }}>
						<TextField
							label="Email"
							fullWidth
							margin="normal"
							value={"email"}
						/>
						<TextField
							label="Password"
							fullWidth
							type="password"
							margin="normal"
							value={"password"}
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