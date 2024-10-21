import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import imageReducer from './reducers';

export const store = configureStore({
  reducer: {
    imageReducer: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
