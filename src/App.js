// 项目的根组件
// App -> index.js -> public/index.html(root)

// useState实现一个计数器按钮
import {useState} from "react";

function App() {

  // count 状态变量
  // setCount 修改状态变量的方法
  const [count, setCount] = useState(0)

  // 2. 点击事件回调
  const handleClick = () => {
    setCount(count + 1)
  }
  return (

    <div className="App">
    <button onClick={handleClick}>{count}</button>
    </div>


  );
}

export default App;
