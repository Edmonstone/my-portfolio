import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./kaartech.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Kaar Technologies</div>
							<div className="work-subtitle">
								Full Stack Intern
							</div>
							<div className="work-duration"> Dec 2022 - Apr 2023</div>
						</div>

						<div className="work">
							<img
								src="./rezilyens.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Rezilyens LLC</div>
							<div className="work-subtitle">
								Security Analyst Intern
							</div>
							<div className="work-duration">May 2023 - Aug 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
