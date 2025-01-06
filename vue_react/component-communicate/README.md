# vue3 响应式
 - ref .value 响应式对象  value Object.defineProperty
 - reactive 响应式代理 对对象的所有属性都进行代理，代理整个对象 开销大

 - 父子组件通信
  - Props 父传字 数据
  - @child-message="handleEvent" 自定义事件名称 + 处理函数 attrs
  - 子组件 一切由外界传的 都得声明一下
  emit 汇报一下
    emits = defineEmits(['child-message'])
  - emits(event_name,params)

 