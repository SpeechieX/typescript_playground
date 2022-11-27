import express from "express";

const app = express();

const plus = (a: number, b: number) => {
	return a + b;
};
const minus = (a: number, b: number): number => {
	return a - b;
};

interface Params {
	a: number;
	b: number;
}

app.get("/", (req) => {
	// Casting allows you to have more options on obj type
	(req as any).name = "Person";
});

// You can also cast any to escape when you know the properties on your code is correct
app.get("/", (req: any) => {
	// Casting allows you to have more options on obj type
	(req as any).name = "Person";
});

app.listen(1212, () => {
	console.log("Running");
});
