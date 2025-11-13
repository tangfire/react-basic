// 项目的根组件
// App -> index.js -> public/index.html(root)

const list = [
    {id:1001,name:"John Doe"},
    {id:1002,name:"January"},
    {id:1003,name:"July"},
]

function App() {
  return (
    <div className="App">
     this is app
        <ul>
            {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
  );
}

export default App;
