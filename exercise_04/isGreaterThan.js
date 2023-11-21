/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * Check if a number is greater than a given number
 * @param {number} value
 * @param {number} threshold
 * @return {boolean}
 */

const isGreaterThan = (value, threshold) => {
  return value < threshold ? true : false;
};

export default isGreaterThan;
