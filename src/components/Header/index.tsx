import headerIcon from "../../assets/headerIcon.svg";
import headerGoogleplay from "../../assets/header-googleplay.svg";
import headerAppstore from "../../assets/header-appstore.svg";
import React from "react";

import './index.css';

interface HeaderProps {
  isScrolled: boolean
}

const Header: React.FC<HeaderProps> = (headerProps: HeaderProps) => {
  return (
    <div className={headerProps.isScrolled ? 'header' : 'header--hidden'}>
      <div className='header-inner-wrapper'>
        <img src={headerIcon} alt="header icon"/>
        <div className='header-store-icons'>
          <img src={headerGoogleplay} alt="google play link"/>
          <img src={headerAppstore} alt="appstore link"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
