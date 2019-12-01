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

## 第 4 题：px、em和rem单位的区别

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

## 第 9题：async/await的执行顺序

```javascript
console.log(1);

setTimeout(function(){
    console.log(2);
},0);  //微任务

new Promise(function(){
    console.log(3);
}).then(function(){
    console.log(4);
});

async function fn(){
    await function () {
        console.log(5);
      }
    console.log(6);
}

fn();

console.log(7);
```

> 执行结果（在浏览器里面的执行结果为）：
>
> 1 3 7 6 2

>对于async/await的理解：
>
>1.async做了一件什么事情？
>
>async将你的函数返回值转换为promise对象，不需要显式地返回promise对象，async关键字自动将函数的返回值变为promise对象。
>
>2.await的作用
>
>await关键字只能在带有async关键字的函数内部使用，在外部使用时会报错。await等待的是右侧的[表达式结果]，如果右侧是一个函数，等待的是右侧函数的返回值，如果右侧的表达式不是函数则直接是右侧的表达式。await在等待时会让出线程阻塞后面的执行。await的执行顺序为从右到左，会阻塞后面的代码执行，但并不是直接阻塞await的表达式。
>
>await之后如果不是promise，await会阻塞后面的代码，会先执行async外面的同步代码，等外面的同步代码执行完成在执行async中的代码。
>
>如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。

## 第 8题：JavaScript 执行机制

> []: https://juejin.im/post/59e85eebf265da430d571f89

## 第 9题：说出几种数组去重的方式





## 第10题：代码编写规范

>  callback && callback（）