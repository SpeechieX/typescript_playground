import { O_RDONLY } from "node:constants";

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // Tuple Type!!!
} = {
	name: "Speechie",
	age: 33,
	hobbies: ["Sports, Cooking"],
	role: [2, "author"],
};

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const enumPerson = {
	name: "Speechie",
	age: 33,
	hobbies: ["Sports, Cooking"],
	role: Role.ADMIN,
};

console.log(person);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
