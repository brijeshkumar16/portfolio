'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { cn, scrollIntoView } from '@/lib/utils';
import useScroll from '@/hook/use-scroll';
import { Button } from '../ui/button';

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setTheme, theme, systemTheme } = useTheme();

  const active = useScroll(['home', 'recent-work', 'testimonials', 'contact'], 10);

  const handleChangeTheme = () => {
    if ((theme === 'system' && systemTheme === 'dark') || theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <nav className={cn('fixed top-0 z-50 w-full border-b bg-card py-5', className)} {...props}>
        <div className='container flex items-center justify-between'>
          <div>
            <Link href='/' className='text-base font-bold text-primary lg:text-xl'>
              Brijeshkumar Yadav
            </Link>
          </div>
          <div className='flex items-center space-x-5'>
            <svg
              className='h-6 w-6 cursor-pointer text-primary lg:hidden'
              onClick={toggleMenu}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
            <div className='hidden items-center space-x-5 lg:flex'>
              <p
                className={active === 'home' ? 'cursor-pointer font-bold' : 'cursor-pointer'}
                onClick={() => scrollIntoView('#home')}
              >
                Home
              </p>
              <p
                className={active === 'recent-work' ? 'cursor-pointer font-bold' : 'cursor-pointer'}
                onClick={() => scrollIntoView('#recent-work')}
              >
                Recent work
              </p>
              <p
                className={active === 'testimonials' ? 'cursor-pointer font-bold' : 'cursor-pointer'}
                onClick={() => scrollIntoView('#testimonials')}
              >
                Testimonials
              </p>
              <p
                className={active === 'contact' ? 'cursor-pointer font-bold' : 'cursor-pointer'}
                onClick={() => scrollIntoView('#contact')}
              >
                Contact
              </p>
            </div>
            <Button variant='link' size='icon' className='h-[20px] w-[20px]' onClick={handleChangeTheme}>
              <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-50 block bg-background p-5 transition-all lg:hidden ${
          !isMenuOpen && '-translate-x-[100%]'
        }`}
      >
        <div>
          <div className='flex justify-end'>
            <svg
              className='h-6 w-6 cursor-pointer text-primary'
              onClick={toggleMenu}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </div>
          <div className='mt-8 flex flex-col items-center gap-5'>
            <p className={active === 'home' ? 'cursor-pointer font-bold' : 'cursor-pointer'} onClick={toggleMenu}>
              Home
            </p>
            <p
              className={active === 'recent-work' ? 'cursor-pointer font-bold' : 'cursor-pointer'}
              onClick={toggleMenu}
            >
              Recent work
            </p>
            <p
              className={active === 'testimonials' ? 'cursor-pointer font-bold' : 'cursor-pointer'}
              onClick={toggleMenu}
            >
              Testimonials
            </p>
            <p className={active === 'contact' ? 'cursor-pointer font-bold' : 'cursor-pointer'} onClick={toggleMenu}>
              Contact
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
