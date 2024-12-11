import clsx from "clsx";

import styles from './Score.module.scss';

interface ScoreProps {
    className: string;
    correctAnswers: number;
    overallAnswers: number;
}
export const Score = ({className, correctAnswers, overallAnswers }: ScoreProps ) => {
    return (
        <div className={clsx(styles.scoreContainer, className)}>
            {correctAnswers}/{overallAnswers}
        </div>
    )
}

