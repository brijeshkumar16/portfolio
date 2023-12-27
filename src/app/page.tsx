import Testimonials from './components/testimonials';
import RecentWork from './components/recent-work';
import Landing from './components/landing';
import Contact from './components/contact';

export default function Home() {
  return (
    <>
      <Landing />
      <RecentWork />
      <Testimonials />
      <Contact />
    </>
  );
}
