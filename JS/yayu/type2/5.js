let specialObj = {
    valueOf:function(){
        console.log("Calling valueOf...")
        return 123;

    },
    toString:function(){
        return "456"
    }
}


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
console.log(Number(objectWithoutPrimitiveValuOf))


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