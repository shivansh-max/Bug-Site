import Title from "./Components/Title";
import Menu from "./Components/Menu";
import QA from "./Components/QA";
import Minibar from "./Components/Minibar";

function App() {
	return (
		<div className={"body"}>
			<Title/>
			<Menu />
			<hr/>
			<QA />
			<div className="bottom">
				<Minibar />
			</div>
		</div>
	);
}

export default App;
