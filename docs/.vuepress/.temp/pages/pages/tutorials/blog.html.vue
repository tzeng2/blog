<template><div><h2 id="新建vuepress项目-快速上手" tabindex="-1"><a class="header-anchor" href="#新建vuepress项目-快速上手" aria-hidden="true">#</a> 新建vuepress项目  <font size=2><a href="http://www.fenovice.com/doc/vuepress-next/guide/getting-started.html" target="_blank" rel="noopener noreferrer">快速上手<ExternalLinkIcon/></a></font></h2>
<blockquote>
<p>踩坑记录:</p>
<ol>
<li>这个步骤下你会初始化本地git仓库，后续当你想推代码的时候可能会出现permision denied，这是因为你没有把<code v-pre>ssh key</code>添加到你新建的远程仓库中，具体的你需要在本地生成<code v-pre>ssh key</code>，然后复制到你的远端git下。具体操作可参考:<a href="https://blog.csdn.net/weixin_44315471/article/details/132050649" target="_blank" rel="noopener noreferrer">Permission denied (publickey)解决方案<ExternalLinkIcon/></a></li>
</ol>
</blockquote>
<ul>
<li><strong>步骤一</strong>: 新建并进入一个新目录</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>mkdir vuepress<span class="token operator">-</span>starter <span class="token operator">&amp;&amp;</span> cd uepress<span class="token operator">-</span>starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>步骤二</strong>: 初始化项目</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>yarn init <span class="token operator">-</span>y  <span class="token comment">// 此时本地会创建一个package.json文件</span>
git init  <span class="token comment">// 创建本地的git仓库， 后续可以把代码提交到远程仓库并部署</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤三</strong>: 将vuepress安装为本地依赖</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> vuepress  <span class="token comment">// 此时会把vuepress添加到你的package.json的devDependencies中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>步骤四</strong>: 在package.json中添加scripts</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过yarn dev或者 yarn build可以跑对应的构建命令</span>
<span class="token punctuation">{</span>
   <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span>，
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤五</strong>: 新建.gitignore文件并添加需要ignore的文件</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>echo node_modules <span class="token operator">></span> <span class="token punctuation">.</span>gitignore  <span class="token comment">// 把node_modules写入.gitignore文件中，若.gitignore文件不存在会自动创建</span>
echo dist <span class="token operator">></span> <span class="token punctuation">.</span>gitignore
echo yarn<span class="token operator">-</span>error<span class="token punctuation">.</span>log <span class="token operator">></span> <span class="token punctuation">.</span>gitignore
echo yarn<span class="token punctuation">.</span>lock <span class="token operator">></span> <span class="token punctuation">.</span>gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤六</strong>: 新建第一篇文档</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>mkdir docs
echo <span class="token string">"Hello Vuepress"</span> <span class="token operator">></span> docs<span class="token operator">/</span><span class="token constant">README</span><span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤七</strong>: 本地启动服务器查看你的文档</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>yarn dev <span class="token operator">--</span>host localhost <span class="token operator">--</span>open  <span class="token comment">// --host: 指定ip --open: 自动打开页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>以上就搭建起了一个最基础的vuepress项目啦~~~~~~， 下面要说的是一些基础配置</strong></p>
<h2 id="项目配置-基本配置" tabindex="-1"><a class="header-anchor" href="#项目配置-基本配置" aria-hidden="true">#</a> 项目配置  <font size=2><a href="http://www.fenovice.com/doc/vuepress/guide/basic-config.html#%E5%BA%94%E7%94%A8%E7%BA%A7%E5%88%AB%E7%9A%84%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">基本配置<ExternalLinkIcon/></a></font></h2>
<ul>
<li><strong>步骤一</strong>: 生成目录结构， 这里需要手动自己新建(打开vscode或者直接终端mkdir、touch、echo命令生成都行)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>├─ docs
│  ├─ <span class="token punctuation">.</span>vuepress
│  │  └─ config<span class="token punctuation">.</span>js
│  └─ <span class="token constant">README</span><span class="token punctuation">.</span>md
├─ <span class="token punctuation">.</span>gitignore
└─ <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuepress的站点配置文件是<code v-pre>.vuepress/config.js</code>， 也可以是<code v-pre>.vuepress/config.ts</code>， 也可以通过以下命令指定配置文件，但是一般不需要，按照官方来就完事了</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>vuepress dev docs <span class="token operator">--</span>config my<span class="token operator">-</span>config<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>步骤二</strong>: 配置<code v-pre>.vuepress/config.js</code>文件，最基本的内容如下:</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署到远程git-部署" tabindex="-1"><a class="header-anchor" href="#部署到远程git-部署" aria-hidden="true">#</a> 部署到远程git  <font size=2><a href="http://www.fenovice.com/doc/vuepress/guide/deploy.html#github-pages" target="_blank" rel="noopener noreferrer">部署<ExternalLinkIcon/></a></font></h2>
<ul>
<li><strong>步骤一</strong>: 在vuepress-starter路径下添加deploy.sh文件</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>touch deploy<span class="token punctuation">.</span>sh  <span class="token comment">// sh是可执行文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>步骤二</strong>: 在deploy文件下添加如下内容:</li>
</ul>
<blockquote>
<p>踩坑记录：</p>
<ol>
<li>记得发布到: <code v-pre>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</code>, 如果发布到<code v-pre>https://&lt;USERNAME&gt;.github.io</code>需要远端的仓库名称必须为: &lt;USERNAME&gt;.github.io</li>
<li>git远端新建的仓库名称现在默认分支是main，记得git push的时候下面代码中的<code v-pre>master</code>要改</li>
<li>在<code v-pre>.vuepress/config.js</code>下需要增加一项配置：module.exports = {base: &quot;/&lt;REPO&gt;/&quot;}<br>
备注: &lt;USERNAME&gt; 为用户名， &lt;REPO&gt; 为仓库名</li>
</ol>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo 'www.example.com' > CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'deploy'</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME>.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME>/&lt;USERNAME>.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME>.github.io/&lt;REPO></span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:<span class="token operator">&lt;</span>USERNAME<span class="token operator">></span>/<span class="token operator">&lt;</span>REPO<span class="token operator">></span>.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤二</strong>: package.json添加script文件</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"deploy"</span><span class="token operator">:</span> <span class="token string">"./deploy.sh"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤三</strong>: 部署到git上</li>
</ul>
<blockquote>
<p>踩坑记录：</p>
<ol>
<li>当运行<code v-pre>yarn deploy</code>时候可能会报这个错<code v-pre>digital envelope routines::unsupported</code>，这是因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，因此需要运行<code v-pre>export NODE_OPTIONS=--openssl-legacy-provider</code>后再运行<code v-pre>yarn deploy</code>，或者<code v-pre>nvm use &lt;低版本node&gt;</code>再运行<code v-pre>yarn deploy</code></li>
</ol>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>yarn deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>步骤四</strong>: 打开<code v-pre>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code></li>
</ul>
</div></template>


