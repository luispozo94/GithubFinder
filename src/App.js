import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer.js';
import Alert from './components/Layout/Alert.js';
import Navbar from './components/Layout/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js'
import User from './pages/User.js'
import { GitHubProvider } from './Context/GitHub/GitHubContext';
import { AlertProvider } from './Context/Alert/AlertContext';

const App = () => {
	return (
		<GitHubProvider>
			<AlertProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen">
						<Navbar />
						<main className="container mx-auto px-3 pb-12">
							<Alert />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/user/:login" element={<User />} />
								<Route path="/notfound" element={<NotFound />} />
								<Route path="/*" element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GitHubProvider>
	);
};

export default App;
