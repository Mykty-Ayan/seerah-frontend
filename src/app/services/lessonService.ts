import request from "./apiClient";
import { IChapter } from "../interfaces";

export const getLessons = async (): Promise<IChapter[]> => {
  const response = await request({
    url: "/api/v2/lesson/all",
    method: "GET",
    requiresAuth: true,
  });
  return response.data;
};

export const finishLesson = async (
  id: number,
  lessonFinishRequest: {
    correctAnswersCount: number;
    totalAnswersCount: number;
  }
): Promise<any> => {
  const response = await request({
    url: `/api/v2/lessons/${id}/finish`,
    method: "PUT",
    data: lessonFinishRequest,
    requiresAuth: true,
  });
  return response.data;
};
