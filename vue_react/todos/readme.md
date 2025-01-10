# 双向绑定
todos是数据响应,
数据项和页面元素保持一致

- title data
{{title}} 数据驱动页面
input v-model="title"
input 输入时候， 输入框的值改变了， 和数据项title不一样
@input 麻烦， v-model 专门解决数据双向绑定


- :calss  :value ?
 动态绑定属性业务时用：v-bind：

- 数据和业务保持一致

- all 所有任务的数量
 - title、todos 不一样 对立的
 - all 依赖于 对todos的计算，不是独立的，不能直接放入data当中
 - computed 计算属性 
   形式是函数，返回值是一个值
- 当计算属性函数依赖项发生改变时， 会重新执行函数， 得到新的值。
- 关注函数体内的 数据属性
- 计算属性也是数据的一类
- get set 两种操作， 数据属性的特质更明显

 多数据与界面的绑定
- 数据和界面状态的正确性
 - 数据驱动界面 {{}} 单项数据绑定
 - 双向绑定 v-model 
   -勾选，输入值等 界面状态发生改变
   - 数据要保持跟界面状态一致
   - v-model 修改数据
   -保证状态一致
- 依赖项的联动一致性
 allDone true/false  todos 也得变

- 不犯错， 数据和界面状态保持一致·
- vue 2.0 让开开发者 爽 专注于数据业务
data
methods
computed
等等
好处 简单，缺点  不灵活，(一个功能要到data，method，computed等等处去找)
- 3.0 ？
选项式 -> setup 组合式 对应的data + method + computed  放在一起
有利于大型项目 (组件代码> 100行 ) 的维护
