import { ProductType } from "../types/ProductType";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

interface TUGTableProps
{
	productsData: ProductType[];
}

const TUGTable = (props: TUGTableProps) =>
{
	const columns: GridColDef[] = [
		{ field: 'no', headerName: 'No.', width: 50 },
		{ field: 'title', headerName: 'Title', width: 250 },
		{ field: 'category', headerName: 'Category', width: 90 },
		{ field: 'price', headerName: 'Price', width: 130, },
		{ field: 'brand', headerName: 'Brand', width: 130, },
	];

	const rowProvider = (products: ProductType[]) =>
	{
		const rows = products.map((product, index) =>
		{
			return {
				id: product.id,
				no: index + 1,
				category: product.category,
				title: product.title,
				price: product.price,
				brand: product.brand
			}
		})
		return rows;
	}

	const paginationModel = { page: 0, pageSize: 5 };
	const rows = rowProvider(props.productsData);
	return (
		<>
			<Paper sx={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{ pagination: { paginationModel } }}
					pageSizeOptions={[5, 10]}
					sx={{ border: 0 }}
				/>
			</Paper>
		</>
	);
}

export default TUGTable;