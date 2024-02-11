import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Main from '../views/Main';
import LessonSummary from '../views/LessonSummary';
import LessonTesting from '../views/LessonTesting';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "chapters/:chapterId/lessons/:lessonId",
    element: <LessonSummary />,
  },
  {
    path: "chapters/:chapterId/tests/:lessonId",
    element: <LessonTesting />,
  },
]);