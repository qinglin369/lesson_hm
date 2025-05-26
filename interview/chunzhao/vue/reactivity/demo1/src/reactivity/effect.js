let activeEffect = null; // 当前effect 
const targetMap = new WeakMap(); // 弱引用 依赖收集 ？ 当前对象的依赖 
// 闭包
export function effect(fn) {
  // 返回一个函数
  // 立即执行一次
  // console.log(fn, '/////');
  const effectFn = () => {
    try {
      activeEffect = effectFn
      return fn() // 执行副作用
    } finally {
      activeEffect = null;
    }
  }
  effectFn() // 立即执行
  return effectFn
}

export function track(target, type, key) {
  console.log('触发 track -> target type(get|{{}}| onMounted) ')
  // console.log(activeEffect);
  // 一个对象只有一次依赖对象作为key 
  let depsMap = targetMap.get(target);
  console.log(depsMap, '????')
  if (!depsMap) {
    depsMap = new Map(); // hashmap 键值对
    targetMap.set(target, depsMap);
    // targetMap.set(target, (depsMap = new Map()))
  }
  // console.log(depsMap, '------')
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set(); // 不要重复添加  fn 加入依赖
  }
  if(!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect);
  }
  depsMap.set(key, deps);
}


export function trigger(target, type, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const deps = depsMap.get(key);
  if (!deps) {
    return;
  }
  deps.forEach((effectFn) => {
    effectFn()
  })
}


// 关于Set和Map的选择：
// Map 确实能避免键的重复。当你向 Map 里设置一个已存在的键时，新的值会覆盖旧的值。不过，Map 是键值对结构，
// 设计目的是存储键和对应的值，而 Set 仅用于存储唯一的值，没有值与之关联。


// 在依赖收集场景下，每个属性的依赖函数只需记录一次，不需要额外的值与之关联，
// 使用 Set 更符合需求，代码也更简洁。若使用 Map 存储依赖函数，就需要为每个函数设置一个无意义的值
// 使用 Map 存储依赖函数


// const depsMap = new Map();
// const effectFn = () => {};
// // 需要为函数设置一个无意义的值
// depsMap.set(effectFn, true);


// 而使用 Set 则更简洁：
// javascript
// Apply
// // 使用 Set 存储依赖函数
// const depsSet = new Set();
// const effectFn = () => {};
// depsSet.add(effectFn);