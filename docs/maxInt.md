# 两个大整数相加

Js 和任何一门语言一样，对其数值的范围有限制

```
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_VALUE // 5e-324
Number.MIN_SAFE_INTEGER // -9007199254740991
```

如果我们想要对一个超大的整数(> Number.MAX_SAFE_INTEGER)进行加法运算，但是又想输出一般形式，那么使用 + 是无法达到的，一旦数字超过 Number.MAX_SAFE_INTEGER 数字会被立即转换为科学计数法，并且数字精度相比以前将会有误差。在此时就需要自己实现一套加法算法。

### 解决方案

```
function sumBigNumber(a, b) {
  var res = '',
    temp = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    // ~~取整数，当数组为[]
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    // 精妙的地方，js隐式转换，true => 1，false => 0
    temp = temp > 9;
  }
  // 过滤前头的0
  return res.replace(/^0+/, '');
}

var max1 = '999'
var max2 = '8'

console.log(sumBigNumber(max1, max2))
```
