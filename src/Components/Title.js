import React from 'react';
import Minibar from "./Minibar";

function Title(props) {
	return (
		<>
			<Minibar />
			<div className="center">
				<h1 className={"title"}>Bugs Bugs Bugs</h1>
			</div>
			<div className="center">
				<h3>Shivansh Upadhyay</h3>
			</div>
		</>
	);
}

export default Title;