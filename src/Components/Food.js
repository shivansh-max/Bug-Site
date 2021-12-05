import React from 'react';
import Pod from "./Pod";

function Food({foods, name, s, ss,}) {
	return (
		<div className={"pods"}>
			<h2>{name}</h2>
			<hr/>
			<div className={"o"}>
				{foods.map((food, ind) => (
					<Pod
						food={food}
						key={ind}
						s={s}
						ss={ss}
					/>
				))}
			</div>
		</div>
	);
}

export default Food;
