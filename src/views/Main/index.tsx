import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './index.css';
import LessonBeginPopup from '../../components/LessonBeginPopup';
import LessonButton from '../../components/LessonButton';
import { IChapter, IChapterLesson, ILesson} from '../../interfaces';
import React, { Fragment, useState, useEffect } from 'react';
import ChapterDescription from '../../components/ChapterDescription';
import LessonBlock from '../../components/LessonBlock';

import {  getChapterLessons } from '../../services/chapterService';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedChapter, setSelectedChapter] = useState<IChapter | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<ILesson | null>(null);
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [lesson, setLesson] = useState<IChapterLesson | null>(null);

  useEffect(() => {
    const fetchLessonsAndChapters = async () => {
      try {
        const chapterLesson = await getChapterLessons();
        setLesson(chapterLesson);
      } catch (error) {
        console.error('Failed to fetch lessons:', error);
      }
    };

    fetchLessonsAndChapters();
  }, [dispatch]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, chapter: IChapter, lesson: ILesson) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    const x = rect.left + window.scrollX + 15;
    const y = rect.top + window.scrollY + 88 + 26;

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
            lesson?.lessons.map((chapter) => {
              return (
                <Fragment key={chapter.part}>
                  <ChapterDescription key={chapter.id} header={chapter.part} description={chapter.title} />
                  {
                    chapter.lessons.map((lesson) => {
                      return (
                        <LessonBlock key={lesson.id} header={lesson.name} leftOffset={lesson.leftOffset} chapterId={chapter.id}>
                          <LessonButton
                            onClick={handleClick}
                            chapter={chapter}
                            lesson={lesson}
                            isFinished={lesson.isFinished}
                          />
                        </LessonBlock>
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
    </>
  )
}

export default Main;
