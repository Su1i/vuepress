import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as e,d as i,b as s,e as d,r as c}from"./app.9371f5e0.js";const t={},o=d('<h1 id="_2-redis\u6982\u8FF0\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-redis\u6982\u8FF0\u5B89\u88C5" aria-hidden="true">#</a> 2. Redis\u6982\u8FF0\u5B89\u88C5</h1><ul><li><p>Redis\u662F\u4E00\u4E2A\u5F00\u6E90\u7684key-value\u5B58\u50A8\u7CFB\u7EDF\u3002</p></li><li><p>\u548CMemcached\u7C7B\u4F3C\uFF0C\u5B83\u652F\u6301\u5B58\u50A8\u7684value\u7C7B\u578B\u76F8\u5BF9\u66F4\u591A\uFF0C\u5305\u62ECstring(\u5B57\u7B26\u4E32)\u3001list(\u94FE\u8868)\u3001set(\u96C6\u5408)\u3001zset(sorted set --\u6709\u5E8F\u96C6\u5408)\u548Chash\uFF08\u54C8\u5E0C\u7C7B\u578B\uFF09\u3002</p></li><li><p>\u8FD9\u4E9B\u6570\u636E\u7C7B\u578B\u90FD\u652F\u6301push/pop\u3001add/remove\u53CA\u53D6\u4EA4\u96C6\u5E76\u96C6\u548C\u5DEE\u96C6\u53CA\u66F4\u4E30\u5BCC\u7684\u64CD\u4F5C\uFF0C\u800C\u4E14\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u662F\u539F\u5B50\u6027\u7684\u3002</p></li><li><p>\u5728\u6B64\u57FA\u7840\u4E0A\uFF0CRedis\u652F\u6301\u5404\u79CD\u4E0D\u540C\u65B9\u5F0F\u7684\u6392\u5E8F\u3002</p></li><li><p>\u4E0Ememcached\u4E00\u6837\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u6548\u7387\uFF0C\u6570\u636E\u90FD\u662F\u7F13\u5B58\u5728\u5185\u5B58\u4E2D\u3002</p></li><li><p>\u533A\u522B\u7684\u662FRedis\u4F1A\u5468\u671F\u6027\u7684\u628A\u66F4\u65B0\u7684\u6570\u636E\u5199\u5165\u78C1\u76D8\u6216\u8005\u628A\u4FEE\u6539\u64CD\u4F5C\u5199\u5165\u8FFD\u52A0\u7684\u8BB0\u5F55\u6587\u4EF6\u3002</p></li><li><p>\u5E76\u4E14\u5728\u6B64\u57FA\u7840\u4E0A\u5B9E\u73B0\u4E86master-slave(\u4E3B\u4ECE)\u540C\u6B65\u3002</p></li></ul><h2 id="_2-1-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 2.1 \u5E94\u7528\u573A\u666F</h2><h3 id="_2-1-1-\u914D\u5408\u5173\u7CFB\u578B\u6570\u636E\u5E93\u505A\u9AD8\u901F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u914D\u5408\u5173\u7CFB\u578B\u6570\u636E\u5E93\u505A\u9AD8\u901F\u7F13\u5B58" aria-hidden="true">#</a> 2.1.1 \u914D\u5408\u5173\u7CFB\u578B\u6570\u636E\u5E93\u505A\u9AD8\u901F\u7F13\u5B58</h3><ul><li><p>\u9AD8\u9891\u6B21\uFF0C\u70ED\u95E8\u8BBF\u95EE\u7684\u6570\u636E\uFF0C\u964D\u4F4E\u6570\u636E\u5E93IO</p></li><li><p>\u5206\u5E03\u5F0F\u67B6\u6784\uFF0C\u505Asession\u5171\u4EAB</p></li></ul><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101454.png" alt="img" loading="lazy"></p><h3 id="_2-1-2-\u591A\u6837\u7684\u6570\u636E\u7ED3\u6784\u5B58\u50A8\u6301\u4E45\u5316\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u591A\u6837\u7684\u6570\u636E\u7ED3\u6784\u5B58\u50A8\u6301\u4E45\u5316\u6570\u636E" aria-hidden="true">#</a> 2.1.2 \u591A\u6837\u7684\u6570\u636E\u7ED3\u6784\u5B58\u50A8\u6301\u4E45\u5316\u6570\u636E</h3><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101362.png" alt="img" loading="lazy"></p><h2 id="_2-2-redis\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-2-redis\u5B89\u88C5" aria-hidden="true">#</a> 2.2 Redis\u5B89\u88C5</h2>',9),p=e("thead",null,[e("tr",null,[e("th",null,"Redis\u5B98\u65B9\u7F51\u7AD9"),e("th",null,"Redis\u4E2D\u6587\u5B98\u65B9\u7F51\u7AD9")])],-1),h={href:"http://redis.io",target:"_blank",rel:"noopener noreferrer"},m={href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"},g=d(`<p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101612.jpg" alt="img" loading="lazy"></p><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101014.jpg" alt="img" loading="lazy"></p><h3 id="_2-2-1-\u5B89\u88C5\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u5B89\u88C5\u7248\u672C" aria-hidden="true">#</a> 2.2.1 \u5B89\u88C5\u7248\u672C</h3><ul><li><p>6.2.1 for Linux\uFF08redis-6.2.1.tar.gz\uFF09</p></li><li><p>\u4E0D\u7528\u8003\u8651\u5728windows\u73AF\u5883\u4E0B\u5BF9Redis\u7684\u652F\u6301</p></li></ul><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101107.png" alt="img" loading="lazy"></p><h3 id="_2-2-2-\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> 2.2.2 \u5B89\u88C5\u6B65\u9AA4</h3><h4 id="_2-2-2-1-\u51C6\u5907\u5DE5\u4F5C-\u4E0B\u8F7D\u5B89\u88C5\u6700\u65B0\u7248\u7684gcc\u7F16\u8BD1\u5668" tabindex="-1"><a class="header-anchor" href="#_2-2-2-1-\u51C6\u5907\u5DE5\u4F5C-\u4E0B\u8F7D\u5B89\u88C5\u6700\u65B0\u7248\u7684gcc\u7F16\u8BD1\u5668" aria-hidden="true">#</a> 2.2.2.1 \u51C6\u5907\u5DE5\u4F5C\uFF1A\u4E0B\u8F7D\u5B89\u88C5\u6700\u65B0\u7248\u7684gcc\u7F16\u8BD1\u5668</h4><p>\u5B89\u88C5C \u8BED\u8A00\u7684\u7F16\u8BD1\u73AF\u5883</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> centos-release-scl scl-utils-build

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> devtoolset-8-toolchain

scl <span class="token builtin class-name">enable</span> devtoolset-8 <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5gcc\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gcc <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101209.jpg" alt="img" loading="lazy"></p><h4 id="_2-2-2-2-\u4E0B\u8F7Dredis-6-2-1-tar-gz\u653E-opt\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-2-2-2-\u4E0B\u8F7Dredis-6-2-1-tar-gz\u653E-opt\u76EE\u5F55" aria-hidden="true">#</a> 2.2.2.2 \u4E0B\u8F7Dredis-6.2.1.tar.gz\u653E/opt\u76EE\u5F55</h4><h4 id="_2-2-2-3-\u89E3\u538B\u547D\u4EE4-tar-zxvf-redis-6-2-1-tar-gz" tabindex="-1"><a class="header-anchor" href="#_2-2-2-3-\u89E3\u538B\u547D\u4EE4-tar-zxvf-redis-6-2-1-tar-gz" aria-hidden="true">#</a> 2.2.2.3 \u89E3\u538B\u547D\u4EE4\uFF1Atar -zxvf redis-6.2.1.tar.gz</h4><h4 id="_2-2-2-4-\u89E3\u538B\u5B8C\u6210\u540E\u8FDB\u5165\u76EE\u5F55-cd-redis-6-2-1" tabindex="-1"><a class="header-anchor" href="#_2-2-2-4-\u89E3\u538B\u5B8C\u6210\u540E\u8FDB\u5165\u76EE\u5F55-cd-redis-6-2-1" aria-hidden="true">#</a> 2.2.2.4 \u89E3\u538B\u5B8C\u6210\u540E\u8FDB\u5165\u76EE\u5F55\uFF1Acd redis-6.2.1****</h4><h4 id="_2-2-2-5-\u5728redis-6-2-1\u76EE\u5F55\u4E0B\u518D\u6B21\u6267\u884Cmake\u547D\u4EE4-\u53EA\u662F\u7F16\u8BD1\u597D" tabindex="-1"><a class="header-anchor" href="#_2-2-2-5-\u5728redis-6-2-1\u76EE\u5F55\u4E0B\u518D\u6B21\u6267\u884Cmake\u547D\u4EE4-\u53EA\u662F\u7F16\u8BD1\u597D" aria-hidden="true">#</a> 2.2.2.5 \u5728redis-6.2.1\u76EE\u5F55\u4E0B\u518D\u6B21\u6267\u884Cmake\u547D\u4EE4\uFF08\u53EA\u662F\u7F16\u8BD1\u597D\uFF09</h4><h4 id="_2-2-2-6-\u5982\u679C\u6CA1\u6709\u51C6\u5907\u597Dc\u8BED\u8A00\u7F16\u8BD1\u73AF\u5883-make\u4F1A\u62A5\u9519\u2014jemalloc-jemalloc-h-\u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-2-6-\u5982\u679C\u6CA1\u6709\u51C6\u5907\u597Dc\u8BED\u8A00\u7F16\u8BD1\u73AF\u5883-make\u4F1A\u62A5\u9519\u2014jemalloc-jemalloc-h-\u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6" aria-hidden="true">#</a> 2.2.2.6 \u5982\u679C\u6CA1\u6709\u51C6\u5907\u597DC\u8BED\u8A00\u7F16\u8BD1\u73AF\u5883\uFF0Cmake\u4F1A\u62A5\u9519\u2014Jemalloc/jemalloc.h\uFF1A\u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6</h4><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101866.png" alt="img" loading="lazy"></p><h4 id="_2-2-2-7-\u89E3\u51B3\u65B9\u6848-\u8FD0\u884Cmake-distclean" tabindex="-1"><a class="header-anchor" href="#_2-2-2-7-\u89E3\u51B3\u65B9\u6848-\u8FD0\u884Cmake-distclean" aria-hidden="true">#</a> 2.2.2.7 \u89E3\u51B3\u65B9\u6848\uFF1A\u8FD0\u884Cmake distclean</h4><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101432.png" alt="img" loading="lazy"></p><h4 id="_2-2-2-8-\u5728redis-6-2-1\u76EE\u5F55\u4E0B\u518D\u6B21\u6267\u884Cmake\u547D\u4EE4-\u53EA\u662F\u7F16\u8BD1\u597D" tabindex="-1"><a class="header-anchor" href="#_2-2-2-8-\u5728redis-6-2-1\u76EE\u5F55\u4E0B\u518D\u6B21\u6267\u884Cmake\u547D\u4EE4-\u53EA\u662F\u7F16\u8BD1\u597D" aria-hidden="true">#</a> 2.2.2.8 \u5728redis-6.2.1\u76EE\u5F55\u4E0B\u518D\u6B21\u6267\u884Cmake\u547D\u4EE4\uFF08\u53EA\u662F\u7F16\u8BD1\u597D\uFF09</h4><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101927.png" alt="img" loading="lazy"></p><h4 id="_2-2-2-9-\u8DF3\u8FC7make-test-\u7EE7\u7EED\u6267\u884C-make-install" tabindex="-1"><a class="header-anchor" href="#_2-2-2-9-\u8DF3\u8FC7make-test-\u7EE7\u7EED\u6267\u884C-make-install" aria-hidden="true">#</a> 2.2.2.9 \u8DF3\u8FC7make test \u7EE7\u7EED\u6267\u884C: make install</h4><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101572.png" alt="img" loading="lazy"></p><h3 id="_2-2-3-\u5B89\u88C5\u76EE\u5F55-usr-local-bin" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u5B89\u88C5\u76EE\u5F55-usr-local-bin" aria-hidden="true">#</a> 2.2.3 \u5B89\u88C5\u76EE\u5F55\uFF1A/usr/local/bin</h3><p>\u67E5\u770B\u9ED8\u8BA4\u5B89\u88C5\u76EE\u5F55\uFF1A</p><p>redis-benchmark:\u6027\u80FD\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5728\u81EA\u5DF1\u672C\u5B50\u8FD0\u884C\uFF0C\u770B\u770B\u81EA\u5DF1\u672C\u5B50\u6027\u80FD\u5982\u4F55</p><p>redis-check-aof\uFF1A\u4FEE\u590D\u6709\u95EE\u9898\u7684AOF\u6587\u4EF6\uFF0Crdb\u548Caof\u540E\u9762\u8BB2</p><p>redis-check-dump\uFF1A\u4FEE\u590D\u6709\u95EE\u9898\u7684dump.rdb\u6587\u4EF6</p><p>redis-sentinel\uFF1ARedis\u96C6\u7FA4\u4F7F\u7528</p><p>redis-server\uFF1ARedis\u670D\u52A1\u5668\u542F\u52A8\u547D\u4EE4</p><p>redis-cli\uFF1A\u5BA2\u6237\u7AEF\uFF0C\u64CD\u4F5C\u5165\u53E3</p><h3 id="_2-2-4-\u524D\u53F0\u542F\u52A8-\u4E0D\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_2-2-4-\u524D\u53F0\u542F\u52A8-\u4E0D\u63A8\u8350" aria-hidden="true">#</a> 2.2.4 \u524D\u53F0\u542F\u52A8\uFF08\u4E0D\u63A8\u8350\uFF09</h3><p>\u524D\u53F0\u542F\u52A8\uFF0C\u547D\u4EE4\u884C\u7A97\u53E3\u4E0D\u80FD\u5173\u95ED\uFF0C\u5426\u5219\u670D\u52A1\u5668\u505C\u6B62</p><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101194.png" alt="img" loading="lazy"></p><h3 id="_2-2-5-\u540E\u53F0\u542F\u52A8-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_2-2-5-\u540E\u53F0\u542F\u52A8-\u63A8\u8350" aria-hidden="true">#</a> 2.2.5 \u540E\u53F0\u542F\u52A8\uFF08\u63A8\u8350\uFF09</h3><h4 id="_2-2-5-1-\u5907\u4EFDredis-conf" tabindex="-1"><a class="header-anchor" href="#_2-2-5-1-\u5907\u4EFDredis-conf" aria-hidden="true">#</a> 2.2.5.1 \u5907\u4EFDredis.conf</h4><p>\u62F7\u8D1D\u4E00\u4EFDredis.conf\u5230\u5176\u4ED6\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span>  /opt/redis-3.2.5/redis.conf  /myredis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-2-5-2-\u540E\u53F0\u542F\u52A8\u8BBE\u7F6E-daemonize-no-\u6539\u6210-yes" tabindex="-1"><a class="header-anchor" href="#_2-2-5-2-\u540E\u53F0\u542F\u52A8\u8BBE\u7F6E-daemonize-no-\u6539\u6210-yes" aria-hidden="true">#</a> 2.2.5.2 \u540E\u53F0\u542F\u52A8\u8BBE\u7F6E*<strong><strong><strong>*daemonize no*</strong></strong></strong>*\u6539\u6210****<em><strong>*yes*</strong></em></h4><p>\u4FEE\u6539redis.conf(128\u884C)\u6587\u4EF6\u5C06\u91CC\u9762\u7684daemonize no \u6539\u6210 yes\uFF0C\u8BA9\u670D\u52A1\u5728\u540E\u53F0\u542F\u52A8</p><h4 id="_2-2-5-3-redis\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_2-2-5-3-redis\u542F\u52A8" aria-hidden="true">#</a> 2.2.5.3 Redis\u542F\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-server/myredis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101335.png" alt="img" loading="lazy"></p><h4 id="_2-2-5-4-\u7528\u5BA2\u6237\u7AEF\u8BBF\u95EE-redis-cli" tabindex="-1"><a class="header-anchor" href="#_2-2-5-4-\u7528\u5BA2\u6237\u7AEF\u8BBF\u95EE-redis-cli" aria-hidden="true">#</a> 2.2.5.4 \u7528\u5BA2\u6237\u7AEF\u8BBF\u95EE\uFF1Aredis-cli</h4><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101619.png" alt="img" loading="lazy"></p><h4 id="_2-2-5-5-\u591A\u4E2A\u7AEF\u53E3\u53EF\u4EE5-redis-cli-p-6379" tabindex="-1"><a class="header-anchor" href="#_2-2-5-5-\u591A\u4E2A\u7AEF\u53E3\u53EF\u4EE5-redis-cli-p-6379" aria-hidden="true">#</a> 2.2.5.5 \u591A\u4E2A\u7AEF\u53E3\u53EF\u4EE5\uFF1Aredis-cli -p 6379</h4><h4 id="_2-2-5-6-\u6D4B\u8BD5\u9A8C\u8BC1-ping" tabindex="-1"><a class="header-anchor" href="#_2-2-5-6-\u6D4B\u8BD5\u9A8C\u8BC1-ping" aria-hidden="true">#</a> 2.2.5.6 \u6D4B\u8BD5\u9A8C\u8BC1\uFF1Aping</h4><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101229.png" alt="img" loading="lazy"></p><h4 id="_2-2-5-7-redis\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#_2-2-5-7-redis\u5173\u95ED" aria-hidden="true">#</a> 2.2.5.7 Redis\u5173\u95ED</h4><p>\u5355\u5B9E\u4F8B\u5173\u95ED\uFF1Aredis-cli shutdown</p><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101530.png" alt="img" loading="lazy"></p><p>\u4E5F\u53EF\u4EE5\u8FDB\u5165\u7EC8\u7AEF\u540E\u518D\u5173\u95ED</p><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101178.png" alt="img" loading="lazy"></p><p>\u591A\u5B9E\u4F8B\u5173\u95ED\uFF0C\u6307\u5B9A\u7AEF\u53E3\u5173\u95ED\uFF1Aredis-cli -p 6379 shutdown</p><h3 id="_2-2-6-redis\u4ECB\u7ECD\u76F8\u5173\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#_2-2-6-redis\u4ECB\u7ECD\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a> 2.2.6 Redis\u4ECB\u7ECD\u76F8\u5173\u77E5\u8BC6</h3><p>\u7AEF\u53E36379\u4ECE\u4F55\u800C\u6765Alessia Merz <img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101623.png" alt="img" loading="lazy"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>- \u9ED8\u8BA416\u4E2A\u6570\u636E\u5E93\uFF0C\u7C7B\u4F3C\u6570\u7EC4\u4E0B\u6807\u4ECE0\u5F00\u59CB\uFF0C\u521D\u59CB\u9ED8\u8BA4\u4F7F\u75280\u53F7\u5E93
- \u4F7F\u7528\u547D\u4EE4 <span class="token keyword">select</span>  <span class="token operator">&lt;</span>dbid<span class="token operator">&gt;</span>\u6765\u5207\u6362\u6570\u636E\u5E93\u3002 \u5982: <span class="token keyword">select</span> <span class="token number">8</span> 
- \u7EDF\u4E00\u5BC6\u7801\u7BA1\u7406\uFF0C\u6240\u6709\u5E93\u540C\u6837\u5BC6\u7801\u3002
- dbsize\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u7684key\u7684\u6570\u91CF
- flushdb\u6E05\u7A7A\u5F53\u524D\u5E93
- flushall\u901A\u6740\u5168\u90E8\u5E93
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis\u662F\u5355\u7EBF\u7A0B+\u591A\u8DEFIO\u590D\u7528\u6280\u672F</p><p>\u591A\u8DEF\u590D\u7528\u662F\u6307\u4F7F\u7528\u4E00\u4E2A\u7EBF\u7A0B\u6765\u68C0\u67E5\u591A\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF08Socket\uFF09\u7684\u5C31\u7EEA\u72B6\u6001\uFF0C\u6BD4\u5982\u8C03\u7528select\u548Cpoll\u51FD\u6570\uFF0C\u4F20\u5165\u591A\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\u5C31\u7EEA\uFF0C\u5219\u8FD4\u56DE\uFF0C\u5426\u5219\u963B\u585E\u76F4\u5230\u8D85\u65F6\u3002\u5F97\u5230\u5C31\u7EEA\u72B6\u6001\u540E\u8FDB\u884C\u771F\u6B63\u7684\u64CD\u4F5C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u7EBF\u7A0B\u91CC\u6267\u884C\uFF0C\u4E5F\u53EF\u4EE5\u542F\u52A8\u7EBF\u7A0B\u6267\u884C\uFF08\u6BD4\u5982\u4F7F\u7528\u7EBF\u7A0B\u6C60\uFF09</p><p>\u4E32\u884C vs \u591A\u7EBF\u7A0B+\u9501\uFF08memcached\uFF09 vs \u5355\u7EBF\u7A0B+\u591A\u8DEFIO\u590D\u7528(Redis)</p><p>\uFF08\u4E0EMemcache\u4E09\u70B9\u4E0D\u540C: \u652F\u6301\u591A\u6570\u636E\u7C7B\u578B\uFF0C\u652F\u6301\u6301\u4E45\u5316\uFF0C\u5355\u7EBF\u7A0B+\u591A\u8DEFIO\u590D\u7528\uFF09</p><p><img src="https://img-1305804786.cos.ap-beijing.myqcloud.com//picgo202210182101075.png" alt="img" loading="lazy"></p>`,63);function u(b,_){const a=c("ExternalLinkIcon");return r(),l("div",null,[o,e("table",null,[p,e("tbody",null,[e("tr",null,[e("td",null,[e("a",h,[i("http://redis.io"),s(a)])]),e("td",null,[e("a",m,[i("http://redis.cn/"),s(a)])])])])]),g])}const y=n(t,[["render",u],["__file","02-Redis\u6982\u8FF0\u5B89\u88C5.html.vue"]]);export{y as default};
