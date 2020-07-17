import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Footer from './components/layout/footer/Footer';
import Service from './components/pages/Servicees/Service';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/services" component={Service} />
					<Route component={NotFound} />  

				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
