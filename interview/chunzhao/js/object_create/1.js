const personProto = { greet() {return 'hello'}}
// 比JSON 方便 指定原型
const person = Object.create(personProto);
person.name = 'John';
console.log(person,person.__proto__)


const pureObject = Object.create(null);
console.log(pureObject)

// Object.create() 是 JavaScript 内置方法，
// 用于创建一个新对象，并且将传入的对象
// （这里是 personProto）作为新对象的原型。
// 这意味着 person 对象会继承 personProto 对象的所有属性和方法