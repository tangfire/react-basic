// 项目的根组件
// App -> index.js -> public/index.html(root)

const articleType = 3 // 0 1 3

// 定义核心函数(根据文章类型返回不同的JSX模版)
function getArticleTem() {
  if (articleType === 0){
    return <div>我是无图文章</div>
  }else if (articleType === 1){
    return <div>我是单图模式</div>
  }else{
    return <div>我是三图模型</div>
  }
}

function App() {
  return (

    <div className="App">
      {getArticleTem()}
    </div>


  );
}

export default App;
