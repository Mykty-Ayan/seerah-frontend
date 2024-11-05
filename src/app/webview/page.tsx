'use client'

import React, { Fragment, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchChapterLessons } from '../store/chapterLessonsSlice';
import { IChapter, ILesson } from '../interfaces';
import { useAuth } from '../context/AuthContext';
import styles from "./page.module.css"

import dynamic from 'next/dynamic'

const LessonBeginPopup = dynamic(() => import('../components/LessonBeginPopup'), { ssr: false })
const LessonButton = dynamic(() => import('../components/LessonButton'), { ssr: false })
const ChapterDescription = dynamic(() => import('../components/ChapterDescription'), { ssr: false })
const LessonBlock = dynamic(() => import('../components/LessonBlock'), { ssr: false })


function Main() {
    const dispatch = useAppDispatch();
    const { token } = useAuth();
    const { data: chapterLessons, status, error } = useAppSelector((state: any) => state.chapterLessons);
    const lessons = useAppSelector((state) => state.lessons.lessons);
    const [selectedChapter, setSelectedChapter] = React.useState<IChapter | null>(null);
    const [selectedLesson, setSelectedLesson] = React.useState<ILesson | null>(null);
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

    return (
        <>
            <div className={styles.mainPage}>
                <div onClickCapture={() => setPopupVisibility(false)} className={styles.mainPage__lessons}>
                    {chapterLessons?.lessons.map((chapter: IChapter) => {
                        return (
                            <Fragment key={chapter.part}>
                                <ChapterDescription key={chapter.id} header={chapter.part}
                                    description={chapter.title} />
                                {
                                    chapter.lessons.map((lesson) => {
                                        return (
                                            <LessonBlock key={lesson.id} header={lesson.name}
                                                leftOffset={lesson.leftOffset} chapterId={chapter.id}>
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