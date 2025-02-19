import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { ReviewType } from "../types/ReviewType";

interface TUGNumericCardProps 
{
	review: ReviewType;
}

const TUGNumericCard = (props: TUGNumericCardProps) =>
{
	return (
		<>
			<Card>
				<CardActionArea
					sx={{
						height: '100%',
					}}
				>
					<CardContent sx={{ background: "none", height: '100%' }}>
						<Typography variant="h5" component="div">
							{props.review.rating}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{props.review.comment}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
}

export default TUGNumericCard;