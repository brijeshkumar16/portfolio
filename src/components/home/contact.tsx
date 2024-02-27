import Link from 'next/link';
import React from 'react';

import { FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa';

const data = [
  {
    icon: <FaEnvelope className='text-[25px] text-primary group-hover:text-white' aria-label='Email' />,
    title: 'Email',
    content: <Link href='mailto:by9714322072@gmail.com'>by9714322072@gmail.com</Link>,
  },
  {
    icon: <FaPhone className='text-[25px] text-primary group-hover:text-white' aria-label='Phone' />,
    title: 'Phone',
    content: <Link href='tel:+919714322072'>+91 9714322072</Link>,
  },
  {
    icon: <FaLocationArrow className='text-[25px] text-primary group-hover:text-white' aria-label='Address' />,
    title: 'Address',
    content: '252,A.B.R. Complex, Shethiya nagar, Kailash Road, Valsad - 396001',
  },
];

const Contact = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-6 pt-[120px]' id='contact'>
      <div className='text-center'>
        <h1 className='mb-1 text-[25px] font-bold md:text-[35px]'>
          Get In <strong className='text-primary'>Touch</strong>
        </h1>
        <p className='mb-4 text-lg'>
          Have questions or want to work together? <br /> Feel free to contact me using any of the methods below.
        </p>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3'>
        {data.map((item, index) => (
          <div key={index} className='rounded-lg border bg-card p-6 text-center shadow-md'>
            <div className='mx-auto mb-2 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-primary p-2'>
              {item.icon}
            </div>
            <h2 className='mb-2 text-xl font-semibold'>{item.title}</h2>
            <p className='break-words'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
