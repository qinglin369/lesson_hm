function spralOrder(matrix) {
  if (!matrix.length) {
    return [];
  }
  let res = [];
  let top = 0, bottom = matrix.length-1;// 行 从上到下
  let left = 0, right = matrix[0].length-1; // 列 从左到右
  while(top <= bottom && left <= right) {
    for(let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }  
  }
  


}