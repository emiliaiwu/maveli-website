import {
	Hero,
	TrustedPartners,
	AboutSection,
	Stats,
	MindfulDesign,
	Features,
	HowItWorks,
	PricingPlan,
	Testimonials,
	Faq,
	NewsletterSection,
} from "../components";
import ArticleSection from "../components/ArticleSection";




const Home = () => {
	return (
		<>
			<Hero />
			<TrustedPartners />
			<AboutSection />
			<Stats />
			<MindfulDesign />
			<Features />
			<HowItWorks />
			<PricingPlan />
			<Testimonials />
			<Faq />
			<ArticleSection />
			<NewsletterSection/>
		</>
	);
};

export default Home;
