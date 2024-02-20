import './index.css';

type LessonBlockProps = {
  header: string;
  children: React.ReactNode;
  leftOffset: number;
  chapterId: number;
};

const LessonBlock = ({ header, children, leftOffset, chapterId }: LessonBlockProps) => {
  return (
    <>
      <div className={chapterId % 2 == 0 ? 'lesson-block--inverted' : 'lesson-block'} style={{left: leftOffset+'%'}}>
        {children}
        <h3 className={chapterId % 2 == 0 ? 'lesson-block__name--inverted' : 'lesson-block__name'}>{ header }</h3>
      </div>
    </>
  )
}

export default LessonBlock;
