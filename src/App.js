// 项目的根组件
// App -> index.js -> public/index.html(root)

import {memo, useState} from "react";

const MemoSon = memo(function Son(){
    console.log("Hello World!");
    return <div>this is son</div>
})



function App() {
    const [count, setCount] = useState(0)
  return (
      <div className="App">
        <button onClick={()=>setCount(count + 1)}>+{count}</button>
          <MemoSon></MemoSon>
      </div>
  );
}

export default App;
