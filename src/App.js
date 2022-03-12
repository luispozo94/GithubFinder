import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from './components/Layout/Footer.js';
import Navbar from './components/Layout/Navbar.js';

const App = () => {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
				<main className="container mx-auto px-3 pb-12">Content</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
