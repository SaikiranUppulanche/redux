const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "decreament") {
    return { counter: state.counter - 1 };
  }

  return {
    counter: state.counter + 1,
  };
};

const store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {
  const latestSate = store.getState();
  console.log(latestSate);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increament" });
store.dispatch({ type: "increament" });
store.dispatch({ type: "increament" });
store.dispatch({ type: "increament" });
store.dispatch({ type: "decreament" });
