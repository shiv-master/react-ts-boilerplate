import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

/**
 * Counter slice state for redux-managed counter actions.
 */
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrease(state, action: PayloadAction<number>) {
      state.count -= action.payload;
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
