import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
// 类型的第二种方式 自定义类型
// ReturnType 内置类型 返回值的类型
// 泛型 约束类型
export type RootState = ReturnType<typeof store.getState>