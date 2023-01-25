import React from "react";
import { BsFileEarmarkPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a
				href="frontend_react\public\feelsbad.jpg"
				download="CV - Alex Héritier.jpg">
				<BsFileEarmarkPersonFill />
			</a>
		</div>
		<div>
			<a
				href="https://www.linkedin.com/in/alexh%C3%A9ritier/"
				target="blank_">
				<BsLinkedin />
			</a>
		</div>
		<div>
			<a href="https://github.com/Alex-hrt" target="blank_">
				<BsGithub />
			</a>
		</div>
	</div>
);

export default SocialMedia;
