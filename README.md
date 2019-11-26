# 笔记总结

[TOC]

# 第 001 题：写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

>  

# 第 002 题：['1', '2', '3'].map(parseInt) what & why ? #4

>  22

```
真正的答案是[1, NaN, NaN]。
console.log(['1', '2', '3'].map(parseInt)); //[ 1, NaN, NaN ]
console.log(parseInt('3',3)); //NaN
console.log(parseInt('4',4)); //NaN
```

# 第 003 题：什么是防抖和节流？有什么区别？如何实现？


 ```


 ```

# 第 004 题：css单位中px和em,rem的区别

```
 https://blog.51cto.com/smalljiayi/1962006
```

# 第 005题：常用的正则表达式

## 1、验证是否为有效数字


 ```javascript
/**
规则分析
1、可能出现+ -，也可能不出现
2、一位0-9都可以，多位首位不能是0
3、小数部分可能有可能没有，一旦有后面必须有小数点+数字
*/

let num = -0.234
let reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
let reg3 =  /^(\+|\-)?(\d|([1-9]\d+))(\.\d+)?$/;

console.log(reg.test(num));
console.log(reg3.test(num));

 ```




