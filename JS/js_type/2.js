let obj1={
    name:"大壮",
    job:"前端开发工程师",
    company:"字节"
}

obj1.hometown="北京"//再加一个属性

let a=10;
//拷贝
let b=a;
b=20;
//引用式赋值
let obj2=obj1;
obj2.name="二壮";
console.log(obj1)
console.log(obj2)
console.log(a,b);
