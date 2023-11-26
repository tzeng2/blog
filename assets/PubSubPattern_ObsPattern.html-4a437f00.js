import{_ as n,o as s,c as a,a as t}from"./app-c9457119.js";const e={},p=t(`<h2 id="publish-subscribe-pattern" tabindex="-1"><a class="header-anchor" href="#publish-subscribe-pattern" aria-hidden="true">#</a> Publish-Subscribe Pattern</h2><blockquote><p><strong>The formal definition:</strong> In software architecture, publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers, but instead categorize published messages into classes without knowledge of which subscribers, if any, there may be. Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, without knowledge of which publishers, if any, there are.</p></blockquote><p>To put it bluntly, the publish-subscribe pattern has three main roles: a publisher, some subscribers, and a dispatch center. Publishers publish messages to the dispatch center, and subscribers receive notifications from the dispatch center. This structure allows the decoupling of publishers and dispatch groups</p><p><strong>Example</strong><br> A good real life example is subscribing channels on YouTube, when we see some programs we like, and if we want to know the up-to-date information, so we&#39;ll subscribe the channel, and when the YouTuber upload their new videos, the platform will send us a message to let us know that. Now we&#39;ll use JS to implement this scenario: Here YouYube known as <code>dispatch center</code>, video maker known as <code>publishers</code>, users known as <code>subscribers</code>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">YouTube</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cbs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userA <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watch new video right away&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> userB <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watch new video before sleep&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> youtube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YouTube</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
youtube<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>userA<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
youtube<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>userB<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> videoMaker <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">postVedio</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        youtube<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
videoMaker<span class="token punctuation">.</span><span class="token function">postVedio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="observer-design-pattern" tabindex="-1"><a class="header-anchor" href="#observer-design-pattern" aria-hidden="true">#</a> Observer Design Pattern</h2><blockquote><p><strong>The formal definition:</strong> The observer pattern is a software design pattern in which an object, called the <code>subject</code>, maintains a list of its dependents, called <code>observers</code>, and notifies them automatically of any state changes, usually by calling one of their methods.</p></blockquote><p><strong>Example</strong><br> An real life example is shopping, customers always want to buy something at a discount, and the stores sometimes have it. But how the stores can let the customers know when there will be a good price. Here is the solution: customers, also called <code>Observers</code> in Obs Pattern, subscribe to the messages from the store, the store, also called <code>Subject</code>, and when the price of the goods goes down, the store immediately inform the customers, and the customer will take some actions. Right below is a very simple implementation, :</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// def</span>
<span class="token keyword">class</span> <span class="token class-name">Shop</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>customers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
    <span class="token function">addCustomer</span><span class="token punctuation">(</span><span class="token parameter">customer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>customers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">priceRenewed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">90</span> <span class="token comment">// nity percent off</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyCustomers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">notifyCustomers</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>customers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">customer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            customer<span class="token punctuation">.</span><span class="token function">takeActions</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">shop<span class="token punctuation">,</span> name<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        shop<span class="token punctuation">.</span><span class="token function">addCustomer</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>action <span class="token operator">=</span> action <span class="token comment">// assume one customer will take only one action when the price gets renewed</span>
    <span class="token punctuation">}</span>
    <span class="token function">takeActions</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
<span class="token comment">// use</span>
<span class="token keyword">const</span> shop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> customerA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span>shop<span class="token punctuation">,</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: it is cheaper, I have to buy it at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> customerB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span>shop<span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is still expensive, I can&#39;t afford it</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
shop<span class="token punctuation">.</span><span class="token function">priceRenewed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="difference-between-pub-sub-pattern-and-obs-pattern" tabindex="-1"><a class="header-anchor" href="#difference-between-pub-sub-pattern-and-obs-pattern" aria-hidden="true">#</a> Difference between Pub-Sub Pattern and Obs Pattern</h2><p>From the above introduction, we can get a glimpse to the little difference between Pub-Sub Pattern and Obs Pattern.</p><p><strong>First</strong>, in Pub-Sub Pattern, there is a dispatch center, subscribers behave to the state change of publishers through dispatch center, while subscribers and publishers don&#39;t know each other. In Obs Pattern, the publishers maintain a list of its subscribers.</p><p><strong>Second</strong>, in the publisher-subscriber pattern, components are loosely coupled as opposed to the observer pattern.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="&#39;https://medium.com/javascript-in-plain-english/design-patterns-observer-pattern-in-javascript-b9611827a876&#39;">Design Patterns: Observer Pattern in JavaScript</a></li><li><a href="&#39;https://medium.com/lftechnology/implementing-the-observer-pattern-in-javascript-198ccb62124d&#39;">Implementing the Observer Pattern in JavaScript</a></li><li><a href="&#39;https://medium.com/better-programming/observer-vs-pub-sub-pattern-50d3b27f838c&#39;">https://medium.com/better-programming/observer-vs-pub-sub-pattern-50d3b27f838c</a></li><li><a href="&#39;https://medium.com/frontend-canteen/publish-subscribe-pattern-in-javascript-17bf1e94e83d&#39;">Publish-Subscribe Pattern: The Most Used Patterns in JavaScript</a></li></ul>`,15),o=[p];function c(i,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","PubSubPattern_ObsPattern.html.vue"]]);export{r as default};
