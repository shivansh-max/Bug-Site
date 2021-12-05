import React, {useState} from 'react';
import Food from "./Food";
import {calcPrice, data, noneObj} from "../Public/Data";

function Menu(props) {
	const [a, setA] = useState(noneObj);
	const [m, setM] = useState(noneObj);
	const [d, setD] = useState(noneObj);
	const [p, setP] = useState(0.00);
	
	return (
		<div className={"main_content"}>
			<div className="App">
				<div className="menu">
					<h1 className={"fill-c"}>Menu</h1>
					<Food name={"Appetizers"} foods={data.appetizer} s={a} ss={setA}/>
					<hr/>
					<Food name={"Main Dish"} foods={data.main_dish} s={m} ss={setM}/>
					<hr/>
					<Food name={"Dessert"} foods={data.dessert} s={d} ss={setD}/>
					<hr/>
				</div>
			</div>
			<div className={"buy"}>
				<button onClick={() => setP(calcPrice(a,m,d, setA, setM, setD))}>Buy</button>
				<h1>${p}.00</h1>
			</div>
		</div>
	);
}

export default Menu;