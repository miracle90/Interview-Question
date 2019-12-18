# setTimeOut 和 setInterval 底层的区别

### setTimeout

setTimeout的运行机制相对简单，即在执行该语句时，设置一个定时器，定时时间置为所设置的延时，当计时结束后，将传入的函数加入任务队列，之后的执行就交给任务队列负责

### setInterval

setInterval本质上就是每隔一定的时间向任务队列添加回调函数。但setInterval有一个原则：在向队列中添加回调函数时，如果队列中存在之前由其添加的回调函数，就放弃本次添加（不会影响之后的计时）。另外也可以通过clearInterval方法移除定时器，使用方法同clearTimeout。

由于setInterval只负责定时向队列中添加函数，而不考虑函数的执行


当使用setInterval()时，仅当没有该定时器的任何其他代码实例时，才将定时器代码添加到队列中。这确保了定时器代码加入到队列中的最小时间间隔为指定间隔

### setTimeout模拟setInterval

```
var timer;
function func(args){
  //函数本身的逻辑
  ...
  //函数执行完后，重置定时器
  timer = setTimeout(func, 100, args);
}
timer = setTimeout(func, 100, args);
```
