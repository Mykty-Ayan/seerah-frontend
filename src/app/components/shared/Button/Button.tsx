import styles from './Button.module.scss';

interface ButtonProps  {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            onClick={() => onClick()}
            type='button'
            className={styles.button}
        >
            {text}
        </button>
    )
}