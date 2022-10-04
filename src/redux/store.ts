import { genteSlice, favoritosSlice } from './states/';
import { configureStore } from '@reduxjs/toolkit';
import { Persona } from '../models/gente';

export interface AppStore {
	gente: Persona[];
	favoritos: Persona[];
}

export default configureStore<AppStore>({
	reducer: {
		gente: genteSlice.reducer,
		favoritos: favoritosSlice.reducer,
	},
});
