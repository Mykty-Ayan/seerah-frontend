import './index.css';
import { IAnswerOption, IQuestion } from '../../interfaces';
import AnswerOption from '../AnswerOption';
import React, { useEffect } from 'react';
import AnswerFeedback from '../AnswerFeedback';
import MultiAnswerOption from '../MultiAnswerOption';

type AnswersBlockProps = {
  answers: IAnswerOption[];
  showAcceptButton: React.Dispatch<React.SetStateAction<boolean>>;
  questionCounter: number;
  rightAnswersCounter: number;
  setRightAnswersCounter: React.Dispatch<React.SetStateAction<number>>;
  isCheckStage: boolean;
  question: IQuestion;
};

const AnswersBlock = ({ question, answers, showAcceptButton, questionCounter, setRightAnswersCounter, isCheckStage }: AnswersBlockProps) => {
  const [selectedAnswerInd, setSelectedAnswerInd] = React.useState<number | null>(null);
  const [multiAnsSelects, setMultiAnsSelects] = React.useState<number[]>([]);
  useEffect(() => {
    if (selectedAnswerInd !== null) {
      showAcceptButton(true);
    }
  }, [selectedAnswerInd]);
  useEffect(() => {
    if (multiAnsSelects.length > 0) {
      showAcceptButton(true);
    }
  }, [multiAnsSelects]);
  useEffect(() => {
    if (questionCounter !== 0) {
      setSelectedAnswerInd(null);
      showAcceptButton(false);
      setMultiAnsSelects([]);
    }
  }, [questionCounter]);
  useEffect(() => {
    if (isCheckStage) {
      if (!question.isMultipleAnswers) {
        if (answers[selectedAnswerInd!].isRight) {
          setRightAnswersCounter((rightAnswersCounter) => rightAnswersCounter + 1);
        }
      } else {
        let amount = 1;
        for (let i = 0; i < multiAnsSelects.length; i += 1) {
          if (answers[multiAnsSelects[i]].isRight == false) {
            amount = 0;
          }
        }
        setRightAnswersCounter((rightAnswersCounter) => rightAnswersCounter + amount);
      }
    }
  }, [isCheckStage]);
  function handleClick(index: number) {
    if (!isCheckStage) {
      setSelectedAnswerInd(index);
    }
  }
  function handleMultiAnswerClick(index: number) {
    if (!isCheckStage) {
      if (multiAnsSelects.includes(index)) {
        setMultiAnsSelects((multiAnsSelects) => multiAnsSelects.filter((ans) => ans !== index));
      } else {
        setMultiAnsSelects((multiAnsSelects) => [...multiAnsSelects, index]);
      }
    }
  }
  function getRightAnswer() {
    const rightAnswer = answers.find((answer) => answer.isRight === true);
    if (rightAnswer) {
      return rightAnswer.answerText;
    }
    return '';
  }
  return (
    <>
      <div className='answers-block'>
        {
          answers.map((answer, index) => {
            if (question.isMultipleAnswers) {
              return (
                <div key={answer.id} onClick={() => handleMultiAnswerClick(index)}>
                  <MultiAnswerOption
                    isSelected={multiAnsSelects.includes(index)}
                    text={answer.answerText}
                    isRight={answer.isRight}
                    isCheckStage={isCheckStage}
                  />
                </div>
              )              
            } else {
              return (
                <div key={answer.id} onClick={() => handleClick(index)}>
                  <AnswerOption
                    isSelected={selectedAnswerInd === index}
                    text={answer.answerText}
                    isRight={answer.isRight}
                    isCheckStage={isCheckStage}
                  />
                </div>
              )
            }
          })
        }
        {
          !!selectedAnswerInd && isCheckStage &&
          <AnswerFeedback isRight={answers[selectedAnswerInd].isRight} rightAnswer={getRightAnswer()} />
        }
      </div>
    </>
  )
}

export default AnswersBlock;
