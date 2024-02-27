import Testimonials from '@/components/home/testimonials';
import RecentWork from '@/components/home/recent-work';
import Contact from '@/components/home/contact';
import Landing from '@/components/home/landing';

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
