'use client';

import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <Header />
      <div className='min-h-[73.8vh]'>{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
