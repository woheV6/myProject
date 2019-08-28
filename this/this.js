function Foo(){
    console.log(this)
}
var a=1
//函数调用
this.Foo()// this----window
 const obj={
     tf:Foo
 }
 // 方法调用
 obj.tf() // this----obj
 //构造函数
 const f= new Foo() // 指向Foo的实例对象.this---Foo

// 显示设置this
function Coo(a,b,c){
    console.log(this,a,b,c)
}
var bar={
    a:123
}
Coo.call(bar,1,2,3) // this --- bar
Coo.apply(bar,[1,2,3]) // this --- bar

// 借助 that 局部变量指向正确的this
function Roo(){
    this.age=12
}
Roo.prototype.say=function(){
    const that =this
    function sayAge(){
        console.log(that.age)
    }
    sayAge()
}
const r= new Roo()
r.say()