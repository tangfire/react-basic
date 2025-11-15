// 项目的根组件
// App -> index.js -> public/index.html(root)



import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,addToNum } from './store/modules/counterStore'
import {fetchChannelList} from "./store/modules/channelStore";
import {useEffect} from "react";

function App() {
    const count = useSelector(state => state.counter.count)
    const channelList = useSelector(state => state.channel.channelList)
    const dispatch = useDispatch()
    // 使用useEffect触发异步请求执行
    useEffect(() => {
        dispatch(fetchChannelList())
    })

  return (
      <div className="App">
          <div>
              <button
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
              >
                  Increment
              </button>
              <span>{count}</span>
              <button
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
              >
                  Decrement
              </button>
              <button onClick={()=>dispatch(addToNum(10))}>add To 10</button>
              <button onClick={()=>dispatch(addToNum(20))}>add To 20</button>
              <ul>
                  {channelList.map(item => <li key={item.id}>{item.name}</li>)}
              </ul>
          </div>
      </div>
  );
}

export default App;
