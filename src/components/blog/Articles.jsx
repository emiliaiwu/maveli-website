import { blogData } from "../../constants";
import { ArticleBox } from "../Box";
import Reveal from "../animation/Reveal";

const Articles = ({ requestedAmount }) => {
	const amount = Number(requestedAmount);

	const renderPosts = () => {
		if (!amount || amount >= blogData.length) {
			// Display all blog posts
			return blogData.map((blogpost) => (
				<Reveal key={blogpost.id}>
					<ArticleBox
						id={blogpost.id}
						title={blogpost.title}
						date={blogpost.date}
						category={blogpost.category}
						image={blogpost.image}
						link={`/blog/${blogpost.slug}/`}
					/>
				</Reveal>
			));
		} else {
			// Display the requested amount of blog posts
			return blogData.slice(0, amount).map((blogpost) => (
				<Reveal key={blogpost.id}>
					<ArticleBox
						id={blogpost.id}
						title={blogpost.title}
						date={blogpost.date}
						category={blogpost.category}
						image={blogpost.image}
						link={`/blog/${blogpost.slug}/`}
					/>
				</Reveal>
			));
		}
	};

	return (
		<div className='grid w-full gap-8 sm:grid-cols-2 mdd:grid-cols-3'>
			{renderPosts()}
		</div>
	);
};

export default Articles;
