const r=/\bhi\b.*\bLucy\b/
const str='s hiLucy s hi Lucy'
console.log(r.test(str))
// 匹配 012-23325546
const r1= /0\d\d-\d\d\d\d\d\d\d\d/
console.log(r1.test('012-11111111'))
// 更优雅一点
const r11=/0\d{2}-\d{8}/
console.log(r11.test('012-11111111'))
// 验证qq号五位到12位
const r2=/^\d{5,12}$/
console.log('验证qq号五位到12位',r2.test('3131212222212'))
// 查找 .
const r3=/\./
console.log('查找 .',r3.test('.s'))

// 单词开头
const r4=/^\w+/
console.log('单词开头',r4.test('ds2d'))


// 
const r5=/\(?0\d{2}[) -]?\d{3}/
console.log(r5.test('(022-111'))
console.log(r5.test('(022)111'))
console.log(r5.test('(022 111'))
console.log(r5.test('022 111'))