import { Box, Typography } from "@mui/material";
import { ProductType } from "../types/ProductType";
import TUGNumericCard from "./TUGNumericCard";

interface TUGReviewItemProps
{
	product: ProductType;
}

const TUGReviewItem = (props: TUGReviewItemProps) =>
{
	return (
		<>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: "column",
					gap: 2,
				}}
			>
				<Typography variant="subtitle2">
					{props.product.title}
				</Typography>

				<Box
					sx={{
						width: '100%',
						display: 'flex',
						gap: 2,
					}}
				>
					{
						props.product.reviews.map((review, index: number) => (
							<TUGNumericCard key={`TUGReviewItem_${index}`} review={review} />
						))
					}
				</Box>
			</Box>
		</>
	);
}

export default TUGReviewItem;