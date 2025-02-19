import { ReviewType } from "./ReviewType";

export type ProductType =
	{
		id: number;
		title: string;
		description: string;
		category: string,
		price: number;
		discountPercentage: number;
		rating: number;
		stock: number;
		brand: string;
		sku: string;
		weight: number,
		dimensions: {
			width: number,
			height: number,
			depth: number,
		},
		reviews: ReviewType[];
	}