function foo(){
    var a=1;
    let b=2;
    {
        let b=3;
        let d=5;
        var  c=4;
        console.log(a);
        console.log(b);
    }
    {
        let b=5;
    }
  console.log(b)//当里面的b=3执行完后 就销毁了  所以外面的b=2
  console.log(c)
  console.log(d)
}
foo()