// 项目的根组件
// App -> index.js -> public/index.html(root)

// 1. 定义reducer函数 根据不同的action 返回不同的状态
import {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'SET':
            return action.payload
        default:
            return state
    }
}

// 2. 组件里面调用useReducer(reducer,0) => [state,dispatch]

// 3. 调用dispatch({type:'INC'}) => 通过reducer产生一个新的状态 使用这个新状态更新UI

function App() {
    const [state,dispatch] = useReducer(reducer,0);

  return (
      <div className="App">
        this is {state}
          <br/>
          <button onClick={()=>dispatch({type:'INC'})}>+</button>
          <br/>
          <button onClick={()=>dispatch({type:'DEC'})}>-</button>
          <br/>
          <button onClick={()=>dispatch({type:'SET',payload:100})}>100</button>
      </div>
  );
}

export default App;
