import request from './apiClient';
import { IChapter } from '../interfaces';

export const getLessons = async (): Promise<IChapter[]> => {
    const response = await request({ url: '/api/v2/lesson/all', method: 'GET', requiresAuth: true });
    return response.data;
};

