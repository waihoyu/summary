# 笔记总结

[TOC]

## 第 1 题：关于v-for中，key的作用

>  写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

## 第 2 题：parseInt的运算结果

>  ['1', '2', '3'].map(parseInt) what & why ? 

```
    真正的答案是[1, NaN, NaN]。
    console.log(['1', '2', '3'].map(parseInt)); //[ 1, NaN, NaN ]
    console.log(parseInt('3',3)); //NaN
    console.log(parseInt('4',4)); //NaN
```

## 第 3 题：防抖和截流

> 什么是防抖和节流？有什么区别？如何实现？

## 第 4 题：CSS样式中px、em和rem单位的区别

    ```
        https://blog.51cto.com/smalljiayi/1962006
    ```

## 第 5题：常用的正则表达式

### 1、验证是否为有效数字


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

/**
   验证汉字  /^[\u4E00  -  \u9FA5]$/
*/

 ```

## 第 5题：手动实现promise

### 



## 第 6题：vue中的数据绑定





## 第 7题：JavaScript异步方式

## 



## 第 8题：JavaScript 执行机制

> []: https://juejin.im/post/59e85eebf265da430d571f89

## 第 9题：说出几种数组去重的方式