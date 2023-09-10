---
title: 如何使用vuepress搭建一个blog
author: 曾田
date: '2023-09-10'
---

---

## 新建vuepress项目  <font size=2>[快速上手](http://www.fenovice.com/doc/vuepress-next/guide/getting-started.html)</font>
- **步骤一**: 新建并进入一个新目录
```js
mkdir vuepress-starter && cd uepress-starter
```
- **步骤二**: 初始化项目
```js
yarn init -y  // 此时本地会创建一个package.json文件
git init  // 创建本地的git仓库， 后续可以把代码提交到远程仓库并部署
```
- **步骤三**: 将vuepress安装为本地依赖
```js
yarn add -D vuepress  // 此时会把vuepress添加到你的package.json的devDependencies中
```
- **步骤四**: 在package.json中添加scripts
```js
// 通过yarn dev或者 yarn build可以跑对应的构建命令
{
   "scripts": {
    "dev": "vuepress dev docs"，
    "build": "vuepress build docs"
  }
}
```
- **步骤五**: 新建.gitignore文件并添加需要ignore的文件
```js
echo node_modules > .gitignore  // 把node_modules写入.gitignore文件中，若.gitignore文件不存在会自动创建
echo dist > .gitignore
echo yarn-error.log > .gitignore
echo yarn.lock > .gitignore
```
- **步骤六**: 新建第一篇文档
```js
mkdir docs
echo "Hello Vuepress" > docs/README.md
```
- **步骤七**: 本地启动服务器查看你的文档
```js
yarn dev --host localhost --open  // --host: 指定ip --open: 自动打开页面
```
**以上就搭建起了一个最基础的vuepress项目啦\~\~\~\~\~\~， 下面要说的是一些基础配置**



## 项目配置  <font size=2>[基本配置](http://www.fenovice.com/doc/vuepress/guide/basic-config.html#%E5%BA%94%E7%94%A8%E7%BA%A7%E5%88%AB%E7%9A%84%E9%85%8D%E7%BD%AE)</font>
- **步骤一**: 生成目录结构， 这里需要手动自己新建(打开vscode或者直接终端mkdir、touch、echo命令生成都行)
```js
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```
vuepress的站点配置文件是`.vuepress/config.js`， 也可以是`.vuepress/config.ts`， 也可以通过以下命令指定配置文件，但是一般不需要，按照官方来就完事了
```js
vuepress dev docs --config my-config.js
```
- **步骤二**: 配置`.vuepress/config.js`文件，最基本的内容如下:
```js
module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
}
```



## 部署到远程git  <font size=2>[部署](http://www.fenovice.com/doc/vuepress/guide/deploy.html#github-pages)</font>

- **步骤一**: 在vuepress-starter路径下添加deploy.sh文件
```js
touch deploy.sh  // sh是可执行文件
```

- **步骤二**: 在deploy文件下添加如下内容:
> 踩坑记录：
> 1. 记得发布到: `https://<USERNAME>.github.io/<REPO>`, 如果发布到`https://<USERNAME>.github.io`需要远端的仓库名称必须为: \<USERNAME\>.github.io
> 2. git远端新建的仓库名称现在默认分支是main，记得git push的时候下面代码中的`master`要改
> 3. 在`.vuepress/config.js`下需要增加一项配置：module.exports = {base: "/\<REPO\>/"}  
> 备注: \<USERNAME\> 为用户名， \<REPO\> 为仓库名

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```
- **步骤二**: package.json添加script文件
```js
module.exports = {
    "scripts": {
        "deploy": "./deploy.sh"
    }
}
```
- **步骤三**: 部署到git上

```js
yarn deploy
```

- **步骤四**: 打开`https://<USERNAME>.github.io/<REPO>/`



