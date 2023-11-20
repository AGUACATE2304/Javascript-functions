import isTypeOf from "./isTypeOf.js";

const stringValue = "Hello";
console.log(`Is the value a string? ${isTypeOf(stringValue, "string")}`);

const numberValue = 50;
console.log(`Is the value a number? ${isTypeOf(numberValue, "number")}`);

const booleanValue = true;
console.log(`Is the value a boolean? ${isTypeOf(booleanValue, "boolean")}`);

const arrayValue = [1, 2, 3];
console.log(`Is the value an array? ${isTypeOf(arrayValue, "array")}`);
