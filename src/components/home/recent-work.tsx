import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ExternalLinkIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    img: '/project/jalso.png',
    title: 'Jalso',
    description:
      'Jalso is a comprehensive web application featuring an intuitive admin console with a user-friendly interface. Leveraging React and Node, I developed this project from the ground up, ensuring a seamless user experience and optimal performance. Jalso showcases my ability to create responsive web solutions and underscores my expertise in both front-end and back-end development.',
    skills: [
      'HTML5',
      'CSS3',
      'SaSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'AntD',
      'Node',
      'Feather',
      'PostgreSQL',
    ],
    link: 'https://jalsoadmin.com',
  },
  {
    id: 2,
    img: '/project/bakoomba.png',
    title: 'Bakoomba',
    description:
      'Bakoomba, featuring both Admin and User Consoles, is a comprehensive web application designed to empower fitness enthusiasts. I crafted this project with a focus on versatility, incorporating workout management, exercise tracking, authentication, and a media player. Furthermore, I prioritized code quality by adhering to industry best practices, ensuring a robust and maintainable system. Bakoomba exemplifies my proficiency in delivering feature-rich web applications while maintaining clean and structured code',
    skills: [
      'HTML5',
      'CSS3',
      'SaSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'AntD',
      'Node',
      'Feather',
      'PostgreSQL',
    ],
    link: 'https://fitness.bakoomba.com/#/',
  },
];

const RecentWork = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-6 pt-[120px]' id='recent-work'>
      <h2 className='mb-8 text-center text-4xl font-semibold'>
        My Recent <span className='text-primary'>Work</span>
      </h2>
      {projects.map((project) => (
        <div key={project.id} className='mt-10 w-full overflow-hidden rounded-lg border shadow-md'>
          <div className='relative h-[550px] w-full'>
            <Image
              src={project.img}
              alt={project.title}
              fill
              className='border-b object-cover'
              sizes='100vw'
              loading='lazy'
            />
          </div>
          <div className='p-5'>
            <h3 className='mb-2 text-[20px] font-bold text-primary md:text-[25px]'>{project.title}</h3>
            <p className='mb-4 text-sm'>{project.description}</p>
            <div className='mb-4 flex flex-wrap gap-2'>
              {project.skills.map((skill, i) => (
                <div key={i} className='rounded bg-primary px-2 py-1 text-sm text-background'>
                  {skill}
                </div>
              ))}
            </div>
            <Link href={project.link} target='_blank'>
              <div className='flex items-center gap-2'>
                <h4 className='font-medium text-primary'>See Live Demo</h4>
                <ExternalLinkIcon />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentWork;
