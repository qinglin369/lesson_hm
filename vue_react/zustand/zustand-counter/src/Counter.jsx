// redux store 来到组件
// vue pinia
import  React from 'react'
import useCounterStore from './store/counter.js';


function Counter() {
    // 精确更新，仅在返回的数据变化才会触发更新但代码冗余
    // const count = useCounterStore(state => state.count);
    // const increment = useCounterStore(state => state.increment);
    // const decrement = useCounterStore(state => state.decrement);

    
    // 仓库里任何一个数据发生改变，都会触发这个组件重新render，即使这里没用到仓库某个数据
    const { count, increment, decrement } = useCounterStore();
    
    
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )

}
export default Counter;