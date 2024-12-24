
let specialObj = {
    valueOf:function(){
        console.log("Calling valueOf...")
        return 123;

    },
    toString:function(){
        return "456"
    }
}

console.log("第一种:")
console.log(Number(specialObj));// 转数字，找到valueOf

let objectWithoutPrimitiveValuOf = {
   valueOf:function(){
    console.log("Calling valueOf...")
       return this
   },
   toString:function(){
    console.log("Calling toString...")
    return "798"
   }
}
// to Primitive
console.log("第二种:")
console.log(Number(objectWithoutPrimitiveValuOf))


console.log("第三种:")
let problemObj = {
    valueOf:function(){
     console.log("Calling valueOf...")
        return this
    },
    toString:function(){
     console.log("Calling toString...")
     return this
    }
 }
try {
    console.log(Number(problemObj))
} catch (error) {
    console.log(error)
}