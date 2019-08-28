function test(a,b,c){
    console.log(arguments)
    const r= Array.prototype.slice.call(arguments)
    console.log(r)
}
test(1,2,3)


// 自动更新
function foo(a, b, c) {
    arguments[0] = 2;
    a; // 2                                                           

    b = 4;
    arguments[1]; // 4

    var d = c;
    d = 9;
    c; // 3
    console.log(a,b,c,arguments)
}
foo(1, 2, 3);