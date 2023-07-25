import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, className }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const containerVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,

			transition: {
				ease: "easeOut",
				duration: 0.6,
				delay: 0.2,
			},
		},
	};

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<motion.div
			variants={containerVariant}
			animate={mainControls}
			initial='hidden'
			ref={ref}
			className={`${className}`}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
