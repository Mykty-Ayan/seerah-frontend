// src/store/slices/chapterLessonsSlice.ts
import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { getChapterLessons } from "../services/chapterService";
import { IChapterLesson } from "../interfaces";

interface ChapterLessonsState {
  data: IChapterLesson | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

export const fetchChapterLessons = createAsyncThunk(
  "chapterLessons/fetchChapterLessons",
  async () => {
    const response = await getChapterLessons();
    return response;
  }
);

const initialState: ChapterLessonsState = {
  data: null,
  status: "idle",
  error: null,
};

const chapterLessonsSlice = createSlice({
  name: "chapterLessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChapterLessons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchChapterLessons.fulfilled,
        (state, action: PayloadAction<IChapterLesson>) => {
          state.status = "succeeded";
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchChapterLessons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default chapterLessonsSlice.reducer;
