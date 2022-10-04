import { addFavoritos, store } from '@/redux';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Persona } from '../../../../models/gente';
import { AppStore } from '../../../../redux/store';
import { useState } from 'react';
export interface GenteTableInterface { }

const GenteTable: React.FC<GenteTableInterface> = () => {
	const [ selecteedGente, setSelectedGente ] = useState<Persona[]>([]);
	const pageSize = 5;
	const dispatch = useDispatch();
	const stateGente = useSelector((store: AppStore) => store.gente)
	const findPersona = (persona: Persona) => !!selecteedGente.find(p => p.id === persona.id);
	const filterPersona = (persona: Persona) => selecteedGente.filter(p => p.id !== persona.id);
	const handleChange = (persona: Persona) => {
		const filterGente = findPersona(persona) ? filterPersona(persona) : [ ...selecteedGente, persona ]
		dispatch(addFavoritos(filterGente))
		setSelectedGente(filterGente);
	};


	const colums = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			Width: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{
						<Checkbox size='small' checked={findPersona(params.row)} onChange={() => handleChange(params.row)}
						/>
					}
				</>
			),
		},
		{
			field: 'name',
			headerName: 'Nombre',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value} </>,
		},
		{
			field: 'category',
			headerName: 'Categoria',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value} </>,
		},
		{
			field: 'company',
			headerName: 'Compañia',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value} </>,
		},
	];
	return (
		<DataGrid
			columns={colums}
			rows={stateGente}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[ pageSize ]}
			getRowId={(row: any) => row.id}
		/>
	)
};

export default GenteTable;
