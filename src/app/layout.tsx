import { Inter as FontSans } from 'next/font/google';
import type { Metadata } from 'next';

import GoogleAnalytics from '../components/home/google-analytics';
import { ThemeProvider } from '@/components/theme-provider';
import CookieBanner from '../components/home/cookie-banner';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { cn } from '@/lib/utils';
import '../style/globals.css';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://brijeshkumaryadav.com'),
    icons: '/favicon/favicon.png',
    title: {
        template: '%s | Brijeshkumar Yadav',
        default: 'Full Stack Developer | Brijeshkumar Yadav',
    },
    description:
        'Brijeshkumar Yadav is a skilled Full Stack Developer offering custom website and web application development services in Valsad, Gujarat. Specialized in JavaScript, TypeScript, ReactJS, NextJS, NodeJS, and more.',
    keywords: [
        'Full Stack Developer',
        'Web Development Services',
        'Custom Website Development',
        'Web Application Development',
        'JavaScript Development',
        'ReactJS Development',
        'NodeJS Development',
        'Front-end Development',
        'Back-end Development',
        'Responsive Web Design',
        'E-commerce Website Developer',
        'Valsad Developer',
        'Gujarat Web Developer',
        'Professional Software Engineer',
        'Experienced Web Developer',
        'API Development',
    ],
    authors: [{ name: 'Brijeshkumar Yadav', url: 'https://www.brijeshkumaryadav.com' }],
    robots: 'index, follow',
    manifest: '/manifest.json',
    openGraph: {
        type: 'website',
        description:
            'Brijeshkumar Yadav is a skilled Full Stack Developer offering custom website and web application development services in Valsad, Gujarat. Specialized in JavaScript, TypeScript, ReactJS, NextJS, NodeJS, and more.',
        title: 'Full Stack Developer | Brijeshkumar Yadav',
        url: 'https://brijeshkumaryadav.com/',
        siteName: 'Full Stack Developer | Brijeshkumar Yadav',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <GoogleAnalytics GA_MEASUREMENT_ID='G-2JE0LNN8N6' />
                    <Header />
                    <main className='min-h-[73.8vh]'>{children}</main>
                    <Footer />
                    <CookieBanner />
                </ThemeProvider>
            </body>
        </html>
    );
}
