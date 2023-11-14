/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Check if a number exceeds or is left to reach one value
 * @param {number} value
 * @param {number} threshold
 * @returns number
 */
const getDistanceFromThreshold = function (value, threshold) {
  if (value > threshold) {
    value = value - threshold;
    return value;
  }

  if (threshold > value) {
    threshold = threshold - value;
    return threshold;
  }
};

export default getDistanceFromThreshold;
