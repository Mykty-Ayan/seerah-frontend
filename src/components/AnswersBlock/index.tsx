import './index.css';
import { IAnswerOption } from '../../interfaces';
import AnswerOption from '../AnswerOption';
import React, { useEffect, useState } from 'react';

type AnswersBlockProps = {
  answers: IAnswerOption[];
  showAcceptButton: React.Dispatch<React.SetStateAction<boolean>>;
  questionCounter: number;
  rightAnswersCounter: number;
  setRightAnswersCounter: React.Dispatch<React.SetStateAction<number>>;
};

const AnswersBlock = ({ answers, showAcceptButton, questionCounter, setRightAnswersCounter }: AnswersBlockProps) => {
  const [selectedAnswerInd, setSelectedAnswerInd] = React.useState<number | null>(null);
  const [areOptionsDisabled, toggleOptionsDisabled] = useState(false);
  useEffect(() => {
    if (selectedAnswerInd !== null) {
      toggleOptionsDisabled(true);
      showAcceptButton(true);
    }
  }, [selectedAnswerInd]);
  useEffect(() => {
    if (questionCounter !== 0) {
      toggleOptionsDisabled(false);
      setSelectedAnswerInd(null);
      showAcceptButton(false);
    }
  }, [questionCounter]);
  function handleClick(index: number) {
    setSelectedAnswerInd(index);
    if (answers[index].isRight) {
      setRightAnswersCounter((rightAnswersCounter) => rightAnswersCounter + 1);
    }
  }
  return (
    <>
      <div className='answers-block'>
        {
          answers.map((answer, index) => {
            return (
              <div key={answer.id} onClick={() => handleClick(index)}>
                <AnswerOption
                  isSelected={selectedAnswerInd === index}
                  text={answer.answerText}
                  isRight={answer.isRight}
                  disableOptions={areOptionsDisabled}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default AnswersBlock;
