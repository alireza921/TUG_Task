import { Box, Typography } from "@mui/material";
import { ProductType } from "../types/ProductType";
import { PieChart } from '@mui/x-charts/PieChart';
import TUGNumericCard from "./TUGNumericCard";
import { getLimitedData } from "../utils/getLimitedData";
import { generateRandomColor } from "../types/generateRandomColor";


interface TUGChartProps 
{
	data: ProductType[];
}
const TUGChart = (props: TUGChartProps) =>
{
	const limitedProducts = getLimitedData<ProductType>(props.data, 3);
	const palette = ['lightcoral', 'slateblue', "red"];
	return (
		<>

			<Box
				sx={{
					mt: 4,
					width: '100%',
					display: 'flex',
					flexDirection: "column",
					gap: 2,
				}}
			>
				<Typography variant="subtitle2">
					Due Dates
				</Typography>

				<Box
					sx={{
						width: '100%',
						display: 'flex',
						gap: 2,
					}}
				>
					<PieChart
						slotProps={{
							legend: {
								labelStyle: {
									fontSize: 84,
									fill: 'blue',
								},
								direction: 'row',
								position: { vertical: 'top', horizontal: 'middle' },
								padding: 0,
							},
						}}
						colors={palette}
						series={[
							{
								data: limitedProducts.map((data) =>
								{
									return {
										color: generateRandomColor(),
										id: data.id,
										value: data.price,
										lable: data.title
									}
								})
							},
						]}
						width={400}
						height={200}
					/>
					<TUGNumericCard review={
						{
							rating: props.data[0].rating,
							comment: props.data[0].title
						}
					} />
				</Box>
			</Box>
		</>
	);
}

export default TUGChart;