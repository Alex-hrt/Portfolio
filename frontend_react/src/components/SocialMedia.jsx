import React, { useEffect, useState } from "react";
import { BsFileEarmarkPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

import { client } from "../client";

const SocialMedia = () => {
	const [cv, setCv] = useState([]);
	const [showCvOptions, setShowCvOptions] = useState(false);

	useEffect(() => {
		const cvQuery = '*[_type == "cv"]';

		client.fetch(cvQuery).then((data) => {
			setCv(data);
		});
	}, []);

	return (
		<div className="app__social">
			{/* Main CV Bubble with hover effect */}
			<div
				className="cv-container"
				onMouseEnter={() => setShowCvOptions(true)}
				onMouseLeave={() => setShowCvOptions(false)}
			>
				{/* Main CV Bubble */}
				<div className="cv-bubble">
					<BsFileEarmarkPersonFill />
				</div>

				{/* CV Options */}
				{showCvOptions && (
					<div className="cv-options">
						<a
							href={cv.length > 0 ? cv[0].cvUrlEn : "#"}
							target="_blank"
							className="cv-option"
						>
							<div className="cv-option-bubble">
								<FaFileDownload />
								<span>EN</span>
							</div>
						</a>
						<a
							href={cv.length > 0 ? cv[0].cvUrlFr : "#"}
							target="_blank"
							className="cv-option"
						>
							<div className="cv-option-bubble">
								<FaFileDownload />
								<span>FR</span>
							</div>
						</a>
					</div>
				)}
			</div>

			{/* LinkedIn Bubble */}
			<a href="https://www.linkedin.com/in/alexheritier/" target="_blank" rel="noopener noreferrer">
				<div>
					<BsLinkedin />
				</div>
			</a>

			{/* GitHub Bubble */}
			<a href="https://github.com/Alex-hrt" target="_blank" rel="noopener noreferrer">
				<div>
					<BsGithub />
				</div>
			</a>
		</div>
	);
};

export default SocialMedia;
