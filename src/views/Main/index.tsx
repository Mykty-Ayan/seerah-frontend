import React, { Fragment, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchChapterLessons } from '../../store/chapterLessonsSlice';
import LessonBeginPopup from '../../components/LessonBeginPopup';
import LessonButton from '../../components/LessonButton';
import ChapterDescription from '../../components/ChapterDescription';
import LessonBlock from '../../components/LessonBlock';
import { IChapter, ILesson } from '../../interfaces';
import { useAuth } from '../../context/AuthContext';
import './index.css';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useAuth();
  const { data: chapterLessons, status, error } = useAppSelector((state: any) => state.chapterLessons);
  const [selectedChapter, setSelectedChapter] = useState<IChapter | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<ILesson | null>(null);
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (status === 'idle' && token) {
      dispatch(fetchChapterLessons());
    }

  }, [dispatch, status, token]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, chapter: IChapter, lesson: ILesson) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    const x = rect.left + window.scrollX + 15;
    const y = rect.top + window.scrollY + 88 + 26;

    setCoordinates({ x, y });
    setSelectedChapter(chapter);
    setSelectedLesson(lesson);
    setPopupVisibility(true);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="main-page">
        <div onClickCapture={() => setPopupVisibility(false)} className="main-page__lessons">
          {chapterLessons?.lessons.map((chapter: IChapter) => {
            return (
              <Fragment key={chapter.part}>
                <ChapterDescription key={chapter.id} header={chapter.part} description={chapter.title} />
                {chapter.lessons.map((lesson: ILesson) => {
                  return (
                    <LessonBlock key={lesson.id} header={lesson.name} leftOffset={lesson.leftOffset} chapterId={chapter.id}>
                      <LessonButton
                        onClick={(event) => handleClick(event, chapter, lesson)}
                        chapter={chapter}
                        lesson={lesson}
                        isFinished={lesson.isFinished}
                      />
                    </LessonBlock>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
      <LessonBeginPopup chapter={selectedChapter} lesson={selectedLesson} coordinates={coordinates} isVisible={isPopupVisible} />
    </>
  );
};

export default Main;
