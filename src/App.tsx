import React from "react";
import { progressData } from "./data/data";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import "./App.css"

function App() {
	return (
		<div className="App">
			<h1>ProgressBar Component</h1>
			<ProgressBar progressData={progressData} width={800} height={30} />
		</div>
	);
}

export default App;
