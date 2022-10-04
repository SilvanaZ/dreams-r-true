import { Provider } from 'react-redux';
import './assets/estilos/App.css';
import Navbar from './components/Navbar/Navbar';
import { Home } from './pages';
import { store } from './redux';
import { LayoutContainer } from './styled components';

function App() {
	return (
		<Provider store={store}>
			<Navbar />
			<LayoutContainer>
				<Home />
			</LayoutContainer>
		</Provider>
	);
}

export default App;
