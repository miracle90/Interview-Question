# EventEmitter

发布 + 订阅

### on、emit、off、once

```
// 事件触发器
function EventEmitter() {
  this._events = {}
}

EventEmitter.prototype.on = function (event, cb, flag = false) {
  this._events[event] = this._events[event] = []
  if (!this._events[event].includes(cb)) {
    this._events[event].push(cb)
    cb.flag = flag
  }
}

EventEmitter.prototype.off = function (event) {
  if (this._events[event]) {
    // 如果传入cb，只清一个，否则全部清除
    // this._events[event] = this._events[event].filter(item => item !== event)
    this._events[event] = []
  }
}

EventEmitter.prototype.once = function (event, cb) {
  this.on(event, cb, true)
}

EventEmitter.prototype.emit = function (event, ...args) {
  if (this._events[event]) {
    this._events[event].forEach(item => {
      item.call(this, ...args)
      if (item.flag) this.off(event)
    })
  }
}

// flag是否只执行一次
// EventEmitter.prototype.on = function (event, cb) {
//   this._events[event] = this._events[event] || []
//   if (!this._events[event].includes[cb]) {
//     this._events[event].push(cb)
//   }
// }

// // EventEmitter.prototype.once = function (event, cb) {
// //   this.on()
// // }

// EventEmitter.prototype.emit = function (event, ...args) {
//   if (this._events[event]) {
//     this._events[event].forEach(fn => {
//       fn.call(this, args)
//     })
//   }
// }

// EventEmitter.prototype.off = function (event, cb) {
//   if (this._events[event]) {
//     if (!cb) {
//       this._events[event] = []
//     } else {
//       this._events[event] = this._events[event].filter(item => item !== cb)
//     }
//   }
// }


let e = new EventEmitter()

e.on('dispatch', function (o) {
  console.log(o)
})
// e.once('dispatch', function (o) {
//   console.log(o)
// })
e.emit('dispatch', 'abc')
e.emit('dispatch', 'abc')
e.emit('dispatch', 'abc')
e.off('dispatch')
e.emit('dispatch', 'abc')
```
