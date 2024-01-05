import Link from 'next/link';
import React from 'react';

import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const revalidate = 60 * 60 * 24;

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className='mt-[70px] border-t bg-card px-6 py-5 text-center'>
            <div className='mb-3'>
                <ul className='flex justify-center gap-4'>
                    <li className='rounded-full border-2 border-primary p-2'>
                        <Link
                            href='https://www.linkedin.com/in/brijeshkumar-yadav-201032290/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='linkedin'
                            className='text-[20px] text-primary'
                        >
                            <FaLinkedinIn />
                        </Link>
                    </li>
                    <li className='rounded-full border-2 border-primary p-2'>
                        <Link
                            href='https://twitter.com/brijeshkum16'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Twitter'
                            className='text-[20px] text-primary'
                        >
                            <FaTwitter />
                        </Link>
                    </li>
                    <li className='rounded-full border-2 border-primary p-2'>
                        <Link
                            href='https://www.instagram.com/by16__/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Twitter'
                            className='text-[20px] text-primary'
                        >
                            <FaInstagram />
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <span>Copyright © {year} Brijeshkumar Yadav. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
