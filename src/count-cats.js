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

  let rez=0;
  for(let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[i].length; j++)
    {matrix[i][j]=='^^' ? rez+=1:rez=rez;} 
  }
  return(rez);
  }




module.exports = {
  countCats
};
