/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * Check if the sum is 50 or greater than 50
 * @param {number} firstNumber The first number
 * @param {number} secondNumber The second number
 * @return {boolean}
 */

const isAdditionGreaterThanFifty = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;
  if (sum < 50) return false;
  if ((sum) >= 50) return true;
};

export default isAdditionGreaterThanFifty;
