# Unicode 和utf 编解码的原理和不同

Unicode是「字符集」，而UTF-8是「编码规则」。

字符集为每一个「字符」分配一个唯一的ID(学名为码位/码点/Code Point)，而「编码规则」则是将「码位」转换为字节序列的规则。

广义的Unicode是一个标准，定义了一个字符集以及一系列的编码规则，即Unicode字符集和UTF-8、UTF-16、UTF-32等等。

Unicode字符集为每一个字符分配一个码位，例如「田」的码位是30000，记作U+7530(30000的16进制为0x7530)。

UTF-8顾明思义，是一套以8位为一个编码单位的可变长编码。会将一个码位编码为1到4个字节
