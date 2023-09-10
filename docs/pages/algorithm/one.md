---
title: 字母异位词分组
author: 曾田
date: '2023-09-09'
---
***
# 题目描述
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。字母异位词是由重新排列源单词的所有字母得到的一个新单词。

 

>示例 1:
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

>示例 2:
>输入: strs = [""]
>输出: [[""]]

>示例 3:
>输入: strs = ["a"]
>输出: [["a"]]

*** 
# 解法一
## 思路
```js
var groupAnagrams = function(strs) {
    let result = [];
    let strInfo = {};
    for (let i = 0; i < strs.length; i++) {
        let transStr = strs[i].split('').sort().join('');
        if (!strInfo[transStr]) {
            strInfo[transStr] = [strs[i]];
        } else {
            strInfo[transStr].push(strs[i])
        }
    }
    for (let key in strInfo) {
        result.push(strInfo[key]);
    }
    return result
};
```
# 解法二
```js
var groupAnagrams = function(strs) {
    const strMap = new Map();
    for (let i of strs) {
        const arr = new Array(26).fill(0)
        for (let j of i) {
            let index = j.charCodeAt(0) - 'a'.charCodeAt(0);
            arr[index] ++;
        }
        const key = arr.join();
        strMap.has(key) ? strMap.get(key).push(i) : strMap.set(key,[i])
    }
    return Array.from(strMap.values())
};
```