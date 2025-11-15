// 项目的根组件
// App -> index.js -> public/index.html(root)

import {useState} from "react";

function A ({onGetAName}){
  const name = 'this is A name';
  return (
      <div>
        this is A component
        <button onClick={()=>{
            onGetAName(name);
        }}>send</button>
      </div>
  )
}

function B ({name}){
  return (
      <div>
        this is B Component
          <br/>
          {name}
      </div>
  )
}


function App() {
    const [name, setName] = useState()

    const getAName = (name) => {
        console.log(name);
        setName(name)
    }
  return (

    <div className="App">
      <A onGetAName={getAName}></A>
      <B name={name}></B>
    </div>


  );
}

export default App;
