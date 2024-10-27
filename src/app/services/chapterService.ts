import request from "./apiClient";
import { IChapter, IChapterLesson } from "../interfaces";

export const getChapters = async (): Promise<IChapter[]> => {
  const response = await request({
    url: "/api/v2/chapter/all",
    method: "GET",
    requiresAuth: true,
  });
  return response.data;
};

export const getChapter = async (chapterId: string): Promise<IChapter[]> => {
  const response = await request({
    url: `/api/v2/chapter/${chapterId}`,
    method: "GET",
    requiresAuth: true,
  });
  return response.data;
};

export const getChapterLessons = async (): Promise<IChapterLesson> => {
  const response = await request({
    url: "/api/v2/chapter/lessons",
    method: "GET",
    requiresAuth: true,
  });
  return response.data;
};

// Example function to update lesson status
// export const updateLessonStatus = async (lessonId: string, status: boolean): Promise<ILesson> => {
//   const response = await apiClient.put(`/lesson/${lessonId}`, { isFinished: status });
//   return response.data;
// };
