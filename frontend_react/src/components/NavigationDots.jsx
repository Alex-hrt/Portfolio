import React, { useEffect, useState } from "react";

const NavigationDots = () => {
	const [active, setActive] = useState("home");
	const pages = ["home", "about", "work", "skills", "testimonial", "contact"];

	useEffect(() => {
		const handleScroll = () => {
			pages.forEach((page) => {
				const section = document.getElementById(page);
				if (section) {
					const sectionTop = section.getBoundingClientRect().top;
					if (
						sectionTop < window.innerHeight / 2 &&
						sectionTop > -(window.innerHeight / 2)
					) {
						setActive(page);
					}
				}
			});
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="app__navigation">
			{pages.map((item, index) => (
				<a
					href={`#${item}`}
					key={item + index}
					className="app__navigation-dot"
					style={
						active === item ? { backgroundColor: "#313BAC" } : {}
					}
					onClick={() => setActive(item)}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
