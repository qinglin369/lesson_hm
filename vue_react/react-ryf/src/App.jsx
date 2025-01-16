// 组件势函数
// 组件大写字母开头
function App() {
  // jsx
  // js函数区域 里编写html代码
  let myTitle = <h1>Hello World</h1>
  return (
    //  <div>
    //   {myTitle}
    //  </div>
    // JSX 最外层， 只能有且必须有一个节点
    // enclosed tag -> 原理？ api fragment 节点
    <>
      <p>hello</p><p>world</p>
    </>
  );
}

export default App
