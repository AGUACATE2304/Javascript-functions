/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generates a random number depending on a limit
 * @param {number} number Min limit to generate
 * @param {number} number Max limit to generate
 * @returns {number}
 */

const generateRandomNumberInRange = function (minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

  return randomNumber;
};

export default generateRandomNumberInRange;
