import { AppStore } from '@/redux/store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Customdialog, { dialogOpenSubject$ } from '../Customdialog/Customdialog';
import { FavoritosTable } from './FavoritosTable';




export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
	const stateFavoritos = useSelector((store: AppStore) => store.favoritos);

	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	};

	return (
		<>
			<Customdialog>
				<FavoritosTable />
			</Customdialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						⌨ D&S yarn add ❴ New Ideas ❵ ✨
					</Typography>
					<IconButton color="secondary" aria-label="favoritos" component="label" onClick={handleClick}>
						Favs<FavoriteIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
