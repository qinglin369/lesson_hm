const f = [];//某层结果和数组的下标是一一对应的
const climbStairs = function(n){
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    if(f[n]===undefined)
        f[n]=climbStairs(n-1)+climbStairs(n-2);
    return f[n];
};

console.time("climb")
climbStairs(30);
console.timeEnd("climb")
console.log(climbStairs(30))