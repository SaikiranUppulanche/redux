import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increamentBy2(state, action) {
      state.counter += action.payload;
    },
    decreamentBy2(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increamentBy2") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decreamentBy2") {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;

export default store;
