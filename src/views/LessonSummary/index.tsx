import './index.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { ILesson } from '../../interfaces';
import React, { useEffect, useRef, useState } from 'react';
import LessonSummaryBlock from '../../components/LessonSummaryBlock';
import video from '/video.jpg';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import BeginTestButton from '../../components/BeginTestButton';

import { fetchChapterLessons } from '../../store/chapterLessonsSlice';

const LessonSummary: React.FC = () => {
  const { chapterId, lessonId } = useParams();
  const dispatch = useAppDispatch();
  const chapterLessons = useAppSelector((state) => state.chapterLessons.data);
  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [bottomReached, setBottomReached] = useState(false);
  const scrollElRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!chapterLessons) {
      dispatch(fetchChapterLessons());
    } else if (chapterId && lessonId) {
      const chapter = chapterLessons.lessons.find((storeChapter) => storeChapter.id === Number(chapterId));
      if (chapter) {
        const lesson = chapter.lessons.find((storeLesson) => storeLesson.id === Number(lessonId));
        setLesson(lesson || null);
      }
    }
  }, [dispatch, chapterLessons, chapterId, lessonId]);

  useEffect(() => {
    if (scrollElRef.current) {
      const noScrollbar = scrollElRef.current.scrollHeight === scrollElRef.current.clientHeight;
      setBottomReached(noScrollbar);
    }
  }, [lesson]);

  function handleClick() {
    navigate(`/webview/chapters/${chapterId}/tests/${lessonId}`);
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    const scrolledALittle = (e.target as HTMLDivElement).scrollTop > 20;
    setBottomReached(scrolledALittle);
  }

  return (
    <>
      {lesson ? (
        <>
          <HeaderWithBackButton header={lesson?.name} />
          <div className="lesson-summary__wrapper">
            <img className={bottomReached ? 'lesson-summary__image--wide' : 'lesson-summary__image'} src={video} alt="lesson video" />
            <div ref={scrollElRef} className="lesson-summary" onScroll={(event) => handleScroll(event)}>
              <LessonSummaryBlock header="Кіріспе:" text={lesson.summary} />
            </div>
            <div className="lesson-summary__button-wrapper">
              <BeginTestButton isDisabled={!bottomReached} onClick={handleClick} />
            </div>
          </div>
        </>
      ) : (
        <HeaderWithBackButton header="Lesson not found" />
      )}
    </>
  );
};

export default LessonSummary;
