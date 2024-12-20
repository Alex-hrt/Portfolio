import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [testimonials, setTestimonials] = useState([]);
	const [brands, setBrands] = useState([]);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const query = '*[_type == "testimonials"]';
		const brandsQuery = '*[_type == "brands"]';

		client.fetch(query).then((data) => {
			setTestimonials(data);
		});

		client.fetch(brandsQuery).then((data) => {
			setBrands(data);
		});
	}, []);

	return (
		<>
			{testimonials.length && (
				<>
					<div className="app__testimonial-item app__flex">
						<div className="app__testimonial-author">
							<img
								src={urlFor(testimonials[currentIndex].imgurl)}
								alt={testimonials[currentIndex].name}
							/>
							<h4 className="bold-text">
								{testimonials[currentIndex].name}
							</h4>
							<h5 className="p-text">
								{testimonials[currentIndex].company}
							</h5>
						</div>
						<div className="app__testimonial-text">
							<p className="p-text">
								{testimonials[currentIndex].feedback}
							</p>
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}>
							<HiChevronLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

			<div className="app__testimonial-brands app__flex">
				{brands.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={brand._id}>
						<a href={brand.url} target="_blank" rel="noreferrer">
							<img src={urlFor(brand.imgUrl)} alt={brand.name} />
						</a>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Testimonial, "app__testimonial"),
	"testimonial",
	"app__primarybg"
);
