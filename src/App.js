// 项目的根组件
// App -> index.js -> public/index.html(root)

import {useState} from "react";

function App() {

  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const [form,setForm] = useState({
    name:'jack'
  })

  const changeForm = () => {
    setForm({
      ...form,
      name:'jack216'
    });
  }

  return (

    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form {form.name}</button>
    </div>


  );
}

export default App;
