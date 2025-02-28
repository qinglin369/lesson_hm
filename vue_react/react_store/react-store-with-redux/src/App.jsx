import React from 'react';
// 天线宝宝
import { connect } from 'react-redux';
import { increment,decrement} from './store/count';

const App = (props) => {
  console.log(props)
  const {count,increment,decrement} = props;
  // 中央状态请到本地
  return (
    <>
    计数：{count}
    <button onClick={increment}>增加</button>
    <button onClick={decrement}>减少</button>
    </>
  
  )
}

// redux state 映射到 props
const mapStateToProps = (state) => {
  return {
    count: state.counter.value
  }
}

const mapActionsToProps = (dispatch)=> {
  return{
    increment: ()=>dispatch(increment()),
    decrement: ()=>dispatch(decrement()),
    

  }
}
// 高阶组件
export default connect(
  mapStateToProps,
  mapActionsToProps
  
)(App);