module.exports = function countCats(matrix) {
  let count=0;
  for(let arr of matrix){
    for (let item of arr){
      if(item=="^^") count++;
    }
  }
  return count;
};
