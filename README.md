# 笔试题大全

## 腾讯笔试题

* [实现EventEmitter](https://github.com/miracle90/Interview-Question/blob/master/docs/eventEmitter.md)

* [实现大整数加法](https://github.com/miracle90/Interview-Question/blob/master/docs/maxInt.md)

* [使用JS实现一个repeat方法，function repeat (fn, times, wait) {}，const repeatFunc = (alert, 4, 3000)，调用这个repeatFunc('Hello World')，会alert4次Hello World，每次间隔3秒](https://github.com/miracle90/Interview-Question/blob/master/docs/repeat.js)

## 明源云笔试题

* 请使用正则表示式实现方法 numSplit，为任意数字添加千分位分隔符，注意参数校验

```
function formatNum(num) {
  // (num.toFixed(2) + '') 保留两位小数
  return num && num.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}

console.log(formatNum(-123456789.123456))
```

* [LazyMan构造函数](https://github.com/miracle90/Interview-Question/blob/master/docs/lazyman.md)

## shopee笔试题

* Unicode 和utf 编解码的原理和不同

Unicode是「字符集」，而UTF-8是「编码规则」。

字符集为每一个「字符」分配一个唯一的ID(学名为码位/码点/Code Point)，而「编码规则」则是将「码位」转换为字节序列的规则。

广义的Unicode是一个标准，定义了一个字符集以及一系列的编码规则，即Unicode字符集和UTF-8、UTF-16、UTF-32等等。

Unicode字符集为每一个字符分配一个码位，例如「田」的码位是30000，记作U+7530(30000的16进制为0x7530)。

UTF-8顾明思义，是一套以8位为一个编码单位的可变长编码。会将一个码位编码为1到4个字节：


* base64和二进制的不同

二进制是计算机最基础的一种数据表示，是计算机的一中数制。
而base64是一中加密的方法，目的是为了数据不通过明文暴露在肉眼中，计算机中二进制8位为一个字节，而base64加密算法中6bit为一组，然后在高位补0，补齐8位后在转10进制，转10进制后有一张base64的对照表，在转换成英文字母或字符，就起到了加密的作用。

* 绑定事件的不同种方式，执行顺序，区别在哪里

element.addEventListener(DOM事件名，事件触发时执行函数，指定是否是冒泡执行, false是冒泡)

* css 实现旋转、拖拽、手势移动

移动端

touchstart touchmove

element.target.getBoundingClientRect().left

PC端

onmousedown onmousemove onmouseup

scrollTop clientWidth offsetWidth


* http 非常见code和使用场景

206,307,417

* 前端截图上传服务器如何实现

#### 图片上传进度如何获取

#### 前端无限滚动如何设计

#### 持久化缓存

#### 手写正则

#### [] == false 和 !![] == true

#### setTimeOut 和 setInterval 底层的区别
