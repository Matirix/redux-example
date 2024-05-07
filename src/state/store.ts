import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice'

// Put as many slices/states in here.
export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
});

// For Typscript

// The return type of the typeof store.getState() function is RootState.
// For useSelector Hook to indicate what type of state it's in.
export type RootState = ReturnType<typeof store.getState>;

// This comes from the type of store.dispatch which is a function that takes an action as an argument.
// This is useful for async anctions using useDispatch
export type AppDispatch = typeof store.dispatch;