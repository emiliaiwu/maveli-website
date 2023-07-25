import { useParams } from "react-router-dom";
import { blogData } from "../../constants";
import { styles } from "../../style";
import { Socials } from "..";
import { QuoteBox } from "../Box";
import Reveal from "../animation/Reveal";

const SingleBlogpost = () => {
	const { slug } = useParams();

	// Find the blog post that matches the title
	const blogpost = blogData.find((blog) => blog.slug === slug);

	if (!blogpost) {
		return <div>Blog post not found.</div>;
	}

	return (
		<article className='w-full bg-white px-6 sm:px-8 mdd:px-12'>
			<div className={`${styles.boxWidth} mx-auto`}>
				<div
					className={`${styles.flexCenter} flex-col gap-5 border-b-[0.6px] border-black py-[70px] text-center md:py-[100px]`}
				>
					<time className='font-grotesk text-sm font-semibold uppercase tracking-[0.2rem] text-black text-opacity-60 md:text-[16px]'>
						{blogpost.date}
					</time>
					<h1 className='font-grotesk text-[36px] font-medium leading-[45.5px] text-black sm:text-[38px] sm:leading-[50px] md:text-[45px] md:leading-[58.5px]'>
						{blogpost.title}
					</h1>
					<p className='font-DMSans text-sm leading-[25.5px] text-paragraph sm:w-[70%] md:w-1/2 md:text-[15px] md:leading-[27px]'>
						{blogpost.preview}
					</p>
				</div>
				<div className='mx-auto flex w-full max-w-[1000px] flex-col gap-5 py-[70px] md:py-[100px]'>
					<Reveal>
						<div
							className={`${styles.flexCenter} border-rounded mb-2 overflow-hidden`}
						>
							<img
								src={blogpost.image}
								alt='blogpost image'
								loading='lazy'
								className='h-full w-full object-cover'
							/>
						</div>
					</Reveal>
					<div className='font-grotesk text-[15px] font-[600] text-black'>
						<time className='pr-[15px]'>{blogpost.date}</time>
						<span className='border-l-2 border-paragraph border-opacity-30 pl-[15px]'>
							{blogpost.category}
						</span>
					</div>
					<div>
						<div className='blog-paragraph'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
								maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex.
								Curabitur varius semper turpis eu ullamcorper. Sed pharetra
								libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at
								lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum.
								Vivamus mollis efficitur velit vel blandit. Phasellus ut mollis
								nisl. Phasellus sit amet tellus eleifend, placerat massa vel,
								pharetra ante. Vivamus bibendum tortor ut massa finibus, ac
								venenatis lorem commodo. Nullam interdum consequat venenatis.
								Fusce nec sagittis metus.
							</p>
							<p>
								Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque
								nisi, malesuada quis sollicitudin a, eleifend quis turpis.
								Quisque efficitur imperdiet tortor vitae egestas. Pellentesque
								et sapien in tortor luctus porta. Pellentesque semper dapibus
								massa eget venenatis. Quisque tortor est, semper a sapien nec,
								interdum pretium odio. Phasellus nec ligula risus.
							</p>
							<ul>
								<li>
									<span className='marker-disc'></span>Lorem ipsum dolor sit
									amet, consectetur adipiscing elit.
								</li>
								<li>
									<span className='marker-disc'></span>
									Cras nisl metus, tristique at dolor eu, finibus facilisis ex
								</li>
								<li>
									<span className='marker-disc'></span>Nullam suscipit, est in
									egestas cursus, maximus quam
								</li>
							</ul>
						</div>
						<div className='my-8'>
							<div className='blog-paragraph'>
								<h2 className='sm:[30px] mdd:[40px] text-[25px]'>
									Making digital transactions easy
								</h2>
								<p>
									Nullam vehicula justo nibh, consectetur pharetra ligula dictum
									ut. Fusce convallis dictum mollis. Nam nec egestas eros. Donec
									volutpat nibh eu risus tempus volutpat. Phasellus venenatis
									non sem vel auctor. Quisque a sapien vel nulla vestibulum
									eleifend at id augue. Nullam volutpat justo eget justo finibus
									mattis. Nam lobortis, massa sit amet euismod fermentum, velit
									dolor viverra odio, vitae sagittis velit metus sit amet massa.
									Nullam nibh ante, pulvinar in dolor quis, ultricies maximus
									dolor.
								</p>
							</div>
							{/* <Quote /> */}
							<QuoteBox quote={blogpost.quote} />
							<div className='blog-paragraph'>
								<p>
									Suspendisse at augue vel odio fermentum fringilla eget et
									sapien. Quisque enim massa, elementum id enim sit amet,
									elementum tempus est. Sed felis dolor, varius et mauris at,
									aliquam sollicitudin elit. Curabitur non bibendum elit. In non
									tempor augue. Mauris aliquam porttitor justo, nec consectetur
									leo ornare vitae. Nunc lobortis maximus leo gravida tristique.
									Vestibulum vitae elit sit amet tortor suscipit facilisis ac
									sed tortor.
								</p>
							</div>
						</div>
						<div className='blog-paragraph'>
							<h2 className='sm:[30px] mdd:[40px] text-[25px]'>
								The next big thing in the cash wallet industry
							</h2>
							<p>
								Nulla ut nibh et elit dapibus ultrices sed nec risus. Nam in
								tellus nisl. Aenean tempor nulla felis, ut volutpat est auctor
								sit amet. Nam viverra, justo quis tempor tristique, sem sem
								tempus ligula, nec consequat nunc tellus at lorem. Duis pretium,
								nulla a faucibus maximus, enim odio pharetra arcu, sed pulvinar
								elit sem at odio. Phasellus urna sem, euismod a blandit et,
								convallis in nisi.
							</p>
							<p>
								Pellentesque lacus enim, malesuada vel est non, vulputate
								suscipit tortor. Donec finibus, neque sed sodales condimentum,
								arcu leo lobortis mauris, vitae tempor neque nisi sed justo.
								Duis consectetur posuere nulla non placerat.
							</p>
						</div>
						{/* Image Carousel */}
						<div className='blog-paragraph my-8'>
							<h2 className='sm:[30px] mdd:[40px] text-[25px]'>
								Hassle-free transactions made possible
							</h2>
							<p>
								Etiam enim neque, feugiat ac eros eu, congue varius est. Vivamus
								mi est, tincidunt feugiat rutrum vitae, euismod quis nibh. Ut
								accumsan diam vitae lobortis lobortis. Donec non euismod ligula.
								Phasellus id ex quam. Vivamus et feugiat mauris. Nam efficitur
								fermentum odio ut viverra. Suspendisse ultrices vehicula sapien,
								vel porttitor nibh ultrices sit amet. Mauris orci justo, dictum
								eget tempus sed, laoreet sit amet purus. Pellentesque erat eros,
								consequat sed ante at, molestie egestas lorem. Quisque efficitur
								magna magna, at sagittis libero euismod vitae. Fusce lacinia
								tincidunt convallis.
							</p>
							<p>
								Aliquam et efficitur nibh, vel imperdiet turpis. Ut consectetur
								mi quis enim vehicula vestibulum. Pellentesque et sodales
								turpis. Donec eget iaculis dolor. Sed lacinia pretium justo sed
								bibendum.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-between gap-8 border-t-[0.2px] border-paragraph border-opacity-30 pt-[25px] sm:flex-row'>
						<div className='flex flex-col items-center gap-3 sm:flex-row'>
							<h5 className='font-grotesk text-[14.6px] font-[500] text-black'>
								Post Tags :
							</h5>
							<ul className='flex items-center'>
								{blogpost.tags.map((item, index) => (
									<li
										key={index}
										className='mr-[10px] inline-block font-grotesk text-[14.6px] font-[500] text-headingColor '
									>
										{item}
										{index !== blogpost.tags.length - 1 && <span>, </span>}
									</li>
								))}
							</ul>
						</div>
						<div className='flex flex-col items-center gap-3 sm:flex-row'>
							<span className='text-center font-grotesk text-[14.6px] font-[500] text-black'>
								Share :
							</span>
							<Socials className={"h-8 w-8 border border-black text-sm"} />
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default SingleBlogpost;
