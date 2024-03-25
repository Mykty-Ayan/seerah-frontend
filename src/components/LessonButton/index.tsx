import './index.css';
import checkWhite from '../../assets/check.svg';
import play from '../../assets/play.svg';
import playHollow from '../../assets/play_hollow.svg';
import { IChapter, ILesson } from '../../interfaces';
import React, { useEffect } from 'react';

type LessonButtonType = {
  isFinished: boolean;
  chapter: IChapter;
  lesson: ILesson;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, chapter: IChapter, lesson: ILesson) => void;
};

const LessonButton = ({ isFinished, onClick, chapter, lesson }: LessonButtonType) => {
  const [myChapter, setMyChapter] = React.useState<IChapter | null>(null);
  useEffect(() => {
    setMyChapter(chapter);
  }, [chapter]);
  const isPrevLessonLearned = () => {
    if (myChapter && lesson) {
      if (lesson.id === 1) {
        return true;
      }
      const prevLesson = myChapter.lessons.find((storeLesson) => storeLesson.id === lesson.id - 1);
      if (prevLesson) {
        return prevLesson.isFinished;
      }
    }
    return false;
  };
  return (
    <>
      {
        isPrevLessonLearned()
        ?
        (
          <button
            onClick={(event) => onClick(event, chapter, lesson)}
            type='button'
            className={`${isFinished ? 'lesson-button--finished' : 'lesson-button'}`}
          >
            <div className={isFinished ? 'lesson-button__inner-circle--finished' : 'lesson-button__inner-circle'}>
              <img className='lesson-button__checkmark' src={`${isFinished ? checkWhite : play}`} alt="lesson play" />
            </div>
          </button>
        )
        :
        (
          <button
            onClick={(event) => onClick(event, chapter, lesson)}
            type='button'
            className='lesson-button--unavailable'
          >
            <div className='lesson-button__inner-circle--unavailable'>
              <img className='lesson-button__checkmark' src={playHollow} alt="lesson unavailable" />
            </div>
          </button>
        )
      }
    </>
  )
}

export default LessonButton;
