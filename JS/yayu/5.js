function Person(name,age){
    console.log(this);
    this.name=name;
    this.age=age;
}
//原型？ cy
const cy={
    name:'陈颜',
    playBasketball(){
        console.log('东理科比来了')
    }
}
// 原型
Person.prototype=cy;
const wu=new Person('武',18);
wu.playBasketball();
console.log(wu.__proto__===cy);