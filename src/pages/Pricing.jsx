import {
  Faq,
	NewsletterSection,
	PageHeader,
	PricingPlan,
	Testimonials,
	TrustedPartners,
} from "../components";

const Pricing = () => {
	return (
		<>
			<PageHeader title={"Pricing Plan"} location={"Pricing"} />
			<PricingPlan />
			<TrustedPartners />
      <Testimonials />
      <Faq/>
			<NewsletterSection />
		</>
	);
};

export default Pricing;
