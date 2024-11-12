function sayHello() {
    var name="金子涛";
    return "hello"+name;
    
}
//var es5 版本，全局作用域
var age=10;
//代码块
//块级作用域
if(age>5){
    //es6 新增的 let 块级作用域
    //let 声明的变量 只在当前块级作用域内有效
    let dogYears=age*7;
    var name="过帅";

    console.log("you are"+dogYears+"dog years old")
}
console.log(dogYears,"dogYears");
console.log(name,"name");
console.log(sayHello());
