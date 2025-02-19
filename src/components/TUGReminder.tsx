import { Box, Stack, Typography } from "@mui/material";
import TUGNumericCard from "./TUGNumericCard";
import { ProductType } from "../types/ProductType";
import { getLimitedData } from "../utils/getLimitedData";

interface TUGReminderProps
{
	remindersData: ProductType[]
	title: string;
}

const TUGReminder = (props: TUGReminderProps) =>
{
	const getLimitedReminders = getLimitedData(props.remindersData, 6);

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
					{props.title}
				</Typography>

				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexWrap:"wrap",
						gap: 2,
					}}
				>
					{
						getLimitedReminders.map((reminder, index: number) => (
							<Stack key={`TUGReminder_${index}`} display="flex" flexDirection="row" flexWrap="wrap">
								<TUGNumericCard review={{
									rating: reminder.rating,
									comment: reminder.brand
								}} />
							</Stack>
						))
					}
				</Box>
			</Box>

		</>
	);
}

export default TUGReminder;