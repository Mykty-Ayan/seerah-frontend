import './index.css';

type NextQuestionButtonProps = {
};

const NextQuestionButton = ({ }: NextQuestionButtonProps) => {
  return (
    <>
      <button
        type='button'
        className='next-question-button'
      >
        Келесі сұрақ
      </button>
    </>
  )
}

export default NextQuestionButton;
