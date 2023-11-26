import{_ as n,o as s,c as a,a as p}from"./app-c9457119.js";const e={},t=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">RoundHole</span> <span class="token punctuation">{</span>
    radius
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">radius</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius  <span class="token operator">=</span> radius
    <span class="token punctuation">}</span>
    <span class="token function">fits</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">peg</span><span class="token operator">:</span> RoundPeg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">&gt;=</span> peg<span class="token punctuation">.</span>radius
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">RoundPeg</span> <span class="token punctuation">{</span>
    radius
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">radius</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SquarePeg</span> <span class="token punctuation">{</span>
    width
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">width</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SquarePegAdapter</span> <span class="token punctuation">{</span>
    radius
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">peg</span><span class="token operator">:</span>SquarePeg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> peg<span class="token punctuation">.</span>width <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> hole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoundHole</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> rpeg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoundPeg</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hole<span class="token punctuation">.</span><span class="token function">fits</span><span class="token punctuation">(</span>rpeg<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> small_sqpeg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SquarePeg</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> large_sqpeg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SquarePeg</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hole<span class="token punctuation">.</span><span class="token function">fits</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SquarePegAdapter</span><span class="token punctuation">(</span>small_sqpeg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hole<span class="token punctuation">.</span><span class="token function">fits</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SquarePegAdapter</span><span class="token punctuation">(</span>large_sqpeg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","Adapter.html.vue"]]);export{r as default};
