// 项目的根组件
// App -> index.js -> public/index.html(root)

import {createContext, useContext, useState} from "react";

// 1. createContext方法创建一个上下文对象
const MsgContext = createContext()

// 2. 在顶层组件 通过Provider组件提供数据

// 3. 在底层组件 通过useContext钩子函数使用数据

function A (){
  return (
      <div>
        this is A component
      <B></B>
      </div>
  )
}

function B(){
    const msg = useContext(MsgContext);
  return (
      <div>this is B component,{msg}</div>

  )
}



function App() {
    const msg = 'this is app msg'
  return (

      <MsgContext.Provider value={msg}>
          <div className="App">
              this is App
              <A></A>
          </div>
      </MsgContext.Provider>


  );
}

export default App;
