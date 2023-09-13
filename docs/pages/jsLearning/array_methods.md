---
title: 数组的方法和实现原理
author: 曾田
date: '2023-09-13'
---
# 背景
这两天写代码的时候看到别人写的大量的`if...else...`逻辑，于是想重构一下，改成责任链模式，大概是下面这样子(假设代码没有异常逻辑):
```js
rule1 = {
    check: async () => {},
    handler: () => {}
},
rule2 = {
    check: () => {},
    handler: () => {}
} 
[rule1, rule2].find(rule => {
    return rule.check();
}).handler()
```
结果发现不管怎么`find`返回的都是第一个策略，于是很纳闷，去搜了一下`find`的使用，有些文档也没有说的很详细，其实数组的方法处理都只能处理同步函数，对于异步就得不到我们想要的结果了，然后趁次也复习一下数组的方法

---
## find
- **使用:** 返回第一个符合传入测试（函数）条件的数组元素
```js
let arr = [1, 3, 5];
let num = arr.find(num => {
    return num > 1;
})
console.log(num)
// 打印出3
```
- **返回值:** 返回找到的第一个满足要求的元素，若没有找到则返回`undefined`
> 备注: 查询数组中满足条件的元素，对空数组不会处理，也不会改变原始数组
- **实现原理**
```js
Array.prototype.find = function(fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            return this[i];
        }
    }
}
```
## filter
- **使用:** 按顺序检测数值元素，并返回符合条件所有元素的数组
```js
let arr = [1, 3, 5];
let numList = arr.filter(num => {
    return num > 1;
})
console.log(numList)
// 打印出[3,5]
```
- **返回值:** 该方法会创建一个新数组，新数组中的元素是原数组中满足筛选条件的元素
> 备注: 该方法不会对空数组检测，同时也不会改变原始数组
- **原理**
```js
Array.prototype.filter = function(fn) {
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}
```

## map
- **使用:** 通过指定函数处理数组的每个元素，并返回处理后的数组
```js
let arr = [1, 3, 5];
let numList = arr.filter(num => {
    return num + 1;
})
console.log(numList)
// 打印出[2,4,6]
```
- **返回值:** 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
> 备注: 该方法不会对空数组进行检测,不会改变原始数组
- **原理**
```js
Array.prototype.map = function(fn) {
    let arr = [];
    for (let i = 0; i < this.length; i++){
        let result = fn(this[i], i, this);
        arr.push(result);
    }
    return arr;
}
```

## some
- **使用:** `some()`方法用于检测数组中的元素是否满足指定条件, 如果有一个元素满足条件，则表达式返回`true` , 剩余的元素不会再执行检测, 否则返回`false`
```js
let arr = [2, 4, 6, 8];
let flag = arr.some(function(item) {
    return item > 5
});
console.log(flag); //true
```
- **返回值:** `true` 或 `false`
> 备注: 该方法不会对空数组进行检测, 不会改变原始数组
- **原理**
```js
Array.prototype.some = function(fn) {
    for (let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)) return true;
    }
    return false;
}
```

## every
- **使用:** `every()`方法用于检测数组所有元素是否都符合指定条件, 如果数组中检测到有一个元素不满足，则整个表达式返回`false`, 如果所有元素都满足条件，则返回`true`
```js
let arr = [2, 4, 6, 8];
let flag = arr.every(function(item) {
    return item > 5
});
console.log(flag); //false
```
- **返回值:** `true` 或 `false`
> 备注: 该方法不会对空数组进行检测, 不会改变原始数组
- **原理**
```js
Array.prototype.every = function(fn) {
    for (let i = 0; i < this.length; i++){
        if (!fn(this[i], i, this)) return false
    }
    return true;
}
```

## reduce
- **使用:** `reduce()`方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值，接受两个参数: `callback`和`inivialValue`
    - `callback`参数值:
        - `pre`: 上一次`callback`返回的值；
        - `cur`: 当前遍历到的数组中的元素；
        - `index`: 当前遍历到的数组中的元素索引；
        - `array`: 调用`reduce`方法的数组；
    - `inivialValue`: 初始值, 当给定了`initialValue`, 数组的遍历会从第一项开始, `callback`函数里的`pre`初始值为`initialValue`；当没有给定`initialValue`时, 数组的遍历会从第二项开始, `callback`函数里的`pre`初始值为数组中的第一项

    
```js
let arr = [2, 4, 6, 8];
let flag = arr.every(function(item) {
    return item > 5
});
console.log(flag); //false
```
- **返回值:** 没有明确的返回值, `reduce`方法可以用来**累加**、**累乘**、**数组去重**、**对象属性求和**、**对象属性分类**、**二维数组转一维**、**多维数组转一维**
> 备注: 当数组为空且不传递`initialValue`时, 会抛出`TypeError`
- **原理**
```js
Array.prototype.reduce = function(fn, initialValue) {
    if (!this.length && !arguments[1]) throw new TypeError('Reduce of empty array with no initial value');
    if (!this.length) return initialValue;
    const startIndex = initialValue !== undefined ? 0 : 1;
    let pre = initialValue !== undefined ? initialValue : this[0];
    for (let i = startIndex; i < this.length; i++){
        pre = fn(pre, this[i], i, this);
        console.log('pre', pre)
    }
    return pre;
}
```

