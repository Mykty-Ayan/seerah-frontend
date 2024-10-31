import styles from './page.module.css';
import checkMarkFeedback from '../../../../public/checkmark_feedback.svg';
import crossFeedback from '../../../../public/cross_feedback.svg';

import Image from "next/image";

type AnswerFeedbackType = {
  isRight: boolean;
  rightAnswer: string;
};

const AnswerFeedback = ({ isRight, rightAnswer }: AnswerFeedbackType) => {
  if (isRight) {
    return (
      <div className={styles['answerFeedback']}>
        <Image src={checkMarkFeedback} alt="checkmark" />
        Бұл дұрыс жауап!
      </div>
    )
  }
  return (
    <>
      <div className={styles['answerFeedbackWrong']}>
        <Image src={crossFeedback} alt="cross" />
        Қателестіңіз. Дұрыс жауабы: {rightAnswer}
      </div>
    </>
  )
}

export default AnswerFeedback;
