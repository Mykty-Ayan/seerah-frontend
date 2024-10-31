import './index.css';

type AnswerFeedbackType = {
  isRight: boolean;
  rightAnswer: string;
};

const AnswerFeedback = ({ isRight, rightAnswer }: AnswerFeedbackType) => {
  if (isRight) {
    return (
      <div className='answer-feedback'>
        <img src="/checkmark_feedback.svg" alt="checkmark" />
        Бұл дұрыс жауап!
      </div>
    )
  }
  return (
    <>
      <div className='answer-feedback--wrong'>
        <img src="/cross_feedback.svg" alt="cross" />
        Қателестіңіз. Дұрыс жауабы: {rightAnswer}
      </div>
    </>
  )
}

export default AnswerFeedback;
