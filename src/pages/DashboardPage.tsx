import { Container, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import { useGetProductsDataQuery } from "../services/dummyjsonApiSlice";
import TUGLoading from "../components/TUGLoading";

import TUGReviewItem from "../components/TUGReviewItem";
import { ProductType } from "../types/ProductType";
import TUGAvatar from "../components/TUGAvatar";
import TUGChart from "../components/TUGChart";
import { getLimitedData } from "../utils/getLimitedData";
import TUGReminder from "../components/TUGReminder";

interface DashboardPageProps
{

}

const DashboardPage: FunctionComponent<DashboardPageProps> = () =>
{
	const { data: productData } = useGetProductsDataQuery("");
	// const { data: singleProductData } = useGetSingleProductDataQuery("");

	const limitedProducts = getLimitedData<ProductType>(productData?.products, 2);

	return (
		<>
			<Container>
				<TUGAvatar />

				{
					!productData ? <TUGLoading /> :
						<Stack sx={{ mt: 4 }} direction="row" spacing={4}>
							{
								limitedProducts.map((productData: ProductType) => <TUGReviewItem key={productData.id} product={productData} />)
							}
						</Stack>
				}
				<TUGChart data={productData.products} />
				<TUGReminder />
			</Container>
		</>
	);
}

export default DashboardPage;