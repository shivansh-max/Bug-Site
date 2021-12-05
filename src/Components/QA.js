import React from 'react';
import Question from "./Questin";
import data from "./Questins";

function Qa(props) {
	return (
		<div className={"qa"}>
			<div className="App">
				<div className="menu">
					<h1 className={"fill-c"}>Q & A</h1>
					{
						data.map(questoin => (
							<Question
								a={questoin.A}
								q={questoin.Q}
							/>
						))
					}
				</div>
				
			</div>
		</div>
	);
}

export default Qa;