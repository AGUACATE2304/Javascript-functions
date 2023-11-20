/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 *
 * @param {number} number
 * @returns {number}
 */

const generateRandomNumberInRange = function (minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

  return randomNumber;
};

export default generateRandomNumberInRange;
