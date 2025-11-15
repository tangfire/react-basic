// 项目的根组件
// App -> index.js -> public/index.html(root)

import {useState} from 'react'

function App() {
  const [value, setValue] = useState('');
  return (

    <div className="App">
      <input value={value} onChange={(e)=>{
          setValue(e.target.value)
          console.log(value)
      }} type="text"/>
    </div>


  );
}

export default App;
