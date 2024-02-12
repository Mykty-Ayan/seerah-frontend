import './index.css';
import CircularProgressSvg from '../../assets/circular_progress';
import FinishTestButton from '../FinishTestButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { markLessonAsFinished } from '../../store/lessonsSlice';

type TestResultType = {
  correctAnswers: number;
  overallAnswers: number;
  chapterId: number;
  lessonId: number;
};

const TestResult = ({ correctAnswers, overallAnswers, lessonId, chapterId }: TestResultType) => {
  const [dashOffset, setDashOffset] = useState(450);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function clickHandler() {
    dispatch(markLessonAsFinished({lessonId, chapterId}))
    navigate('/');
  }
  useEffect(() => {
    setTimeout(() => {
      setDashOffset(450 - 450 * (correctAnswers / overallAnswers));
    }, 800);
  }, []);
  const percentage = ((correctAnswers / overallAnswers) * 100).toFixed(0);
  return (
    <>
      <div className='test-result'>
        <div className='test-result__progress-and-congrats'>
          <div className='circular-progress-bar'>
            <div className='circular-progress-bar__bar'>
              <div className='circular-progress-bar__values'>
                <h3 className='circular-progress-bar__percentage'>{ percentage }%</h3>
                <p className='circular-progress-bar__correct-answers'>{correctAnswers}/{overallAnswers}</p>
              </div>
            </div>
            <CircularProgressSvg dashOffset={dashOffset} />
          </div>
          <p className='test-result__congrats'>Сынақтан өтуімен <br />құттықтаймыз!</p>
        </div>
        <FinishTestButton onClick={() => clickHandler()} />
      </div>
    </>
  )
}

export default TestResult;
