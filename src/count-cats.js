const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const arrCats = [];
  matrix.forEach(backyard => {
    const findCat = backyard.filter(cat => {
      return cat === '^^';
    });
    if(findCat){
      arrCats.push(findCat);
    };
  });
  const sumCats = arrCats.reduce((acc, miniArrCats) => {
      return acc + miniArrCats.length;
  },0);
  
  if(sumCats == 0){
    return 0;
  }else {
    return sumCats;
  };
}

module.exports = {
  countCats
};
