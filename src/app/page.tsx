import Testimonials from '@/components/home/testimonials';
import RecentWork from '@/components/home/recent-work';
import Contact from '@/components/home/contact';
import Landing from '@/components/home/landing';

export default function Home() {
    return (
        <div>
            <Landing />
            <RecentWork />
            <Testimonials />
            <Contact />
        </div>
    );
}
