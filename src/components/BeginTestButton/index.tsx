import './index.css';

type BeginTestButtonProps = {
  onClick: () => void
};

const BeginTestButton = ({ onClick }: BeginTestButtonProps) => {
  return (
    <>
      <button
        onClick={() => onClick()}
        type='button'
        className='begin-test-button'
      >
        Сынақтама бастау
      </button>
    </>
  )
}

export default BeginTestButton;
