var reg = /\d/;
console.log(reg.test('你好'));// 查看后边的字符中有没有 满足正则的字符//false
console.log(reg.test('你好134'));//true
console.log(reg.test('你好2'));//true
console.log(reg.test('你0好'));//true
console.log(reg.test('1你0好'));//true

console.log('================================')
var reg2 =/\D/;
console.log(reg2.test('你好'));//true
console.log(reg2.test('你好134'));//true
console.log(reg2.test('你好2'));//true
console.log(reg2.test('你0好'));//true
console.log(reg2.test('1你0好'));//true
console.log(reg2.test('1你0好'));//false

console.log('================================')
var reg3 = /\w/
console.log(reg3.test('你好'));//false
console.log(reg3.test('你好134'));//true
console.log(reg3.test('你好2'));//true
console.log(reg3.test('你0好'));//true
console.log(reg3.test('1你0好'));//true
console.log(reg3.test('1你0好'));//true

console.log('================================')
var reg4 = /^\d/;//以数字开头
console.log(reg4.test('你好'));
console.log(reg4.test('你好134'));
console.log(reg4.test('你好2'));
console.log(reg4.test('你0好'));
console.log(reg4.test('666'),222222222);
console.log(reg4.test('1你0好'),222222);
console.log(reg4.test('你0好'));


console.log('================================')
var reg5 = /\d$/;// 以数字结尾
console.log(reg5.test('你好'));
console.log(reg5.test('你好134'),222);
console.log(reg5.test('你好2'),22222);
console.log(reg5.test('你0好'));
console.log(reg5.test('666'),222222222);
console.log(reg5.test('1你0好'),);
console.log(reg5.test('你0好'));

console.log('================================')
var reg6 = /^\d$/;// 以数字开头，并且以这个数字结尾  也就是只能是一个数字
console.log(reg6.test('你好'));
console.log(reg6.test('你好134'));
console.log(reg6.test('你好2'));
console.log(reg6.test('你0好'));
console.log(reg6.test('666'),);
console.log(reg6.test('1你0好'));
console.log(reg6.test('你0好'));
console.log(reg6.test('7'),11111111111);

console.log('================================')
var reg7 = /\./;// . 在正则中代表除了换行符以外的所有字符  \.  才代表点本身
console.log(reg7.test('123'));
console.log(reg7.test('12.3'));
console.log(reg7.test('qweqa.serx'));


console.log('================================')
var reg8 = /[ab]/;// 字符串中含有 a 或 b 就是
console.log(reg8.test('ahello'));
console.log(reg8.test('hello'));
console.log(reg8.test('hello  b'));
console.log(reg8.test('hello  ab'));

// 能匹配 数字 和 字母的正则
var reg9 = /[0-9a-zA-Z]/
console.log(reg9.test('aBc'));
console.log(reg9.test('6abc'));
console.log(reg9.test('_'));
console.log(reg9.test('你好'));

console.log('================================')
var reg10 = /^18|19$/

console.log(reg10.test('1819'));
console.log(reg10.test('18'));
console.log(reg10.test('19'));
console.log(reg10.test('1'));
console.log(reg10.test('9'));
console.log(reg10.test('819'));

