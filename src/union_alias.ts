function combine(
	input1: number | string,
	input2: number | string,
	resultType: "asNumber" | "asText",
) {
	let result;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultType === "asNumber"
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	// if (resultType === "asNumber") {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }

	return result;
}

const combinedAges = combine(32, 32, "asNumber");
console.log(combinedAges);

const combinedNames = combine("Hannah", "Damien", "asText");
console.log(combinedNames);
