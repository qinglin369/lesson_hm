const climStairs = function(n){
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    return climStairs(n-1)+climStairs(n-2);
}