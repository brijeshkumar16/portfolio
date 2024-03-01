import Testimonials from '@/components/home/testimonials';
import RecentWork from '@/components/home/recent-work';
import Contact from '@/components/home/contact';
import Landing from '@/components/home/landing';

export const revalidate = 24 * 60 * 60;

const Home = () => {
  return (
    <>
      <Landing />
      <RecentWork />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
