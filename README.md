<section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="font-size: 16px; color: black; padding: 0 10px; line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; word-wrap: break-word; text-align: left; font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; word-break: break-all;"><h1 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; color: black; font-size: 1.7em; font-weight: normal; border-bottom: 2px solid hsl(216, 100%, 68%);"><span class="prefix" style="display: none;"></span><span class="content" style="background: hsl(216, 100%, 68%); color: white; padding: 3px 10px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">stool</span><span class="suffix"></span></h1>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: #666; font-size: 14px;">前端业务代码工具库</p>
<blockquote class="multiquote-1" data-tool="mdnice编辑器" style="border: none; display: block; font-size: 0.9em; overflow: auto; overflow-scrolling: touch; border-left: 3px solid rgba(0, 0, 0, 0.4); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; background: #f9f9f9; border-left-color: hsl(216, 100%, 68%);">
<p style="padding-top: 8px; padding-bottom: 8px; font-size: 14px; margin: 0px; line-height: 26px; color: #999; padding: 3px 0;">目的：高效率完成前端业务代码</p>
</blockquote>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: #666; font-size: 14px;">业务开发过程中，会经常用到<code style="border: 1px solid #eaeefb; font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: hsl(216, 100%, 68%);">日期格式化</code>、<code style="border: 1px solid #eaeefb; font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: hsl(216, 100%, 68%);">url参数转对象</code>、<code style="border: 1px solid #eaeefb; font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: hsl(216, 100%, 68%);">浏览器类型判断</code>、<code style="border: 1px solid #eaeefb; font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: hsl(216, 100%, 68%);">节流函数</code>等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; padding: 0px; font-weight: normal; color: #333; font-size: 1.4em; border-bottom: 1px solid hsl(216, 100%, 68%); margin-bottom: 30px;"><span class="prefix" style="display: none;"></span><span class="content" style="border-bottom: 1px solid hsl(216, 100%, 68%);">:building_construction:  安装使用</span><span class="suffix"></span></h2>
<ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; color: black; list-style-type: decimal; padding-left: 2em;">
<li style="color: #666;"><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">使用npm安装</section></li></ol>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: normal; color: #333; font-size: 1.2em;"><span class="prefix" style="display: none;"></span><span class="content">npm:</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://files.mdnice.com/point.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #f8f8f8; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; color: #333; background-color: #f9fafc; padding: 0 4px; border: 1px solid #eaeefb; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #f8f8f8; border-radius: 5px;">$&nbsp;npm&nbsp;install&nbsp;--save-dev&nbsp;@susu/stool<br></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: normal; color: #333; font-size: 1.2em;"><span class="prefix" style="display: none;"></span><span class="content">浏览器:</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://files.mdnice.com/point.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #f8f8f8; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; color: #333; background-color: #f9fafc; padding: 0 4px; border: 1px solid #eaeefb; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #f8f8f8; border-radius: 5px;">&nbsp;&nbsp;<span class="hljs-tag" style="color: #000080; font-weight: normal; line-height: 26px;">&lt;<span class="hljs-name" style="color: #000080; font-weight: normal; line-height: 26px;">script</span>&nbsp;<span class="hljs-attr" style="color: #008080; line-height: 26px;">src</span>=<span class="hljs-string" style="color: #d14; line-height: 26px;">"stool.min.js"</span>&gt;</span><span class="hljs-tag" style="color: #000080; font-weight: normal; line-height: 26px;">&lt;/<span class="hljs-name" style="color: #000080; font-weight: normal; line-height: 26px;">script</span>&gt;</span><br>&nbsp;&nbsp;<span class="hljs-tag" style="color: #000080; font-weight: normal; line-height: 26px;">&lt;<span class="hljs-name" style="color: #000080; font-weight: normal; line-height: 26px;">script</span>&gt;</span><span class="javascript" style="line-height: 26px;"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">var</span>&nbsp;OS&nbsp;=&nbsp;stool.isString();<br>&nbsp;&nbsp;</span><span class="hljs-tag" style="color: #000080; font-weight: normal; line-height: 26px;">&lt;/<span class="hljs-name" style="color: #000080; font-weight: normal; line-height: 26px;">script</span>&gt;</span><br></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: #666; font-size: 14px;">webpack、RequireJS、SeaJS等</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://files.mdnice.com/point.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #f8f8f8; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; color: #333; background-color: #f9fafc; padding: 0 4px; border: 1px solid #eaeefb; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #f8f8f8; border-radius: 5px;"><span class="hljs-comment" style="color: #998; font-style: italic; line-height: 26px;">//&nbsp;CommonJS&nbsp;=&gt;&nbsp;require方式导入</span><br><span class="hljs-comment" style="color: #998; font-style: italic; line-height: 26px;">//&nbsp;完整引入</span><br><span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">const</span>&nbsp;stool&nbsp;=&nbsp;<span class="hljs-built_in" style="color: #0086b3; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #d14; line-height: 26px;">'@susu/js-tool'</span>)<br><span class="hljs-built_in" style="color: #0086b3; line-height: 26px;">console</span>.log(stool.isString());<br></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: #666; font-size: 14px;">import</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://files.mdnice.com/point.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #f8f8f8; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; color: #333; background-color: #f9fafc; padding: 0 4px; border: 1px solid #eaeefb; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #f8f8f8; border-radius: 5px;"><span class="hljs-comment" style="color: #998; font-style: italic; line-height: 26px;">//&nbsp;import&nbsp;=&gt;&nbsp;全部导入&nbsp;:</span><br><span class="hljs-comment" style="color: #998; font-style: italic; line-height: 26px;">//&nbsp;完整引入</span><br><span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">import</span>&nbsp;*&nbsp;<span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">as</span>&nbsp;stool&nbsp;<span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">from</span>&nbsp;<span class="hljs-string" style="color: #d14; line-height: 26px;">'@susu/stool'</span>;<br><span class="hljs-built_in" style="color: #0086b3; line-height: 26px;">console</span>.group(<span class="hljs-string" style="color: #d14; line-height: 26px;">'import&nbsp;=&gt;&nbsp;全部导入&nbsp;:&nbsp;'</span>,stool.isString(<span class="hljs-string" style="color: #d14; line-height: 26px;">'1'</span>));<br></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: #666; font-size: 14px;"><strong style="font-weight: bold; color: hsl(216, 80%, 44%);">推荐使用方法</strong></p>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: #666; font-size: 14px;">你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://files.mdnice.com/point.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #f8f8f8; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; color: #333; background-color: #f9fafc; padding: 0 4px; border: 1px solid #eaeefb; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #f8f8f8; border-radius: 5px;"><span class="hljs-comment" style="color: #998; font-style: italic; line-height: 26px;">//&nbsp;import&nbsp;=&gt;&nbsp;自定义按需导入&nbsp;:&nbsp;只引入部分方法('stool/&lt;方法名&gt;')</span><br><span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">import</span>&nbsp;{&nbsp;isString&nbsp;}&nbsp;<span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">from</span>&nbsp;<span class="hljs-string" style="color: #d14; line-height: 26px;">'@susu/stool'</span>;<br><span class="hljs-built_in" style="color: #0086b3; line-height: 26px;">console</span>.group(<span class="hljs-string" style="color: #d14; line-height: 26px;">'import&nbsp;=&gt;&nbsp;自定义按需导入&nbsp;:&nbsp;'</span>,&nbsp;isString());<br></code></pre>
</section>
