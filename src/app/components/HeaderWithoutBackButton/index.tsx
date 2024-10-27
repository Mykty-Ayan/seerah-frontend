import './index.css';

type HeaderWithoutBackButtonProps = {
  header: string;
};

const HeaderWithoutBackButton = ({ header }: HeaderWithoutBackButtonProps) => {
  return (
    <>
      <div className='header-without-back-button'>
        <h3 className='header-without-back-button__header'>{ header }</h3>
      </div>
    </>
  )
}

export default HeaderWithoutBackButton;
