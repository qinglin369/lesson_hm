原型链

# Symbol

- 唯一值
  - 用symbol 函数来声明
  - 给一个label 可选
  - 返回值唯一
  - 常用于对象字面量 不会， 不需要担心 会被覆盖
    key 的用法 这也是Symbol 需要的原因
    大厂大型项目， 对象复杂， 难维护  ，多人协作

- Object.keys() 对象的键名数组， 但不包括Symbol 键名
- Object.values() 对象键值的数组， 但不包括Symbol 值
- Object.entries() 对象的键值对数组， 但不包括Symbol 键值对

- 可迭代对象 
 Object.getOwnPropertySymbols(classMates)  对象上的属性描述符
  -虽然 symbol enumerable 属性为true 但是依然不可枚举。
  因为Symbol 独特设计， 就是提供 唯一值  
  只能 getownPropertySymbols 来获取

- OwnPropertySymbols?
