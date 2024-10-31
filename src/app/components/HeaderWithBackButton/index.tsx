"use client";

import './index.css';
import { useRouter } from 'next/navigation';  
import arrowLeft from '../../../../public/arrow_left.svg';

import Image from "next/image";

type HeaderWithBackButtonProps = {
  header: string;
};

const HeaderWithBackButton = ({ header }: HeaderWithBackButtonProps) => {
  const router = useRouter();  

  return (
    <div className='header-with-back-button'>
      <button onClick={() => router.back()} className='header-with-back-button__back-button'>
        <Image src={arrowLeft} alt="arrow left icon" />
      </button>
      <h3 className='header-with-back-button__header'>{header}</h3>
      <button className='header-with-back-button__dummy-button'></button>
    </div>
  );
}

export default HeaderWithBackButton;
