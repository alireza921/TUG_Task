import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { UserType } from "../types/UserTypes";

const TUGAvatar = () =>
{
	const userData: UserType | null = useSelector((state: RootState) => state.auth.user);

	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "12px", mt: 4, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }} >
				<Avatar src={userData?.image ?? ""} />
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "4px" }} >
					<Typography variant="subtitle1"> {userData?.firstName} </Typography>
					<Typography variant="subtitle1"> {userData?.lastName} </Typography>
				</Box>
			</Box>
		</>
	);
}

export default TUGAvatar;