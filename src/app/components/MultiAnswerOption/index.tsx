import './index.css';

type MultiAnswerOptionProps = {
  isSelected: boolean;
  text: string;
  isRight: boolean;
  isCheckStage: boolean;
};

const MultiAnswerOption = ({ isSelected, text, isRight, isCheckStage }: MultiAnswerOptionProps) => {
  if (!isSelected && isCheckStage && isRight) {
    return (
      <button className='multi-answer-option--right'>
        <div className='multi-answer-option__circle'>
        </div>
        {text}
      </button>
    )
  }else if (isSelected && !isCheckStage) {
    return (
      <button className='multi-answer-option--selected'>
        <div className='multi-answer-option__circle--selected'>
          <img src="/checkmark_checkbox.svg" alt="" />
        </div>
        {text}
      </button>
    )
  } else if (isSelected && isCheckStage && isRight) {
    return (
      <button className='multi-answer-option--right'>
        <div className='multi-answer-option__circle--right'>
          <img src="/checkmark_checkbox.svg" alt="" />
        </div>
        {text}
      </button>
    )
  } else if (isSelected && isCheckStage && !isRight) {
    return (
      <button className='multi-answer-option--wrong'>
        <div className='multi-answer-option__circle--wrong'>
          <img src={checkmark} alt="" />
        </div>
        {text}
      </button>
    )
  }
  return (
    <>
      <button className='multi-answer-option'>
        <div className='multi-answer-option__circle'></div>
        {text}
      </button>
    </>
  )
}

export default MultiAnswerOption;
