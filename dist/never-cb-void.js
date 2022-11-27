"use strict";
// function add(n1: number, n2: number): number {
// 	return n1 + n2;
// }
function print(num) {
    console.log("result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// print(add(5, 12));
var combineVal;
// combineVal = add;
// console.log(combineVal(3, 3));
// example of the use of never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
