import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Layout/Footer.js';
import Navbar from './components/Layout/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';
import { GitHubProvider } from './Context/GitHub/GitHubContext';

const App = () => {
	return (
		<GitHubProvider>
			<Router>
				<div className="flex flex-col justify-between h-screen">
					<Navbar />
					<main className="container mx-auto px-3 pb-12">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/notfound" element={<NotFound />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</GitHubProvider>
	);
};

export default App;
