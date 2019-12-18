# 笔试题大全

### 腾讯笔试题

#### 两大数相加

### 明源云笔试题

#### 请使用正则表示式实现方法 numSplit，为任意数字添加千分位分隔符，注意参数校验

```
function formatNum(num) {
  // (num.toFixed(2) + '') 保留两位小数
  return num && num.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}

console.log(formatNum(-123456789.123456))
```

#### [LazyMan构造函数](https://github.com/miracle90/Interview-Question/blob/master/docs/lazyman.md)

### shopee笔试题

#### uncode 和utf 编解码的原理和不同

#### base64和二进制的不同

#### 绑定事件的不同种方式，执行顺序，区别在哪里

#### css 实现旋转、拖拽、手势移动

#### http 非常见code和使用场景

#### 前端截图上传服务器如何实现

#### 前端截图上传服务器如何实现

#### 图片上传进度如何获取

#### 前端无限滚动如何设计

#### 持久化缓存

#### 手写正则

#### [] == false 和 !![] == true

#### setTimeOut 和 setInterval 底层的区别
