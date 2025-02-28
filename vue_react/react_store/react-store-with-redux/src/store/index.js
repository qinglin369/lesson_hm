// 创建仓库
// 实例化一个仓库  redux === vuex
// 统一的代码仓库 只有一个仓库 树状结构
// 好大， 建立子仓库 
// count 融入
import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from './count';



const rootReducer = {
    counter: counterSlice,
    
    
};


// 返回Store 实例
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

 export default store;