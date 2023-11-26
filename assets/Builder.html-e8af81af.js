import{_ as n}from"./FactoryPatternStr-3c5835b7.js";import{_ as s,o as a,c as t,a as p}from"./app-c9457119.js";const e={},c=p(`<h2 id="formal-definition" tabindex="-1"><a class="header-anchor" href="#formal-definition" aria-hidden="true">#</a> Formal definition</h2><blockquote><p><strong>Builder</strong> is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.</p></blockquote><p><strong>Builder</strong> is used to optimize code like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><img src="`+n+`" width="500" height="600"><h2 id="code-example" tabindex="-1"><a class="header-anchor" href="#code-example" aria-hidden="true">#</a> Code Example</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> any
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CarA</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment">// 座位调整</span>
    <span class="token function">seatSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 引擎调整</span>
    <span class="token function">engineChoose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CarB</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment">// 座位调整</span>
    <span class="token function">seatSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 引擎调整</span>
    <span class="token function">engineChoose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CarABuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span> CarA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">seatSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">engineChoose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>product
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CarBBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span> CarB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">seatSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>product<span class="token punctuation">.</span><span class="token function">engineChoose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>product
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">builder</span><span class="token operator">:</span> Builder
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">builder</span><span class="token operator">:</span> Builder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder
    <span class="token punctuation">}</span>
    <span class="token function">setBuilder</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">builder</span><span class="token operator">:</span> Builder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder
    <span class="token punctuation">}</span>
    <span class="token function">makeCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[c];function i(l,u){return a(),t("div",null,o)}const k=s(e,[["render",i],["__file","Builder.html.vue"]]);export{k as default};
