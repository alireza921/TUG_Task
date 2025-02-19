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
		weight: 2,
		dimensions: {
			width: 23.17,
			height: 14.43,
			depth: 28.01
		},
		reviews: ReviewType[];
	}