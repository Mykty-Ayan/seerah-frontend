"use client";

import styles from './page.module.css';
import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { useRouter, usePathname } from 'next/navigation';
import { ILesson, IQuestion } from '../../../../../interfaces';
import React, { useEffect, useState } from 'react';
import QuestionBlock from '../../../../../components/QuestionBlock';
import AnswersBlock from '../../../../../components/AnswersBlock';
import AcceptButton from '../../../../../components/AcceptButton';
import ProgressBar from '../../../../../components/ProgressBar';
import TestResult from '../../../../../components/TestResult';
import HeaderWithBackButton from '../../../../../components/HeaderWithBackButton';
import HeaderWithoutBackButton from '../../../../../components/HeaderWithoutBackButton';
import NextQuestionButton from '../../../../../components/NextQuestionButton';
import { fetchChapterLessons } from '../../../../../store/chapterLessonsSlice';
import { finishLesson } from '../../../../../services/lessonService';


const LessonTesting = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const chapters = useAppSelector((state) => state.lessons.lessons);
  const { data: chapterLesson, status } = useAppSelector((state) => state.chapterLessons);

  const pathSegments = pathname.split('/');
  const chapterId = pathSegments[3];
  const lessonId = pathSegments[5];

  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [currQuestion, setCurrQuestion] = useState<IQuestion | null>(null);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isAcceptButtonVisible, showAcceptButton] = useState(false);
  const [isCheckStage, toggleCheckStage] = useState(false);
  const [rightAnswersCounter, setRightAnswersCounter] = useState(0);
  const [isLessonFinished, setIsLessonFinished] = useState(false);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChapterLessons());
    } else if (status === 'succeeded' && chapterLesson) {
      if (chapterId && lessonId) {
        const chapter = chapters.find((storeChapter) => storeChapter.id === Number(chapterId));
        if (chapter) {
          const localLesson = chapter.lessons.find((lesson) => lesson.id === Number(lessonId));
          if (localLesson) {
            setLesson(localLesson);
            setCurrQuestion(localLesson.questions[questionCounter]);
          }
        }
      }
    }
  }, [dispatch, status, chapterLesson, chapterId, lessonId, chapters, questionCounter]);

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

  const handleCheckStageToggle = () => {
    toggleCheckStage(!isCheckStage);
  };

  const handleNextQuestion = () => {
    setQuestionCounter(questionCounter + 1);
    toggleCheckStage(false);
  };

  return (
    <>
      {lesson && questionCounter < lesson.questions.length ? (
        <HeaderWithBackButton header="Сынақтама" />
      ) : (
        <HeaderWithoutBackButton header="Сынақтама бағасы" />
      )}
      {lesson && questionCounter < lesson.questions.length && (
        <div className={styles.lessonTesting}>
          <ProgressBar value={(questionCounter / lesson.questions.length) * 100} />
          {currQuestion && (
            <>
              <QuestionBlock header={`${currQuestion.id} сұрақ`} description={currQuestion.questionText} />
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
          <div className={isCheckStage ? styles.lessonTestingButtonWrapperCheckStage : styles.lessonTestingButtonWrapper}>
            {!isCheckStage && (
              <div onClick={handleCheckStageToggle}>
                <AcceptButton isActive={isAcceptButtonVisible} />
              </div>
            )}
            {isCheckStage && (
              <div onClick={handleNextQuestion}>
                <NextQuestionButton />
              </div>
            )}
          </div>
        </div>
      )}
      {lesson && questionCounter >= lesson.questions.length && (
        <TestResult
          chapterId={Number(chapterId)}
          lessonId={lesson.id}
          lessonName={lesson.name}
          correctAnswers={rightAnswersCounter}
          overallAnswers={lesson.questions.length}
        />
      )}
    </>
  );
};

export default LessonTesting;
