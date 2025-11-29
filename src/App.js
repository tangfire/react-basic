// 项目的根组件
// App -> index.js -> public/index.html(root)

import {useMemo, useState} from "react";

function fib(n){
    if (n < 3)
        return 1;
    return fib(n-2) + fib(n-1);

}



function App() {
    const [count1,setCount1] = useState(0);


    const [count2,setCount2] = useState(0);
    const result = useMemo(() => {
        // 返回计算得到的结果
        return fib(count1)
    }, [count1]);
  return (
      <div className="App">
        <button onClick={()=>setCount1(count1 + 1)}>change count1: {count1}</button>
          <button onClick={()=>setCount2(count2 + 1)}>change count2: {count2}</button>
          {result}
      </div>
  );
}

export default App;
