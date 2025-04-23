var obj = {
 valueOf() {
    return 4;
 },
 toString() {
   return '5' 
 },
 
 [Symbol.toPrimitive](){
   return 6;
 }
}
console.log(obj + 1);