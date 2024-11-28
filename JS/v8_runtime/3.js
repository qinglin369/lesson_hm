function bar(){
    console.log(myname)
}
function foo(){
    var myname="肖总";
    bar()
    console.log(myname);
}
console.log(myname);
foo();