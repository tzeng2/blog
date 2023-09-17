---
title: Set和Map
author: 曾田
date: '2023-09-17'
---


# Set
JavaScript 的 Set（集合）是一组唯一值的集合, 每个值在Set中只出现一次

**创建方式:** 可以通过`new Set([1,2,3])`或者`new Set()`以后通过`add`方法
```js
let set = new Set([1,2,3])
// 或者
let set = new Set().add(1).add(2).add(3)
```
## 方法
- **`add()`:** 向 `Set` 中添加新元素，添加已经存在的元素不会生效，只会存在一个
- **`delete()`:** 从 `Set` 中移除元素
- **`has()`:** 如果值存在则返回 `true`
- **`clear()`:** 从 `Set` 中移除所有元素
- **`forEach()`:** 为每个元素调用回调函数
- **`values()`:** 返回包含 `Set` 中所有值的迭代器
- **`keys()`:** 与 `values()` 相同
- **`entries()`:**  返回迭代器，其中包含 Set 中的 `[value,value]` 值值对


## 属性
- **size:**  返回 `Set` 中元素的数量



# Map
Map结构用来保存键值对，和Object有点类似，但是也存在区别


**创建方式:** 可以通过`new Map([['a', 1], ['b', 2]])`或者`new Map()`以后通过`set`方法
```js
let set = new ([['a', 1], ['b', 2]])
// 或者
let set = new Set().set('a', 1).set('b', 2)
```
## 方法
- **`set()`:** 为 `Map` 中的键设置值
- **`get()`:** 获取 `Map` 对象中键的值
- **`clear()`:** 从 `Map` 中移除所有元素
- **`delete()`:** 删除由某个键指定的 `Map` 元素
- **`has()`:** 如果键存在于 `Map` 中，则返回 true
- **`forEach()`:** 为 `Map` 中的每个键/值对调用回调函数, 注意这里的`forEach((value, key) => {})`调用的时候前一个是值, 后一个是键
- **`values()`:** 返回迭代器对象，其中包含 `Map` 中的值
- **`keys()`:** 返回迭代器对象，其中包含 `Map` 中的键
- **`entries()`:**  返回迭代器对象，其中包含 `Map` 中的 `[key, value]` 键值对


## 属性
- **size:**  返回 `Map` 中元素的数量

## Map和Object的区别
Object(对象) | Map(映射) 
:----------:|:--------:
不可直接迭代 | 可直接迭代
无size属性 | 有size属性
键只能是string或者num | 键可以是任何值
无序 | 有序(按照键插入的顺序)
有默认键 | 无默认键
**使用场景**: 
通过上面的比较可以看出 `Map` 相对于 `Object` 具有优势，但仍有一些情况下 `Object` 会表现得更好。那么什么情况下使用 `Map` ，什么情况下使用 `Object`?
- 当只需要简单的结构来存储数据并且知道所有键都是字符串或整数（或符号）时，`Object` 是一个很好的选择，因为创建普通对象并使用特定键访问对象的属性比创建一个 `Map` 快得多
- 当在需要将单独的逻辑应用于单个属性/元素的场景中，`Object` 绝对是最佳选择
- `Map` 是纯粹的哈希，`Object` 不止于此（支持内部逻辑）。如果需要大量添加和删除属性的情况下，Map 可能会表现得更好
- `Map` 保留其键的顺序，并且 `Map` 的构建考虑到了迭代，所以如果迭代或元素顺序非常重要。
- `Map` 在存储大量数据时往往表现更好，尤其是当键在运行时未知，并且所有键的类型和所有值的类型都相同时




---
# Iterator
可迭代对象(Iterator)是指可以使用for...of...进行迭代的对象
从技术上讲, 可迭代对象必须实现Symbol.iterator方法
## 原生具备 Iterator 接口的数据结构如下
- **Array**
- **String**
- **Map**
- **Set**
- **函数arguments对象**
- **TypedArray**
- **NodeList对象**
## JavaScript迭代器
当对象实现了`next()`方法时，它就成为一个迭代器，`next()`方法必须返回带有两个属性的对象:
- `value`
- `done`(`true` or `false`)
## iterator实现
只需要给对象的`Symbol.iterator`属性加上迭代器就好了
```js
// 生成10-100之间的iterator
let initalVal = 0;
let done = false;
function next(){
    done = initalVal === 100;
    return {
        done: done, // 当done为false时可省略
        value: initalVal+=10 // 当value为undefined时可省略
    }
}
let obj = {
    
}
obj[Symbol.iterator] = function (){return {next}};
// for (let i of obj){console.log(i)}
```
如果你知道`Generator`的话，其实最简单的方式是通过`Generator`实现:
```js
let obj = {};
obj[Symbol.iterator] = function* () {
    for (let i = 10; i <= 100; i+=10) {
        yield i;
    }
}
```
