import { reactive } from './reactive';
import { track, trigger } from './effect'
import { isObject } from '../shared';
export function ref(val) {
  if (isRef(val)) {
    return val;
  }
  return new RefImpl(val);
}

export function isRef(val) {
  return !!(val && val.__isRef);
  // 利用&&短路特性，val 为假值时，不会执行后面的逻辑避免报错，直接返回false
  // 不直接 return val.__isRef; 避免报错
  //直接的话 如果 val为null或undefined，会TypeError
  //如果 val 是一个普通对象、基本数据类型等非 ref 对象
  // val.__isRef 通常为 undefined，函数会返回 undefined，而不是预期的 false
}

// 最轻量化的拦截器 class 的get set，对value属性读写操作拦截
class RefImpl {
  constructor(val) {
    // 私有
   this.__isRef = true;
   this._val  = convert(val);
  }
  // value是访问器属性
  get value() {
    // this是RefImpl的实例，读取时触发track函数收集依赖
    track(this, 'get', 'value')
    return this._val;
  }
  set value(val) {
    if (this._val !== val) {
      this._val = convert(val);
      trigger(this, 'set', 'value')
    }
  }
  // reactive 和 ref 各自处理不同层面的响应式需求，reactive 关注对象属性的变更，
  // ref 关注整体引用的变更。
  // set value 方法保证了 ref 对象在整体引用变更时能正确更新内部值并触发依赖更新，
  // 不会造成逻辑混乱，反而让响应式系统更加完善

//   在 set value 方法里，当给 ref 对象的 value 属性赋予新值时，
//   会先检查新值和旧值是否不同，若不同则更新 this._val 的引用，
//   从而让 .value 属性指向新的对象

 // 给 ref 对象的 value 属性赋新的响应式对象就改变了 ref 对象的引用
 //refObj.value = newReactiveObj;

 }


function convert(val) {
  return isObject(val)? reactive(val): val;
}