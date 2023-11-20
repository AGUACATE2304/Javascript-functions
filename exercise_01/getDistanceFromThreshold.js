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
    return (value = value - threshold);
  }

  if (threshold > value) {
    return (threshold = threshold - value);
  }

  if (value === threshold) {
    return 0;
  }
};

export default getDistanceFromThreshold;
