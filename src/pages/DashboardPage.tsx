import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useGetProductsDataQuery } from "../services/dummyjsonApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TUGLoading from "../components/TUGLoading";
import { UserType } from "../types/UserTypes";
import ResultItem from "../components/ResultItem";
import { ProductType } from "../types/ProductType";

interface DashboardPageProps
{

}

const DashboardPage: FunctionComponent<DashboardPageProps> = () =>
{
	const userData: UserType | null = useSelector((state: RootState) => state.auth.user);
	const { data } = useGetProductsDataQuery("");

	return (
		<>
			<Container>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "12px", mt: 4, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }} >
					<Avatar src={userData?.image ?? ""} />
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "4px" }} >
						<Typography variant="subtitle1"> {userData?.firstName} </Typography>
						<Typography variant="subtitle1"> {userData?.lastName} </Typography>
					</Box>
				</Box>
				{/* 				
				<Typography variant="h3"> {data.limit} </Typography>
				<Typography variant="h3"> {data.total} </Typography>
				<Typography variant="h3"> {data.skip} </Typography> */}

				{
					!data ? <TUGLoading /> :
						<Stack direction="row" spacing={4}>
							{
								data?.products?.slice(0,2).map((productData: ProductType) => <ResultItem key={productData.id} product={productData} />)
							}
						</Stack>
				}
			</Container>
		</>
	);
}

export default DashboardPage;