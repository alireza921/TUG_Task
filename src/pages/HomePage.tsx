import { Box, Container, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { TUGRoutes } from "../TUGRoutes";

interface HomePageProps
{

}

const HomePage: FunctionComponent<HomePageProps> = () =>
{
	return (
		<>
			<Container>
				<Box sx={{ textAlign: "center", m: 8 }}>
					<Typography variant="h1">  This is Home Page   </Typography>
				</Box>
				<Box sx={{ textAlign: "center", mt: 8 }}>
					<Typography variant="h4">
						for moving to Dashboard Page click link below :
					</Typography>
					<Typography sx={{ m: 4 }} variant="h5">
						<Link to={TUGRoutes.Dashboard} > Dashboard </Link>
					</Typography>
				</Box>
			</Container>
		</>
	);
}

export default HomePage;