# 工程化之vite and webpack

- vite 脚手架 
 - 自动加载ui组件库
 - alias 配置
 - 反向代理

- webpack 老牌脚手架
 - 构建项目时 vite 比webpack 快
 - webpack 配置比较复杂 
 - 项目依赖和代码打包
  vite 基于es6 module (IE 11+浏览器) (懒加载，其他不用加载和打包 快： 200多ms) , webpack 基于common js (浏览器不支持的，
  所有的文件都要打包好，慢，5-10s)
 - vue3(抛弃了IE 11+浏览器之前的版本)

- 复杂且定制性强的项目
- 老项目 


- 项目运行过程
- 启动http server
- index.html 作为首页
- main.js 入口文件
- jsx, css等 怎么去编译


# 手写工程化流程
- 项目是SPA，项目的编译和基础建设是后端的， 基于node 
  甚至使用 go rust 等高效编译 
  npm run dev  webpack-dev-server --mode=development 
  npm run build 打包 js css  上线后不需要webpack，vite 的
  webpack 需要提前打包所有的资源， 所以慢
  vite 不需要打包
  
