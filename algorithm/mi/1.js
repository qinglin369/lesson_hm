//求x的n次方
function fun1(x,n){
    let result=1;
    for(let i=0;i<n;i++){
        result*=x
    }
    return result
}
//时间复杂度O(n)
