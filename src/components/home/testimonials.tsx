import Image from 'next/image';
import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Snazzerra',
        img: '/testimonials/snazzerra.jpg',
        profession: 'Software company',
        description:
            "<p class='mb-2 text-sm'>We highly recommend Brijesh for his exceptional skills in software development. His proficiency in understanding complex problems and swiftly proposing effective solutions sets him apart.</p> <p class='mb-2 text-sm'>He is not only a talented developer but also a quick learner, consistently adapting to new technologies and methodologies. His commitment to excellence and innovative problem-solving make him an invaluable asset to any team </p> <p class='mb-2 text-sm'>With a proven track record of delivering high-quality software, he is a reliable and dedicated professional who brings enthusiasm and expertise to every project. We are confident in his ability to excel in any software development role.</p>",
    },
    {
        id: 2,
        name: 'Balaji SM',
        img: '/testimonials/balaji-sm.jpg',
        profession: 'Founder of NEWERO',
        description:
            "<p class='mb-2 text-sm'>I am having the privilege of working closely with Brijesh kumar in NEWERO Techspot, and I can confidently say that he is an exceptional front end developer also Back End.</p> <p class='mb-2 text-sm'>What sets Brijesh apart is their dedication to delivering high-quality code and solutions. He consistently demonstrates a strong commitment to best practices, code maintainability, and project timelines.</p> <p class='mb-2 text-sm'>He offers valuable insights, and contributes to a positive work environment. Their ability to communicate technical concepts clearly, both to technical and non-technical.</p> <p class='mb-2 text-sm'>I highly recommend him to any organization seeking a versatile and skilled Full Stack Developer.</p> <p class='mb-2 text-sm'>Feel free to reach out to me if you have any questions or need further information regarding him.</p>",
    },
    {
        id: 3,
        name: 'Rohit Jain',
        img: '/testimonials/rohit-jain.jpg',
        profession: 'Entrepreneur',
        description:
            "<p class='mb-2 text-sm'>We had given a project to Brijeshkumar for frontend development and he has done an excellent job within a short frame of time. Work submitted was pixel perfect. I am a very fussy client and they have handled every very professionally. Even today when i buzz them and ask for some small changes they do it without any charges. I strongly recommend anyone looking for frontend development to connect with Brijeshkumar.</p>",
    },
];

const Testimonials = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-6 pt-[120px]' id='testimonials'>
            <h2 className='mb-8 text-center text-4xl font-bold'>Testimonials</h2>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
                {testimonials.map((testimonial) => (
                    <div className='rounded-lg border bg-card p-4 shadow-md' key={testimonial.id}>
                        <div className='mb-4 flex items-center gap-4'>
                            <div className='image-container w-[80px] overflow-hidden rounded-full border'>
                                <Image
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    layout='fill'
                                    className='image'
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <h2 className='text-lg font-bold text-primary'>{testimonial.name}</h2>
                                <p className='text-sm'>{testimonial.profession}</p>
                            </div>
                        </div>
                        <div className='mb-4' dangerouslySetInnerHTML={{ __html: testimonial.description }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
