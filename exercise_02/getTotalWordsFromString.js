/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Get the total number of words contained in one string.
 * @param {string} sentence sentence to count words on
 * @return {number}number of words on a sentence
 */

const getTotalWordsFromString = function (sentence) {
  const words = sentence.split(/\s+/);
  let filteredWords = words.filter((word) => word.length > 0);
  return filteredWords.length;
};

export default getTotalWordsFromString;
