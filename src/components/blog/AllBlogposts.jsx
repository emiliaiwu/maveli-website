
import { styles } from "../../style";
import Articles from "./Articles";

const AllBlogposts = () => {
	

	return (
		<section>
			<div className={`${styles.boxWidth} mx-auto`}>
				<Articles/>
			</div>
		</section>
	);
};

export default AllBlogposts;
