- react ui 组件库
  shadcn-ui
- react-router-dom
  Home Search
- axios api 接口
- store (单纯组件，只负责ui界面 + 状态管理)
- types/articles.ts 
- hooks/
- tailwindcss(我最看重的是它非常切合ai生成代码的力量)
 - 原子类
 - 几乎不需要写css， 适配比较方便
 - tailwindcss 语义和 AIGC 生成前端代码 更搭 v0.div (截图-》前端代码)
   npm install tailwindcss @tailwindcss/vite

- @types/node 
  类型声明文件
  node 早于 typescipt 
  单独发布@types/node 类型包

- npm：即使采用了扁平结构，仍然可能存在重复安装的依赖包，导致磁盘空间的浪费。特别是在多个项目中使用相同版本的依赖包时，每个项目都会在自己的 node_modules 目录中存储一份副本。
pnpm：通过全局存储和硬链接的方式，相同版本的依赖包只需要在全局存储中存储一份，不同项目可以共享这些依赖包，大大节省了磁盘空间
- pnpm dlx shadcn-ui@latest init
- pnpm dlx shadcn-ui@latest add button

- 防抖(不防的话，频繁请求，服务器会被搞死)
 - 减少服务端压力
 - 性能优化
 - utils/
   纯粹的js 工具函数 复用


- hooks
  - 封装响应式业务


- async await 
  - 模拟 sleep 功能