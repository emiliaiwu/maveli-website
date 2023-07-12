import {
	AboutSection,
	Achievements,
	NewsletterSection,
	OfficeAddress,
	OurValues,
	PageHeader,
	Stats,
	Teams,
} from "../components";

const About = () => {
	return (
		<>
			<PageHeader title={"About Us"} location={"About"} />
			<AboutSection />
			<Stats />
			<OurValues />
			<Achievements />
			<Teams />
			<OfficeAddress />
			<NewsletterSection />
		</>
	);
};

export default About;
