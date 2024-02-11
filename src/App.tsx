import './App.css';
import { useAppSelector } from './store/hooks';
// import LessonBeginPopup from './components/LessonBeginPopup';
// import LessonButton from './components/LessonButton';
import { ILesson } from './interfaces';
import React, { useState } from 'react';

function App() {
  const lessons = useAppSelector((state) => state.lessons.lessons);
  const [selectedLesson, setSelectedLesson] = React.useState<ILesson | null>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, lesson: ILesson) => {
    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    const x = rect.left + window.scrollX + 20;
    const y = rect.top + window.scrollY + 80;

    setCoordinates({ x, y });
    setSelectedLesson(lesson);
  };

  return (
    <>
      {
        lessons.map((lesson) => {
          return (
            <div key={lesson.id} onClick={(event) => handleClick(event, lesson) }>
              {/* <LessonButton isFinished={lesson.isFinished} leftOffset={lesson.leftOffset} /> */}
            </div>
          )
        })
      }
      {/* {
        selectedLesson &&
        <LessonBeginPopup
          lessonId={selectedLesson.id}
          isFinished={selectedLesson.isFinished}
          description={selectedLesson.description}
          lessonName={selectedLesson.name}
          coordinates={coordinates}
        />
      } */}
    </>
  )
}

export default App
