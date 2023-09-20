---
title: 数组的其它方法
author: 曾田
date: '2023-09-19'
---

## 可改变原数组的方法
- **`push()`**: 可以接收任意任意数量的参数，把它们逐个添加到末尾，并返回最终的数组长度
    - **返回值**: 新数组的长度
    - **Example:**
    ```js
    let arr = new Array();
    let len = arr.push(1, 2)
    // arr此时为[1,2], len为2
    ```
- **`pop()`**: 删除数组最后一项，并返回删除的项
    - **返回值**: 删除的数组元素
    - **Example:**
    ```js
    let arr = new Array(1,2);
    let dropItem = arr.pop();
    // dropItem为2
    ```
- **`shift()`**: 和`pop()`方法类似，但是它是删除数组的第一项
    - **返回值**: 删除的数组元素
    - **Example:**
    ```js
    let arr = new Array(1,2);
    let dropItem = arr.shift();
    // dropItem为1
    ```
- **`unshift()`**: 和`push()`方法类似, 可以从数组头部插入任意项，并返回数组的长度
    - **返回值**: 新的数组长度
    - **Example:**
    ```js
    let arr = new Array(3,4);
    let len = arr.unshift(1, 2)
    // arr此时为[1,2,3,4], len为4
    ```
- **`splice(startIndex, dropNum, addItem)`**: 可以增加、删除数组的元素, 接收多个参数，前两个参数分别是开始处理元素的位置、删除的元素个数，后面的参数是需要添加的元素
    - **返回值**: 删除的元素组成的数组
    - **Example:**
    ```js
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    // fruits为["Banana", "Orange", "Apple", "Lemon", "Kiwi", "Mango"]
    ```
- **`reverse()`**: 将数组反转, 并返回反转后的数组
    - **返回值**: 反转以后的数组
    - **Example:**
    ```js
    let arr = [1,2,3,4];
    let res = arr.reverse(); // arr: [4,3,2,1]; res: [4,3,2,1]
    ```
- **`sort()`**: 将数组排序，默认从小到大排序(会先调用数组每个元素的`toString()`方法，然后排序); 可以接收一个比较函数作为参数，以便我们确定哪个值在哪个值的前面: 比较函数接收两个参数，如果第一个参数要在第二个参数前面则返回一个负数，两个参数相等返回0，第一个参数要在第二个参数后面则返回一个正数
    - **返回值**: 排序后的数组
    - **Example:**
    ```js
    let arr = [1,2,3,4];
    let res = arr.sort((pre, after) => {return after - pre}); // arr: [4,3,2,1]; res: [4,3,2,1]
    ```
## 不改变原数组的方法
- **`toString()`**: 把数组里的各个值转为字符串并且用逗号连接起来
    - **返回值**: 字符串
    - **Example:**
    ```js
    let arr = [1,2,3,4,5]
    arr.toString() // 输出: '1,2,3,4,5'
    ```
- **`join()`**: 可接受一个参数，用该参数将数组中的各项元素以字符串的形式连接起来,不传参数的时候和`toString()`方法一致
    - **返回值**: 字符串
    - **Example:**
    ```js
    let arr = [1,2,3,4,5]
    arr.join('|') // 输出: '1|2|3|4|5'
    ```
- **`slice(startIndex, endIndex)`**: 给数组切片，接收两个参数, 比如(1,3), 该方法会从开始参数选取元素，直到结束参数(不包括结束参数)为止；若第二个参数不传则从`startIndex`开始切到数组的尾部
    - **返回值**: 被切片元素组成的数组
    - **Example:**
    ```js
    let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let citrus = fruits.slice(1, 3); 
    // citrus为["Orange", "Lemon"]
    ```
- **`concat()`**: 合并已有的数组来合并成一个新数组，可以接收任意数量的数组为参数，也可以接收任意的值为参数
    - **返回值**: 合并之后的数组
    - **Example:**
    ```js
    let arr1 = [1,2];
    let arr2 = [3,4];
    let arr3 = [5,6];
    let combinedArr1 = arr1.concat(arr2, arr3)  // [1,2,3,4,5,6]
    let combinedArr2 = arr1.concat(3,4,5,6)  // [1,2,3,4,5,6]
    ```


