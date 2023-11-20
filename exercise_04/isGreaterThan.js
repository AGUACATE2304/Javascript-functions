/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 *
 * @param {number} value
 * @param {number} threshold
 * @return {boolean}
 */

const isGreaterThan = (value, threshold) => {
  return value < threshold ? true : false;
};

export default isGreaterThan;
