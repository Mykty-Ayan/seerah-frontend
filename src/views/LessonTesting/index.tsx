import './index.css';
import { useAppSelector } from '../../store/hooks';
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

const LessonTesting = () => {
  const chapters = useAppSelector((state) => state.lessons.lessons);
  const [lesson, setLesson] = React.useState<ILesson | null>(null);
  const [currQuestion, setCurrQuestion] = React.useState<IQuestion | null>(null);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isAcceptButtonVisible, showAcceptButton] = useState(false);
  const [isCheckStage, toggleCheckStage] = useState(false);
  const [rightAnswersCounter, setRightAnswersCounter] = useState(0);
  let { chapterId, lessonId } = useParams();
  useEffect(() => {
    if (chapterId && lessonId) {
      const chapter = chapters.find((storeChapter) => storeChapter.id === Number(chapterId));
      if (chapter) {
        const localLesson = chapter.lessons.find((lesson) => lesson.id == Number(lessonId));
        if (localLesson) {
          setLesson(localLesson);
          setCurrQuestion(localLesson.questions[questionCounter]);
        }
      }
    }
  }, []);
  useEffect(() => {
    if (questionCounter) {
      if (lesson) {
        setCurrQuestion(lesson.questions[questionCounter]);
      }
    }
  }, [questionCounter]);
  return (
    <>
      {
        lesson && (questionCounter < lesson.questions.length)
        ?
        <HeaderWithBackButton header='Сынақтама' />
        :
        <HeaderWithoutBackButton header='Сынақтама бағасы' />
      }
      {
        lesson && questionCounter < lesson.questions.length &&
        <div className='lesson-testing'>
          {
            lesson && (questionCounter < lesson.questions.length) &&
            <ProgressBar value={((questionCounter) / lesson.questions.length) * 100} />
          }
          {
            currQuestion && (
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
            )
          }
          <div className={isCheckStage ? 'lesson-testing__button-wrapper--check-stage' : 'lesson-testing__button-wrapper'}>
            {
              lesson && (questionCounter < lesson.questions.length) && !isCheckStage &&
              <div onClick={() => { toggleCheckStage(true) }}>
                <AcceptButton isActive={isAcceptButtonVisible && !isCheckStage} />
              </div>
            }
            {
              isCheckStage &&
              <div onClick={() => { setQuestionCounter((questionCounter) => questionCounter + 1); toggleCheckStage(false) }}>
                <NextQuestionButton />
              </div>
            }
          </div>
        </div>
      }
      {
        chapterId && lesson && (questionCounter >= lesson.questions.length) &&
        <TestResult chapterId={Number(chapterId)} lessonId={lesson.id} correctAnswers={rightAnswersCounter} overallAnswers={lesson.questions.length} />
      }
    </>
  )
}

export default LessonTesting;
