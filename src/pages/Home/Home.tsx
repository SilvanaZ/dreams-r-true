import { Gente } from '@/data';
import { addGente } from '@/redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GenteTable from './components/GenteTable/GenteTable';

export interface HomeInterface { }

export const Home: React.FC<HomeInterface> = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(addGente(Gente));
	}, []);

	return (
		<GenteTable />
	);
};
