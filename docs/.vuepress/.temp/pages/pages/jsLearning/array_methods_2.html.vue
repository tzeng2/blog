<template><div><h2 id="可改变原数组的方法" tabindex="-1"><a class="header-anchor" href="#可改变原数组的方法" aria-hidden="true">#</a> 可改变原数组的方法</h2>
<ul>
<li><strong><code v-pre>push()</code></strong>: 可以接收任意任意数量的参数，把它们逐个添加到末尾，并返回最终的数组长度
<ul>
<li><strong>返回值</strong>: 新数组的长度</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// arr此时为[1,2], len为2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>pop()</code></strong>: 删除数组最后一项，并返回删除的项
<ul>
<li><strong>返回值</strong>: 删除的数组元素</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dropItem <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// dropItem为2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>shift()</code></strong>: 和<code v-pre>pop()</code>方法类似，但是它是删除数组的第一项
<ul>
<li><strong>返回值</strong>: 删除的数组元素</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dropItem <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// dropItem为1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>unshift()</code></strong>: 和<code v-pre>push()</code>方法类似, 可以从数组头部插入任意项，并返回数组的长度
<ul>
<li><strong>返回值</strong>: 新的数组长度</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// arr此时为[1,2,3,4], len为4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>splice(startIndex, dropNum, addItem)</code></strong>: 可以增加、删除数组的元素, 接收多个参数，前两个参数分别是开始处理元素的位置、删除的元素个数，后面的参数是需要添加的元素
<ul>
<li><strong>返回值</strong>: 删除的元素组成的数组</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span><span class="token punctuation">,</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span> <span class="token string">"Apple"</span><span class="token punctuation">,</span> <span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
fruits<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"Lemon"</span><span class="token punctuation">,</span> <span class="token string">"Kiwi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// fruits为["Banana", "Orange", "Apple", "Lemon", "Kiwi", "Mango"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>reverse()</code></strong>: 将数组反转, 并返回反转后的数组
<ul>
<li><strong>返回值</strong>: 反转以后的数组</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr: [4,3,2,1]; res: [4,3,2,1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>sort()</code></strong>: 将数组排序，默认从小到大排序(会先调用数组每个元素的<code v-pre>toString()</code>方法，然后排序); 可以接收一个比较函数作为参数，以便我们确定哪个值在哪个值的前面: 比较函数接收两个参数，如果第一个参数要在第二个参数前面则返回一个负数，两个参数相等返回0，第一个参数要在第二个参数后面则返回一个正数
<ul>
<li><strong>返回值</strong>: 排序后的数组</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> after</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token keyword">return</span> after <span class="token operator">-</span> pre<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arr: [4,3,2,1]; res: [4,3,2,1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="不改变原数组的方法" tabindex="-1"><a class="header-anchor" href="#不改变原数组的方法" aria-hidden="true">#</a> 不改变原数组的方法</h2>
<ul>
<li><strong><code v-pre>toString()</code></strong>: 把数组里的各个值转为字符串并且用逗号连接起来
<ul>
<li><strong>返回值</strong>: 字符串</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出: '1,2,3,4,5'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>join()</code></strong>: 可接受一个参数，用该参数将数组中的各项元素以字符串的形式连接起来,不传参数的时候和<code v-pre>toString()</code>方法一致
<ul>
<li><strong>返回值</strong>: 字符串</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'|'</span><span class="token punctuation">)</span> <span class="token comment">// 输出: '1|2|3|4|5'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>slice(startIndex, endIndex)</code></strong>: 给数组切片，接收两个参数, 比如(1,3), 该方法会从开始参数选取元素，直到结束参数(不包括结束参数)为止；若第二个参数不传则从<code v-pre>startIndex</code>开始切到数组的尾部
<ul>
<li><strong>返回值</strong>: 被切片元素组成的数组</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span><span class="token punctuation">,</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span> <span class="token string">"Lemon"</span><span class="token punctuation">,</span> <span class="token string">"Apple"</span><span class="token punctuation">,</span> <span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> citrus <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// citrus为["Orange", "Lemon"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong><code v-pre>concat()</code></strong>: 合并已有的数组来合并成一个新数组，可以接收任意数量的数组为参数，也可以接收任意的值为参数
<ul>
<li><strong>返回值</strong>: 合并之后的数组</li>
<li><strong>Example:</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> combinedArr1 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> arr3<span class="token punctuation">)</span>  <span class="token comment">// [1,2,3,4,5,6]</span>
<span class="token keyword">let</span> combinedArr2 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>  <span class="token comment">// [1,2,3,4,5,6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


