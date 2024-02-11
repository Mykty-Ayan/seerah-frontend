import './index.css';

type ChapterDescriptionProps = {
  header: string;
  description: string;
};

const ChapterDescription = ({ header, description }: ChapterDescriptionProps) => {
  return (
    <>
      <div className='chapter-description'>
        <h3 className='chapter-description__header'>{ header }</h3>
        <p className='chapter-description__description'>{ description }</p>
      </div>
    </>
  )
}

export default ChapterDescription;
