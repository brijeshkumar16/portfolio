'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { MoonIcon, SunIcon } from 'lucide-react';

import useScroll from '@/hook/use-scroll';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const menu = ['home', 'recent-work', 'testimonials', 'contact'];

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useScroll(menu, 72);
  const { setTheme, theme, systemTheme } = useTheme();

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
              <Link href='#home' className={active === 'home' ? 'font-bold' : ''}>
                Home
              </Link>
              <Link href='#recent-work' className={active === 'recent-work' ? 'font-bold' : ''}>
                Recent work
              </Link>
              <Link href='#testimonials' className={active === 'testimonials' ? 'font-bold' : ''}>
                Testimonials
              </Link>
              <Link href='#contact' className={active === 'contact' ? 'font-bold' : ''}>
                Contact
              </Link>
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
            <Link href='#home' className={active === 'home' ? 'font-bold' : ''} onClick={toggleMenu}>
              Home
            </Link>
            <Link href='#recent-work' className={active === 'recent-work' ? 'font-bold' : ''} onClick={toggleMenu}>
              Recent work
            </Link>
            <Link href='#testimonials' className={active === 'testimonials' ? 'font-bold' : ''} onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href='#contact' className={active === 'contact' ? 'font-bold' : ''} onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
