"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var plus = function (a, b) {
    return a + b;
};
var minus = function (a, b) {
    return a - b;
};
app.get("/", function (req) {
    // Casting allows you to have more options on obj type
    req.name = "Person";
});
// You can also cast any to escape when you know the properties on your code is correct
app.get("/", function (req) {
    // Casting allows you to have more options on obj type
    req.name = "Person";
});
app.listen(1212, function () {
    console.log("Running");
});
