import './index.css';
import appstorePC from '../../assets/appstore-pc.svg';
import googleplayPC from '../../assets/googleplay-pc.svg';
import appstore from '../../assets/appstore.svg';
import googleplay from '../../assets/googleplay.svg';
import headerIcon from '../../assets/headerIcon.svg';
import headerGoogleplay from '../../assets/header-googleplay.svg';
import headerAppstore from '../../assets/header-appstore.svg';
import appIcon from '../../assets/app-icon.svg';
import { useEffect, useState } from 'react';

function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);
  return (
    <>
      <div className='landing'>
        <div className={isScrolled ? 'landing__header' : 'landing__header--hidden'}>
          <div className='landing__header-inner-wrapper'>
            <img src={headerIcon} alt="header icon" />
            <div className='landing__header-store-icons'>
              <img src={headerGoogleplay} alt="google play link" />
              <img src={headerAppstore} alt="appstore link" />
            </div>
          </div>
        </div>
        <div className='landing-1'>
          <div className='landing-1__left'>
            <div className='landing-1__left-logo-and-title'>
              <img src={appIcon} alt="landing icon" />
              <h2 className='landing-1__left-title'>Seerah.kz</h2>
            </div>
            <p className='landing-1__left-description'>Сүйікті  Пайғамбарымыздың (ﷺ) сирасын үйренудің жаңа жолы</p>
            <div className='landing-1__left-store-logos'>
              <img src={appstorePC} alt="app store logo" />
              <img src={googleplayPC} alt="google play logo" />
            </div>
            <div className='landing-1__left-store-logos--mobile'>
              <img src={appstore} alt="app store logo" />
              <img src={googleplay} alt="google play logo" />
            </div>
          </div>
          <div className='landing-1__right'>
            <img className='landing-1__right-image-3' src="/landing-3.png" alt="app features 3 screens" />
            <img className='landing-1__right-image-2' src="/landing-4.png" alt="app features 3 screens" />
            <img className='landing-1__right-image' src="/landing-2.png" alt="app features 3 screens" />
          </div>
        </div>

        <div className='landing__feature-blocks'>
          <div className='landing-2'>
            <img className='landing-2__image' src="/landing-2.png" alt="app feature" />
            <div>
              Сүйікті Пайғамбарымыздың (ﷺ) <span className='landing-2__green-color-text'>сирасын үйренудің жаңа жолы</span>
            </div>
          </div>

          <div className='landing-3'>
            <img className='landing-3__image' src="/landing-3.png" alt="app feature" />
            <div>
              Әр дәріс соңында <span className='landing-3__green-color-text'>өз өзіңізді тексеріп көріңіз</span>
            </div>
          </div>

          <div className='landing-4'>
            <img className='landing-4__image' src="/landing-4.png" alt="app feature" />
            <div>
              Намаз кестесі көмегімен намаздарыңызды <span className='landing-4__green-color-text'>уақытылы оқыңыз</span>
            </div>
          </div>

          <div className='landing-5'>
            <img className='landing-5__image' src="/landing-5.png" alt="app feature" />
            <div>
              Оңайлықпен <span className='landing-5__green-color-text'>құбыланы табыңыз</span>
            </div>
          </div>

          <div className='landing-6'>
            <img className='landing-6__image' src="/landing-6.png" alt="app feature" />
            <div>
              <span className='landing-6__green-color-text'>Зікір жасап</span> басқа нәрсеге алаңдамаңыз
            </div>
          </div>

          <div className='landing__bottom'>
            <div className='landing__bottom-left'>
              <div className='landing__bottom-logo-and-header'>
                <img src={appIcon} alt="landing icon" />
                <h2 className='landing__bottom-header'>Seerah.kz</h2>
              </div>
              <p className='landing__bottom-description'>Сүйікті Пайғамбарымыздың (ﷺ) сирасын үйренудің жаңа жолы</p>
            </div>
            <div className='landing__bottom-right'>
              <img src={appstorePC} alt="app store logo" />
              <img src={googleplayPC} alt="google play logo" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Landing;
