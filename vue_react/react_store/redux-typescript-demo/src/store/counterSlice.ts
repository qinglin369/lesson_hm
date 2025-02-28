// counter 模块
// redux 极其复杂 toolkit 简化一些概念
import { createSlice } from '@reduxjs/toolkit'
// 状态类型的约束 interface关键字
interface CounterState {
  value: number;
}
// initialState 满足 CounterState 接口
const initialState: CounterState = {
  value: 0,
}
// 正确性
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // 接受当前状态和action
  // 返回新的状态
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload
    },

  }
  
})

export const { 
    increment, 
    decrement, 
    incrementByAmount
 } = counterSlice.actions

 export default counterSlice.reducer