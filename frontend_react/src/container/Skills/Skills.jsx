import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"] | order(order asc)';

		client.fetch(query).then((data) => {
			const sortedExperiences = data.sort((a, b) => b.year - a.year);
			setExperiences(sortedExperiences);
		});

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				Skills & <span>Experiences</span>
			</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							whileHover={{ scale: 1.2 }}
							transition={{ duration: 0.1, type: "tween" }}
							className="app__skills-item app__flex"
							key={skill.name}>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}>
								<img
									src={urlFor(skill.icon)}
									alt={skill.name}
								/>
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div
							className="app__skills-exp-item"
							key={experience.year}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{experience.works.map((work) => (
									<>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
											key={work.name}>
											<h4 className="bold-text">
												{work.name}
											</h4>
											<p className="p-text">
												{work.company}
											</p>
										</motion.div>

										<ReactTooltip
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip">
											<PortableText value={work.desc} />
										</ReactTooltip>
										<br></br>
									</>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);
