# next
- react *全栈框架*
 - SSR 服务器端渲染
  - 首屏加载时间短
  - SEO
  Next.js是强大的React全栈框架，支持SSR，首屏快且利于SEO，开发高效
- vercel
 01.dev AI 代码生成工具
 - 企业站

- notebook 笔记本
  - 后端 note CRUD
   - next.js 全栈框架
   - redis(内存) mongodb NOSQL 
   - 前端


- 设计组件


- 约定俗成 的next
 - alias jsconfig.json
 - layout.js 布局
  children
 - page.js 页面

- npm 包
 - dayjs
 - uuid 并发

- 组件的设计
 - 组件的拆分力度
  - 复用
  - 管理
  - 下线方便
 - 复杂组件
 SidebarNoteItem
  - 可展开收起
  - skeleton 骨架屏
  用户体验优化方案
  loading (菊花)好在哪？ 基本的格局
- 动态样式 展开样式/激活样式
- 新增、修改后的动画 flash 
 触发onAnimationEnd 事件 移除flash

 - react/hooks
  - useRef
  - useTransition 方便  transition效果 isPending true

- next.js 服务器端组件和客户端组件
 - SidebarNoteItemHeader 粒度细化，拆分之后成为了服务端组件
 - SidebarNoteItemContent 事件交互... use client 声明
  
- Suspense
Suspense 用于处理异步加载，实现优雅过渡
fallback
组件的 promise 


- 详情页
 - promise 之前 loading.js 会显示
 - skeleton 
 - marked markdown  转 html
 - sanitizeHtml 过滤 html 标签 XSS 攻击
 - dangerouslySetInnerHtml 渲染 html 
  ```js
  var a = 1;
  ```
在默认配置下，`marked` 会将其转换为如下 HTML：

```html
<pre><code class="language-js">var a = 1;
</code></pre>


