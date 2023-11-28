/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";
/**
 * Generates a random number between 0 and 100 and sume it to given number
 * @param {number} value Given number to sum to random number in range from 0 - 100
 * @returns {string} returns the number that exceeds or left from 100
 */
const getDistanceMessageFromSumTo100 = function (value) {
  const randomNumber = generateRandomNumberInRange(0, 100);
  const resultSumNumber = value + randomNumber;

  const exceedFrom100 = getDistanceFromThreshold(resultSumNumber - 100);
  const leftTo100 = getDistanceFromThreshold(100 - resultSumNumber);

  if (resultSumNumber > 100) {
    return (
      "Sum with value " +
      resultSumNumber +
      " exceeds in " +
      exceedFrom100 +
      " from number 100"
    );
  }

  return (
    "Sum with value " +
    resultSumNumber +
    " is left in " +
    leftTo100 +
    " from number 100"
  );
};

export default getDistanceMessageFromSumTo100;
