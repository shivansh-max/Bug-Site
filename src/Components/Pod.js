import React from 'react';
import {noneObj} from "../Public/Data";

function Pod({food, s, ss}) {
	let styles = {}
	
	if (food === s) {
		styles = {color: "#ffffff"}
	}
	
	return (
		<div className={"pod"} onClick={() => {
			if (s !== food) {
				ss(food)
			}
			else ss(noneObj)
		}}>
			<div className={"seg"} style={styles}>
				<h3>{food.name}</h3>
				<h5>PRICE: ${food.price}</h5>
				<h5>PROTEIN: {food.protein}g</h5>
				<h5>CALORIES: {food.cal}g</h5>
			</div>
			<div className={"seg"}>
				{food.bugs.map(bug => <h5 key={bug}>{bug}</h5>)}
			</div>
			<div className={"seg"}>
				{food.sides.map(side => <h5 key={side}>{side}</h5>)}
			</div>
			<div className={"seg"}>
				<p>
					{food.description}
				</p>
			</div>
		</div>
	);
}

export default Pod;