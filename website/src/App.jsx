import React from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import Nav from "./components/Nav";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Marketplace from "./views/Marketplace";
import Augmented from "./views/Augmented";
import Virtual from "./views/Virtual";
import Refinery from "./views/Refinery";

function App() {
	return (
		<>
			<Nav />
			<div className="bg-gray-900 text-gray-300">
				<Router>
					<Home path="/" />
					<Marketplace path="/marketplace" />
					<Virtual path="/virtual" />
					<Augmented path="/augmented" />
					<Refinery path="/refinery" />
					<Error404 path="*" />
				</Router>
			</div>
			<Footer />
		</>
	);
}

export default App;
