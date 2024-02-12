import { configureStore } from '@reduxjs/toolkit';
import lessonsReducer from './lessonsSlice';

export const store = configureStore({
  reducer: {
    lessons: lessonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;