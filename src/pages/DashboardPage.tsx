import { Container, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import { useGetProductsDataQuery } from "../services/dummyjsonApiSlice";
import TUGAvatar from "../components/TUGAvatar";
import TUGLoading from "../components/TUGLoading";
import TUGReviewItem from "../components/TUGReviewItem";
import { ProductType } from "../types/ProductType";
import TUGChart from "../components/TUGChart";
import { getLimitedData } from "../utils/getLimitedData";
import TUGReminder from "../components/TUGReminder";

interface DashboardPageProps
{

}

const DashboardPage: FunctionComponent<DashboardPageProps> = () =>
{
	const { data: productData, isLoading: isProductsLoading } = useGetProductsDataQuery(1);

	const limitedProducts = getLimitedData<ProductType>(productData?.products, 2);

	if (isProductsLoading)
		return <TUGLoading />

	return (
		<>
			<Container>
				<TUGAvatar />
				{
					!productData ? <TUGLoading /> :
						<Stack sx={{ mt: 4 }} direction="row" spacing={4} >
							{
								limitedProducts.map((productData: ProductType) => <TUGReviewItem key={productData.id} product={productData} />)
							}
						</Stack>
				}
				<Stack sx={{ mt: 4 }} direction="row" spacing={4} >
					<TUGChart data={productData.products} />
					<TUGReminder title="Reminder" remindersData={productData.products} />
				</Stack>
			</Container>
		</>
	);
}

export default DashboardPage;