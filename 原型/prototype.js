function Foo(){
    this.value='哈哈'
}
Foo.prototype.sayValue=function(){
    console.log(this.value)
}
function Too(){

}
Too.prototype=new Foo()
Too.prototype.foo='hello world!'
Too.prototype.constructor=Too
var t= new Too()

console.log(t.value)