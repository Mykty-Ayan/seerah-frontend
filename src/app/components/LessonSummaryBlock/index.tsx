import './index.css';

type LessonSummaryBlockType = {
  header: string;
  text: string;
};

const LessonSummaryBlock = ({ header, text }: LessonSummaryBlockType) => {
  return (
    <>
      <div className='lesson-summary-block'>
        <h3 className='lesson-summary-block__header'>{header}</h3>
        <p className='lesson-summary-block__text'>{text}</p>
      </div>
    </>
  )
}

export default LessonSummaryBlock;
