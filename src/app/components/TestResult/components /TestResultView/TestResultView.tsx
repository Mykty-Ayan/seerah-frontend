import Image from "next/image";

import {Button} from "@/app/components/shared/Button";
import failure from '@/../public/failure_icon.svg';
import success from '@/../public/success_icon.svg';

import {Score} from "../Score";
import styles from './TestResultView.module.scss';


type TestResultViewProps = {
    percentage: string;
    correctAnswers: number;
    overallAnswers: number;
    onClick: () => void;
    chapterId: number;
    lessonName: string;
}
const PERCENTAGE_VALUE = 80;

export const TestResultView = ({ percentage, overallAnswers, correctAnswers, onClick, chapterId, lessonName }: TestResultViewProps ) => {
    return (
        <>
            { Number(percentage) >= PERCENTAGE_VALUE ? (
                <div className={styles.container}>
                    <Image src={success} alt="success" />
                    <div className={styles.successCase}>
                        <div>
                            <p className={styles.title}>{chapterId}-тарау: {lessonName}</p>
                            <p className={styles.text}>Бәрекелді! Сынақтаманы <br /> сәтті тапсырдыңыз!</p>
                        </div>
                    <Score correctAnswers={correctAnswers}
                           overallAnswers={overallAnswers}
                           className={styles.successScoreStyles}
                    />
                    </div>
                    <div className={styles.spacer}></div>
                    <Button text="Әрі қарай" onClick={onClick} />

                </div>
            ) : (
                <div className={styles.container}>
                    <Image className ={styles.failureIcon} src={failure} alt="failure" />
                    <div className={styles.failureCase}>
                        <div>
                            <p className={styles.title}>{chapterId}-тарау: {lessonName}</p>
                            <p className={styles.text}>Өкінішке қарай, келесі дәріске өту <br /> үшін нәтижеңіз жеткіліксіз</p>
                        </div>
                    <Score correctAnswers={correctAnswers}
                           overallAnswers={overallAnswers}
                           className={styles.failureScoreStyles}
                    />
                    </div>
                    <div className={styles.spacer}></div>
                    <Button text="Дәрісті қайталау" onClick={onClick} />
                </div>
            )}
        </>
    );
};
