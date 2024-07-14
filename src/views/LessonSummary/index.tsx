import './index.css';
import { useAppSelector } from '../../store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { ILesson } from '../../interfaces';
import React, { useEffect, useRef, useState } from 'react';
import LessonSummaryBlock from '../../components/LessonSummaryBlock';
import video from '/video.jpg';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import BeginTestButton from '../../components/BeginTestButton';

import {  getChapterLessons } from '../../services/chapterService';

const LessonSummary = () => {
  const [lesson, setLesson] = React.useState<ILesson | null>(null);
  const [bottomReached, setBottomReached] = useState(false);
  let { chapterId, lessonId } = useParams();
  const scrollElRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchLessonsAndChapters = async () => {
      try {
        const chapterLesson = await getChapterLessons();

        if (chapterId && lessonId) {
          const chapter = chapterLesson.lessons.find((storeChapter) => storeChapter.id == Number(chapterId));
          if (chapter) {
            const lesson = chapter.lessons.find((storeLesson) => storeLesson.id == Number(lessonId));
            if (lesson) {
              setLesson(lesson);
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch lessons:', error);
      }
    };

    fetchLessonsAndChapters();
  }, []);
  useEffect(() => {
    if (scrollElRef.current) {
      const noScrollbar = scrollElRef.current.scrollHeight == scrollElRef.current.clientHeight;
      if (noScrollbar) {
        setBottomReached(true);
      }
    }
  }, [lesson]);
  function handleClick() {
    navigate(`/webview/chapters/${chapterId}/tests/${lessonId}`);
  }
  function handleScroll(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    const scrolledALittle = (e.target as HTMLDivElement).scrollTop > 20;
    if (scrolledALittle) {
      setBottomReached(true);
    } else {
      setBottomReached(false);
    }
  }
  return (
    <>
      {
        lesson
        ?
        <HeaderWithBackButton header={lesson?.name} />
        :
        <HeaderWithBackButton header='Lesson not found' />
      }
      {
        lesson && (
          <div className='lesson-summary__wrapper'>
            <img className={bottomReached ? 'lesson-summary__image--wide' : 'lesson-summary__image'} src={video} alt="lesson video" />
            <div ref={scrollElRef} className='lesson-summary' onScroll={(event) => handleScroll(event)}>
              <LessonSummaryBlock header='Кіріспе:' text={lesson.summary} />
            </div>
            <div className='lesson-summary__button-wrapper'>
              <BeginTestButton isDisabled={!bottomReached} onClick={() => handleClick()} />
            </div>
          </div>
        )
      }
    </>
  )
}

export default LessonSummary;
