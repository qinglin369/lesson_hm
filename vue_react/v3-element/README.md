# Element3
- 如何开发一个vue项目
 - vite  工程化
   npm init vite
 - vue 核心语法(响应式、组件化、指令等)
  前端框架
 - vue-router
 - pinia
 - element3 UI 组件库
 - stylus
 - axios ajax 请求封装库
 

 - app.use
   向vue app 中注册插件 生态
   element3 提供的组件可以全局使用
   不用重复造轮子，满足70%常见组件

 - 注意问题 性能
   首页加载会变慢， 按需加载
  - element3 组件 以el-开头 
  避免了与自己组件冲突的情况

## 项目亮点
- 项目全面使用 es6+ 风格
  代码简洁 易读 易维护
- 良好的注释
- 按需加载vue组件库 组件库element3 ， 性能优化，页面加载速度
- 路由
 -多级路由
  二级路由 path 前面不要/
- path,component name,meta
- 路由懒加载
  最佳用户体验是快
  按需加载页面级别组件 import函数引入方式 () => import('')
- 路由守卫
- git 提交为结尾

- 表单组件
  - 看文档
  - ：model 收集表单数据
  - ref 获取表单实例
   - 有时候要获取DOM元素，组件对象
   - 调用相应的方法
   - template 用ref 标记dom | 组件
   - const formRef = ref(null) 挂载前就为null
   - 挂载后就拿到了
- 表单的校验
  - rules
  - items prop
  - valid 方法 boolean

- 布局组件
 -ElContainer
 -ElAside
 -ElMain
 -ElRow
 -ElCol

- web 应用登录 (为什么要登录)
 - http 请求 + 响应的简单协议 用户状态
 - 会话？ session
 - cookie (小饼干) 
 - 服务器知道这次请求是哪一个用户发起的？
 - 用户携带身份证明 告知服务器我是谁？
 - {
  userId: 1,
  userName: 'admin',
  avatar:'----'
 }

 - 登录流程
  - 前端提交登录
   - login.vue组件化表单
   - 调用api、 login接口
    - 项目多了一层 api 目录会管理应用的所有接口
    - 接口好管理， 统一维护
    - 和组件解耦
   - 统一配置的axios 实例 发送请求
- 后端验证？
 - mock 模拟以下后端
 apifox 跳过前端， 模拟get/post 等请求
 前端 mock 跳过后端， 模拟后端请求

 - jwt 登录
  - npm i jsonwebtoken   json?+ web + 令牌
  - sign 签发
  - token -> verify 方法 返回用户对象 name avatar....
 
