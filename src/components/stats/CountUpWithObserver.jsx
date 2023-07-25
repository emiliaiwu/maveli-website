import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CountUpWithObserver = ({ startNum, endNum, duration }) => {
	const ref = useRef(null);
	const [isCounting, setIsCounting] = useState(false);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsCounting(true);
				}
			});
		};

		const observer = new IntersectionObserver(
			handleIntersection,
			observerOptions
		);
		if (ref.current) observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);

	return (
		<div ref={ref} className="inline">
			{isCounting && (
				<CountUp
					start={startNum}
					end={parseFloat(endNum)}
					duration={duration}
					useEasing
				/>
			)}
		</div>
	);
};

export default CountUpWithObserver;
