"use strict";
function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "asNumber") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === "asNumber") {
    // 	return +result;
    // } else {
    // 	return result.toString();
    // }
    return result;
}
var combinedAges = combine(32, 32, "asNumber");
console.log(combinedAges);
var combinedNames = combine("Hannah", "Damien", "asText");
console.log(combinedNames);
