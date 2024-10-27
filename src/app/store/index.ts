'use client'

import { configureStore } from "@reduxjs/toolkit";
import lessonsReducer from "./lessonsSlice";
import chapterLessonsReducer from "./chapterLessonsSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonsReducer,
    chapterLessons: chapterLessonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
