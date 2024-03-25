import './index.css';
import arab from '../../assets/arab.svg';

type ChapterDescriptionProps = {
  header: string;
  description: string;
};

const ChapterDescription = ({ header, description }: ChapterDescriptionProps) => {
  return (
    <>
      <div className='chapter-description'>
        <img src={arab} alt="arab" />
        <div className='chapter-description__right-side'>
          <h3 className='chapter-description__header'>{ header }</h3>
          <p className='chapter-description__description'>{ description }</p>
        </div>
      </div>
    </>
  )
}

export default ChapterDescription;
