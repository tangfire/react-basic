// 项目的根组件
// App -> index.js -> public/index.html(root)



import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './store/modules/counterStore'


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
          </div>
      </div>
  );
}

export default App;
