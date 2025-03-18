# CSR 和 SSR
 <script type="module" src="/src/main.js"></script>
  - type="module" 是 ES6 模块的语法 否则只能common js 语法
  在这种模式下，JavaScript 文件可以使用 import 和 export 语句来导入和导出模块。
  如果不使用 type="module"，则只能使用 CommonJS 语法（如 require 和 module.exports）。

- CSR
  - 优点
  - 用户体验好，不要等待服务器返回数据，直接显示页面，不会有白屏
  所有的 路由和页面(组件) 都在客户端解析和渲染的 Client Side Rendering
  缺点 
   - 首屏加载慢(首次请求需要下载所有的 js 和 css，后面会缓存在浏览器中)
      - 解决
      懒加载 按需加载
      执行组件的编译和渲染
   - SEO 不友好，搜索引擎爬虫只能看到一个空的 HTML 页面，无法获取页面的实际内容，不利于搜索引擎优化

- SSR 企业官网 (可以让网站在搜索引擎的搜索结果中更容易被用户找到，从而提高网站的曝光率,比如百度搜跳出知乎，csdn)
 - 组件的编译和html字符串放到服务器端渲染
 - SEO 更好
   

vue-ssr
 npm i @vue/server-renderer 渲染 -> html字符串
 @vue/compiler-ssr  编译
     
    