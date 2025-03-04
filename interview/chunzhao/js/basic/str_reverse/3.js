// 递归 ,自顶向下
// js api -> 算法
// 从api到算法的过程
function reverseString(str) {
    if ( str === '' ) {
        return ''; 
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString('hello'));