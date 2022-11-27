"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
    name: "Speechie",
    age: 33,
    hobbies: ["Sports, Cooking"],
    role: [2, "author"],
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var enumPerson = {
    name: "Speechie",
    age: 33,
    hobbies: ["Sports, Cooking"],
    role: Role.ADMIN,
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
