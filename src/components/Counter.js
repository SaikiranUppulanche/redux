import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const increamentCounter = () => {
    dispatch(counterActions.increamentBy2(2));
  };
  const decreamentCounter = () => {
    dispatch(counterActions.decreamentBy2(2));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decreamentCounter}>Decreament by 2</button>
        <button onClick={increamentCounter}>Increament by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
