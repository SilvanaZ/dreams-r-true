import { removeFavoritos } from '@/redux';
import { AppStore } from '@/redux/store';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Persona } from '../../models/gente';


export interface FavoritosTableInterface { }

const FavoritosTable: React.FC<FavoritosTableInterface> = () => {
	const pageSize = 5;
	const dispatch = useDispatch();
	const stateFavoritos = useSelector((store: AppStore) => store.favoritos);

	const handleClick = (Persona: Persona) => {
		dispatch(removeFavoritos(Persona));
	};

	const colums = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{
						<IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
							<Delete />
						</IconButton>
					}
				</>
			)
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Categories',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Level of happiness',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	];
	return (
		<DataGrid
			rows={stateFavoritos}
			columns={colums}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[ pageSize ]}
			getRowId={(row: any) => row.id}
		/>
	)
};

export default FavoritosTable;
