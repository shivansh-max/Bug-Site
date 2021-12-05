function Question({q, a}) {
	return (
		<div className={"question"}>
			<p className={"q"}>{q}</p>
			<p className={"a"}>{a}</p>
		</div>
	);
}

export default Question;