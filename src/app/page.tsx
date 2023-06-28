'use client';
import { Button } from '@/components/Button/Button';
import { Menu, MenuModal } from '@/components/Menu/MenuModal';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  handleMenuMobile: () => void;
  showMenu: boolean;
}

const Header = ({handleMenuMobile, showMenu}: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] rounded-bl-[10rem] overflow-hidden">
      <div className="bg-intro-pattern-desktop bg-auto bg-no-repeat bg-[20%]  pt-12 pb-24 px-5 w-full h-full bg-opacity-25  flex flex-col items-center justify-center">
        <div className='container mx-auto flex justify-between items-center mb-10'>
          <Image src="/images/logo.svg" alt='logo' width={101} height={40}/>

          <div className='relative flex flex-col items-end z-50'>
            <img src={`/images/icon-${!showMenu ? 'hamburger': 'close'}.svg`} alt="menu icon" onClick={() => handleMenuMobile()}/>
      
          </div>
        </div>
        
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-white text-3xl md:text-5xl text-center font-[600] mb-8'>A modern publishing platform</h1>
          <p className='text-white text-base md:text-xl text-center font-[300] mb-12'>Grow your audience and build your online brand</p>

          <div className='space-x-4'>
            <Button
              title='Start for Free'
              variant='fill'
            />
            <Button
              title='Learn More'
              variant='outline'
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='relative w-full min-h-screen'>
      {showMenu && (
        <MenuModal/>
      )}
      
      <Header
        showMenu={showMenu}
        handleMenuMobile={toggleMenu}
      />
    </div>
  );
}
