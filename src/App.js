import React from "react";

import "./App.css";
import Header from "./components/Header.js";
import Buttons from "./components/Buttons";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import "./style.css";
function App() {
	return (
		<main className="main--card">
			<Header />
			<Buttons />
			<Detail />
			<Footer />
		</main>
	);
}

export default App;
