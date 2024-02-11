import './index.css';

type QuestionBlockProps = {
  header: string;
  description: string;
};

const QuestionBlock = ({ header, description }: QuestionBlockProps) => {
  return (
    <>
      <div className='question-block'>
        <h3 className='question-block__header'>{ header }</h3>
        <p className='question-block__description'>{ description }</p>
      </div>
    </>
  )
}

export default QuestionBlock;
