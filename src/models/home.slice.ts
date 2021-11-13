import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './index';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export const incrementAsync = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 2000);
};

export default counterSlice.reducer;
