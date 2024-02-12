import './index.css';
import { useNavigate } from 'react-router-dom';
import { IChapter, ILesson } from '../../interfaces';
import { useEffect } from 'react';
import React from 'react';

type LessonBeginPopupType = {
  chapter: IChapter | null;
  lesson: ILesson | null;
  coordinates: {x: number, y: number};
  isVisible: boolean;
};

const LessonBeginPopup = ({ chapter, lesson, coordinates, isVisible }: LessonBeginPopupType) => {
  const navigate = useNavigate();
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
      <div className={isVisible ? 'lesson-begin-popup' : 'lesson-begin-popup--hidden'} style={{left: coordinates.x, top: coordinates.y}}>
        <div className='lesson-begin-popup__triangle'></div>
        <h3 className='lesson-begin-popup__lesson-name'>{lesson?.name}</h3>
        <p className='lesson-begin-popup__lesson-description'>{lesson?.description}</p>
        {
          !isPrevLessonLearned() &&
          <p className='lesson-begin-popup__previous-lesson-not-learned'>
            Бұл сабақты ашу үшін, алдыңғы сабақты өтуіңіз қажет
          </p>
        }
        <button
          onClick={() => navigate(`chapters/${chapter?.id}/lessons/${lesson?.id}`)}
          type='button'
          className={isPrevLessonLearned() ? 'lesson-begin-popup__button' : 'lesson-begin-popup__button--disabled'}
          disabled={!isPrevLessonLearned()}
        >
          {lesson?.isFinished ? 'Қайталау' : 'Бастау'}
        </button>
      </div>
    </>
  )
}

export default LessonBeginPopup;
