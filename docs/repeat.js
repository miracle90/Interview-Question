// 使用JS实现一个repeat方法，function repeat (fn, times, wait) {}，const repeatFunc = (alert, 4, 3000)，调用这个repeatFunc('Hello World')，会alert4次Hello World，每次间隔3秒

```
function repeat(func, times, wait) {
  return message => {
    func(message)
    let timer = setInterval(() => {
      times-- > 1 ? func(message) : clearInterval(timer);
    }, wait);
  };
}

const repeatFunc = repeat(console.log, 4, 3000)
repeatFunc('Hello World')
```
