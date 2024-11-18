import React, { useEffect, useState } from "react";
import { BsFileEarmarkPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";

import { client } from "../client";

const SocialMedia = () => {
	const [cv, setCv] = useState([]);

	useEffect(() => {
		const cvQuery = '*[_type == "cv"]';

		client.fetch(cvQuery).then((data) => {
			setCv(data);
		});
	}, []);

	return (
		<>
			<div className="app__social">
				<a href={cv.length > 0 ? cv[0].cvUrl : ""} target="blank_">
					<div>
						<BsFileEarmarkPersonFill />
					</div>
				</a>

				<a
					href="https://www.linkedin.com/in/alexh%C3%A9ritier/"
					target="blank_">
					<div>
						<BsLinkedin />
					</div>
				</a>
				<a href="https://github.com/Alex-hrt" target="blank_">
					<div>
						<BsGithub />
					</div>
				</a>
			</div>
		</>
	);
};

export default SocialMedia;
