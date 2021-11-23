import React from "react";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function Footer() {
	return (
		<footer>
			<img src={twitter} alt="twitter link" width="48px" />
			<img src={facebook} alt="facebook link" width="48px" />
			<img src={instagram} alt="instagram link" width="48px" />
			<img src={github} alt="github link" width="48px" />
			<img src={linkedin} alt="linkedIn link" width="48px" />
		</footer>
	);
}
