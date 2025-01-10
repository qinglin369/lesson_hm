const coinChange = function(coins,amount){
    const f = [];//每一个面额最优值
    f[0] = 0;// 初始值
    for(let i=1;i<=amount;i++){
        f[i] = Infinity;
        for(let j=0;j<coins.length;j++){
            if(i>=coins[j]){
                f[i] = Math.min(f[i],f[i-coins[j]]+1);
            }
        }
    }
    
    return f[amount]
}