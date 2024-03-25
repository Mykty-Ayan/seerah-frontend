import './index.css';

type BeginTestButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
};

const BeginTestButton = ({ onClick, isDisabled }: BeginTestButtonProps) => {
  return (
    <>
      <button
        onClick={() => onClick()}
        type='button'
        className={isDisabled ? 'begin-test-button--disabled' :'begin-test-button'}
        disabled={isDisabled}
      >
        Өзіңді тексер
      </button>
    </>
  )
}

export default BeginTestButton;
