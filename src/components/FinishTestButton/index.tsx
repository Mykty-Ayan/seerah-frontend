import './index.css';

type FinishTestButtonType = {
  onClick: () => void
};

const FinishTestButton = ({ onClick }: FinishTestButtonType) => {
  return (
    <>
      <button
        onClick={() => onClick() }
        type='button'
        className='finish-test-button'
      >
        Әрі қарай
      </button>
    </>
  )
}

export default FinishTestButton;
