import './index.css';
import arrowLeft from '../../assets/arrow_left.svg';


type HeaderWithBackButtonProps = {
  header: string;
};

const HeaderWithBackButton = ({ header }: HeaderWithBackButtonProps) => {
  // const navigate = useNavigate();
  return (
    <>
      <div className='header-with-back-button'>
        <button onClick={() => console.log("navigate(-1)")} className='header-with-back-button__back-button'>
          <img src={arrowLeft} alt="arrow left icon" />
        </button>
        <h3 className='header-with-back-button__header'>{ header }</h3>
        <button className='header-with-back-button__dummy-button'></button>
      </div>
    </>
  )
}

export default HeaderWithBackButton;
