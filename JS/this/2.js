var name="刀郎"
var a={
    name:"薛之谦",
    func1:function(){
        console.log(this.name);
    },
    func2:function(){
       setTimeout(function(){
        // this.func1();
        this.func1()
       }.call(a),1000)
    }
}
a.func2();
// this.func1();这一句是普通函数调用，this指向window全局找不到func1