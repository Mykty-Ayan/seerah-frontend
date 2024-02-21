import './index.css';

type AcceptButtonProps = {
  isActive: boolean;
};

const AcceptButton = ({ isActive }: AcceptButtonProps) => {
  return (
    <>
      <button
        type='button'
        className={isActive ? 'accept-button' : 'accept-button--disabled'}
        disabled={!isActive}
      >
        Жауапты тексеру
      </button>
    </>
  )
}

export default AcceptButton;
