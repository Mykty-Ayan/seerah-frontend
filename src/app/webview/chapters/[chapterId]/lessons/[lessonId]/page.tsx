"use client";

import styles from './page.module.css';
import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { useRouter, usePathname } from 'next/navigation';
import { ILesson } from '../../../../../interfaces';
import React, { useEffect, useRef, useState } from 'react';
import LessonSummaryBlock from '../../../../../components/LessonSummaryBlock';
import HeaderWithBackButton from '../../../../../components/HeaderWithBackButton';
import BeginTestButton from '../../../../../components/BeginTestButton';
import { fetchChapterLessons } from '../../../../../store/chapterLessonsSlice';



const LessonSummary = () => {
    const chapterLessons = useAppSelector((state) => state.chapterLessons.data);
    const dispatch = useAppDispatch();

    const router = useRouter();
    const pathname = usePathname();
    const chapters = useAppSelector((state) => state.lessons.lessons);
    const [lesson, setLesson] = useState<ILesson | null>(null);
    const [bottomReached, setBottomReached] = useState(false);
    const scrollElRef = useRef<HTMLDivElement>(null);

    const pathSegments = pathname.split('/');
    const chapterId = pathSegments[3];
    const lessonId = pathSegments[5];

    useEffect(() => {
        if (!chapterLessons) {
            dispatch(fetchChapterLessons());
        } else if (chapterId && lessonId) {
            const chapter = chapters.find((storeChapter) => storeChapter.id === Number(chapterId));
            if (chapter) {
                const lesson = chapter.lessons.find((storeLesson) => storeLesson.id === Number(lessonId));
                if (lesson) {
                    setLesson(lesson);
                }
            }
        }
    }
        , [dispatch, chapterId, lessonId, chapters, chapterLessons]);

    useEffect(() => {
        if (scrollElRef.current) {
            const noScrollbar = scrollElRef.current.scrollHeight === scrollElRef.current.clientHeight;
            if (noScrollbar) {
                setBottomReached(true);
            }
        }
    }, [lesson]);

    const handleClick = () => {
        router.push(`/webview/chapters/${chapterId}/tests/${lessonId}`);
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrolledALittle = (e.target as HTMLDivElement).scrollTop > 20;
        setBottomReached(scrolledALittle);
    };

    return (
        <>
            {lesson ? (
                <HeaderWithBackButton header={lesson.name} />
            ) : (
                <HeaderWithBackButton header="Lesson not found" />
            )}
            {lesson && (
                <div className={styles.lessonSummaryWrapper}>
                    <img
                        className={bottomReached ? styles.lessonSummaryImageWide : styles.lessonSummaryImage}
                        src="/video.jpg"
                        alt="lesson video"
                    />
                    <div ref={scrollElRef} className={styles.lessonSummary} onScroll={handleScroll}>
                        <LessonSummaryBlock header="Кіріспе:" text={lesson.summary} />
                    </div>
                    <div className={styles.lessonSummaryButtonWrapper}>
                        <BeginTestButton isDisabled={!bottomReached} onClick={handleClick} />
                    </div>
                </div>
            )}
        </>
    );
};

export default LessonSummary;
