import './index.css';

type ProgressBarType = {
  value: number;
};

const ProgressBar = ({ value}: ProgressBarType) => {
  return (
    <>
      <div className='progress-bar'>
        <div className='progress-bar__bar' style={{width: value+'%'}}></div>
      </div>
    </>
  )
}

export default ProgressBar;
