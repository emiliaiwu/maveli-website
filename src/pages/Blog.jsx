import { AllBlogposts, NewsletterSection, PageHeader } from "../components";

const Blog = () => {
	return (
		<>
			<PageHeader title={"Blog & News"} location={"Blog"} />
			<AllBlogposts />
			<NewsletterSection />
		</>
	);
};

export default Blog;
