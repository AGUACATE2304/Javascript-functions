import transformCollectionToString from "./transformCollectionToString.js";

const notEmptyCollection = ["Totodile", "Charizard", "Wingardium Leviosaa"];
console.log(transformCollectionToString(notEmptyCollection)); // Totodile | Charizard | Wingardium Leviosaa

const emptyCollection = [];
console.log(transformCollectionToString(emptyCollection)); // " "
