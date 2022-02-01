import React from 'react';
// import Navbar from './components/navbar';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
	return (
		<div className="App">
			<div>
				<Router>
					<Sidebar />
					{/* <Navbar /> */}
					<h1>Home Page</h1>
					<Switch>
						<Route path="/" />
					</Switch>
				</Router>
			</div>
		</div>
	);
};

export default App;
