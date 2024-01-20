import React from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import About from "./views/About";
import Nav from "./components/Nav";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Nav />
			<div className="bg-gray-900 text-gray-300">
				<Router>
					<Home path="/" />
					<About path="/about" />
					<Error404 path="*" />
				</Router>
			</div>
			<Footer />
		</>
	);
}

export default App;
