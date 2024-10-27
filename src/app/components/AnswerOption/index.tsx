import './index.css';

type AnswerOptionProps = {
  isSelected: boolean;
  text: string;
  isRight: boolean;
  isCheckStage: boolean;
};

const AnswerOption = ({ isSelected, text, isRight, isCheckStage }: AnswerOptionProps) => {
  if (!isSelected && isCheckStage && isRight) {
    return (
      <button className='answer-option--right'>
        <div className='answer-option__circle'>
              <div className='answer-option__inner-circle'></div>
            </div>
        {text}
      </button>
    )
  }else if (isSelected && !isCheckStage) {
    return (
      <button className='answer-option--selected'>
        <div className='answer-option__circle--selected'>
              <div className='answer-option__inner-circle--selected'></div>
            </div>
        {text}
      </button>
    )
  } else if (isSelected && isCheckStage && isRight) {
    return (
      <button className='answer-option--right'>
        <div className='answer-option__circle--right'>
          <div className='answer-option__inner-circle--right'></div>
        </div>
        {text}
      </button>
    )
  } else if (isSelected && isCheckStage && !isRight) {
    return (
      <button className='answer-option--wrong'>
        <div className='answer-option__circle--wrong'>
          <div className='answer-option__inner-circle--wrong'></div>
        </div>
        {text}
      </button>
    )
  }
  return (
    <>
      <button className='answer-option'>
        <div className='answer-option__circle'></div>
        {text}
      </button>
    </>
  )
}

export default AnswerOption;
