import './index.css';

type AnswerOptionProps = {
  isSelected: boolean;
  text: string;
  isRight: boolean;
  disableOptions: boolean;
};

const AnswerOption = ({ isSelected, text, isRight, disableOptions }: AnswerOptionProps) => {
  const isWrong = isSelected && !isRight;
  return (
    <>
      {
        isWrong
        ?
        <button disabled={disableOptions} className='answer-option--wrong'>
          {text}
        </button>
        :
        <button disabled={disableOptions} className={isSelected ? 'answer-option--selected' : 'answer-option'}>
          {text}
        </button>
      }
    </>
  )
}

export default AnswerOption;
