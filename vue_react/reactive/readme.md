# 响应式

{{count}}// 响应式更新
let count = ref(0) // 响应式对象
count.value++// 数据修改

-getter  setter

-数据业务 value count -> 包装成响应式对象 ref -> 被拦截去更新依赖数据的地方
 -声明了数据(value,count)
 -把数据作为对象的属性
 - es5 就有， Object.defineProperty(obj,property,{
    get,
    set
 }) 在修改数据的同时，顺便把get set 寄存的事情干了
