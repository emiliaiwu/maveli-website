import { DeskTopMode, Features, HowItWorks, MindfulDesign, PageHeader, Testimonials } from "../components";

const Product = () => {
	return (
		<>
			<PageHeader title={"Our Product"} location={"Product"} />
      <MindfulDesign />
      <DeskTopMode/>
      <Features />
      <Testimonials />
      <HowItWorks/>
		</>
	);
};

export default Product;
