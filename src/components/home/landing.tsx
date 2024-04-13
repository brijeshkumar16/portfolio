import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <section className='container flex items-center justify-center pt-[100px] lg:pt-[180px]' id='home'>
      <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2'>
        <div className='order-2 lg:order-1'>
          <h1 className='mb-4 text-3xl font-bold lg:text-4xl'>Hi! 👋 I&apos;m Brijeshkumar Yadav,</h1>
          <p className='mb-6 leading-relaxed'>
            A passionate Frontend Developer based in Valsad, Gujarat, India, with 3 years of hands-on experience. I
            specialize in crafting engaging user interfaces and delightful web experiences. Dedicated to solving modern
            problems through creative and innovative frontend solutions.
          </p>

          <div className='mb-6'>
            <h2 className='mb-2 text-lg font-semibold text-primary'>My Skills</h2>
            <p>
              HTML5, CSS3, Tailwind CSS, SASS, JavaScript, TypeScript, ReactJS, NextJS, Redux, AntD, Material UI,
              shadcn/ui
            </p>
          </div>

          <div className='mb-6'>
            <Button asChild size='sm'>
              <a href='/brijeshkumar-resume.pdf' download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className='order-1 text-center lg:order-2'>
          <div className='relative mx-auto h-[200px] w-[200px] overflow-hidden rounded-[50%] border-4 border-card-foreground md:h-[450px] md:w-[450px]'>
            <Image
              src='/brijeshkumar_yadav.png'
              alt='Expert Full Stack Developer | Brijeshkumar Yadav'
              fill
              sizes='450px'
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
