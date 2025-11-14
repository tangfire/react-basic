// 项目的根组件
// App -> index.js -> public/index.html(root)

// const handleClick = () => {
//   console.log('button clicked');
// }

// const handleClick = (e) => {
//   console.log('button clicked: ',e);
// }

// const handleClick = (name) => {
//     console.log('button clicked: ',name);
// }

const handleClick = (name,e) => {
    console.log('button clicked: ',name,e);
}

function App() {
  return (

    <div className="App">
     <button onClick={(e) => handleClick('jack',e)}>click me</button>
    </div>


  );
}

export default App;
