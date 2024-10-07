import appstorePC from "../../public/appstore-pc.svg";
import googleplayPC from "../../public/googleplay-pc.svg";
import appstore from "../../public/appstore.svg";
import googleplay from "../../public/googleplay.svg";
import appIcon from "../../public/app-icon.svg";

import styles from './page.module.css';
import Image from "next/image";

export default async function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles.landing1}>
        <div className={styles.landing1__left}>
          <div className={styles.landing1__leftLogoAndTitle}>
            <Image src={appIcon} alt="landing icon"/>
            <h2 className={styles.landing1__leftTitle}>Seerah.kz</h2>
          </div>
          <p className={styles.landing1__leftDescription}>Сүйікті Пайғамбарымыздың (ﷺ) сирасын үйренудің жаңа жолы</p>
          <div className={styles.landing1__leftStoreLogos}>
            <Image src={appstorePC} alt="app store logo"/>
            <Image src={googleplayPC} alt="google play logo"/>
          </div>
          <div className={styles.landing1__leftStoreLogosMobile}>
            <Image src={appstore} alt="app store logo"/>
            <Image src={googleplay} alt="google play logo"/>
          </div>
        </div>
        <div className={styles.landing1__right}>
          <img className={styles.landing1__rightImage3} src="/landing-3.png" alt="app features 3 screens"/>
          <img className={styles.landing1__rightImage2} src="/landing-4.png" alt="app features 3 screens"/>
          <img className={styles.landing1__rightImage} src="/landing-2.png" alt="app features 3 screens"/>
        </div>
      </div>

      <div className={styles.landing__featureBlocks}>
        <div className={styles.landing2}>
          <img className={styles.landing2__image} src="/landing-2.png" alt="app feature"/>
          <div>
            Сүйікті Пайғамбарымыздың (ﷺ) <span
            className={styles.landing2__greenColorText}>сирасын үйренудің жаңа жолы</span>
          </div>
        </div>

        <div className={styles.landing3}>
          <img className={styles.landing3__image} src="/landing-3.png" alt="app feature"/>
          <div>
            Әр дәріс соңында <span className={styles.landing3__greenColorText}>өз өзіңізді тексеріп көріңіз</span>
          </div>
        </div>

        <div className={styles.landing4}>
          <img className={styles.landing4__image} src="/landing-4.png" alt="app feature"/>
          <div>
            Намаз кестесі көмегімен намаздарыңызды <span className={styles.landing4__greenColorText}>уақытылы оқыңыз</span>
          </div>
        </div>

        <div className={styles.landing5}>
          <img className={styles.landing5__image} src="/landing-5.png" alt="app feature"/>
          <div>
            Оңайлықпен <span className={styles.landing5__greenColorText}>құбыланы табыңыз</span>
          </div>
        </div>

        <div className={styles.landing6}>
          <img className={styles.landing6__image} src="/landing-6.png" alt="app feature"/>
          <div>
            <span className={styles.landing6__greenColorText}>Зікір жасап</span> басқа нәрсеге алаңдамаңыз
          </div>
        </div>

        <div className={styles.landing__bottom}>
          <div className={styles.landing__bottomLeft}>
            <div className={styles.landing__bottomLogoAndHeader}>
              <Image src={appIcon} alt="landing icon"/>
              <h2 className={styles.landing__bottomHeader}>Seerah.kz</h2>
            </div>
            <p className={styles.landing__bottomDescription}>Сүйікті Пайғамбарымыздың (ﷺ) сирасын үйренудің жаңа жолы</p>
          </div>
          <div className={styles.landing__bottomRight}>
            <Image src={appstorePC} alt="app store logo"/>
            <Image src={googleplayPC} alt="google play logo"/>
          </div>
        </div>
      </div>

    </div>
  );
}
