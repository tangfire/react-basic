// 项目的根组件
// App -> index.js -> public/index.html(root)

// function Button(){
//     return <button>click me</button>
// }

const Button = () =>{
    return <button>click me!</button>
}

function App() {
  return (

    <div className="App">
     <Button></Button>
        <br/>
        <Button/>
    </div>


  );
}

export default App;
