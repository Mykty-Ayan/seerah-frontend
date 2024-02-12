import './index.css';
import checkGray from '../../assets/check_gray.svg';
import checkWhite from '../../assets/check.svg';
import { IChapter, ILesson } from '../../interfaces';

type LessonButtonType = {
  isFinished: boolean;
  leftOffset: number;
  chapter: IChapter;
  lesson: ILesson;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, chapter: IChapter, lesson: ILesson) => void;
};

const LessonButton = ({ isFinished, leftOffset, onClick, chapter, lesson }: LessonButtonType) => {
  return (
    <>
      <button
        onClick={(event) => onClick(event, chapter, lesson)}
        type='button'
        style={{left: leftOffset+'%'}}
        className={`${isFinished ? 'lesson-button--finished' : 'lesson-button'}`}
      >
        <img className='lesson-button__checkmark' src={`${isFinished ? checkWhite : checkGray}`} alt="lesson checkmark" />
      </button>
    </>
  )
}

export default LessonButton;
