# 实现LazyMan

### 题目

```
实现一个LazyMan，可以按照以下方式调用:
LazyMan("Hank")输出:
Hi! This is Hank!
 
LazyMan("Hank").sleep(10).eat("dinner")输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~
 
LazyMan("Hank").eat("dinner").eat("supper")输出
Hi This is Hank!
Eat dinner~
Eat supper~
 
LazyMan("Hank").sleepFirst(5).eat("supper")输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
 
以此类推。
```

### 考察点

1. 方法链式调用
2. 类的使用和面向对象编程的思路
3. 设计模式的应用
4. 代码的解耦
5. 最少知识原则，也即 迪米特法则（Law of Demeter）
6. 代码的书写结构和命名

### 代码

```
function _LazyMan(name) {
  this.taskList = []
  var self = this
  var fn = (function (n) {
    var name = n
    return function () {
      console.log('Hi! This is ' + name + '!')
      self.next()
    }
  })(name)
  this.taskList.push(fn)
  setTimeout(function () {
    self.next()
  }, 0);
}

_LazyMan.prototype.next = function () {
  var fn = this.taskList.shift()
  fn && fn()
}

_LazyMan.prototype.eat = function (name) {
  var self = this
  var fn = (function (name) {
    return function () {
      console.log('Eat ' + name + '~')
      self.next()
    }
  })(name)
  this.taskList.push(fn)
  return this
}

_LazyMan.prototype.sleep = function (time) {
  var self = this
  var fn = (function (time) {
    return function () {
      setTimeout(function () {
        console.log('Wake up after ' + time + 's!')
        self.next()
      }, time * 1000);
    }
  })(time)
  this.taskList.push(fn)
  return this
}

_LazyMan.prototype.sleepFirst = function (time) {
  let self = this
  let fn = (function (time) {
    return function () {
      setTimeout(function () {
        console.log('Wake up after ' + time + 's!')
        self.next()
      }, time * 1000);
    }
  })(time)
  this.taskList.unshift(fn)
  return this
}

/* 封装 */
function LazyMan(name){
  return new _LazyMan(name);
}

// LazyMan('Hank')
// LazyMan('Hank').sleep(3).eat('dinner')
// LazyMan('Hank').eat('dinner').eat('supper')
LazyMan('Hank').sleepFirst(5).eat('supper')
```
