import{_ as n}from"./FactoryPatternStr-3c5835b7.js";import{_ as s,o as a,c as t,a as e}from"./app-c9457119.js";const p={},c=e(`<h2 id="formal-definition" tabindex="-1"><a class="header-anchor" href="#formal-definition" aria-hidden="true">#</a> Formal definition</h2><blockquote><p><strong>Factory Method</strong> is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.</p></blockquote><p><strong>Factory Pattern</strong> is used to optimize code like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
    <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;make car&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;ship&#39;</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;make ship&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> carC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Creator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
carC<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> shipC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Creator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
shipC<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;ship&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><img src="`+n+`" width="500" height="600"><h2 id="code-example" tabindex="-1"><a class="header-anchor" href="#code-example" aria-hidden="true">#</a> Code Example</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">ProductMaker</span> <span class="token punctuation">{</span>
    <span class="token function">makeSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CarMaker</span> <span class="token keyword">implements</span> <span class="token class-name">ProductMaker</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">makeSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;make car&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ShipMaker</span> <span class="token keyword">implements</span> <span class="token class-name">ProductMaker</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">makeSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;make ship&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


abstract <span class="token keyword">class</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
    abstract <span class="token function">getMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ProductMaker

    <span class="token keyword">public</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">makeSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CarCreator</span> <span class="token keyword">extends</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">getMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CarMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ShipCreator</span> <span class="token keyword">extends</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">getMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ShipMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> carC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarCreator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
carC<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> shipC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShipCreator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
shipC<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[c];function i(l,u){return a(),t("div",null,o)}const d=s(p,[["render",i],["__file","FactoryPattern.html.vue"]]);export{d as default};
