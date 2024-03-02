import Contact from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { PrimaryFeatures } from "../../components/PrimaryFeatures";
import { SecondaryFeatures } from "../../components/SecondaryFeatures";

const LandingPage = () => {
	return (
		<>
			<main>
				<Hero />
				<PrimaryFeatures />
				<SecondaryFeatures />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default LandingPage;
