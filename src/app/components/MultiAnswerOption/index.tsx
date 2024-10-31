import './index.css';

import checkmark from '../../../../public/checkmark_checkbox.svg';

import Image from "next/image";

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
          <Image src={checkmark} alt="" />
        </div>
        {text}
      </button>
    )
  } else if (isSelected && isCheckStage && isRight) {
    return (
      <button className='multi-answer-option--right'>
        <div className='multi-answer-option__circle--right'>
          <Image src={checkmark} alt="" />
        </div>
        {text}
      </button>
    )
  } else if (isSelected && isCheckStage && !isRight) {
    return (
      <button className='multi-answer-option--wrong'>
        <div className='multi-answer-option__circle--wrong'>
          <Image src={checkmark} alt="" />
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
