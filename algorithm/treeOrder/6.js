const key ='abc123'
let points = 50
let winner = false

const person={
    name:'John',
    age:18,
}


// const wes = person //引用(会把person的内存地址赋值给wes)
// wes.age=19
// console.log(wes,person);

//函数是对象， 静态的方法 属于类
// const wes = Object.assign({},person)//拷贝(得到的是Person的值)
// wes.age=30
// console.log(wes,person);


// 不可写 冻结对象 unwritable
const wes=Object.freeze(person);
person.age=21;
wes.hometowm='萍乡'
console.log(wes);