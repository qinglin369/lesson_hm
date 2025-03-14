
import {
  mutableHandlers,
  shallowReactiveHandlers
} from './baseHandlers'
// 依赖地图  Map es6 新增的数据结构 HashMap O(1) key 取 value 
// get set has ....  json 区别 key 只能是字符串， map 可以是对象
export const reactiveMap = new WeakMap(); // 全局依赖
export const shallowReactiveMap = new WeakMap() // 浅依赖
// 垃圾回收 弱引用
// 大型项目  响应式对象很多， 但是 reactiveMap 只有一个 性能？
// router-view  
// target 普通对象
export const reactive = (target) => {
  // 返回代理对象
  return createReactiveObject(target, reactiveMap, mutableHandlers);
}
export const shallowReactive = (target) => {
  return createReactiveObject(target, shallowReactiveMap, shallowReactiveHandlers);
}
// proxyHandlers 包含了各种拦截器（trap）的对象，用于定义代理对象的行为
// proxyMap 是一个 WeakMap，用于存储目标对象和对应的代理对象之间的映射关系
// 通过 proxyMap，可以避免对同一个目标对象重复创建代理对象
function createReactiveObject(target, proxyMap, proxyHandlers) {
  if (typeof target !== 'object') {
    console.warn('reactive 参数必须是一个对象');
    return target;
  }

  // 先检查 proxyMap 中是否已经存在该目标对象对应的代理对象
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy; // 已经存在， 直接返回
  }
 // proxyHandlers 包含了各种拦截器（trap）的对象，用于定义代理对象的行为
  // 如果不存在， 创建代理对象
  const proxy = new Proxy(target, proxyHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}