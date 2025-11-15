// 项目的根组件
// App -> index.js -> public/index.html(root)


import {useEffect,useState} from "react";

function App() {

    const [count, setCount] = useState(0);
    const [cnt, setCnt] = useState(0);

    // 1. 没有依赖性 初始 + 组件更新
    // useEffect(()=>{
    //     console.log('副作用函数执行了')
    // })

    // 2. 传入一个空数组依赖 初始执行一次
    // useEffect(() => {
    //     console.log('副作用函数执行了');
    // },[])

    // 3. 传入特定依赖性 初始 + 依赖项变化时执行
    useEffect(() => {
        console.log('副作用函数执行了');
    },[count])


  return (
          <div className="App">
              this is App
                <button onClick={()=>{
                    setCount(count + 1)
                }}>{count}</button>
              <button onClick={()=>{
                  setCnt(cnt + 1)
              }}>{cnt}</button>
          </div>
  );
}

export default App;
