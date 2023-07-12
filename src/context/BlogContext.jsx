import { createContext, useEffect, useState } from "react";
import ErrorMsg from "../components/ErrorMsg";


const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
	const URL = "http://localhost:4000/posts";
	const [blogposts, setBlogposts] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBlogPosts = async () => {
			try {
				const res = await fetch(URL);
				if (!res.ok) {
					throw new Error("Failed to fetch blog posts");
				}
				const data = await res.json();
				setBlogposts(data);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchBlogPosts();
	}, []);

	if (error) {
		// Render an error message or fallback UI when an error occurs
		return (
			<ErrorMsg error={error} />
		);
	}

	return (
		<BlogContext.Provider value={{ blogposts }}>
			{children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
