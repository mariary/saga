import {useDispatch} from "react-redux";
import {LOAD_DATA} from "./constants";

function App() {

  const dispatch = useDispatch()

  return (
    <div className="App">
      keke
      <button onClick={() => dispatch({type: LOAD_DATA})}>get people</button>
    </div>
  );
}

export default App;
