// 项目的根组件
// App -> index.js -> public/index.html(root)


import {useEffect,useState} from "react";

function Son(){

    useEffect(()=>{
        var timer = setInterval(()=>{
            console.log('定时器执行中');
        },1000);
        return ()=>{
            // 清除副作用(组件卸载时)
            clearInterval(timer);
        }
    },[])

    return <div>this is son</div>
}


function App() {

    const [show,setShow]=useState(true);

  return (
          <div className="App">
              {show && <Son></Son>}
              <button onClick={()=>{
                  setShow(false);
              }}>卸载Son组件</button>
          </div>
  );
}

export default App;
