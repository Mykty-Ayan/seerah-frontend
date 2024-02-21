import './index.css';
import checkmark from '../../assets/checkmark_feedback.svg';
import cross from '../../assets/cross_feedback.svg';

type AnswerFeedbackType = {
  isRight: boolean;
  rightAnswer: string;
};

const AnswerFeedback = ({ isRight, rightAnswer }: AnswerFeedbackType) => {
  if (isRight) {
    return (
      <div className='answer-feedback'>
        <img src={checkmark} alt="checkmark" />
        Бұл дұрыс жауап!
      </div>
    )
  }
  return (
    <>
      <div className='answer-feedback--wrong'>
        <img src={cross} alt="cross" />
        Қателестіңіз. Дұрыс жауабы: {rightAnswer}
      </div>
    </>
  )
}

export default AnswerFeedback;
