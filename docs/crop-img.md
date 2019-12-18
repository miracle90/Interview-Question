# 前端截图上传服务器如何实现

### 1、获取文件

HTML5 支持从 input[type=file] 元素中直接获取文件信息，也可以读取文件内容。我们用下面代码就可以实现

```
$('input[type=file]').change(function(){
    var file=this.files[0];
    // continue ...
});
```

### 2、读取文件，并生成 Image 元素

这一步就需要用到 FileReader 了，这个类是专门用来读取本地文件的。纯文本或者二进制都可以读取，但是本地文件必须是经过用户允许才能读取，也就是说用户要在input[type=file]中选择了这个文件，你才能读取到它。

通过 FileReader 我们可以将图片文件转化成 DataURL，就是以 data:image/png;base64, 开头的一种URL,然后可以直接放在 image.src 里，这样本地图片就显示出来了。

```
$('input[type=file]').change(function(){
    var file=this.files[0];
 
    var reader=new FileReader();
    reader.οnlοad=function(){
        // 通过 reader.result 来访问生成的 DataURL
        var url=reader.result;
        setImageURL(url);
    };
    reader.readAsDataURL(file);
});
var image=new Image();
function setImageURL(url){
    image.src=url;
}
```

### 3、获取裁剪坐标

### 4、裁剪图片

canvas

### 5、读取裁剪后的图片并上传

这时我们要获取 canvas 中图片的信息，用 toDataURL 就可以转换成上面用到的 DataURL 。 然后取出其中 base64 信息，再用 window.atob 转换成由二进制字符串。但 window.atob 转换后的结果仍然是字符串，直接给 Blob 还是会出错。所以又要用 Uint8Array 转换一下

```
var data=canvas.toDataURL();
 
// dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
data=data.split(',')[1];
data=window.atob(data);
var ia = new Uint8Array(data.length);
for (var i = 0; i < data.length; i++) {
    ia[i] = data.charCodeAt(i);
};
// canvas.toDataURL 返回的默认格式就是 image/png
var blob=new Blob([ia], {type:"image/png"});
```

这时候裁剪后的文件就储存在 blob 里了,我们可以把它当作是普通文件一样，加入到 FormData 里，并上传至服务器了。

FormData 顾名思义，就是用来创建表单数据的，用 append 以键值的形式将数据加入进去即可。但他最大的特点就是可以手工添加文件或者 Blob 类型的数据，Blob 数据也会被当作文件来处理。原生 js 可以直接传递给 xhr.send(fd)， jquery 可以放入 data 里请求。

```
var fd=new FormData();
fd.append('file',blob);
$.ajax({
    url:"your.server.com",
    type:"POST",
    data:fd,
    success:function(){}
});
```






