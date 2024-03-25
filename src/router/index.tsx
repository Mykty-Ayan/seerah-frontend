import {
  createBrowserRouter
} from 'react-router-dom';
import Main from '../views/Main';
import LessonSummary from '../views/LessonSummary';
import LessonTesting from '../views/LessonTesting';
import Landing from '../views/Landing';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "webview/chapters/:chapterId/lessons/:lessonId",
    element: <LessonSummary />,
  },
  {
    path: "webview/chapters/:chapterId/tests/:lessonId",
    element: <LessonTesting />,
  },
  {
    path: "webview",
    element: <Main />,
  },
]);