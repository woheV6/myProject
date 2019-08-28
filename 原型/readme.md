# 读js秘密花园有感
## 小技巧
- 总是使用hasOwnProperty来取属性的时候,避免原型对象扩展带来的困扰;
- for in 循环
  - 和in操作符一样,for-in 同样在查找对象属性的时候会去原型链查找.
  - 同样是使用hasOwnProperty来过滤
## 函数
- 函数是一等公民,即使在定义前被使用,也不会有问题.因为函数在执行前会被解析.
- 赋值语句在调用时执行,所以函数表达式相当于变量赋值;
  - 如下:
   ```
    foo    // 'undefined'
    foo()  // 出错 TypeError
    var foo=function(){}
   ```
- 具名函数表达式
```
const foo = function bar(){
    bar() //内部可见
}
bar()  // 出错 ReferenceError
```