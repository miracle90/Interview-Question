# 图片上传进度如何获取

```
xhr.upload.addEventListener("progress", function(evt){
    if (evt.lengthComputable) {
        var percentComplete = Math.round(evt.loaded * 100 / evt.total);
        document.getElementById("show"+fileId+"Me").innerHTML = '上传中'+percentComplete+"%";
    }else {
        document.getElementById("show"+fileId+"Me").innerHTML = '无法计算';
    }
}, false);
```
