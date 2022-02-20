import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./Actions/index";
export default function App() {
  const mystate = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>COUNTER</h1>
      <div className="div">{mystate}</div>
      <button onClick={() => dispatch(inc())}>+</button>

      <button onClick={() => dispatch(dec())}>-</button>
    </div>
  );
}
