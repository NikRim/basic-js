const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let A=[];
  let REZ=[];
  const M=members || [''];
  for (let i=0; i<M.length; i++){if (typeof(M[i])==="string" ){
     A.push(M[i].match(/[A-z]/))
    }
  } 
  A=A.join('');
  A=A.toUpperCase();
  REZ=A.split('');
  REZ=REZ.sort();
  REZ=REZ.join('');
  return REZ

 }
module.exports = {
  createDreamTeam
}
