import { LocalStorageTypes, Persona } from '@/models';
import { createSlice, current } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../Utilities/LocalStorage.utilities';

const initialState: Persona[] = [];

export const favoritosSlice = createSlice({
	name: 'favoritos',
	initialState: getLocalStorage(LocalStorageTypes.FAVORITOS)
		? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITOS) as string)
		: initialState,
	reducers: {
		addFavoritos: (state, action) => {
			setLocalStorage(LocalStorageTypes.FAVORITOS, state);
			return action.payload;
		},
		removeFavoritos: (state, action) => {
			const filteredState = current(state).filter(
				(p: Persona) => p.id !== action.payload.id,
			);
			setLocalStorage(LocalStorageTypes.FAVORITOS, filteredState);
			return filteredState;
		},
	},
});

export const { addFavoritos, removeFavoritos } = favoritosSlice.actions;
export default favoritosSlice.reducer;
