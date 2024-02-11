import { useAppSelector } from '../../store/hooks';
import './index.css';
import LessonBeginPopup from '../../components/LessonBeginPopup';
import LessonButton from '../../components/LessonButton';
import { IChapter, ILesson } from '../../interfaces';
import React, { Fragment, useState } from 'react';
import ChapterDescription from '../../components/ChapterDescription';
import BottomMenu from '../../components/BottomMenu';

function Main() {
  const lessons = useAppSelector((state) => state.lessons.lessons);
  const [selectedChapter, setSelectedChapter] = React.useState<IChapter | null>(null);
  const [selectedLesson, setSelectedLesson] = React.useState<ILesson | null>(null);
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, chapter: IChapter, lesson: ILesson) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    const x = rect.left + window.scrollX + 20;
    const y = rect.top + window.scrollY + 80;

    setCoordinates({ x, y });
    setSelectedChapter(chapter);
    setSelectedLesson(lesson);
    setPopupVisibility(true);
  };

  return (
    <>
      <div className='main-page'>
        <div onClickCapture={() => setPopupVisibility(false)} className='main-page__lessons'>
          {
            lessons.map((chapter) => {
              return (
                <Fragment key={chapter.part}>
                  <ChapterDescription key={chapter.id} header={chapter.part} description={chapter.title} />
                  {
                    chapter.lessons.map((lesson) => {
                      return (
                        <LessonButton
                          key={lesson.id}
                          onClick={handleClick}
                          chapter={chapter}
                          lesson={lesson}
                          isFinished={lesson.isFinished}
                          leftOffset={lesson.leftOffset}
                        />
                      )
                    })
                  }
                </Fragment>            
              )
            })
          }
        </div>
      </div>
      <LessonBeginPopup
        chapter={selectedChapter}
        lesson={selectedLesson}
        coordinates={coordinates}
        isVisible={isPopupVisible}
      />
      <BottomMenu />
    </>
  )
}

export default Main;
