//编写一个函数， [1,2,3,4,5,6,7,8,9,0]
//return "(123) 456-7890"
function getPhoneNumbers(arry){
//    return "("+arry[0]+arry[1]+arry[2]+")"+" "+arry[3]+arry[4]+arry[5]+"-"+arry[6]+arry[7]+arry[8]+arry[9];
//es6 模版字符串 提升代码的可读性
return '(${arry[0]}${arry[1]}${arry[2]})'
}
console.log(getPhoneNumbers([1,2,3,4,5,6,7,8,9,0]))
