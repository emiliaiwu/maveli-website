import { blogData } from "../constants";
import { ArticleBox } from "./Box";

const Articles = ({ requestedAmount }) => {
	const amount = Number(requestedAmount);

	const renderPosts = () => {
		if (!amount || amount >= blogData.length) {
			// Display all blog posts
			return blogData.map((blogpost) => (
				<ArticleBox
					key={blogpost.id}
					id={blogpost.id}
					title={blogpost.title}
					date={blogpost.date}
					category={blogpost.category}
					image={blogpost.image}
					link={`/blog/${blogpost.slug}/`}
				/>
			))
		} else  {
			// Display the requested amount of blog posts
			return blogData.slice(0, amount).map((blogpost) => (
				<ArticleBox
					key={blogpost.id}
					id={blogpost.id}
					title={blogpost.title}
					date={blogpost.date}
					category={blogpost.category}
					image={blogpost.image}
					link={`/blog/${blogpost.slug}/`}
				/>
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
