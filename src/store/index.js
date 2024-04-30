import { legacy_createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increamentBy5") {
    return { counter: state.counter + 5 };
  }
  if (action.type === "decreamentBy5") {
    return { counter: state.counter - 5 };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
