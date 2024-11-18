import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
	return (
		<>
			<h2 className="head-text">
				Take a coffee & <span>chat with me</span>
			</h2>
			<div className="app__footer-container">
				<div className="app__footer-img">
					<img src={images.contact} alt="contact" />
				</div>
				<div className="app__footer-cards">
					<div className="app__footer-card" id="email">
						<img src={images.email} alt="email" />
						<a
							href="mailto:alex.heritier@outlook.fr"
							className="p-text">
							alex.heritier@outlook.fr
						</a>
					</div>
					<div className="app__footer-card" id="phone">
						<img src={images.mobile} alt="phone" />
						<a href="tel:(+33) 7 83 73 40 34" className="p-text">
							(+33) 7 83 73 40 34
						</a>
					</div>
					<div className="app__footer-card" id="linkedin">
						<img src={images.linkedin} alt="linkedin" />
						<a
							href="https://www.linkedin.com/in/alexh%C3%A9ritier/"
							target="_blank"
							className="p-text"
							rel="noreferrer">
							linkedin.com/in/alexhéritier
						</a>
					</div>
					<div className="app__footer-card" id="github">
						<img src={images.github} alt="github" />
						<a
							href="https://github.com/Alex-hrt"
							target="_blank"
							className="p-text"
							rel="noreferrer">
							github.com/Alex-hrt
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
