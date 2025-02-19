import { FunctionComponent } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { TUGRoutes } from "../TUGRoutes";


interface NotFoundPageProps
{

}

const NotFoundPage: FunctionComponent<NotFoundPageProps> = () =>
{
	return (
		<>
			<Container>
				<Box sx={{ textAlign: "center", m: 8 }}>
					<Typography sx={{m:4}} variant="h1">  OOOOpSSS !!!   </Typography>
					<Typography sx={{m:4}} variant="h2">  Looks Like You Lost   </Typography>
					<Typography sx={{m:4}} variant="h2">  This is 404 Page   </Typography>
				</Box>
				<Box sx={{ textAlign: "center", mt: 8 }}>
					<Typography sx={{m:4}} variant="h4">
						for moving to Home Page click link below :
					</Typography>
					<Typography sx={{ m: 4 }} variant="h5">
						<Link to={TUGRoutes.Home} > Back to Home </Link>
					</Typography>
				</Box>
			</Container>
		</>);
}

export default NotFoundPage;