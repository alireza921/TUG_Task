import { CardActionArea, Card, Box, CardContent, Typography } from "@mui/material";
import { ProductType } from "../types/ProductType";

interface ResultItemProps
{
	product: ProductType;
}

const ResultItem = (props: ResultItemProps) =>
{
	return (
		<>
			<Box>
				<Typography variant="h4">
					{props.product.title}
				</Typography>

				<Box
					sx={{
						width: '100%',
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
						gap: 2,
					}}
				>
					{
						props.product.reviews.map((review, index: number) => (
							<Card key={`resultItem_${index}`}>
								<CardActionArea
									sx={{
										height: '100%',
										'&[data-active]': {
											backgroundColor: 'action.selected',
											'&:hover': {
												backgroundColor: 'action.selectedHover',
											},
										},
									}}
								>
									<CardContent sx={{ height: '100%' }}>
										<Typography variant="h5" component="div">
											{review.rating}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{review.comment}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
				</Box>
			</Box>
		</>
	);
}

export default ResultItem;