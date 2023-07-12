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
	teamMember1,
	teamMember2,
	teamMember3,
	teamMember4,
	teamMember5,
	teamMember6,
	teamMember7,
	teamMember8,
	officeImg1,
	officeImg2,
	officeImg3,
	dashBoardImg
} from "../assets";

// images
export { blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, aboutImg };

// *****************************************************ICON START******************************************
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
	FaCircle,
	FaInstagram,
	FaTwitter,
	FaFacebookF,
} from "react-icons/fa";

// icons
import { LuShieldCheck, LuServer } from "react-icons/lu";
import {
	BiChevronDown,
	BiSearch,
	BiDownload,
	BiSolidRightArrow,
} from "react-icons/bi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SlDiamond } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple, PiCreditCardLight } from "react-icons/pi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { BsArrowRight, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

export {
	FiCheck,
	BiChevronDown,
	RxHamburgerMenu,
	BiSearch,
	BiDownload,
	CgMenuRight,
	RxCross2,
	FaEllo,
	FaChrome,
	BsArrowRight,
	LuShieldCheck,
	BiSolidRightArrow,
	FaCircle,
	IoMdHeartEmpty,
	BsStarFill,
	BsStarHalf,
	FaTwitter,
	FaFacebookF,
	FaInstagram,
};
// ******************************************************ICONS END*************************************************

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
		id: "contact",
		title: "Contact",
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
	downloadImg: [
		{
			icon: appleStorepng,
			link: "https://www.apple.com/app-store/",
		},
		{
			icon: playStorepng,
			link: "https://play.google.com/store/games?pli=1",
		},
	],
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
	paragraph:
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
			amount: "$9.50",
			per: "/ User",
			name: "Basic Plan",
			bgColor: "bg-white",
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
			amount: "$10.50",
			per: "/ User",
			name: "StartUp Plan",
			bgColor: "bg-tertiary",
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
			amount: "$12.00",
			per: "/ Event",
			name: "Deluxe Plan",
			bgColor: "bg-white",
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
			image: collage1,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-2",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: collage2,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-3",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: collage3,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-4",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: collage4,
			name: "Jane Doe",
			occupation: "Customer",
		},
		{
			id: "review-5",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: collage5,
			name: "John Doe",
			occupation: "Customer",
		},
		{
			id: "review-6",
			rating: 4,
			message:
				"Fusce hendrerit quam eget justo lobortis commodo. Aliquam neque nisi, malesuada quis sollicitudin a, eleifend quis turpis. Quisque efficitur imperdiet.",
			image: collage6,
			name: "Jane Doe",
			occupation: "Customer",
		},
	],
};

export const achievements = {
	text: "ACHIEVEMENTS",
	title: "An Awesome Cash Wallet for You",
	rating: [
		["4.7/5.0", "On iOS App Store"],
		["4.8/5.0", "On Google Play"],
	],
	asset: [asset1, asset2, asset3, asset4],
};

export const faqs = {
	text: "FAQS",
	title: "Frequently Asked Questions",
	image: iPhone5,
	questions: [
		{
			title: "How many speakers at this event?",
			content:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit, magnam molestias sunt quisquam id beatae aliquid. Dolores, eius labore consectetur dolore fuga iste nobis fugiat dignissimos quia numquam et corporis fugit qui quis perferendis voluptatum laboriosam, assumenda repellat.",
		},
		{
			title: "Is there a special offer for a student?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis.",
		},
		{
			title: "Can I get a discount for multiple purchases?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis. est, nulla unde quod sit dolorum maiores distinctio asperiores amet explicabo",
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

export const articleSection = {
	text: "BLOG NEWS",
	title: "Articles From Maveli",
	paragraph:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,  leo.",
};

export const footer = {
	download: [appleStorepng, playStorepng],

	contact: {
		heading: "Contact",
		number: "+1(234) 567 890",
		email: "example@mail.com",
	},

	address: {
		heading: "Address",
		ourAddress: "323 Valley Lane, Austin",
		time: "07.00 AM - 19.00 PM",
	},

	explore: [
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
	],

	support: [
		{
			id: "help-center",
			title: "Help Center",
		},
		{
			id: "private-policy",
			title: "Private Policy",
		},
		{
			id: "disclaimer",
			title: "Disclaimer",
		},
		{
			id: "faq",
			title: "FAQ",
		},
		{
			id: "contact",
			title: "Contact",
		},
	],
};

// ******************************************ABOUT PAGE***********************************************
export const ourValues = {
	heading: "OUR VALUES",
	title: "Workflow Is What We Do",
	values: [
		{
			icon: IoMdHeartEmpty,
			title: "Trusted Company",
			paragraph:
				"Pellentesque semper dapibus massa eget venenatis. Quisque tortor est.",
			color: "bg-[#E7E8FE]",
		},

		{
			icon: LiaPhoneVolumeSolid,
			title: "Fast Support",
			paragraph:
				"Pellentesque semper dapibus massa eget venenatis. Quisque tortor est.",
			color: "bg-[#F1FF9D]",
		},

		{
			icon: PiShoppingCartSimple,
			title: "Fast Process",
			paragraph:
				"Pellentesque semper dapibus massa eget venenatis. Quisque tortor est.",
			color: "bg-[#FFF0D0]",
		},

		{
			icon: SlDiamond,
			title: "Easy to Use",
			paragraph:
				"Pellentesque semper dapibus massa eget venenatis. Quisque tortor est.",
			color: "bg-[#DFF2C2]",
		},

		{
			icon: HiOutlineDevicePhoneMobile,
			title: "Take It Anywhere",
			paragraph:
				"Pellentesque semper dapibus massa eget venenatis. Quisque tortor est.",
			color: "bg-[#FEE7FE]",
		},

		{
			icon: PiCreditCardLight,
			title: "Free Credits",
			paragraph:
				"Pellentesque semper dapibus massa eget venenatis. Quisque tortor est.",
			color: "bg-[#E7F8FE]",
		},
	],
};

// ***************************************************TEAM***********************************************
export const ourTeam = {
	heading: "OUR TEAM",
	title: "Meet The Professionals",
	paragraph:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,  leo.",
	teamsInfo: [
		{
			id: "1",
			image: teamMember1,
			name: "Alan Houston",
			position: "Company CEO",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},

		{
			id: "2",
			image: teamMember2,
			name: "Lenna Kings",
			position: "Marketing",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},
		{
			id: "3",
			image: teamMember3,
			name: "Louis Thomson",
			position: "Frontend Developer",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},
		{
			id: "4",
			image: teamMember4,
			name: "Tim Hallaway",
			position: "Backend Developer",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},
		{
			id: "5",
			image: teamMember5,
			name: "Lenna Kings",
			position: "Marketing",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},
		{
			id: "6",
			image: teamMember6,
			name: "Jeane Greg",
			position: "Sales",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},
		{
			id: "7",
			image: teamMember7,
			name: "Petra Jimmy",
			position: "Manager",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},
		{
			id: "8",
			image: teamMember8,
			name: "Jack Julian",
			position: "Designer",
			socials: [
				{
					icon: FaFacebookF,
					name: "Facebook",
					url: "https://facebook.com",
				},
				{ icon: FaTwitter, name: "Twitter", url: "https://twitter.com" },
				{
					icon: FaInstagram,
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
		},
	],
};

// ourOffice
export const ourOffice = {
	heading: "OUR OFFICES",
	title: "We’re Here, There and Everywhere",
	address: [
		{
			image: officeImg1,
			state: "Louisiana, USA",
			address: "12587 Feeney Spurs, La Habra 36003",
			url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19868.32496225223!2d-0.119554!3d51.503297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1689090077706!5m2!1sen!2sus",
		},

		{
			image: officeImg2,
			state: "New Mexico, USA",
			address: "61822 Prairie, East Dessieborough 50516",
			url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6769268.63174209!2d-111.31948617612052!3d34.061644920137354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87185043e79852a9%3A0x46bf6e1a63359eba!2sNew%20Mexico%2C%20USA!5e0!3m2!1sen!2sng!4v1689090586359!5m2!1sen!2sng",
		},

		{
			image: officeImg3,
			state: "Pennsylvania, USA",
			address: "333 Wilkinson, New Alexandraberg 41041-45",
			url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079162.2518274537!2d-80.24557555036031!3d41.090969284172665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d80261e32e589%3A0xc24621475022b43d!2sPennsylvania%2C%20USA!5e0!3m2!1sen!2sng!4v1689090693643!5m2!1sen!2sng",
		},
	],
};


export const desktopModeData = {
	heading: "DESKTOP MODE",
	title: "Access Everything From Your Desktop",
	paragraph:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae rhoncus ipsum. Nunc eleifend ultrices ligula eu pharetra. Suspendisse at augue vel odio fermentum fringilla eget et sapien.",
	buttonText: "Get Started",
	image: dashBoardImg,
};

export const blogData = [
	{
		id: "1",
		title: "Digital Payment Value Continues to Worldwide",
		slug: "digital-payment-value-continues-to-worldwide",
		preview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
		author: "John Doe",
		date: "February 2, 2023",
		category: "Digital",
		image: blogImg1,
		tags: ["Technology", "Money"],
	},

	{
		id: "2",
		title: "Is 2023 the Year of the Digital Payment Apps?",
		slug: "is-2023-the-year-of-the-digital-payment-apps",
		preview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
		author: "John Doe",
		date: "February 2, 2023",
		category: "Payment",
		image: blogImg3,
		tags: ["App", "Payment"],
	},

	{
		id: "3",
		title: "Digital Payment Wallet Competition Heats Up",
		slug: "digital-payment-wallet-competition-heats-up",
		preview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
		author: "John Doe",
		date: "February 2, 2023",
		category: "Digital",
		image: blogImg2,
		tags: ["Technology", "Payment"],
	},

	{
		id: "4",
		title: "Ransomware Payments Were on the Declines!",
		slug: "ransomware-payment-were-on-the-declines",
		preview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
		author: "John Doe",
		date: "February 2, 2023",
		category: "Payment",
		image: blogImg4,
		tags: ["Payment", "Technology"],
	},

	{
		id: "5",
		title: "Online Purchases Thrived During the Holidays",
		slug: "online-purchases-thrived-during-the-holidays",
		preview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
		author: "John Doe",
		date: "February 2, 2023",
		category: "Business",
		image: blogImg5,
		tags: ["Purchase", "Money"],
	},

	{
		id: "6",
		title: "Twitter Payment Continue to Build Momentum",
		slug: "twitter-payment-continue-to-build-momentum",
		preview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
		author: "John Doe",
		date: "February 2, 2023",
		category: "Digital",
		image: aboutImg,
		tags: ["Technology", "Payment"],
	},
];