"use client";

import './page.module.css';
import { useAppSelector } from '../../../../../store/hooks';
import { useRouter, usePathname } from 'next/navigation';
import { ILesson } from '../../../../../interfaces';
import React, { useEffect, useRef, useState } from 'react';
import LessonSummaryBlock from '../../../../../components/LessonSummaryBlock';
import HeaderWithBackButton from '../../../../../components/HeaderWithBackButton';
import BeginTestButton from '../../../../../components/BeginTestButton';

const LessonSummary = () => {
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
        if (chapterId && lessonId) {
            const chapter = chapters.find((storeChapter) => storeChapter.id === Number(chapterId));
            if (chapter) {
                const lesson = chapter.lessons.find((storeLesson) => storeLesson.id === Number(lessonId));
                if (lesson) {
                    setLesson(lesson);
                }
            }
        }
    }, [chapterId, lessonId, chapters]);

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
                <div className="lesson-summary__wrapper">
                    <img
                        className={bottomReached ? 'lesson-summary__image--wide' : 'lesson-summary__image'}
                        src="/public/video.jpg"
                        alt="lesson video"
                    />
                    <div ref={scrollElRef} className="lesson-summary" onScroll={handleScroll}>
                        <LessonSummaryBlock header="Кіріспе:" text={lesson.summary} />
                    </div>
                    <div className="lesson-summary__button-wrapper">
                        <BeginTestButton isDisabled={!bottomReached} onClick={handleClick} />
                    </div>
                </div>
            )}
        </>
    );
};

export default LessonSummary;
