import React from "react";
import Nav from "./Nav";
import PigList from "./PigList";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigList hogs={hogs} />
		</div>
	);
}

export default App;
