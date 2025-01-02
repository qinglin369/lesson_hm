# vue 组件设计， 提供API 支持

v3bs 快捷键
-页面的layout 和 设计稿
- 组件树
- 页面由组件构成， 组件是开发的基本单位(满足大项目)
  - 组件设计 最重要
  - 组件可以复用 可以像积木一样，随便组合， 提高开发效率

- vue 为组件设计提供了哪些聚焦业务开发的API呢？
  - style scoped
   -不会污染全局样式(组件太多了，不能搞破坏)
   - 当前组件生成一个随机数、属性选择器
   - 写的代码，会添加这个属性选择器
  - 父、子组件传递数据时，使用v-bind: value="score" 传参 props 
    子组件内部要用到的score 应该和父组件的score 数据绑定
     

<style scoped>
div {
    width: 50px;
    height: 50px;
    background-color: pink;
    margin: 5px;
}
你的团队也会用到div，所以要避免污染，用scoped限制 

组件像积木一样，可以组合，可以复用