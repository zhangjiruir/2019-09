RegExp.prototype.execAll = function (str='') {
    // 首先查看对应的正则有没有 修饰符 g
    var reg = this;
    if(!reg.global){
        // 代表正则没有修饰符g  需要我们补一个 g
        reg = eval(reg.toString()+'g')
        // return; 
    }
    // 怎么保证str是字符串？
    str = str.toString();
    // this --->  reg2
    var res = reg.exec(str);
    var ary = [];
    while(res){
        ary.push(res);
        res = reg.exec(str);// 每次while循环都要更新res;
    } 
    return ary
}
// var str = '你好2019www哈哈2018hello珠峰2020qqq哈哈2021world';// 只捕获哈哈后边的数字 
// var reg2 = /哈哈(\d+)([a-z]+)/;
// console.log(reg2.execAll(str))