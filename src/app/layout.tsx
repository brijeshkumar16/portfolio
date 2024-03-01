import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter as FontSans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

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
    default: 'Frontend Developer | Brijeshkumar Yadav',
  },
  description:
    "Hi! 👋 I'm Brijeshkumar Yadav, a passionate Frontend Developer based in Valsad, Gujarat, India, with 2+ years of hands-on experience in ReactJS and NextJS",
  keywords: ['Frontend Developer', 'ReactJS Developer', 'NextJS Developer'],
  authors: [{ name: 'Brijeshkumar Yadav', url: 'https://www.brijeshkumaryadav.com' }],
  robots: 'index, follow',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    description:
      "Hi! 👋 I'm Brijeshkumar Yadav, a passionate Frontend Developer based in Valsad, Gujarat, India, with 2+ years of hands-on experience in ReactJS and NextJS",
    title: 'Frontend Developer | Brijeshkumar Yadav',
    url: 'https://brijeshkumaryadav.com/',
    siteName: 'Frontend Developer | Brijeshkumar Yadav',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
