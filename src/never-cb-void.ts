// function add(n1: number, n2: number): number {
// 	return n1 + n2;
// }

function print(num: number): void {
	console.log("result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

addAndHandle(10, 20, (result) => {
	console.log(result);
});

// print(add(5, 12));

let combineVal: (a: number, b: number) => number;

// combineVal = add;

// console.log(combineVal(3, 3));

// example of the use of never
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}
