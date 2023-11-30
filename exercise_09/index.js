import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";

const under100Value = 0;
console.log(getDistanceMessageFromSumTo100(under100Value)); // Sum with value 70 is left in 30 from number 100

const upper100Value = 100;
console.log(getDistanceMessageFromSumTo100(upper100Value)); // Sum with value 155 exceeds in 55 from number 100
