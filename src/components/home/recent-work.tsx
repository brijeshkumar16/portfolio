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
      'Built the entire "Jalso Admin Panel" web application using ReactJS. This panel simplifies music streaming management, offering intuitive controls for content, users, advertising, sections, reports, and notifications.',
    skills: ['HTML5', 'CSS3', 'SaSS', 'JavaScript', 'React', 'Redux', 'AntD'],
    keyFeatures: [
      {
        id: 1,
        text: 'Insightful Dashboard: Real-time data for informed decisions.',
      },
      {
        id: 2,
        text: 'Content Management: Organize albums, songs, artists, and categories effortlessly.',
      },
      {
        id: 3,
        text: 'User Control: Manage app and admin users seamlessly.',
      },
      {
        id: 4,
        text: 'Strategic Advertising: Implement targeted ad campaigns.',
      },
      {
        id: 5,
        text: 'Real-time Engagement: Foster user interaction with instant notifications.',
      },
    ],
    link: 'https://jalsoadmin.com',
  },
  {
    id: 2,
    img: '/project/bakoomba.png',
    title: 'Bakoomba',
    description:
      "Bakoomba is a web application made with ReactJS that's all about helping people stay fit. Here's what it offers:",
    keyFeatures: [
      {
        id: 1,
        text: 'Home: Your starting point, offering various sections such as Nutrition Library, Program Library, and Workout Library for easy exploration.',
      },
      {
        id: 2,
        text: 'Workout Plans: Admins can craft personalized workout plans, accessible to users through the user panel.',
      },
      {
        id: 3,
        text: 'Sign-In: Securely log in to safeguard your data and receive tailored fitness recommendations.',
      },
      {
        id: 4,
        text: 'Videos: Access a collection of exercise videos to enhance your workout experience.',
      },
    ],
    skills: ['HTML5', 'CSS3', 'SaSS', 'JavaScript', 'React', 'Redux', 'AntD'],
    link: 'https://fitness.bakoomba.com/#/',
  },
];

const RecentWork = () => {
  return (
    <div className='container pt-[120px]' id='recent-work'>
      <h2 className='mb-8 text-center text-4xl font-semibold'>
        My Recent <span className='text-primary'>Work</span>
      </h2>
      {projects.map((project) => (
        <div key={project.id} className='mt-10 w-full overflow-hidden rounded-lg border shadow-md'>
          <div className='relative h-[150px] w-full md:h-[350px] lg:h-[600px]'>
            <Image src={project.img} alt={project.title} fill className='border-b' sizes='100vw' loading='lazy' />
          </div>
          <div className='p-5'>
            <h3 className='mb-2 text-[20px] font-bold text-primary md:text-[25px]'>{project.title}</h3>
            <p className='mb-4 text-sm'>{project.description}</p>
            <h3 className='mb-2 text-[18px] font-bold text-primary md:text-[20px]'>Key Features:</h3>
            <ul className='mb-4'>
              {project?.keyFeatures?.map((features) => {
                return (
                  <li className='mb-1' key={features.id}>
                    {features.text}
                  </li>
                );
              })}
            </ul>
            <h3 className='mb-2 text-[18px] font-bold text-primary md:text-[20px]'>Tech Stack:</h3>
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
