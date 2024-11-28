var foo = function() {
    var a=3,b=5;
    var bar=function(){
        var b=7,c=11;
        a+=b+c;
        console.log(a,b);
        console.log(c);
    }
    console.log(a,b);
    console.log(c);
    bar();
    console.log(a,b)

};