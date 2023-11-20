/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * @param {Object | Array} collection
 * @return {boolean}
 */

const checkCollectionHasElements = (collection) => {
  return collection.length > 0 ? true : false;
};

export default checkCollectionHasElements;
