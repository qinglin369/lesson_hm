// 贪心策略 局部最优解 全局最优解
function coinChange(coins,amount){
  let i = coins.length-1;
  let count = 0;
  while(amount>=0){// 还要找零
    //假设已经是什序
    while(i>0 && coins[i]>amount){
      i--;
    }
    amount -= coins[i];
    count++;
  }
  return amount == 0 ? count : -1;
}
coinChange([1,5,10,20,50,100],131)
// coinChange([1,20,50],60),不适合贪心算法
console.log(coinChange([2,5],3))