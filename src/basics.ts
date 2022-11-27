console.log("Your code goes here...");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return n1 + n2;
	}
	// return n1 + n2;
}

// const number1 = '4'
const number1 = 3.212;
const number2 = 3.4;

const printR = true;

let randomKey: any;

const r = add(number1, number2, printR, "Total is ");

console.log(r); // rendering undefined
