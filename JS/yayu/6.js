function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.name='孔子'
Person.prototype.hometown='山东'
let person1=new Person('张总',18);
let perso2=new Person('郭总',19);
console.log(person1===perso2)
console.log(person1.name,person1.hometown,perso2.name)