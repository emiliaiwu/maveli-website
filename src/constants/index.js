// Images
import {
	iPhone2,
	iPhone3,
	iPhone5,
	heroImg,
	aboutImg,
    blogImg1,
    blogImg4,
	appleStorepng,
	playStorepng,
	asset1,
	asset2,
	asset3,
	asset4,
	client1,
	client2,
	client3,
	client4,
	client5,
	client6,
	client7,
	client8,
	collage1,
	collage2,
	collage3,
	collage4,
	collage5,
	collage6,
	PSD021,
	PSD041,
	blogImg2,
    blogImg3,
    blogImg5,
} from "../assets";

// import icons
import {
	FaChrome,
	FaWrench,
	FaShoppingBasket,
	FaDelicious,
	FaBuffer,
	FaRegEye,
	FaHeadphonesAlt,
	FaEllo,
} from "react-icons/fa";
import { LuShieldCheck, LuServer } from "react-icons/lu";
import { BiChevronDown, BiSearch, BiDownload } from "react-icons/bi"
import { CgMenuRight } from "react-icons/cg";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export {
BiChevronDown, RxHamburgerMenu, BiSearch, BiDownload, CgMenuRight, RxCross2, FaEllo, FaChrome
}

// NAV
export const navLinks = [
	{
		id: "",
		title: "Home",
	},
	{
		id: "about",
		title: "About",
	},
	{
		id: "product",
		title: "Product",
	},
	{
		id: "pricing",
		title: "Pricing",
	},
	{
		id: "blog",
		title: "Blog",
	},

	{
		id: "help",
		title: "Help",
		sublinks: [
			{
				id: "faq",
				title: "FAQs",
			},
			{
				id: "contact",
				title: "Contact",
			},
		],
	},
];

export const heroDetails = {
	headingText: "WELCOME TO MAVELI",
	headingTitle: ["Making", "Digital", "Transactions Easier!"],
	headingParagraph:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
	headingButtonText: ["Get Started", "Call Support"],
	ActiveUsersObj: [collage1, collage2, collage3, collage4],
	heroImage: heroImg,
};

export const trustedPartners = {
	heading: "SOME OF OUR TRUSTED PARTNERS",
	images: [
		client1,
		client2,
		client3,
		client4,
		client5,
		client6,
		client7,
		client8,
	],
};

export const aboutMaveli = {
	headingText: "ABOUT RAVELI",
	headingTitle: "Make Your Transactions Quick and Easy",
	headingParagraph:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae rhoncus ipsum. Nunc eleifend ultrices ligula eu pharetra. ",
	image: aboutImg,
	phoneImage: PSD041,
	details: [
		{
			id: "detail-1",
			icon: FaChrome,
			heading: "Cross-Browser",
			paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			bgColor: "bg-tertiary",
			iconColor: "text-white",
			iconBgColor: "bg-black",
			fontColor: "text-black",
			borderColor: "border-black",
		},
		{
			id: "detail-2",
			icon: FaWrench,
			heading: "Amazing Features",
			paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			bgColor: "bg-black",
			iconColor: "text-black",
			iconBgColor: "bg-white",
			fontColor: "text-white",
			borderColor: "border-paragraph",
		},

		{
			id: "detail-3",
			icon: FaShoppingBasket,
			heading: "Easy Payment",
			paragraph:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
			bgColor: "bg-primary",
			iconColor: "text-white",
			iconBgColor: "text-black",
			fontColor: "text-black",
			borderColor: "border-black",
		},
	],
};

export const mindfulDesign = {
	text: "MINDFUL DESIGN",
	title: "The New Way of Doing Business",
	paragraph:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae rhoncus ipsum. Nunc eleifend ultrices ligula eu pharetra. ",
	downloadImg: [appleStorepng, playStorepng],
	image: PSD021,
};

export const ourFeatures = {
	text: "OUR FEATURES",
	title: "Cashless Payments Made Possible",
	features: [
		{
			id: "feature-1",
			icon: LuShieldCheck,
			title: "Security Features",
			info: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
		},
		{
			id: "feature-2",
			icon: FaDelicious,
			title: "Pixel Perfect",
			info: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
		},
		{
			id: "feature-3",
			icon: FaBuffer,
			title: "Clean Coding",
			info: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
		},
		{
			id: "feature-4",
			icon: LuServer,
			title: "Fast Servers",
			info: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
		},
		{
			id: "feature-5",
			icon: FaRegEye,
			title: "Retina Ready",
			info: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
		},
		{
			id: "feature-6",
			icon: FaHeadphonesAlt,
			title: "Fast Support",
			info: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
		},
	],
};

export const howItWorks = {
	text: "SEE HOW IT WORKS",
	title: "The New Way of Money Transfer",
	paragragh:
		"Fusce porta, felis et facilisis tincidunt, metus eros mollis nibh, venenatis tempor arcu massa a augue. Suspendisse mattis arcu mi, id fringilla urna accumsan in. Nam ornare nunc metus.",
	image: blogImg3,
	buttonText: "Learn More",
};

export const pricingPlan = {
	text: "PRICING PLAN",
	title: "The Way to a Safer Business Deals",
	buttonText: "Contact Us",
	pricing: [
		{
			id: "pricing-1",
			perUser: "$9.50",
			name: "Basic Plan",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
			listTitle: "What's included?",
			list: [
				"All Full Features",
				"Special Premium",
				"Update Include",
				"24/7 Full Support",
			],
			buttonText: "Get Started",
		},
		{
			id: "pricing-2",
			perUser: "$10.50",
			name: "StartUp Plan",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
			listTitle: "What's included?",
			list: [
				"All Full Features",
				"Special Premium",
				"Update Include",
				"24/7 Full Support",
			],
			buttonText: "Get Started",
		},
		{
			id: "pricing-3",
			perUser: "$12.00",
			name: "Deluxe Plan",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
			listTitle: "What's included?",
			list: [
				"All Full Features",
				"Special Premium",
				"Update Include",
				"24/7 Full Support",
			],
			buttonText: "Get Started",
		},
	],
};

export const testimonials = {
	text: "TESTIMONIALS",
	title: "Words From Clients",
	buttonText: "More Review",
	reviews: [
		{
			id: "review-1",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: client1,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-2",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: client2,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-3",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: client3,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-4",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: client4,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-5",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: client5,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-6",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: client6,
			name: "John Doe",
			occupation: "Customer",
		},
	],
};

export const achievements = {
	text: "ACHIEVEMENTS",
	title: "An Awesome Cash Wallet for You",
	image: "",
	rating: [
		["4.7/5.0", "On iOS App Store"],
		["4.8/5.0", "On Google Play"],
	],
	asset: [asset1, asset2, asset3, asset4],
};

export const FAQs = {
	text: "FAQS",
	title: "Frequently Asked Questions",
	image: iPhone5,
	questions: [
		{
			title: "How many speakers at this event?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.",
		},
		{
			title: "Is there a special offer for a student?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.",
		},
		{
			title: "Can I get a discount for multiple purchases?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.",
		},
		{
			title: "What payment methods do you provide?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.",
		},
	],
};

export const FAQSection = [
	{
		text: "FAQS",
		title: "About App",
	},
	{
		text: "FAQS",
		title: "About Payment",
	},
	{
		text: "FAQS",
		title: "Other Questions",
	},
];

export const blogPosts = [
	{
		id: 1,
		title: "Ransomware Payments Were on the Declines!",
		author: "John Doe",
		category: "Payment",
		postTags: ["Decline", "Payment", "Ransome"],
		buttonText: "Read More",
		image: blogImg2,
		publicationDate: new Date("2023-06-25"),
		content: [
			{
				heading1: [
					{
						text: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex. Curabitur varius semper turpis eu ullamcorper. Sed pharetra libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum. Vivamus mollis efficitur velit vel blandit. Phasellus ut mollis nisl. Phasellus sit amet tellus eleifend, placerat massa vel, pharetra ante. Vivamus bibendum tortor ut massa finibus, ac venenatis lorem commodo. Nullam interdum consequat venenatis. Fusce nec sagittis metus.",
							"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet tortor vitae egestas. Pellentesque et sapien in tortor luctus porta. Pellentesque semper dapibus massa eget venenatis. Quisque tortor est, semper a sapien nec, interdum pretium odio. Phasellus nec ligula risus.",
						],
						list: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"Cras nisl metus, tristique at dolor eu, finibus facilisis ex",
							"Nullam suscipit, est in egestas cursus, maximus quam",
						],
					},
				],

				heading2: [
					{
						heading: "Making digital transactions easy",
						text: "Nullam vehicula justo nibh, consectetur pharetra ligula dictum ut. Fusce convallis dictum mollis. Nam nec egestas eros. Donec volutpat nibh eu risus tempus volutpat. Phasellus venenatis non sem vel auctor. Quisque a sapien vel nulla vestibulum eleifend at id augue. Nullam volutpat justo eget justo finibus mattis. Nam lobortis, massa sit amet euismod fermentum, velit dolor viverra odio, vitae sagittis velit metus sit amet massa. Nullam nibh ante, pulvinar in dolor quis, ultricies maximus dolor.",
						quote:
							"The next big thing in digital money transfer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
						text2:
							"Suspendisse at augue vel odio fermentum fringilla eget et sapien. Quisque enim massa, elementum id enim sit amet, elementum tempus est. Sed felis dolor, varius et mauris at, aliquam sollicitudin elit. Curabitur non bibendum elit. In non tempor augue. Mauris aliquam porttitor justo, nec consectetur leo ornare vitae. Nunc lobortis maximus leo gravida tristique. Vestibulum vitae elit sit amet tortor suscipit facilisis ac sed tortor.",
					},
				],

				heading3: [
					{
						heading: "The next big thing in the cash wallet industry",
						p1: "Nulla ut nibh et elit dapibus ultrices sed nec risus. Nam in tellus nisl. Aenean tempor nulla felis, ut volutpat est auctor sit amet. Nam viverra, justo quis tempor tristique, sem sem tempus ligula, nec consequat nunc tellus at lorem. Duis pretium, nulla a faucibus maximus, enim odio pharetra arcu, sed pulvinar elit sem at odio. Phasellus urna sem, euismod a blandit et, convallis in nisi.",
						p2: "Pellentesque lacus enim, malesuada vel est non, vulputate suscipit tortor. Donec finibus, neque sed sodales condimentum, arcu leo lobortis mauris, vitae tempor neque nisi sed justo. Duis consectetur posuere nulla non placerat.",
					},
				],

				heading4: [
					{
						heading: "Hassle-free transactions made possible",
						p1: "Etiam enim neque, feugiat ac eros eu, congue varius est. Vivamus mi est, tincidunt feugiat rutrum vitae, euismod quis nibh. Ut accumsan diam vitae lobortis lobortis. Donec non euismod ligula. Phasellus id ex quam. Vivamus et feugiat mauris. Nam efficitur fermentum odio ut viverra. Suspendisse ultrices vehicula sapien, vel porttitor nibh ultrices sit amet. Mauris orci justo, dictum eget tempus sed, laoreet sit amet purus. Pellentesque erat eros, consequat sed ante at, molestie egestas lorem. Quisque efficitur magna magna, at sagittis libero euismod vitae. Fusce lacinia tincidunt convallis.",
						p2: "Aliquam et efficitur nibh, vel imperdiet turpis. Ut consectetur mi quis enim vehicula vestibulum. Pellentesque et sodales turpis. Donec eget iaculis dolor. Sed lacinia pretium justo sed bibendum.",
					},
				],
			},
		],
	},
	{
		id: 2,
		title: "Digital Payment Value Continues to Worldwide",
		author: "John Doe",
		category: "Digital",
		postTags: ["Money", "Strategy", "World"],
		buttonText: "Read More",
		image: aboutImg,
		publicationDate: new Date("2023-06-25"),
		content: [
			{
				heading1: [
					{
						text: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex. Curabitur varius semper turpis eu ullamcorper. Sed pharetra libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum. Vivamus mollis efficitur velit vel blandit. Phasellus ut mollis nisl. Phasellus sit amet tellus eleifend, placerat massa vel, pharetra ante. Vivamus bibendum tortor ut massa finibus, ac venenatis lorem commodo. Nullam interdum consequat venenatis. Fusce nec sagittis metus.",
							"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet tortor vitae egestas. Pellentesque et sapien in tortor luctus porta. Pellentesque semper dapibus massa eget venenatis. Quisque tortor est, semper a sapien nec, interdum pretium odio. Phasellus nec ligula risus.",
						],
						list: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"Cras nisl metus, tristique at dolor eu, finibus facilisis ex",
							"Nullam suscipit, est in egestas cursus, maximus quam",
						],
					},
				],

				heading2: [
					{
						heading: "Making digital transactions easy",
						text: "Nullam vehicula justo nibh, consectetur pharetra ligula dictum ut. Fusce convallis dictum mollis. Nam nec egestas eros. Donec volutpat nibh eu risus tempus volutpat. Phasellus venenatis non sem vel auctor. Quisque a sapien vel nulla vestibulum eleifend at id augue. Nullam volutpat justo eget justo finibus mattis. Nam lobortis, massa sit amet euismod fermentum, velit dolor viverra odio, vitae sagittis velit metus sit amet massa. Nullam nibh ante, pulvinar in dolor quis, ultricies maximus dolor.",
						quote:
							"The next big thing in digital money transfer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
						text2:
							"Suspendisse at augue vel odio fermentum fringilla eget et sapien. Quisque enim massa, elementum id enim sit amet, elementum tempus est. Sed felis dolor, varius et mauris at, aliquam sollicitudin elit. Curabitur non bibendum elit. In non tempor augue. Mauris aliquam porttitor justo, nec consectetur leo ornare vitae. Nunc lobortis maximus leo gravida tristique. Vestibulum vitae elit sit amet tortor suscipit facilisis ac sed tortor.",
					},
				],

				heading3: [
					{
						heading: "The next big thing in the cash wallet industry",
						p1: "Nulla ut nibh et elit dapibus ultrices sed nec risus. Nam in tellus nisl. Aenean tempor nulla felis, ut volutpat est auctor sit amet. Nam viverra, justo quis tempor tristique, sem sem tempus ligula, nec consequat nunc tellus at lorem. Duis pretium, nulla a faucibus maximus, enim odio pharetra arcu, sed pulvinar elit sem at odio. Phasellus urna sem, euismod a blandit et, convallis in nisi.",
						p2: "Pellentesque lacus enim, malesuada vel est non, vulputate suscipit tortor. Donec finibus, neque sed sodales condimentum, arcu leo lobortis mauris, vitae tempor neque nisi sed justo. Duis consectetur posuere nulla non placerat.",
					},
				],

				heading4: [
					{
						heading: "Hassle-free transactions made possible",
						p1: "Etiam enim neque, feugiat ac eros eu, congue varius est. Vivamus mi est, tincidunt feugiat rutrum vitae, euismod quis nibh. Ut accumsan diam vitae lobortis lobortis. Donec non euismod ligula. Phasellus id ex quam. Vivamus et feugiat mauris. Nam efficitur fermentum odio ut viverra. Suspendisse ultrices vehicula sapien, vel porttitor nibh ultrices sit amet. Mauris orci justo, dictum eget tempus sed, laoreet sit amet purus. Pellentesque erat eros, consequat sed ante at, molestie egestas lorem. Quisque efficitur magna magna, at sagittis libero euismod vitae. Fusce lacinia tincidunt convallis.",
						p2: "Aliquam et efficitur nibh, vel imperdiet turpis. Ut consectetur mi quis enim vehicula vestibulum. Pellentesque et sodales turpis. Donec eget iaculis dolor. Sed lacinia pretium justo sed bibendum.",
					},
				],
			},
		],
	},

	{
		id: 3,
		title: "Digital Payment Wallet Competition Heats Up",
		author: "John Doe",
		category: "Business",
		postTags: ["App", "Competition", "Wallet"],
		buttonText: "Read More",
		image: blogImg3,
		publicationDate: new Date("2023-06-25"),
		content: [
			{
				heading1: [
					{
						text: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex. Curabitur varius semper turpis eu ullamcorper. Sed pharetra libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum. Vivamus mollis efficitur velit vel blandit. Phasellus ut mollis nisl. Phasellus sit amet tellus eleifend, placerat massa vel, pharetra ante. Vivamus bibendum tortor ut massa finibus, ac venenatis lorem commodo. Nullam interdum consequat venenatis. Fusce nec sagittis metus.",
							"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet tortor vitae egestas. Pellentesque et sapien in tortor luctus porta. Pellentesque semper dapibus massa eget venenatis. Quisque tortor est, semper a sapien nec, interdum pretium odio. Phasellus nec ligula risus.",
						],
						list: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"Cras nisl metus, tristique at dolor eu, finibus facilisis ex",
							"Nullam suscipit, est in egestas cursus, maximus quam",
						],
					},
				],

				heading2: [
					{
						heading: "Making digital transactions easy",
						text: "Nullam vehicula justo nibh, consectetur pharetra ligula dictum ut. Fusce convallis dictum mollis. Nam nec egestas eros. Donec volutpat nibh eu risus tempus volutpat. Phasellus venenatis non sem vel auctor. Quisque a sapien vel nulla vestibulum eleifend at id augue. Nullam volutpat justo eget justo finibus mattis. Nam lobortis, massa sit amet euismod fermentum, velit dolor viverra odio, vitae sagittis velit metus sit amet massa. Nullam nibh ante, pulvinar in dolor quis, ultricies maximus dolor.",
						quote:
							"The next big thing in digital money transfer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
						text2:
							"Suspendisse at augue vel odio fermentum fringilla eget et sapien. Quisque enim massa, elementum id enim sit amet, elementum tempus est. Sed felis dolor, varius et mauris at, aliquam sollicitudin elit. Curabitur non bibendum elit. In non tempor augue. Mauris aliquam porttitor justo, nec consectetur leo ornare vitae. Nunc lobortis maximus leo gravida tristique. Vestibulum vitae elit sit amet tortor suscipit facilisis ac sed tortor.",
					},
				],

				heading3: [
					{
						heading: "The next big thing in the cash wallet industry",
						p1: "Nulla ut nibh et elit dapibus ultrices sed nec risus. Nam in tellus nisl. Aenean tempor nulla felis, ut volutpat est auctor sit amet. Nam viverra, justo quis tempor tristique, sem sem tempus ligula, nec consequat nunc tellus at lorem. Duis pretium, nulla a faucibus maximus, enim odio pharetra arcu, sed pulvinar elit sem at odio. Phasellus urna sem, euismod a blandit et, convallis in nisi.",
						p2: "Pellentesque lacus enim, malesuada vel est non, vulputate suscipit tortor. Donec finibus, neque sed sodales condimentum, arcu leo lobortis mauris, vitae tempor neque nisi sed justo. Duis consectetur posuere nulla non placerat.",
					},
				],

				heading4: [
					{
						heading: "Hassle-free transactions made possible",
						p1: "Etiam enim neque, feugiat ac eros eu, congue varius est. Vivamus mi est, tincidunt feugiat rutrum vitae, euismod quis nibh. Ut accumsan diam vitae lobortis lobortis. Donec non euismod ligula. Phasellus id ex quam. Vivamus et feugiat mauris. Nam efficitur fermentum odio ut viverra. Suspendisse ultrices vehicula sapien, vel porttitor nibh ultrices sit amet. Mauris orci justo, dictum eget tempus sed, laoreet sit amet purus. Pellentesque erat eros, consequat sed ante at, molestie egestas lorem. Quisque efficitur magna magna, at sagittis libero euismod vitae. Fusce lacinia tincidunt convallis.",
						p2: "Aliquam et efficitur nibh, vel imperdiet turpis. Ut consectetur mi quis enim vehicula vestibulum. Pellentesque et sodales turpis. Donec eget iaculis dolor. Sed lacinia pretium justo sed bibendum.",
					},
				],
			},
		],
	},

	{
		id: 4,
		title: "Online Purchases Thrived During the Holidays",
		author: "John Doe",
		category: "Purchase",
		postTags: ["Online", "Competition", "Wallet"],
		buttonText: "Read More",
		image: blogImg4,
		publicationDate: new Date("2023-06-25"),
		content: [
			{
				heading1: [
					{
						text: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex. Curabitur varius semper turpis eu ullamcorper. Sed pharetra libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum. Vivamus mollis efficitur velit vel blandit. Phasellus ut mollis nisl. Phasellus sit amet tellus eleifend, placerat massa vel, pharetra ante. Vivamus bibendum tortor ut massa finibus, ac venenatis lorem commodo. Nullam interdum consequat venenatis. Fusce nec sagittis metus.",
							"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet tortor vitae egestas. Pellentesque et sapien in tortor luctus porta. Pellentesque semper dapibus massa eget venenatis. Quisque tortor est, semper a sapien nec, interdum pretium odio. Phasellus nec ligula risus.",
						],
						list: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"Cras nisl metus, tristique at dolor eu, finibus facilisis ex",
							"Nullam suscipit, est in egestas cursus, maximus quam",
						],
					},
				],

				heading2: [
					{
						heading: "Making digital transactions easy",
						text: "Nullam vehicula justo nibh, consectetur pharetra ligula dictum ut. Fusce convallis dictum mollis. Nam nec egestas eros. Donec volutpat nibh eu risus tempus volutpat. Phasellus venenatis non sem vel auctor. Quisque a sapien vel nulla vestibulum eleifend at id augue. Nullam volutpat justo eget justo finibus mattis. Nam lobortis, massa sit amet euismod fermentum, velit dolor viverra odio, vitae sagittis velit metus sit amet massa. Nullam nibh ante, pulvinar in dolor quis, ultricies maximus dolor.",
						quote:
							"The next big thing in digital money transfer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
						text2:
							"Suspendisse at augue vel odio fermentum fringilla eget et sapien. Quisque enim massa, elementum id enim sit amet, elementum tempus est. Sed felis dolor, varius et mauris at, aliquam sollicitudin elit. Curabitur non bibendum elit. In non tempor augue. Mauris aliquam porttitor justo, nec consectetur leo ornare vitae. Nunc lobortis maximus leo gravida tristique. Vestibulum vitae elit sit amet tortor suscipit facilisis ac sed tortor.",
					},
				],

				heading3: [
					{
						heading: "The next big thing in the cash wallet industry",
						p1: "Nulla ut nibh et elit dapibus ultrices sed nec risus. Nam in tellus nisl. Aenean tempor nulla felis, ut volutpat est auctor sit amet. Nam viverra, justo quis tempor tristique, sem sem tempus ligula, nec consequat nunc tellus at lorem. Duis pretium, nulla a faucibus maximus, enim odio pharetra arcu, sed pulvinar elit sem at odio. Phasellus urna sem, euismod a blandit et, convallis in nisi.",
						p2: "Pellentesque lacus enim, malesuada vel est non, vulputate suscipit tortor. Donec finibus, neque sed sodales condimentum, arcu leo lobortis mauris, vitae tempor neque nisi sed justo. Duis consectetur posuere nulla non placerat.",
					},
				],

				heading4: [
					{
						heading: "Hassle-free transactions made possible",
						p1: "Etiam enim neque, feugiat ac eros eu, congue varius est. Vivamus mi est, tincidunt feugiat rutrum vitae, euismod quis nibh. Ut accumsan diam vitae lobortis lobortis. Donec non euismod ligula. Phasellus id ex quam. Vivamus et feugiat mauris. Nam efficitur fermentum odio ut viverra. Suspendisse ultrices vehicula sapien, vel porttitor nibh ultrices sit amet. Mauris orci justo, dictum eget tempus sed, laoreet sit amet purus. Pellentesque erat eros, consequat sed ante at, molestie egestas lorem. Quisque efficitur magna magna, at sagittis libero euismod vitae. Fusce lacinia tincidunt convallis.",
						p2: "Aliquam et efficitur nibh, vel imperdiet turpis. Ut consectetur mi quis enim vehicula vestibulum. Pellentesque et sodales turpis. Donec eget iaculis dolor. Sed lacinia pretium justo sed bibendum.",
					},
				],
			},
		],
	},

	{
		id: 5,
		title: "Twitter Payment Continue to Build Momentum",
		author: "John Doe",
		category: "Purchase",
		postTags: ["Online", "Competition", "Wallet"],
		buttonText: "Read More",
		image: blogImg5,
		publicationDate: new Date("2023-06-25"),
		content: [
			{
				heading1: [
					{
						text: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex. Curabitur varius semper turpis eu ullamcorper. Sed pharetra libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum. Vivamus mollis efficitur velit vel blandit. Phasellus ut mollis nisl. Phasellus sit amet tellus eleifend, placerat massa vel, pharetra ante. Vivamus bibendum tortor ut massa finibus, ac venenatis lorem commodo. Nullam interdum consequat venenatis. Fusce nec sagittis metus.",
							"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet tortor vitae egestas. Pellentesque et sapien in tortor luctus porta. Pellentesque semper dapibus massa eget venenatis. Quisque tortor est, semper a sapien nec, interdum pretium odio. Phasellus nec ligula risus.",
						],
						list: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"Cras nisl metus, tristique at dolor eu, finibus facilisis ex",
							"Nullam suscipit, est in egestas cursus, maximus quam",
						],
					},
				],

				heading2: [
					{
						heading: "Making digital transactions easy",
						text: "Nullam vehicula justo nibh, consectetur pharetra ligula dictum ut. Fusce convallis dictum mollis. Nam nec egestas eros. Donec volutpat nibh eu risus tempus volutpat. Phasellus venenatis non sem vel auctor. Quisque a sapien vel nulla vestibulum eleifend at id augue. Nullam volutpat justo eget justo finibus mattis. Nam lobortis, massa sit amet euismod fermentum, velit dolor viverra odio, vitae sagittis velit metus sit amet massa. Nullam nibh ante, pulvinar in dolor quis, ultricies maximus dolor.",
						quote:
							"The next big thing in digital money transfer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
						text2:
							"Suspendisse at augue vel odio fermentum fringilla eget et sapien. Quisque enim massa, elementum id enim sit amet, elementum tempus est. Sed felis dolor, varius et mauris at, aliquam sollicitudin elit. Curabitur non bibendum elit. In non tempor augue. Mauris aliquam porttitor justo, nec consectetur leo ornare vitae. Nunc lobortis maximus leo gravida tristique. Vestibulum vitae elit sit amet tortor suscipit facilisis ac sed tortor.",
					},
				],

				heading3: [
					{
						heading: "The next big thing in the cash wallet industry",
						p1: "Nulla ut nibh et elit dapibus ultrices sed nec risus. Nam in tellus nisl. Aenean tempor nulla felis, ut volutpat est auctor sit amet. Nam viverra, justo quis tempor tristique, sem sem tempus ligula, nec consequat nunc tellus at lorem. Duis pretium, nulla a faucibus maximus, enim odio pharetra arcu, sed pulvinar elit sem at odio. Phasellus urna sem, euismod a blandit et, convallis in nisi.",
						p2: "Pellentesque lacus enim, malesuada vel est non, vulputate suscipit tortor. Donec finibus, neque sed sodales condimentum, arcu leo lobortis mauris, vitae tempor neque nisi sed justo. Duis consectetur posuere nulla non placerat.",
					},
				],

				heading4: [
					{
						heading: "Hassle-free transactions made possible",
						p1: "Etiam enim neque, feugiat ac eros eu, congue varius est. Vivamus mi est, tincidunt feugiat rutrum vitae, euismod quis nibh. Ut accumsan diam vitae lobortis lobortis. Donec non euismod ligula. Phasellus id ex quam. Vivamus et feugiat mauris. Nam efficitur fermentum odio ut viverra. Suspendisse ultrices vehicula sapien, vel porttitor nibh ultrices sit amet. Mauris orci justo, dictum eget tempus sed, laoreet sit amet purus. Pellentesque erat eros, consequat sed ante at, molestie egestas lorem. Quisque efficitur magna magna, at sagittis libero euismod vitae. Fusce lacinia tincidunt convallis.",
						p2: "Aliquam et efficitur nibh, vel imperdiet turpis. Ut consectetur mi quis enim vehicula vestibulum. Pellentesque et sodales turpis. Donec eget iaculis dolor. Sed lacinia pretium justo sed bibendum.",
					},
				],
			},
		],
	},

	{
		id: 6,
		title: "Is 2023 the Year of the Digital Payment Apps?",
		author: "John Doe",
		category: "Digital",
		postTags: ["Digital", "Payment", "Wallet"],
		buttonText: "Read More",
		image: blogImg1,
		publicationDate: new Date("2023-06-25"),
		content: [
			{
				heading1: [
					{
						text: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nunc eu odio pulvinar fringilla. Vivamus vitae odio ex. Curabitur varius semper turpis eu ullamcorper. Sed pharetra libero nec lorem rutrum interdum. Aliquam egestas ligula ex, at lobortis neque efficitur in. Fusce sit amet ullamcorper ipsum. Vivamus mollis efficitur velit vel blandit. Phasellus ut mollis nisl. Phasellus sit amet tellus eleifend, placerat massa vel, pharetra ante. Vivamus bibendum tortor ut massa finibus, ac venenatis lorem commodo. Nullam interdum consequat venenatis. Fusce nec sagittis metus.",
							"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet tortor vitae egestas. Pellentesque et sapien in tortor luctus porta. Pellentesque semper dapibus massa eget venenatis. Quisque tortor est, semper a sapien nec, interdum pretium odio. Phasellus nec ligula risus.",
						],
						list: [
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
							"Cras nisl metus, tristique at dolor eu, finibus facilisis ex",
							"Nullam suscipit, est in egestas cursus, maximus quam",
						],
					},
				],

				heading2: [
					{
						heading: "Making digital transactions easy",
						text: "Nullam vehicula justo nibh, consectetur pharetra ligula dictum ut. Fusce convallis dictum mollis. Nam nec egestas eros. Donec volutpat nibh eu risus tempus volutpat. Phasellus venenatis non sem vel auctor. Quisque a sapien vel nulla vestibulum eleifend at id augue. Nullam volutpat justo eget justo finibus mattis. Nam lobortis, massa sit amet euismod fermentum, velit dolor viverra odio, vitae sagittis velit metus sit amet massa. Nullam nibh ante, pulvinar in dolor quis, ultricies maximus dolor.",
						quote:
							"The next big thing in digital money transfer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
						text2:
							"Suspendisse at augue vel odio fermentum fringilla eget et sapien. Quisque enim massa, elementum id enim sit amet, elementum tempus est. Sed felis dolor, varius et mauris at, aliquam sollicitudin elit. Curabitur non bibendum elit. In non tempor augue. Mauris aliquam porttitor justo, nec consectetur leo ornare vitae. Nunc lobortis maximus leo gravida tristique. Vestibulum vitae elit sit amet tortor suscipit facilisis ac sed tortor.",
					},
				],

				heading3: [
					{
						heading: "The next big thing in the cash wallet industry",
						p1: "Nulla ut nibh et elit dapibus ultrices sed nec risus. Nam in tellus nisl. Aenean tempor nulla felis, ut volutpat est auctor sit amet. Nam viverra, justo quis tempor tristique, sem sem tempus ligula, nec consequat nunc tellus at lorem. Duis pretium, nulla a faucibus maximus, enim odio pharetra arcu, sed pulvinar elit sem at odio. Phasellus urna sem, euismod a blandit et, convallis in nisi.",
						p2: "Pellentesque lacus enim, malesuada vel est non, vulputate suscipit tortor. Donec finibus, neque sed sodales condimentum, arcu leo lobortis mauris, vitae tempor neque nisi sed justo. Duis consectetur posuere nulla non placerat.",
					},
				],

				heading4: [
					{
						heading: "Hassle-free transactions made possible",
						p1: "Etiam enim neque, feugiat ac eros eu, congue varius est. Vivamus mi est, tincidunt feugiat rutrum vitae, euismod quis nibh. Ut accumsan diam vitae lobortis lobortis. Donec non euismod ligula. Phasellus id ex quam. Vivamus et feugiat mauris. Nam efficitur fermentum odio ut viverra. Suspendisse ultrices vehicula sapien, vel porttitor nibh ultrices sit amet. Mauris orci justo, dictum eget tempus sed, laoreet sit amet purus. Pellentesque erat eros, consequat sed ante at, molestie egestas lorem. Quisque efficitur magna magna, at sagittis libero euismod vitae. Fusce lacinia tincidunt convallis.",
						p2: "Aliquam et efficitur nibh, vel imperdiet turpis. Ut consectetur mi quis enim vehicula vestibulum. Pellentesque et sodales turpis. Donec eget iaculis dolor. Sed lacinia pretium justo sed bibendum.",
					},
				],
			},
		],
	},
];
