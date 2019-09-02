// 封装一个 类数组转数组的方法
var olis = document.getElementsByTagName('li');
Object.prototype.trans = function(){
    // this 就是我们要去转化的类数组
    return [...this];
    return Array.from(this)
    return [].slice.call(this)    
}
var lis = olis.trans();

// 从数组或者类数组中随机删除几项  返回有删除项组成的新数组
Object.prototype.rm = function(n){
    //this.length  和 n 的情况
    if(n>this.length){
        throw new console.error('删除个数不合法');
    }
    // 随机删除 n 项 
    // slice 删除 某一（Math.round(Math.random()*(this.length-1))）项 
    // splice 的操作需要执行 n 次
    let ary =[];
    let temp = [...this];
    for(var i =0;i<n;i++){
        let m = Math.round(Math.random()*(temp.length-1));
        ary=ary.concat(temp.splice(m,1))
    }
    return ary
}

console.log([1,2,3,4].rm(4))// 随机筛选了两项  返回值是删除的项组成的新数组

Array.prototype.unique = function(){
    // 双for去重   每一轮都用当前项跟后面每一项比较 相等 就把后面的项删除；注意数组塌陷
    // 对象去重    利用对象的属性名不能重复的特点
    // indexOf lastIndexOf 合起来使用去重： 看当前项的indexof和lastindexof 是否相等；相等说明不重复
    var temp = new Set(this);
    return [...temp];
}


String.prototype.getParame = function(key){
    var str = this.split('?')[1];
    var ary = str.split('&');
    var obj = {};
    ary.forEach((item)=>{
        // item 是一些 'a=12' 'b=13' 之类的字符串
        var arr = item.split('=');
        obj[arr[0]] = arr[1];
    })
    // 参数判断
    if(key){
        return obj[key]
    }
    return obj;
}
var str = 'https://www.souyidai.com/p2p?id=3964660765015&a=12&b=23'
console.log(str.getParame('id'));//'3964660765015'
console.log(str.getParame('a'));//'12'
console.log(str.getParame('b'));//'23'
console.log(str.getParame());//整个对象返回