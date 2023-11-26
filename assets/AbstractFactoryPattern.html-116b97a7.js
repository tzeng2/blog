import{_ as n}from"./FactoryPatternStr-3c5835b7.js";import{_ as s,o as a,c as t,a as p}from"./app-c9457119.js";const e={},c=p(`<h2 id="formal-definition" tabindex="-1"><a class="header-anchor" href="#formal-definition" aria-hidden="true">#</a> Formal definition</h2><blockquote><p><strong>Abstract Factory</strong> is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.</p></blockquote><p><strong>Factory Pattern</strong> is used to optimize code like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
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

<span class="token comment">// GUIFactory</span>

<span class="token keyword">interface</span> <span class="token class-name">GUIFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button<span class="token punctuation">,</span>
    <span class="token function">createCheckBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> CheckBox
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinGUIFactory</span> <span class="token keyword">implements</span> <span class="token class-name">GUIFactory</span> <span class="token punctuation">{</span>

    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WinButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">createCheckBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> CheckBox <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WinCheckBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacGUIFactory</span> <span class="token keyword">implements</span> <span class="token class-name">GUIFactory</span> <span class="token punctuation">{</span>

    <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">createCheckBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> CheckBox <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacCheckBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CheckBox</span> <span class="token punctuation">{</span>
    <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">&#39;MacButton&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacCheckBox</span> <span class="token keyword">implements</span> <span class="token class-name">CheckBox</span> <span class="token punctuation">{</span>
    <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">&#39;MacCheckBox&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">&#39;WinButton&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinCheckBox</span> <span class="token keyword">implements</span> <span class="token class-name">CheckBox</span> <span class="token punctuation">{</span>
    <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">&#39;WinCheckBox&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token literal-property property">factory</span><span class="token operator">:</span> GUIFactory
    <span class="token keyword">public</span> <span class="token literal-property property">btn</span><span class="token operator">:</span> Button
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">factory</span><span class="token operator">:</span> GUIFactory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>factory <span class="token operator">=</span> factory
        <span class="token keyword">this</span><span class="token punctuation">.</span>btn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>factory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>btn<span class="token punctuation">.</span><span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MacGUIFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[c];function l(i,u){return a(),t("div",null,o)}const d=s(e,[["render",l],["__file","AbstractFactoryPattern.html.vue"]]);export{d as default};
