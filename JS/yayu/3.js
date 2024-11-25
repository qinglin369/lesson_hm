function Person(name,age){
    this.name=name;
    this.age=age;
}
Person("昌",18)//普通方式运行
const dys=new Person("昌",18);//构造函数方式运行
const dyf=new Person("威",20);//构造函数方式运行
