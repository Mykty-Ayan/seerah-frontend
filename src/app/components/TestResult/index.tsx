"use client";

import { useRouter } from 'next/navigation';

import { useAppDispatch } from '../../store/hooks';
import { markLessonAsFinished } from '../../store/lessonsSlice';
import {TestResultView} from "./components /TestResultView";

type TestResultType = {
  correctAnswers: number;
  overallAnswers: number;
  chapterId: number;
  lessonId: number;
  lessonName: string;
};

const TestResult = ({ correctAnswers, overallAnswers, lessonId, chapterId, lessonName }: TestResultType) => {
  const dispatch = useAppDispatch();
  const router = useRouter();  

  function clickHandler() {
    dispatch(markLessonAsFinished({ lessonId, chapterId }));
    router.push('/webview');  
  }
  const percentage = ((correctAnswers / overallAnswers) * 100).toFixed(0);

  return <TestResultView
      percentage={percentage}
      correctAnswers={correctAnswers}
      overallAnswers={overallAnswers}
      onClick={clickHandler}
      chapterId={chapterId}
      lessonName={lessonName}
  />
};

export default TestResult;
