import './index.css';
import Home from '../../assets/home.svg';
import Iman from '../../assets/iman.svg';
import Settings from '../../assets/settings.svg';

type BottomMenuProps = {
  
};

const BottomMenu = ({ }: BottomMenuProps) => {
  return (
    <>
      <div className='bottom-menu'>
        <button className='bottom-menu__home' type='button'>
          <img className='bottom-menu__home-icon' src={Home} alt="home icon" />
          <h3 className='bottom-menu__home-header'>Басты бет</h3>
        </button>
        <button className='bottom-menu__my-iman' type='button'>
          <img className='bottom-menu__my-iman-icon' src={Iman} alt="iman icon" />
          <h3 className='bottom-menu__my-iman-header'>Менің иманым</h3>
        </button>
        <button className='bottom-menu__settings' type='button'>
          <img className='bottom-menu__settings-icon' src={Settings} alt="iman icon" />
          <h3 className='bottom-menu__settings-header'>Баптау</h3>
        </button>
      </div>
    </>
  )
}

export default BottomMenu;
