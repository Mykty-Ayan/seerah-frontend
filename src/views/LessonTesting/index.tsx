import './index.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useParams } from 'react-router-dom';
import { ILesson, IQuestion } from '../../interfaces';
import React, { useEffect, useState } from 'react';
import QuestionBlock from '../../components/QuestionBlock';
import AnswersBlock from '../../components/AnswersBlock';
import AcceptButton from '../../components/AcceptButton';
import ProgressBar from '../../components/ProgressBar';
import TestResult from '../../components/TestResult';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import HeaderWithoutBackButton from '../../components/HeaderWithoutBackButton';
import NextQuestionButton from '../../components/NextQuestionButton';

import { fetchChapterLessons } from '../../store/chapterLessonsSlice';
import { finishLesson } from '../../services/lessonService';

const LessonTesting = () => {
  const dispatch = useAppDispatch();
  const { data: chapterLesson, status } = useAppSelector((state) => state.chapterLessons);
  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [currQuestion, setCurrQuestion] = useState<IQuestion | null>(null);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isAcceptButtonVisible, showAcceptButton] = useState(false);
  const [isCheckStage, toggleCheckStage] = useState(false);
  const [rightAnswersCounter, setRightAnswersCounter] = useState(0);
  const [isLessonFinished, setIsLessonFinished] = useState(false);
  let { chapterId, lessonId } = useParams();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChapterLessons());
    } else if (status === 'succeeded' && chapterLesson) {
      if (chapterId && lessonId) {
        const chapter = chapterLesson.lessons.find((storeChapter) => storeChapter.id === Number(chapterId));
        if (chapter) {
          const localLesson = chapter.lessons.find((lesson) => lesson.id === Number(lessonId));
          if (localLesson) {
            setLesson(localLesson);
            setCurrQuestion(localLesson.questions[questionCounter]);
          }
        }
      }
    }
  }, [dispatch, status, chapterLesson, chapterId, lessonId, questionCounter]);

  useEffect(() => {
    if (questionCounter && lesson) {
      setCurrQuestion(lesson.questions[questionCounter]);
    }
  }, [questionCounter, lesson]);

  useEffect(() => {
    if (lesson && questionCounter >= lesson.questions.length && !isLessonFinished) {
      const lessonFinishRequest = {
        correctAnswersCount: rightAnswersCounter,
        totalAnswersCount: lesson.questions.length,
      };
      finishLesson(lesson.id, lessonFinishRequest)
        .then((response) => {
          console.log('Lesson finished:', response);
          // After finishing the lesson, update the state and refetch the chapter lessons
          setIsLessonFinished(true);
          dispatch(fetchChapterLessons());
        })
        .catch((error) => {
          console.error('Error finishing lesson:', error);
        });
    }
  }, [lesson, questionCounter, rightAnswersCounter, dispatch, isLessonFinished]);

  return (
    <>
      {lesson && (questionCounter < lesson.questions.length)
        ? <HeaderWithBackButton header='Сынақтама' />
        : <HeaderWithoutBackButton header='Сынақтама бағасы' />
      }
      {lesson && questionCounter < lesson.questions.length && (
        <div className='lesson-testing'>
          {lesson && (questionCounter < lesson.questions.length) && (
            <ProgressBar value={((questionCounter) / lesson.questions.length) * 100} />
          )}
          {currQuestion && (
            <>
              <QuestionBlock
                header={`${currQuestion.id} сұрақ`}
                description={currQuestion.questionText}
              />
              <AnswersBlock
                rightAnswersCounter={rightAnswersCounter}
                setRightAnswersCounter={setRightAnswersCounter}
                questionCounter={questionCounter}
                showAcceptButton={showAcceptButton}
                answers={currQuestion.answerOptions}
                isCheckStage={isCheckStage}
                question={currQuestion}
              />
            </>
          )}
          <div className={isCheckStage ? 'lesson-testing__button-wrapper--check-stage' : 'lesson-testing__button-wrapper'}>
            {lesson && (questionCounter < lesson.questions.length) && !isCheckStage && (
              <div onClick={() => { toggleCheckStage(true); }}>
                <AcceptButton isActive={isAcceptButtonVisible && !isCheckStage} />
              </div>
            )}
            {isCheckStage && (
              <div onClick={() => { setQuestionCounter((questionCounter) => questionCounter + 1); toggleCheckStage(false); }}>
                <NextQuestionButton />
              </div>
            )}
          </div>
        </div>
      )}
      {chapterId && lesson && (questionCounter >= lesson.questions.length) && (
        <TestResult chapterId={Number(chapterId)} lessonId={lesson.id} correctAnswers={rightAnswersCounter} overallAnswers={lesson.questions.length} />
      )}
    </>
  );
};

export default LessonTesting;