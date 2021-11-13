import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './home.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// 在整个应用程序中使用而不是简单的useDispatch和useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
