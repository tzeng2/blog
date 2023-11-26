import{_ as n,o as s,c as a,a as e}from"./app-c9457119.js";const t="/blog/assets/bridge01-9ac715d6.png",p="/blog/assets/bridge02-419a6fa4.png",o="/blog/assets/bridge03-e3e9da7e.png",c={},i=e('<h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2><p>Say that you have a <code>Shape</code> class with two subclasses: <code>Circle</code> and <code>Square</code>. One day you want to extend the class to incorperate colors, then you plan to create <code>Red</code> and <code>Blue</code> subclasses, since you already have two subclasses, you&#39;ll need to create four subclasses such as <code>RedCircle</code>, <code>RedSquare</code>, then the structure would be like this: <img src="'+t+'" width="500" height="600"> Using bridge you can change the structure to this: <img src="'+p+'" width="500" height="600"></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p><strong>Bridge</strong> is a structural design pattern that divides business logic or huge class into separate class hierarchies that can be developed independently.<br> There comes two parts with <code>Bridge</code>: <code>Abstraction</code> and <code>Implementation</code>. <strong><code>Abstraction</code></strong> is a high-level control layer for some entity. This layer isn’t supposed to do any real work on its own. It should delegate the work to the <strong><code>implementation</code></strong> layer (also called platform).</p><blockquote><p>One of these hierarchies (often called the Abstraction) will get a reference to an object of the second hierarchy (Implementation). The abstraction will be able to delegate some (sometimes, most) of its calls to the implementations object. Since all implementations will have a common interface, they’d be interchangeable inside the abstraction.</p></blockquote><h2 id="real-life-example" tabindex="-1"><a class="header-anchor" href="#real-life-example" aria-hidden="true">#</a> Real-life Example</h2><img src="'+o+`" width="500" height="600"><h2 id="pseudocode" tabindex="-1"><a class="header-anchor" href="#pseudocode" aria-hidden="true">#</a> Pseudocode</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Abstraction</span>
<span class="token keyword">class</span> <span class="token class-name">Remote</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">device</span><span class="token operator">:</span> Device
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">device</span><span class="token operator">:</span> Device</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>device <span class="token operator">=</span> device
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">channelUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">setChannel</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">channelDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">setChannel</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">volumeUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">volumeDonw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TvRemote</span> <span class="token keyword">extends</span> <span class="token class-name">Remote</span> <span class="token punctuation">{</span>
    device<span class="token operator">!</span><span class="token operator">:</span> Tv
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">device</span><span class="token operator">:</span> Tv</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>device<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">mute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>device<span class="token punctuation">.</span><span class="token function">mute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RadioRemote</span> <span class="token keyword">extends</span> <span class="token class-name">Remote</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Implementation</span>
<span class="token keyword">interface</span> <span class="token class-name">Device</span> <span class="token punctuation">{</span>
    <span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number 
    <span class="token function">setChannel</span><span class="token punctuation">(</span>num<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number
    <span class="token function">setVolume</span><span class="token punctuation">(</span>num<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    mute<span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Tv</span> <span class="token keyword">implements</span> <span class="token class-name">Device</span> <span class="token punctuation">{</span>
    <span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">setChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">mute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Radio</span> <span class="token keyword">implements</span> <span class="token class-name">Device</span> <span class="token punctuation">{</span>
    <span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">setChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token keyword">function</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> tvRemote <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TvRemote</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span>
    tv<span class="token punctuation">.</span><span class="token function">mute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[i];function u(d,r){return s(),a("div",null,l)}const v=n(c,[["render",u],["__file","Bridge.html.vue"]]);export{v as default};