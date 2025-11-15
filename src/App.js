// 项目的根组件
// App -> index.js -> public/index.html(root)



import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,addToNum } from './store/modules/counterStore'


function App() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
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
          </div>
      </div>
  );
}

export default App;
