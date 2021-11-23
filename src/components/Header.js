import profile from "../images/bilgate.jpg";
import React from "react";
export default function Header() {
	return (
		<header>
			<img src={profile} alt="Hanifullah Jamalzai Profile" width="300px" />
			<div className="header-info">
				<p className="name">Hanifullah Jamalzai</p>
				<p className="job">Frontend Developer</p>
				<p className="website">HanifullahJamalzai.com</p>
			</div>
		</header>
	);
}
