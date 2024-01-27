import { Fragment } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/home/heroSection';
import TaskSection from '@/components/home/taskSection';

export default function App() {
	return (
		<Fragment>
			<Header />
			<HeroSection />
			<TaskSection />
			<Footer />
		</Fragment>
	);
}
