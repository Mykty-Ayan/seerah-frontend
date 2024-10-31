"use client";

import './page.module.css';
import { useAppSelector } from '../../../../../store/hooks';
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

const LessonTesting = () => {
  const router = useRouter();
  const pathname = usePathname();
  const chapters = useAppSelector((state) => state.lessons.lessons);

  const pathSegments = pathname.split('/');
  const chapterId = pathSegments[3];
  const lessonId = pathSegments[5];

  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [currQuestion, setCurrQuestion] = useState<IQuestion | null>(null);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isAcceptButtonVisible, showAcceptButton] = useState(false);
  const [isCheckStage, toggleCheckStage] = useState(false);
  const [rightAnswersCounter, setRightAnswersCounter] = useState(0);

  useEffect(() => {
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
  }, [chapterId, lessonId, chapters, questionCounter]);

  useEffect(() => {
    if (lesson) {
      setCurrQuestion(lesson.questions[questionCounter]);
    }
  }, [questionCounter, lesson]);

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
        <div className="lesson-testing">
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
          <div className={isCheckStage ? 'lesson-testing__button-wrapper--check-stage' : 'lesson-testing__button-wrapper'}>
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
          correctAnswers={rightAnswersCounter}
          overallAnswers={lesson.questions.length}
        />
      )}
    </>
  );
};

export default LessonTesting;
