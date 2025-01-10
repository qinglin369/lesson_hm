//和普通函数区别在哪？
//构造对象的过程 构造函数 constructor
function Person(name,age){
    this.name=name;
    this.age=age;
}

const wen=new Person("文",18);
console.log(wen.name,wen.age);
const chen=new Person("陈",19);
console.log(chen.name,chen.age);