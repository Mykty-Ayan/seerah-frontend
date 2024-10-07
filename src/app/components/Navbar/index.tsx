'use client'

import React, {useEffect, useState} from "react";
import Image from "next/image";

import headerIcon from "../../../../public/headerIcon.svg"
import headerGoogleplay from "../../../../public/header-googleplay.svg"
import headerAppstore from "../../../../public/header-appstore.svg"

import "./index.css"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true)

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
    <div className={isScrolled ? 'header' : 'header--hidden'}>
      <div className='header-inner-wrapper'>
        <Image src={headerIcon} alt="header icon"/>
        <div className='header-store-icons'>
          <Image src={headerGoogleplay} alt="google play link"/>
          <Image src={headerAppstore} alt="appstore link"/>
        </div>
      </div>
    </div>
  );
};