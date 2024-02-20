import './index.css';
import { useAppSelector } from '../../store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { ILesson } from '../../interfaces';
import React, { useEffect, useState } from 'react';
import LessonSummaryBlock from '../../components/LessonSummaryBlock';
import video from '/video.jpg';
import HeaderWithBackButton from '../../components/HeaderWithBackButton';
import BeginTestButton from '../../components/BeginTestButton';

const LessonSummary = () => {
  const chapters = useAppSelector((state) => state.lessons.lessons);
  const [lesson, setLesson] = React.useState<ILesson | null>(null);
  const [bottomReached, setBottomReached] = useState(false);
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
          <>
            <img className={bottomReached ? 'lesson-summary__image--wide' : 'lesson-summary__image'} src={video} alt="lesson video" />
            <div className='lesson-summary' onScroll={(event) => handleScroll(event)}>
              <LessonSummaryBlock header='Сипаттама:' text={lesson.extendedDescription} />
              <LessonSummaryBlock header='Конспектісі:' text={lesson.summary} />
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas labore repellendus nihil cupiditate. Possimus et itaque consequatur? Numquam fugiat quo deserunt mollitia tenetur, totam non harum itaque, molestiae nulla facilis?</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas labore repellendus nihil cupiditate. Possimus et itaque consequatur? Numquam fugiat quo deserunt mollitia tenetur, totam non harum itaque, molestiae nulla facilis?</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas labore repellendus nihil cupiditate. Possimus et itaque consequatur? Numquam fugiat quo deserunt mollitia tenetur, totam non harum itaque, molestiae nulla facilis?</div>
            </div>
            <BeginTestButton onClick={() => handleClick()} />
          </>
        )
      }
    </>
  )
}

export default LessonSummary;
