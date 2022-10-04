import { LocalStorageTypes, Persona } from '@/models';

import { createSlice } from '@reduxjs/toolkit';
import {
	getLocalStorage,
	setLocalStorage,
} from '../../Utilities/LocalStorage.utilities';

const initialState: Persona[] = [];

export const genteSlice = createSlice({
	name: 'gente',
	initialState: getLocalStorage(LocalStorageTypes.FAVORITOS)
		? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITOS) as string)
		: initialState,
	reducers: {
		addGente: (state, action) => {
			setLocalStorage(LocalStorageTypes.FAVORITOS, state);
			return action.payload;
		},
	},
});

export const { addGente } = genteSlice.actions;
export default genteSlice.reducer;
