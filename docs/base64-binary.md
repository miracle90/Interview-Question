# base64和二进制的不同

二进制是计算机最基础的一种数据表示，是计算机的一中数制。
而base64是一中加密的方法，目的是为了数据不通过明文暴露在肉眼中，计算机中二进制8位为一个字节，而base64加密算法中6bit为一组，然后在高位补0，补齐8位后在转10进制，转10进制后有一张base64的对照表，在转换成英文字母或字符，就起到了加密的作用。
