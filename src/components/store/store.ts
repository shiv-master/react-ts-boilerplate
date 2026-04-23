import { configureStore, createSlice } from "@reduxjs/toolkit";

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState: initialState,
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
  reducer: { counter: countSlice.reducer },
});

export default Store;
export const counterActions = countSlice.actions;

export type AppState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
