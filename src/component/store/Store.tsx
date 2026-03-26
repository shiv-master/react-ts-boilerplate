import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface Counter {
  count: number;
}

const initialCounter: Counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    decrease(state, action) {
      state.count = state.count - action.payload;
    },
  },
});

const Store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
});

export const CounterAction = counterSlice.actions;
export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
