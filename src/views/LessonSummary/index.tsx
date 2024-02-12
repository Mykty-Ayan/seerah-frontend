import './index.css';
import { useAppSelector } from '../../store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { ILesson } from '../../interfaces';
import React, { useEffect } from 'react';
import LessonSummaryBlock from '../../components/LessonSummaryBlock';
import video from '/video.jpg';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import BeginTestButton from '../../components/BeginTestButton';

const LessonSummary = () => {
  const chapters = useAppSelector((state) => state.lessons.lessons);
  const [lesson, setLesson] = React.useState<ILesson | null>(null);
  let { chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (chapterId && lessonId) {
      const chapter = chapters.find((storeChapter) => storeChapter.id == Number(chapterId));
      if (chapter) {
        const lesson = chapter.lessons.find((storeLesson) => storeLesson.id == Number(lessonId));
        if (lesson) {
          setLesson(lesson);
        }
      }
    }
  }, []);
  function handleClick() {
    navigate(`/chapters/${chapterId}/tests/${lessonId}`);
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
          <>
            <div className='lesson-summary'>
              <img src={video} alt="lesson video" />
              <LessonSummaryBlock header='Сипаттама:' text={lesson.extendedDescription} />
              <LessonSummaryBlock header='Конспектісі:' text={lesson.summary} />
            </div>
            <BeginTestButton onClick={() => handleClick()} />
          </>
        )
      }
    </>
  )
}

export default LessonSummary;
