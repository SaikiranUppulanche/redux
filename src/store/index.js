import { legacy_createStore } from "redux";

const counterReducer = ({ state = { counter: 0 }, action }) => {
  if (action.type === "increamentBy2") {
    return { counter: state.counter + 2 };
  }
  if (action.type === "decreamentBy2") {
    return { counter: state.counter - 2 };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
