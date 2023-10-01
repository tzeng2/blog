<template><div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2>
<p>JavaScript 的 Set（集合）是一组唯一值的集合, 每个值在Set中只出现一次</p>
<p><strong>创建方式:</strong> 可以通过<code v-pre>new Set([1,2,3])</code>或者<code v-pre>new Set()</code>以后通过<code v-pre>add</code>方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 或者</span>
<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3>
<ul>
<li><strong><code v-pre>add()</code>:</strong> 向 <code v-pre>Set</code> 中添加新元素，添加已经存在的元素不会生效，只会存在一个</li>
<li><strong><code v-pre>delete()</code>:</strong> 从 <code v-pre>Set</code> 中移除元素</li>
<li><strong><code v-pre>has()</code>:</strong> 如果值存在则返回 <code v-pre>true</code></li>
<li><strong><code v-pre>clear()</code>:</strong> 从 <code v-pre>Set</code> 中移除所有元素</li>
<li><strong><code v-pre>forEach()</code>:</strong> 为每个元素调用回调函数</li>
<li><strong><code v-pre>values()</code>:</strong> 返回包含 <code v-pre>Set</code> 中所有值的迭代器</li>
<li><strong><code v-pre>keys()</code>:</strong> 与 <code v-pre>values()</code> 相同</li>
<li><strong><code v-pre>entries()</code>:</strong>  返回迭代器，其中包含 Set 中的 <code v-pre>[value,value]</code> 值值对</li>
</ul>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3>
<ul>
<li><strong>size:</strong>  返回 <code v-pre>Set</code> 中元素的数量</li>
</ul>
<h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2>
<p>Map结构用来保存键值对，和Object有点类似，但是也存在区别</p>
<p><strong>创建方式:</strong> 可以通过<code v-pre>new Map([['a', 1], ['b', 2]])</code>或者<code v-pre>new Map()</code>以后通过<code v-pre>set</code>方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 或者</span>
<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1" aria-hidden="true">#</a> 方法</h3>
<ul>
<li><strong><code v-pre>set()</code>:</strong> 为 <code v-pre>Map</code> 中的键设置值</li>
<li><strong><code v-pre>get()</code>:</strong> 获取 <code v-pre>Map</code> 对象中键的值</li>
<li><strong><code v-pre>clear()</code>:</strong> 从 <code v-pre>Map</code> 中移除所有元素</li>
<li><strong><code v-pre>delete()</code>:</strong> 删除由某个键指定的 <code v-pre>Map</code> 元素</li>
<li><strong><code v-pre>has()</code>:</strong> 如果键存在于 <code v-pre>Map</code> 中，则返回 true</li>
<li><strong><code v-pre>forEach()</code>:</strong> 为 <code v-pre>Map</code> 中的每个键/值对调用回调函数, 注意这里的<code v-pre>forEach((value, key) =&gt; {})</code>调用的时候前一个是值, 后一个是键</li>
<li><strong><code v-pre>values()</code>:</strong> 返回迭代器对象，其中包含 <code v-pre>Map</code> 中的值</li>
<li><strong><code v-pre>keys()</code>:</strong> 返回迭代器对象，其中包含 <code v-pre>Map</code> 中的键</li>
<li><strong><code v-pre>entries()</code>:</strong>  返回迭代器对象，其中包含 <code v-pre>Map</code> 中的 <code v-pre>[key, value]</code> 键值对</li>
</ul>
<h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3>
<ul>
<li><strong>size:</strong>  返回 <code v-pre>Map</code> 中元素的数量</li>
</ul>
<h3 id="map和object的区别" tabindex="-1"><a class="header-anchor" href="#map和object的区别" aria-hidden="true">#</a> Map和Object的区别</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Object(对象)</th>
<th style="text-align:center">Map(映射)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">不可直接迭代</td>
<td style="text-align:center">可直接迭代</td>
</tr>
<tr>
<td style="text-align:center">无size属性</td>
<td style="text-align:center">有size属性</td>
</tr>
<tr>
<td style="text-align:center">键只能是string或者num</td>
<td style="text-align:center">键可以是任何值</td>
</tr>
<tr>
<td style="text-align:center">无序</td>
<td style="text-align:center">有序(按照键插入的顺序)</td>
</tr>
<tr>
<td style="text-align:center">有默认键</td>
<td style="text-align:center">无默认键</td>
</tr>
<tr>
<td style="text-align:center"><strong>使用场景</strong>:</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">通过上面的比较可以看出 <code v-pre>Map</code> 相对于 <code v-pre>Object</code> 具有优势，但仍有一些情况下 <code v-pre>Object</code> 会表现得更好。那么什么情况下使用 <code v-pre>Map</code> ，什么情况下使用 <code v-pre>Object</code>?</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<ul>
<li>当只需要简单的结构来存储数据并且知道所有键都是字符串或整数（或符号）时，<code v-pre>Object</code> 是一个很好的选择，因为创建普通对象并使用特定键访问对象的属性比创建一个 <code v-pre>Map</code> 快得多</li>
<li>当在需要将单独的逻辑应用于单个属性/元素的场景中，<code v-pre>Object</code> 绝对是最佳选择</li>
<li><code v-pre>Map</code> 是纯粹的哈希，<code v-pre>Object</code> 不止于此（支持内部逻辑）。如果需要大量添加和删除属性的情况下，Map 可能会表现得更好</li>
<li><code v-pre>Map</code> 保留其键的顺序，并且 <code v-pre>Map</code> 的构建考虑到了迭代，所以如果迭代或元素顺序非常重要。</li>
<li><code v-pre>Map</code> 在存储大量数据时往往表现更好，尤其是当键在运行时未知，并且所有键的类型和所有值的类型都相同时</li>
</ul>
<hr>
<h2 id="iterator" tabindex="-1"><a class="header-anchor" href="#iterator" aria-hidden="true">#</a> Iterator</h2>
<p>可迭代对象(Iterator)是指可以使用for...of...进行迭代的对象
从技术上讲, 可迭代对象必须实现Symbol.iterator方法</p>
<h3 id="原生具备-iterator-接口的数据结构如下" tabindex="-1"><a class="header-anchor" href="#原生具备-iterator-接口的数据结构如下" aria-hidden="true">#</a> 原生具备 Iterator 接口的数据结构如下</h3>
<ul>
<li><strong>Array</strong></li>
<li><strong>String</strong></li>
<li><strong>Map</strong></li>
<li><strong>Set</strong></li>
<li><strong>函数arguments对象</strong></li>
<li><strong>TypedArray</strong></li>
<li><strong>NodeList对象</strong></li>
</ul>
<h3 id="javascript迭代器" tabindex="-1"><a class="header-anchor" href="#javascript迭代器" aria-hidden="true">#</a> JavaScript迭代器</h3>
<p>当对象实现了<code v-pre>next()</code>方法时，它就成为一个迭代器，<code v-pre>next()</code>方法必须返回带有两个属性的对象:</p>
<ul>
<li><code v-pre>value</code></li>
<li><code v-pre>done</code>(<code v-pre>true</code> or <code v-pre>false</code>)</li>
</ul>
<h3 id="iterator实现" tabindex="-1"><a class="header-anchor" href="#iterator实现" aria-hidden="true">#</a> iterator实现</h3>
<p>只需要给对象的<code v-pre>Symbol.iterator</code>属性加上迭代器就好了</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 生成10-100之间的iterator</span>
<span class="token keyword">let</span> initalVal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> done <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    done <span class="token operator">=</span> initalVal <span class="token operator">===</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">done</span><span class="token operator">:</span> done<span class="token punctuation">,</span> <span class="token comment">// 当done为false时可省略</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> initalVal<span class="token operator">+=</span><span class="token number">10</span> <span class="token comment">// 当value为undefined时可省略</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token punctuation">{</span>next<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// for (let i of obj){console.log(i)}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你知道<code v-pre>Generator</code>的话，其实最简单的方式是通过<code v-pre>Generator</code>实现:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">+=</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">yield</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


